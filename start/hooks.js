const { hooks } = require('@adonisjs/ignitor')
const moment = require('moment')
const _ = require('lodash')
hooks.after.providersBooted(() => {
  const View = use('View')
  const Env = use('Env')
  const Utils = use('App/Utils')
  const appName = Env.get('APP_NAME', 'Hệ thống QL Đào tạo - Trường Cao Đẳng Nghề Bách Khoa Hà Nội')
  View.global('appName', appName)
  View.global('isActivedLink', (link) => {

  })

  View.global('showPrice', (price) => {
    return String(parseInt(price) || 0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
  })

  View.global('genListPages', (lastPage) => {
    let pages = [];
    for (let pageNum = 1; pageNum <= lastPage; pageNum++) {
      pages.push(pageNum);
    }

    return pages;
  })
})
