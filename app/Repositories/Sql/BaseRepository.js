'use strict'

const _ = require('lodash')
const inflection = require('inflection')
const CE = require('@adonisjs/lucid/src/Exceptions')

class BaseRepository {
  /**
   * Constructor
   */
  constructor () {
    /**
     * model instance
     * @protected
     */
    this._modelInstance = null

    /**
     * Current query
     * @protected
     */
    this._query = null

    /**
     * Global query scope.
     * @protected
     */
    this._scopeQuery = []

    this.makeModel()
    this._scopeReset()
    this.boot()
  }

  /**
   * This must be overwritten
   */
  get modelClass () {
    throw new Error('modelClass getter missing')
  }

  /**
   * Max items per page (for pagination)
   *
   * @returns {number}
   */
  get maxPerPage () {
    return 100
  }

  /**
   * Default order by column and direction pairs.
   *
   * @returns {Array}
   */
  get alwaysOrderBy () {
    return []
  }

  /**
   * Order by columns.
   * if column is prefxied with '.' then is a reference to relation
   *
   * @returns {Array}
   */
  get orderable () {
    return []
  }

  /**
   * Searchable columns
   *
   * @returns {Array}
   */
  get searchable () {
    return []
  }

  /**
   * Create model instance
   *
   * @returns {Lucid}
   */
  makeModel () {
    // import and get instance of model
    this._modelInstance = make(this.modelClass)
    return this._modelInstance
  }

  /**
   * Boot repository actions
   */
  boot () {
    this.newQuery()
  }

  /**
   * Reset query scope
   *
   * @returns {BaseRepository}
   * @protected
   */
  _scopeReset () {
    this._scopeQuery = []
    this.newQuery()
    return this
  }

  /**
   * Add query scope
   *
   * @param scope
   * @returns {BaseRepository}
   */
  addScopeQuery (scope) {
    this._scopeQuery.push(scope)
    return this
  }

  /**
   * Apply scope in current Query
   *
   * @returns {BaseRepository}
   */
  applyScope () {
    this._scopeQuery.map(callback => {
      if (callback.constructor === Function) {
        this._query = callback(this._query)
      }
    })

    // Clear scopes
    this._scopeQuery = []

    return this
  }

  /**
   * Get a new query builder instance with the applied
   * the order by and scopes.
   *
   * @param skipOrdering
   * @returns {BaseRepository}
   */
  newQuery (skipOrdering = false) {
    this._query = this._modelInstance.query()

    if (skipOrdering === false) {
      this.alwaysOrderBy.map(col => this.orderBy(col))
    }

    this.applyScope()

    return this
  }

  /**
   * Create new model instance
   *
   * @param attributes
   * @returns {*}
   */
  getNew (attributes = {}) {
    let model = new this._modelInstance()
    if (attributes) {
      model.fill(attributes)
    }

    return model
  }

  /**
   * Find model or fail
   *
   * @param id
   * @returns {*}
   */
  async findOrFail (id) {
    const item = await this.find(id)
    if (!item) {
      throw CE.ModelNotFoundException.raise(`Unable to fetch results for id ${id}`)
    }
    return item
  }

  /**
   * Find data by primary key
   *
   * @param id
   * @param columns
   * @returns {*}
   */
  find (id, columns = ['*']) {
    this.newQuery()
    return this._query.select(columns).where('id', id).first()
  }

  /**
   * Find by field
   *
   * @param field
   * @param value
   * @param columns
   * @returns {*}
   */
  findBy (field, value, columns = ['*']) {
    this.newQuery()
    return this._query.select(columns).where(field, value).first()
  }

  /**
   * Find all by
   *
   * @param attribute
   * @param value
   * @param columns
   * @returns {*}
   */
  findAllBy (attribute, value, columns = ['*']) {
    this.newQuery()

    if (value.constructor === Array) {
      return this._query.select(columns).whereIn(attribute, value).fetch()
    }

    return this._query.select(columns).where(attribute, value).fetch()
  }

  /**
   * Find data by multiple fields
   *
   * @param where
   * @param columns
   * @returns {*}
   */
  findWhere (where, columns = ['*']) {
    this.newQuery()

    // add conditions
    for (let [field, value] of Object.entries(where)) {
      if (value.constructor === Array) {
        let [condition, val] = value
        this._query.where(field, condition, val)
      } else {
        this._query.where(field, value)
      }
    }

    return this._query.select(columns).fetch()
  }

