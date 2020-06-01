'use strict'
const Cache = use('Cache');
const CategoryRepository = use('App/Repositories/CategoryRepository')
const ProductRepository = use('App/Repositories/ProductRepository')

class CategoryController {
  constructor () {
    this.categoryRepository = new CategoryRepository()
    this.productRepository = new ProductRepository()
  }

  async show ({ params, request, response, view }) {
    try {
      let slug = params.slug
      if (!slug) {
        return view.render('web.errors.404')
      }
      const category = await this.categoryRepository.findBy('slug', slug)
      if (!category) {
        return view.render('web.errors.404')
      }
      const { page = 1, perPage = 9 } = request.all()
      const products = await this.productRepository.newQuery().with('category').with('images').applyScope().where({ category_id: category.id })
        .paginate(page, perPage)
      const topSellProducts = await Cache.remember('topsell_products', 7, async () => {
        return await this.productRepository.newQuery().with('category').with('images').applyScope().where({topsell: 1}).limit(6).all()
      })

      return view.render('web.category', { category: category.toJSON(), products: products.toJSON(), topSellProducts })
    } catch (err) {
      console.log('err', err)
      return view.render('web.errors.500')
    }
  }
}

module.exports = CategoryController
