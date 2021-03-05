/*
* 通用接口数据转换方法
* @params d {any} 接口返回数据
* @params keys {Object} 转换对象 key 为 转换目标字段 value 为转换数据源字段 如果不传认为是head默认字段
* @Return {Array} 数据结构为 keys<Array>
* */
export const d2l = (d, keys) => {
  const head = d.data.head
  const data = d.data.data
  const enumMap = {}
  if (keys) {
    Object.entries(keys).forEach(item => {
      const i = head.indexOf(item[1])
      if (i === -1) {
        console.group('enumMapError')
        console.log('如无法查看请检查控制台日志等级')
        console.warn(keys)
        console.warn(`>>>${item[0]}=>${item[1]}<<<配置错误,该配置项将被忽略`)
        console.groupEnd('enumMapError')
      } else {
        enumMap[item[0]] = i
      }
    })
  } else {
    head.forEach((k, i) => (enumMap[k] = i))
  }
  return data.map(d => {
    const obj = {}
    Object.entries(enumMap).forEach(item => (obj[item[0]] = d[item[1]]))
    return obj
  }) || []
}
