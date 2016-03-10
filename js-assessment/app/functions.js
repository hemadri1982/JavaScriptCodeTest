exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
 
  },

  speak : function(fn, obj) {
     return fn.call(obj);
  },

  functionFunction : function(str) {
	return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures : function(arr, fn) {
	 var retu = [];

    var makeFun = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0, len = arr.length; i < len; i++) {
      retu.push(makeFun(arr[i]));
    }

    return retu;
  },

  partial : function(fn, str1, str2) {
	    return function(str) {
      return fn.call(null, str1, str2, str);
    };
  },

  useArguments : function() {
   var sum = 0;

    for (var i = 0, leng = arguments.length; i < leng; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArugs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArugs);
    };
  },

  curryIt : function(fn) {

  }
};
