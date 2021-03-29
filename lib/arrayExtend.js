/**
 * @name 数组扁平化
 * @template {any} T
 * @param {Array<T>} arr
 * @param {number} num
 * */
export function* flat(arr, num) {
  if (num === undefined) num = 1;
  for (const item of arr) {
    if (Array.isArray(item) && num > 0) {   // num > 0
      yield* flat(item, num - 1);
    } else {
      yield item;
    }
  }
}

/**
 * @name 数组去重
 * @template {any} T
 * @param {Array<T>} arr
 * @return {Array<T>}
 * */
export const unique = (arr) => [...new Set(arr)]
/**
 * @name 寻找数组最小值
 * @param {Array<number>} arr
 * @return {number}
 * */
export const min = arr => Math.min.apply(this, arr);
/**
 * @name 寻找数组最大值
 * @param {Array<number>} arr
 * @return {number}
 * */
export const max = arr => Math.max.apply(this, arr);
/**
 * @name 数组项求和
 * @param {Array<string|number|object>} arr
 * @param {string} key 数组求和项属性名
 * @return {number}
 * */
export const sum = (arr, key = '') => arr.reduce((p, c) => (key ? p[key] : p) + c, 0)
/**
 * @name 计算重复次数
 * @param {Array<any>} arr
 * @return {object}
 * */
export const repeatTimes = (arr) => {
  const obj = {}
  arr.forEach(item => {
    obj[item] = (obj[item] + 1) || 1
  })
  return obj
}
/**
 * @name 有序插入
 * @template {number|string|object} T
 * @param {Array<T>} arr
 * @param {T} target
 * @param {string|number} key
 * @return {Array<T>}
 * */
export const sortPush = (arr, target, key = '') => {
  let index = 0
  arr.some((item, i) => {
    index = i
    return key ?
      item[key] > target[key] :
      item > key
  }) ?
    arr.splice(index, 0, target) :
    arr.push(target)
  return arr
}
export default {
  unique,
  min,
  max,
  sum,
  repeatTimes,
  sortPush,
  flat: Array.prototype.flat || flat
}
