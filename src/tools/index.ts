// 金额千分位
export function moneyFormat(num: number) {
  console.log('num', num)
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
