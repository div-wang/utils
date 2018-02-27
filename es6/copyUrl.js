const copyUrl = (url, cb) => {
  try {
    var input = document.getElementById('copyInput')
    input.value = url
    input.focus()
    input.select()
    if (document.execCommand('copy', false, null)) {
      alert('复制成功')
    } else {
      alert('当前浏览器不支持复制操作，请使用Ctrl+c手动复制')
    }
  } catch (e) {
    alert('复制出错:' + JSON.stringify(e))
  }
}

export default copyUrl