  where (conditions) {
    for (let [field, value] of Object.entries(conditions)) {
      if (Array.isArray(value)) {
        let [operation, val] = value
        this._query.where(field, operation, val)
      } else {
        this._query.where(field, value)
      }
    }

    return this
  }

  whereIn (field, values) {
    if (Array.isArray(values) && values.length > 0) {
      this._query.whereIn(field, values)
    }

    return this
  }

  whereNot (conditions) {
    for (let [field, value] of Object.entries(conditions)) {
      if (Array.isArray(value)) {
        let [operation, val] = value
        this._query.whereNot(field, operation, val)
      } else {
        this._query.whereNot(field, value)
      }
    }

    return this
  }

  whereNotIn (field, values) {
    if (Array.isArray(values) && values.length > 0) {
      this._query.whereNotIn(field, values)
    }

    return this
  }


  /**
   * Order results by
   *
   * @param column
   * @param direction
   * @returns {BaseRepository}
   */
  orderBy (column, direction = null) {
    // validate direction
    if (!direction || !['asc', 'desc'].includes(direction)) {
      direction = 'asc'
      if (column[0] === '-') {
        column = column.substr(1)
        direction = 'desc'
      }
    }

    return this.addScopeQuery(query => {
      let cols = this.orderable

      // sortable can have objects to shorten / mask the name of the column
      let colObject = cols.find(i => i.constructor === Object && Object.keys(i)[0] === column)

      // ensure sort is valid
      if (!colObject && cols.includes(column) === false) {
        return query
      }

      // get col object value
      if (colObject) {
        column = colObject[column]
      }

      return query.orderBy(this._appendTableName(column), direction)
    })
  }

  /**
   * Add filters
   *
   * @param filters
   * @returns {BaseRepository}
   */
  filter (filters) {
    if (!_.isEmpty(filters)) {
      this._applyFilters(filters)
    }
    return this
  }

  /**
   * Apply filters
   *
   * @param filters
   * @returns {*}
   * @protected
   */
  _applyFilters (filters) {
    if (!filters || filters.constructor !== Object) {
      return {}
    }
    // get searchables
    let searchables = this.searchable

    // extract special searches
    // special searches include where you can type eg. name:simon id:1 in the search field
    let queryKey = _.findKey(searchables, 'query')
    if (queryKey >= 0 && 'query' in filters) {
      let searchExact = this._extractSearchColumns(filters.query)
      if (!_.isEmpty(searchExact)) {
        Object.assign(filters, searchExact)
        delete searchables[queryKey]
      }
    }

    return searchables.reduce((result, searchable) => {
      let param = searchable
      let column = searchable

      // if column an object, like {domain: 'domains.hostname'}, then grab
      // the objects key as the column name
      if (searchable.constructor === Object) {
        param = Object.keys(searchable)[0]
        column = searchable[param]
      }

      // if param exists in passed filters then allow it
      if (param in filters) {
        // get value of param to compare
        let value = filters[param]

        // add any special filters for this
        let isSpecialFilter = this._addSpecialFilterScope(param, column, value)

        // if its not a special filter add it as an exact match
        if (!isSpecialFilter) {
          // if empty then ignore this param
          if (value.constructor !== String || !value.trim()) {
            return result
          }
          return this.addScopeQuery(query => query.where(this._appendTableName(column), '=', value))
        }
      }
    }, {})
  }

  /**
   * Add a filter scope
   *
   * @param param
   * @param column
   * @param value
   * @returns {Boolean}
   * @protected
   */
  _addSpecialFilterScope (param, column, value) {
    // apply search query
    if (param === 'query' && value.constructor === String && value.trim()) {
      this.addScopeQuery(query => {
        query.where(q => column.map(column => q.orWhere(this._appendTableName(column), 'LIKE', `%${value}%`)))
        return query
      })
      return true
    }

    return false
  }

