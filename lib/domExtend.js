//8、找元素的第n级父元素

function parents(ele, n) {
  while
    (ele && n) {
    ele = ele.parentElement ? ele.parentElement : ele.parentNode;
    n--;
  }
  return ele;
}

//9、 返回元素的第n个兄弟节点

function retSibling(e, n) {
  while
    (e && n) {
    if (n > 0) {
      if (e.nextElementSibling) {
        e = e.nextElementSibling;
      } else {
        for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling) {
        }
      }
      n--;
    } else {
      if (e.previousElementSibling) {
        e = e.previousElementSibling;
      } else {
        for (e = e.previousElementSibling; e && e.nodeType !== 1; e = e.previousElementSibling) {

        }
      }
      n++;
    }
  }
  return e;
}

//10、封装mychildren，解决浏览器的兼容问题
function myChildren(e) {
  let children = e.childNodes,
    arr = [],
    len = children.length;
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      arr.push(children[i])
    }
  }
  return arr;
}

//11、判断元素有没有子元素

function hasChildren(e) {
  let children = e.childNodes, len = children.length;
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      return true;
    }
  }
  return false;
}

//12、我一个元素插入到另一个元素的后面

Element.prototype.insertAfter = function (target, elen) {
  let nextElen = elen.nextElenmentSibling;
  if (nextElen == null) {
    this.appendChild(target);
  } else {
    this.insertBefore(target, nextElen);
  }
}

//14、获得滚动条的滚动距离

function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  } else {

    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}

//15、获得视口的尺寸

function getViewportOffset() {

  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  } else {
    // ie8及其以下
    if (document.compatMode ===
      "BackCompat"
    ) {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}

//16、获取任一元素的任意属性
function getStyle(elem, prop) {
  return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop]
}

//22、兼容getElementsByClassName方法

Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function (_className) {
  let allDomArray = document.getElementsByTagName(
    '*'
  );
  let lastDomArray = [];

  function trimSpace(strClass) {
    let reg = /\s+/g;
    return strClass.replace(reg, ' ').trim()
  }

  for (let i = 0; i < allDomArray.length; i++) {
    let classArray = trimSpace(allDomArray[i].className).split(' ');
    for (let j = 0; j < classArray.length; j++) {
      if (classArray[j] === _className) {
        lastDomArray.push(allDomArray[i]);
        break;
      }
    }
  }
  return lastDomArray;
}

//32、遍历Dom树

// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)
// 对于每个访问的元素，函数讲元素传递给提供的回调函数
function traverse(element, callback) {
  callback(element);
  let list = element.children;
  for (let i = 0; i < list.length; i++) {
    traverse(list[i], callback);
  }
}
