//30、获取url中的参数
export const getWindonHref = () => {
  let sHref = window.location.href;
  let args = sHref.split('?');
  if (args[0] === sHref) {
    return '';
  }
  let hrefArr = args[1].split('#')[0].split('&');
  let obj = {};
  for (let i = 0; i < hrefArr.length; i++) {
    hrefArr[i] = hrefArr[i].split('=');
    obj[hrefArr[i][0]] = hrefArr[i][1];
  }
  return obj;
}
//33、原生js封装ajax
export const ajax = (method, url, callback, data, flag) => {
  let xhr;
  flag = flag || true;
  method = method.toUpperCase();
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHttp');
  }
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(2)
      callback(xhr.responseText);
    }
  }
  if (method === 'GET') {
    let date = new Date(),
      timer = date.getTime();
    xhr.open('GET', url + '?' + data + '&timer' + timer, flag);
    xhr.send()
  } else if (method === 'POST') {
    xhr.open('POST', url, flag);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
  }
}
//43、异步加载script 这也是基础的jsonp 底层方法
export const loadScript = (url, callback) => {
  let oscript = document.createElement('script');
  if (oscript.readyState) { // ie8及以下版本
    oscript.onreadystatechange = () => {
      if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
        callback();
      }
    }
  } else {
    oscript.onload = () => callback();
  }
  oscript.src = url;
  document.body.appendChild(oscript);
}
//44、获取url上的参数
export const getUrlParam = (sUrl, sKey) => {
  const result = {};
  sUrl.replace(/(\w+)=(\w+)(?=[&|#])/g, function (ele, key, val) {
    if (!result[key]) {
      result[key] = val;
    } else {
      let temp = result[key];
      result[key] = [].concat(temp, val);
    }
  })
  return sKey ? (result[sKey] || '') : result
}

export default {
  getWindonHref,
  ajax,
  loadScript,
  getUrlParam
}
