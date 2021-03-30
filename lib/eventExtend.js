//17、绑定事件的兼容代码

function addEvent(elem, type, handle) {
  if (elem.addEventListener) { //非ie和非ie9
    elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) { //ie6到ie8
    elem.attachEvent('on' + type, function () {
      handle.call(elem);
    })
  } else {
    elem['on' + type] = handle;
  }
}

//18、解绑事件

function removeEvent(elem, type, handle) {
  if (elem.removeEventListener) { //非ie和非ie9
    elem.removeEventListener(type, handle, false);
  } else if (elem.detachEvent) { //ie6到ie8
    elem.detachEvent('on' + type, handle);
  } else {
    elem['on' + type] = null;
  }
}

//19、取消冒泡的兼容代码

function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else {
    window.event.cancelBubble = true;
  }
}

