const Alert = {
  install (Vue, options) {
    Vue.prototype.$alert = function (obj) {
      let message = obj.message || obj
      let time = obj.time || 5000
      let type = obj.type || 'warn'
      let oBody = document.body
      let className = 'tipBox'
      let hideTip = () => {
        const oTip = document.getElementById('tips')
        oTip && oBody.removeChild(oTip)
        oTip && clearTimeout(oTip.timer)
      }
      hideTip()
      if (type === 'success') {
        className = 'greenTipBox'
      }
      const oAlert = document.createElement('div')
      oAlert.id = 'tips'
      oAlert.className = className
      oAlert.innerHTML = `<p>${message}</p><span class="close" id="tips-close"></span>`

      oBody.appendChild(oAlert)
      const oClose = document.getElementById('tips-close')
      oClose.onclick = hideTip
      oAlert.timer = setTimeout(hideTip, time)
    }
  }
}

export default Alert
