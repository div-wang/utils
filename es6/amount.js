const Yuan2Cent = (val) => {
  var arr = typeof val === 'number' ? (val + '').split('.') : val.split('.')
  if (arr[1] && arr[1].length === 1) {
    arr[1] += '0'
  }
  return arr[1] ? parseFloat(arr[0] + arr[1].substr(0, 2)) : parseInt(arr[0] * 100)
}
const Cent2Yuan = (val) => {
  var money = val / 100 + ''
  let indexOf = money.indexOf('.')
  money = money === 'NaN' ? 0 : indexOf > -1 ? money.substring(0, indexOf + 3) : money
  return parseFloat(money)
}

export { Yuan2Cent, Cent2Yuan }
