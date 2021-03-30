//36、实现bind()方法
Function.prototype.myBind = function (target = window) {
  let _args1 = [].slice.call(arguments, 1);
  let self = this;
  let temp = function () {
  };
  let F = function () {
    let _args2 = [].slice.call(arguments, 0);
    let parasArr = _args1.concat(_args2);
    return self.apply(this instanceof temp ? this : target, parasArr)
  }
  temp.prototype = self.prototype;
  F.prototype = new temp();
  return F;
}
//37、实现call()方法
Function.prototype.myCall = function () {
  let ctx = arguments[0] || window;
  ctx.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  let result = ctx.fn(...args);
  delete ctx.fn;
  return result;
}
//38、实现apply()方法
Function.prototype.myApply = function () {
  let ctx = arguments[0] || window;
  ctx.fn = this;
  if (!arguments[1]) {
    let result = ctx.fn();
    delete ctx.fn;
    return result;
  }
  let result = ctx.fn(...arguments[1]);
  delete ctx.fn;
  return result;
}
//39、防抖
/* fixme 防抖同样需要 全局变量挂载 timer变量 */
export const debounce = (handle, delay) => {
  var timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout((arg) => {
      handle.apply(this, arg)
    }, delay, arguments)
  }
}

//40、节流
/* fixme 节流同样需要 全局变量挂载 lastTime变量 */
export const throttle = (handler, wait) => {
  var lastTime = 0;
  return () => {
    const nowTime = new Date().getTime();
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments);
      lastTime = nowTime;
    }
  }
}

//47、函数柯里化
//是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术
export const curryIt = fn => {
  let length = fn.length, args = [];
  const result = arg => {
    args.push(arg);
    length--;
    if (length <= 0) {
      return fn.apply(this, args);
    } else {
      return result;
    }
  }
  return result;
}


//49、单例模式
/* fixme 单例需要引用全局变量 因此 需要使用var 来对result 进行声明 */
export const getSingle = (func) => {
  var result;
  return () => result || (result = new func(arguments));
}

export default {
  getSingle,
  curryIt
}
