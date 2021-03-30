export default {
  set(name, value, time) {
    document.cookie = name + '=' + value + '; max-age=' + time;
    return this;
  },
  remove(name) {
    return this.setCookie(name, '', -1);
  },
  get(name) {
    let allCookieArr = document.cookie.split('; ');
    for (let i = 0; i < allCookieArr.length; i++) {
      let itemCookieArr = allCookieArr[i].split('=');
      if (itemCookieArr[0] === name) {
        return itemCookieArr[1]
      }
    }
    return undefined;
  }
}
