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
      var params = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      var keys = [];

      for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        params.push(hash[0]);
        keys.push(hash[0]);
        params[hash[0]] = unescape(hash[1]) || true;
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