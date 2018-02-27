const dialog = {
  install (Vue, options) {
    Vue.prototype.$dialog = function (o, done) {
      let obj = typeof o === 'string' ? {
        message: o
      } : o
      let success = () => {
        let _body = document.body
        const _dialog = document.getElementById('dialog')
        _dialog && _body.removeChild(_dialog)
        done && done()
      }
      let _body = document.body
      const _box = document.createElement('div')
      _box.id = 'dialog'
      _box.className = 'dialog-bg'
      _box.innerHTML = `<div class="dialog-box"><div class="dialog-title">${obj.title || this.$t('i18n.plugin.dialogTitle')}</div><p>${obj.message}</p><div class="button"><span id="verify">${obj.button || this.$t('i18n.plugin.buttonOk')}</span></div></div>`

      _body.appendChild(_box)
      const _verify = document.getElementById('verify')
      _verify.onclick = success
    }
  }
}

export default dialog
