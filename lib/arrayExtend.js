export const unique = (arr) => [...new Set(arr)]

export function flat(list, depth) {
  if (depth === 0) return list;
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      result = result.concat(list[i]);
    } else {
      result.push(list[i]);
    }
  }
  return flat(result, --depth);
}

export default {
  unique,
  flat: Array.prototype.flat || flat
}
