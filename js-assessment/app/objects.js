exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
	    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var retrn = [];

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        retrn.push(prop + ': ' + obj[prop]);
      }
    }

    return retrn;
  }
};
