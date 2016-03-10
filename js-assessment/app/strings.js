exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
 reduceString: function(str, amount) {
        var curr_char, last_char, found_count = 0, return_str = [];
       for(var i=0, len = str.length; i < len; i++){
           curr_char = str.charAt(i);
           return_str.push(curr_char);
            if(curr_char !== last_char) {
                last_char = curr_char;
                found_count = 0;
            } else if(++found_count >= amount) {
               return_str.pop();
           }
       }
       return return_str.join('');
    },

  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
        return str.split("").reverse().join("");

  }
};
