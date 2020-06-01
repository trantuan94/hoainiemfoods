'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const ProductImage = use('App/Models/ProductImage')
class ProductImageSeeder {
  async run () {
    let productImages = [
      {
        product_id: 1,
        image: 'img/bun_thap_nien_70.png',
        is_main: 1
      },
      {
        product_id: 2,
        image: 'img/thach_den.png',
        is_main: 1
      },
      {
        product_id: 3,
        image: 'img/thach_den.png',
        is_main: 1
      },
      {
        product_id: 4,
        image: 'img/pho_hoai_niem.png',
        is_main: 1
      },
      {
        product_id: 5,
        image: 'img/mam.png',
        is_main: 1
      },
      {
        product_id: 6,
        image: 'img/mam_tom_huong_bien.png',
        is_main: 1
      },
      {
        product_id: 7,
        image: 'img/mam_tep_huong_bien.png',
        is_main: 1
      },
      {
        product_id: 8,
        image: 'img/mam_tep_huong_bien.png',
        is_main: 1
      },
    ]
    for (let productImage of productImages) {
      await ProductImage.create(productImage)
    }
  }
}

module.exports = ProductImageSeeder
