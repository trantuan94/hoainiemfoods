'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class RepositoryBindingProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    const Config = this.app.use('Adonis/Src/Config')
    let dbConnection = Config.get('database.connection')
    if (dbConnection === 'mongodb') {
      this.registerMongodbRepositories()
    } else if (dbConnection === 'mysql' ||  dbConnection == 'mssql' || dbConnection === 'pg') {
      this.registerSqlRepositories()
    } else {
      this.registerMysqlRepositories()
    }
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    //
  }

  registerSqlRepositories () {
    this.app.bind('App/Repositories/UserRepository', () => this.app.use('App/Repositories/Sql/UserRepository'))
    this.app.bind('App/Repositories/CategoryRepository', () => this.app.use('App/Repositories/Sql/CategoryRepository'))
    this.app.bind('App/Repositories/OrderRepository', () => this.app.use('App/Repositories/Sql/OrderRepository'))
    this.app.bind('App/Repositories/OrderDetailRepository', () => this.app.use('App/Repositories/Sql/OrderDetailRepository'))
    this.app.bind('App/Repositories/ProductRepository', () => this.app.use('App/Repositories/Sql/ProductRepository'))
  }
  
  registerMongodbRepositories () {
    
  }
}

module.exports = RepositoryBindingProvider
