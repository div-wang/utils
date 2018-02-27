const ls = window.localStorage

const storage = {
  getStorage: (key) => {
    if (typeof key !== 'string') {
      alert('获取localStorage出错 - 输入参数必须是一个字符串')
    }
    return JSON.parse(ls.getItem(key))
  },
  setStorage: (key, val) => {
    if (typeof key !== 'string') {
      alert('设置localStorage出错 - 第一个输入参数必须是一个字符串')
    }
    ls.setItem(key, JSON.stringify(val))
  },
  delStorage: (key) => {
    if (typeof key === 'string') {
      ls.removeItem(key)
    } else if (key instanceof Array) {
      for (var i = key.length - 1; i >= 0; i--) {
        ls.removeItem(key[i])
      }
    } else {
      alert('删除localStorage出错 - 请输入一个字符串或数组对象')
    }
  },
  clearStorage: () => {
    ls.clear()
  }
}

export default storage
