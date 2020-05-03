'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Cache = use('Cache')
const View = use('View')
const CategoryRepository = use('App/Repositories/CategoryRepository')
const categoryRepository = new CategoryRepository()
class CacheValue {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle (context, next) {
    // call next to advance the request
    console.log('request.url()', context.request.url())
    let categories = await Cache.remember('categories', 720, async () => {
      return await categoryRepository.findWhere({ status: 'actived'})
    })
    context.view.share({
      currentUrl: context.request.url(),
      categories
    })
    await next()
  }
}

module.exports = CacheValue
