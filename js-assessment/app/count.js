exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
count : function (start, end) {
    var timeout;
    function changeIt() {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(changeIt, 100);
      }
    }

    changeIt();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
