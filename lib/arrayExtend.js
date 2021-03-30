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
/**
 * @name 数组去重
 * @template {any} T
 * @param {Array<T>} arr
 * @return {Array<T>}
 * */
export const unique = arr => [...new Set(arr)]
export const unique2 = arr => {
  const obj = {};
  return arr.filter(ele => {
    if (!obj[ele]) {
      return obj[ele] = true;
    }
  })
}
export const unique3 = arr => {
  const result = [];
  arr.forEach(ele => {
    if (result.indexOf(ele) === -1) {
      result.push(ele)
    }
  })
  return result;
}
//31、数组排序
// 快排 [left] + min + [right]
export const quickSort = (arr, key = '') => {
  if (arr.length <= 1) return arr;
  const left = [], right = [];
  const pIndex = Math.floor(arr.length / 2);
  const p = arr.splice(pIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    const item = key ? arr[i][key] : arr[i];
    item <= (key ? p[key] : p) ? left.push(item) : right.push(item);
  }
  // 递归
  return quickSort(left, key).concat([p], quickSort(right, key));
}
// 冒泡
export const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

export const bubbleSort2 = arr => {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
//25、封装自己的forEach方法
Array.prototype.myForEach = function (func, obj) {
  let len = this.length;
  let _this = arguments[1] ? arguments[1] : window;
  // let _this=arguments[1]||window;
  for (let i = 0; i < len; i++) {
    func.call(_this, this[i], i, this)
  }
}
//26、封装自己的filter方法
Array.prototype.myFilter = function (func, obj) {
  let len = this.length;
  let arr = [];
  let _this = arguments[1] || window;
  for (let i = 0; i < len; i++) {
    func.call(_this, this[i], i, this) && arr.push(this[i]);
  }
  return arr;
}
//27、数组map方法
Array.prototype.myMap = function (func) {
  let arr = [];
  let len = this.length;
  let _this = arguments[1] || window;
  for (let i = 0; i < len; i++) {
    arr.push(func.call(_this, this[i], i, this));
  }

  return arr;
}
//28、数组every方法
Array.prototype.myEvery = function (func) {
  let flag = true;
  let len = this.length;
  let _this = arguments[1] || window;
  for (let i = 0; i < len; i++) {
    if (func.apply(_this, [this[i], i, this]) === false) {
      flag = false;
      break;
    }
  }
  return flag;
}
//29、数组reduce方法
Array.prototype.myReduce = function (func, initialValue) {
  let len = this.length, nextValue, i;
  if (!initialValue) {
    // 没有传第二个参数
    nextValue = this[0];
    i = 1;
  } else {
    // 传了第二个参数
    nextValue = initialValue;
    i = 0;
  }
  for (; i < len; i++) {
    nextValue = func(nextValue, this[i], i, this);
  }
  return nextValue;
}
//5、reverse底层原理和扩展
// 改变原数组
Array.prototype.myReverse = function () {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    let temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this;
}

export default {
  min,
  max,
  sum,
  repeatTimes,
  sortPush,
  unique,
  unique2,
  unique3,
  bubbleSort,
  bubbleSort2,
  flat: Array.prototype.flat || flat
}
