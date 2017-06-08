'use strict';

var titleCase = require('titlecase');

var camel = {
  processTitle: function(fileName) {
    var arr = fileName.split('-');
    var arrProcessed = arr.map(function(str){
      return titleCase(str);
    });
    return arrProcessed.join('');
  },

  processStandard: function(fileName) {
    var arr = fileName.split('-');
    var arrProcessed = arr.map(function(str, ind){
      if (ind === 0) {
        return str;
      } else {
        return titleCase(str);
      }      
    });
    return arrProcessed.join('');
  }
}

module.exports = camel;
