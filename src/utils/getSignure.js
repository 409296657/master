/**
 * 对象转数组
 * @param   object obj  待转换对象
 * @returns Array  arr  转换完成的数组
 */
function object2Array (obj) {
  let arr = []
  for (let i in obj) {
    let tempObj = {key: i, value: obj[i]}
    arr.push(tempObj)
  }
  return arr
}

/**
 * @param  object params 请求接口参数
 * @returns string signure 鉴权数字签名
 */
function getSignure (params) {
  let arr = object2Array(params)
  arr.sort(function (now, next) {
    return now.key > next.key
  })
  let paramString = ''
  arr.map(function (item, index) {
    if (index !== 0) {
      paramString += '&'
    }
    paramString += item.key + '=' + item.value
  })
  const md5 = require('js-md5')
  return md5(paramString).slice(0, 20)
}

exports.install = function (Vue, options) {
  Vue.prototype.getSignure = function (options) {
    return getSignure(options)
  }
}
