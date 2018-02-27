const confirm = {
  install (Vue, options) {
    Vue.prototype.$confirm = function (message, success, fail) {
      let hide = () => {
        let _body = document.body
        const _confirm = document.getElementById('confirm')
        _confirm && _body.removeChild(_confirm)
        fail && fail()
      }
      let show = () => {
        let _body = document.body
        const _confirm = document.getElementById('confirm')
        _confirm && _body.removeChild(_confirm)
        success && success()
      }
      let _body = document.body
      const _box = document.createElement('div')
      _box.id = 'confirm'
      _box.className = 'confirm-bg'
      _box.innerHTML = `<div class="confirm-box"><p>${message}</p><div class="button"><span id="cancel">${this.$t('i18n.plugin.buttonCancel')}</span><span id="verify">${this.$t('i18n.plugin.buttonOk')}</span></div></div>`

      _body.appendChild(_box)
      const _clear = document.getElementById('cancel')
      _clear.onclick = hide
      const _verify = document.getElementById('verify')
      _verify.onclick = show
    }
  }
}

export default confirm
