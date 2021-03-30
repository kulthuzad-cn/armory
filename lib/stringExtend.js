//3、字符串去重
String.prototype.unique = () => {
  const obj = {}, len = this.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      str += this[i];
      obj[this[i]] = true;
    }
  }
  return str;
}
//7、找出字符串中第一次只出现一次的字母
String.prototype.firstAppear = () => {
  let obj = {}, len = this.length;
  for (let i = 0; i < len; i++) {
    if (obj[this[i]]) {
      obj[this[i]]++;
    } else {
      obj[this[i]] = 1;
    }
  }
  for (let prop in obj) {
    if (obj[prop] === 1) {
      return prop;
    }
  }
}
//20、检验字符串是否是回文
export const isPalina = str => {
  if (Object.prototype.toString.call(str) !== '[object String]') {
    return false;
  }
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
//21、检验字符串是否是回文
export const isPalindrome = str => {
  str = str.replace(/\W/g, '').toLowerCase();
  console.log(str)
  return (str === str.split('').reverse().join(''))
}
//去除连续的字符
export const uniq = str => str.replace(/(\w)\1+/g, '$1');
//48、大数相加
export const sumBigNumber = (a, b) => {
  let res = '', //结果
    temp = 0; //按位加的结果及进位
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || temp) {
    //~~按位非 1.类型转换，转换成数字 2.~~undefined==0
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, '');
}
export default {
  isPalina,
  isPalindrome,
  sumBigNumber,
  uniq
}
