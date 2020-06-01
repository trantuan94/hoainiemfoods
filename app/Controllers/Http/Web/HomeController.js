'use strict'
const Cache = use('Cache');
const CategoryRepository = use('App/Repositories/CategoryRepository')
const ProductRepository = use('App/Repositories/ProductRepository')

class HomeController {
  constructor () {
    this.categoryRepository = new CategoryRepository()
    this.productRepository = new ProductRepository()
  }

  async index ({ request, view }) {
    try {
      const newProducts = await Cache.remember('new_products', 7, async () => {
        return await this.productRepository.newQuery().with('category').with('images').applyScope().orderBy('created_at', 'desc').limit(6).all()
      })
      const topSellProducts = await Cache.remember('topsell_products', 7, async () => {
        return await this.productRepository.newQuery().with('category').with('images').applyScope().where({topsell: 1}).limit(6).all()
      })

      return view.render('web.home', {newProducts, topSellProducts});
    } catch (err) {
      console.log(err)
      return view.render('web.errors.500')
    }
  }

  async getTopSelling ({ request, response, view }) {
    const { page = 1, perPage = 10 } = request.all()
    const newProducts = await Cache.remember('new_products', 7, async () => {
      return await this.productRepository.newQuery().with('category').with('images').applyScope()
        .orderBy('created_at', 'desc').limit(6).all()
    });
    const topSellProducts = await this.productRepository.newQuery().with('category').with('images')
      .applyScope().where({topsell: 1}).paginate(page, perPage)

    return view.render('web.top_selling', { topSellProducts: topSellProducts.toJSON(), newProducts } );
  }

  async contact ({ request, response, view }) {
    return view.render('web.contact')
  }

  async about ({ request, response, view }) {
    return view.render('web.about')
  }
}

module.exports = HomeController
