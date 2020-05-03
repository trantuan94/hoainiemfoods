'use strict'

class Utils {
  static unsignedString (inputStr) {
    inputStr = inputStr ? inputStr.trim() : ''
    if (inputStr.length > 0) {
      inputStr = inputStr.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'a')
      inputStr = inputStr.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'e')
      inputStr = inputStr.replace(/ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ/g, 'i')
      inputStr = inputStr.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'o')
      inputStr = inputStr.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'u')
      inputStr = inputStr.replace(/ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'y')
      inputStr = inputStr.replace(/đ|Đ/g, 'd')
    }

    return inputStr
  }

  static randomString (length = 8, options = { lowerCaseOnly: false, type: 'alphabetnumeric'}) {
    let { lowerCaseOnly = false, type = 'alphabetnumeric'} = options
    let alphabets = 'ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz'
    let numerics = '0123456789'
    let characters = ''
    if (type.includes('alphabet')) {
      characters += alphabets
    }
    if (type.includes('numeric')) {
      characters += numerics
    }
    if (type === 'numeric') {
      characters += numerics + numerics
    }

    let result = ''
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    if (lowerCaseOnly) {
      result = result.toLowerCase()
    }

    return result;
  }
}
module.exports = Utils
