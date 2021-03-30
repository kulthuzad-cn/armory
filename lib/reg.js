//验证邮箱的正则表达式
export const isAvailableEmail = sEmail => /^([\w+.])+@\w+([.]\w+)+$/.test(sEmail)
