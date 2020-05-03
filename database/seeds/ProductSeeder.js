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
        name: 'Mì gạo 500g',
        description: 'Product 1',
        price: 30000,
        category_id: 1,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0002',
        name: 'Product 2',
        description: 'Product 2',
        price: 60000,
        category_id: 1,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0003',
        name: 'Product 3',
        description: 'Product 3',
        price: 50000,
        category_id: 1,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0004',
        name: 'Miến rong Cao Bằng 1kg',
        description: 'Product 1',
        price: 120000,
        category_id: 1,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0005',
        name: 'Măng khô Bắc Kan 500g',
        description: 'Product 1',
        price: 100000,
        category_id: 2,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0006',
        name: 'Mắm tôm Hạ Long 400g',
        description: 'Product 1',
        price: 50000,
        category_id: 3,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0007',
        name: 'Product 7',
        description: 'Product 7',
        price: 30000,
        category_id: 3,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0008',
        name: 'Product 8',
        description: 'Product 8',
        price: 50000,
        category_id: 2,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0009',
        name: 'Product 9',
        description: 'Product 9',
        price: 30000,
        category_id: 3,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0010',
        name: 'Product 10',
        description: 'Product 10',
        price: 30000,
        category_id: 2,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0011',
        name: 'Product 11',
        description: 'Product 11',
        price: 30000,
        category_id: 3,
        inventory_state: 'instock'
      },
      {
        code: 'P20-0012',
        name: 'Product 12',
        description: 'Product 12',
        price: 30000,
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
