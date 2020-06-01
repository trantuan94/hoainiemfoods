'use strict'
const Cache = use('Cache');
const CategoryRepository = use('App/Repositories/CategoryRepository')
const ProductRepository = use('App/Repositories/ProductRepository')

class ProductController {
  constructor () {
    this.productRepository = new ProductRepository()
    this.categoryRepository = new CategoryRepository()
  }

  async index ({ request, response, view }) {
    const { page = 1, perPage = 12 } = request.all()
    const products = await this.productRepository.newQuery().with('category').with('images').applyScope()
        .paginate(page, perPage)
    const topSellProducts = await Cache.remember('topsell_products', 7, async () => {
      return await this.productRepository.newQuery().with('category').with('images').applyScope().where({topsell: 1}).limit(6).all()
    })

    return view.render('web.list_products', {products: products.toJSON(), topSellProducts})
  }
  
  async show ({params, request, response, view }) {
    try {
      let prodSlug = params.slug
      if (!prodSlug) {
        return view.render('web.errors.404')
      }
      let product = await this.productRepository.newQuery().with('category').with('images').applyScope().where({ slug: prodSlug })
        .first()
      if (!product || product.length === 0) {
        return view.render('web.errors.404')
      }
      const relatedProducts = await this.productRepository.newQuery()
        .where({category_id: product.category_id})
        .whereNot({id: product.id})
        .with('category').with('images').applyScope()
        .limit(5).all()

      return view.render('web.item_detail', { product: product.toJSON(), relatedProducts: relatedProducts.toJSON() })
    } catch (err) {
      console.log(err)
      return view.render('web.errors.500')
    }
  }
}

module.exports = ProductController
