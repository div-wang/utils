const loading = {
  install (Vue, options) {
    Vue.prototype.$loading = function (message, done) {
      let _body = document.body
      let _box = document.createElement('div')
      let removeNode = () => {
        const _loading = document.getElementById('loading')
        _loading && _body.removeChild(_box)
      }
      _box.id = 'loading'
      _box.className = 'loading-bg'
      _box.innerHTML = `<div class="loading-box"><a id="close"></a><p class="img"><img src="https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif" width="70"></p><p>${message}</p></div>`
      _body.appendChild(_box)
      const _close = document.getElementById('close')
      _close.onclick = removeNode
      _close && done && done(removeNode)
    }
  }
}

export default loading
