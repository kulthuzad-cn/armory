/**
 * @name assert
 * @description 变量类型断言
 * @param {any} target 断言目标变量
 * @param {any} type 类型字符串
 * @return {string|boolean}
 * */
export const assert = (target, type = undefined) => {
  if (type === undefined || type === null) {
    return Object.prototype.toString.call(target).replace(/^\[object (\w+)]$/i, '$1').toLowerCase()
  } else if (/^(object|array|undefined|null|number|string|function)$/i.test(type)) {
    type = type.toLowerCase()
    return assert(target) === type
  } else {
    return assert(target) === assert(type)
  }
}
