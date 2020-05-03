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
      let newProducts = await Cache.remember('new_products', 720, async () => {
        return await this.productRepository.orderBy('created_at', 'desc').limit(6).all()
      })

      return view.render('web.home', {newProducts});
    } catch (err) {
      console.log(err)
      return view.render('web.errors.500')
    }
  }

  async getTopSelling ({ view }) {

    return view.render('web.top_selling')
  }
}

module.exports = HomeController
