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
const Factory = use('Factory')
const Product = use('App/Models/Product')
class ProductSeeder {
  async run () {
    let products = [
      {
        code: 'P20-0001',
        name: 'Bún Thập Niên 70',
        description: 'Bún Thập Niên 70',
        price: 30000,
        category_id: 1,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0002',
        name: 'Thạch đen Hoài Niệm 300g',
        description: 'Thạch Đen Hoài Niệm với nguyên liệu chính từ cây Sương Sáo, vừa ngon, vừa mát thì trong đông y có rất nhiều tác dụng tốt cho sức khỏe như thanh nhiệt, giải độc, hạ huyết áp, mát gan, giảm bớt đau nhức cơ ..vv',
        price: 10000,
        category_id: 3,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0003',
        name: 'Thạch đen Hoài Niệm 600g',
        description: `Thạch Đen Hoài Niệm với nguyên liệu chính từ cây Sương Sáo, vừa ngon, vừa mát thì trong đông y có rất nhiều tác dụng tốt cho sức khỏe như thanh nhiệt, giải độc, hạ huyết áp, mát gan, giảm bớt đau nhức cơ ..vv`,
        category_id: 3,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0004',
        name: 'Phở Hoài Niệm',
        description: 'Phở Hoài Niệm',
        price: 50000,
        category_id: 1,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0005',
        name: 'Mắm Tôm Hoài Niệm',
        description: 'Mắm Tôm Hoài Niệm',
        price: 100000,
        category_id: 2,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0006',
        name: 'Mắm tôm Hương Biển',
        description: 'Mắm tôm Hương Biển',
        price: 50000,
        category_id: 2,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0007',
        name: 'Mắm Tép Hoài Niệm',
        description: 'Mắm Tép Hoài Niệm',
        price: 30000,
        category_id: 2,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0008',
        name: 'Mắm Tép Hương Biển',
        description: 'Mắm Tép Hương Biển',
        price: 50000,
        category_id: 2,
        inventory_state: 'instock'
      }
    ]
    for (let product of products) {
      await Product.create(product)
    }
  }
}

module.exports = ProductSeeder
