//23、运动函数
function animate(obj, json, callback) {
  clearInterval(obj.timer);
  let speed, current;
  obj.timer = setInterval(function () {
    let lock = true;
    for (let prop in json) {
      if (prop === 'opacity') {
        current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;
      } else {
        current = parseInt(window.getComputedStyle(obj, null)[prop]);
      }
      speed = (json[prop] - current) / 7;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (prop === 'opacity') {
        obj.style[prop] = (current + speed) / 100;
      } else {
        obj.style[prop] = current + speed + 'px';
      }

      if (current !== json[prop]) {
        lock = false;
      }
    }
    if (lock) {
      clearInterval(obj.timer);
      typeof callback === 'function' ? callback() : '';
    }
  }, 30)
}
//24、弹性运动
function ElasticMovement(obj, target) {
  clearInterval(obj.timer);
  let iSpeed = 40,
    a, u = 0.8;
  obj.timer = setInterval(
    function () {
      a = (target - obj.offsetLeft) / 8;
      iSpeed = iSpeed + a;
      iSpeed = iSpeed * u;

      if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
        console.log('over')
        clearInterval(obj.timer);
        obj.style.left = target + 'px';
      } else {
        obj.style.left = obj.offsetLeft + iSpeed + 'px';
      }
    }, 30);
}


//41、requestAnimFrame兼容性方法
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
//42、cancelAnimFrame兼容性方法

window.cancelAnimFrame = (function () {
  return window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    function (id) {
      window.clearTimeout(id);
    };
})();
