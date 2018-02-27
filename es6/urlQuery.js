const urlQuery = {
  _makeUrl: function (url, search) {
    return url.indexOf('?') !== -1 ? url.replace(/\?([^#]*)/, '' + (search ? '?' + search : '')) : '' + url + (search ? '?' + search : '');
  },
  _getQueryFromUrl: function (url) {
    if (!url || url.indexOf('?') === -1) {
      return '';
    }

    var search = url.split('?')[1];

    if (!search || search.indexOf('=') === -1) {
      throw new Error('not query format!');
    }

    return search;
  },
  queryOne: function (key) {
    var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var s = str ? '?' + this._getQueryFromUrl(str) : loc.search;
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)'); // 构造一个含有目标参数的正则表达式对象
    var r = s.substr(1).match(reg); // 匹配目标参数
    if (r != null) {
      return decodeURIComponent(r[2]).replace(/(#\w+)$/, '');
    }
    return null; // 返回参数值
  },
  queryAll: function () {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var reg = new RegExp('(^|&)([^&=]+)=([^&]*)(&|$)');
    var s = str ? '?' + this._getQueryFromUrl(str) : loc.search;
    var search = s.substr(1);
    var a = search.split('&');
    var i = 0;
    var result = {};

    while (a[i]) {
      var r = a[i].match(reg);
      if (r != null) {
        result[decodeURIComponent(r[2])] = decodeURIComponent(r[3]);
      }
      i++;
    }
    return result;
  },
  queryRouterLastOne = function () {
    let str = this.pathname().split('/')
    let router = str[str.length - 1].split('?')[0]
    return router === '' ? str[str.length - 2] : router
  },
  pathname: function () {
    return location.hash ? location.hash : location.pathname
  },
  search: function () {
    return location.hash ? location.hash : location.search
  }
}

export default urlQuery