  /**
   * Parse columns for special
   *
   * @param query
   * @returns {*}
   * @protected
   */
  _extractSearchColumns (query) {
    // if no specific cols found then ignore
    if (query.constructor !== String || query.indexOf(':') === -1) {
      return null
    }

    // get matches and values for specific columns
    let matches = []
    let regex = /([^\s:]+):("([^"]+)|([^\s]+))/gi
    for (let match; match = regex.exec(query); matches.push(match)) ;

    // if no matches
    if (matches.length === 0) {
      return null
    }

    // prepare sortable array to give to search
    let searches = {}
    this.searchable.map(columns => {
      // get column param
      let param = columns.constructor !== Object ? columns : Object.keys(columns)[0]

      // ignore query param
      if (param === 'query') {
        return
      }

      // get matching searches
      matches.reduce((result, match) => {
        let value = match[2].replace(/[" ]/g, '')
        if (value && match[1] === param) {
          // set key to value of *param*
          searches[param] = value
        }
        return result
      }, [])
    })

    // no specific searches found then ignore
    if (searches.length === 0) {
      return query
    }

    return searches
  }

  /**
   * Append table name to column
   *
   * @param {String|Array} column
   * @returns {*}
   * @protected
   */
  _appendTableName (column) {
    // if array passed
    if (column.constructor === Array) {
      return column.map(col => this._appendTableName(col))
    }

    // if raw query then ignore
    if (column.constructor.name === 'Raw') {
      return column
    }

    let dotIndex = column.indexOf('.')

    // if first place is '.' then it must be a special column
    if (dotIndex === 0) {
      return column.substr(1)
    }

    // if missing table name
    if (dotIndex === -1) {
      return this._modelInstance.table + '.' + column
    }

    return column
  }

  /**
   * Add relations to query
   *
   * @param relations
   * @returns {BaseRepository}
   */
  with (...relations) {
    return this.addScopeQuery(query => query.with(...relations))
  }

  /**
   * Add relation scope to query
   *
   * @param relations
   * @returns {BaseRepository}
   */
  scope (...relations) {
    return this.addScopeQuery(query => query.scope(...relations))
  }

  /**
   *
   * @param joinFn function to use for join
   * @param tables
   * @returns {BaseRepository}
   * @protected
   */
  _join (joinFn, tables) {
    return this.addScopeQuery(query => {
      // join tables
      tables.map(table => query[joinFn](
        table,
        this._appendTableName(`${inflection.singularize(table)}_id`),
        '=',
        `${table}.id`
      ))

      return query
    })
  }

  /**
   * Join tables based on laravel rules (plural table names etc.)
   *
   * @param tables
   * @returns {BaseRepository}
   */
  join (...tables) {
    return this._join('join', tables)
  }

  /**
   * Left join
   *
   * @param tables
   * @returns {BaseRepository}
   */
  leftJoin (...tables) {
    return this._join('leftJoin', tables)
  }

  limit (numRows = 10) {
    if (typeof numRows !== 'number') {
      if (Number.isNaN(parseInt(numRows))) {
        numRows = 10
      }
    }
    numRows = parseInt(numRows)

    this._query.limit(numRows)

    return this
  }

  /**
   * Retrieve all data of repository
   *
   * @param columns
   * @returns {*}
   */
  all (columns = ['*']) {
    // this.newQuery()
    return this._query.select(this._appendTableName(columns)).fetch()
  }

  first (columns = '*') {
    return this._query.select(this._appendTableName(columns)).first()
  }

  /**
   * Count result of query
   *
   * @returns Number
   */
  count (column = '* as total') {
    // this.newQuery()
    return this._query.count(this._appendTableName(column)).first()
  }

  /**
   * Pagination
   *
   * @param page
   * @param perPage
   * @param columns
   * @returns {*}
   */
  paginate (page, perPage, columns = ['*']) {
    // this.newQuery()

    // set up page
    if (!page || page <= 0) {
      page = 1
    }
    // per page fix
    if (perPage < 1) {
      perPage = 1
    } else if (perPage > this.maxPerPage) {
      perPage = this.maxPerPage
    }

    // set up count query (needs to remove select columns)
    const countQuery = this._query.clone().clearSelect().count('* as total')

    return this._query.select(this._appendTableName(columns)).paginate(page, perPage, countQuery)
  }

  /**
   * Get array with values of given column
   *
   * @param value
   * @param key
   * @returns {Array|*}
   */
  pluck (value, key = null) {
    // this.newQuery()
    if (key) {
      return this._query.pair(key, value)
    }
    return this._query.pluck(value)
  }

  /**
   * Create new model
   *
   * @param attributes
   * @returns {*}
   */
  async create (attributes) {
    let entity = this.getNew(attributes)
    await entity.save()
    return entity
  }

  /**
   * Update model
   *
   * @param entity
   * @param attributes
   * @returns {boolean}
   */
  async update (entity, attributes) {
    entity.fill(attributes)
    return !!(await entity.save())
  }

  /**
   * Delete record
   *
   * @param entity
   * @returns {boolean}
   */
  async delete (entity) {
    if (typeof entity !== 'object') {
      entity = this.find(entity)
    }

    return !!(await entity.delete())
  }
}
module.exports = BaseRepository
