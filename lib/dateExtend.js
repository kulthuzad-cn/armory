const addZero = v => ("0" + v).slice(-2)

export const formatDate = (t, str, ops = {hour12: false}) => {
  // const weekList = ['日', '一', '二', '三', '四', '五', '六']
  // const numberCnList = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const obj = {
    yyyy: t.getFullYear(),
    yy: String(t.getFullYear()).slice(-2),
    M: t.getMonth() + 1,
    MM: addZero((t.getMonth() + 1)),
    d: t.getDate(),
    dd: addZero(t.getDate()),
    H: t.getHours(),
    HH: addZero(t.getHours()),
    h: t.getHours() % (ops.hour12 ? 12 : 24),
    hh: addZero(t.getHours() % (ops.hour12 ? 12 : 24)),
    m: t.getMinutes(),
    mm: addZero(t.getMinutes()),
    s: t.getSeconds(),
    ss: addZero(t.getSeconds()),
    w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
  };
  return str.replace(/([a-z]+)/ig, $1 => obj[$1]);
}

export default {
  formatDate
}

