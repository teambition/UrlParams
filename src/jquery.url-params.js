(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {
  $.extend({
    urlParams: function(method, param){
      var params = [],
          hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      var keys = [];

      for(var i = 0; i < hashes.length; i++) {
        var _hashStr = hashes[i];
        var _param = _hashStr.slice(0, _hashStr.indexOf('='));
        var _value = _hashStr.slice(_hashStr.indexOf('=') + 1);
        params.push(_param);
        keys.push(_param);
        params[_param] = unescape(_value) || true;
      }

      switch(method) {
        case "get":
          return params[param] || "";
          break;
        case "keys":
          return keys;
          break;
        case "exists":
          return(params[param] ? true : false);
          break;
        case "all":
          return params;
          break;
      }
    }
  });
}));