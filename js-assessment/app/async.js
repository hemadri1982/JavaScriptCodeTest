exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
async : function(value) {
    var df = $.Deferred();
    setTimeout(function() {
      df.resolve(value);
    }, 10);
    return df.promise();
  },

  manipulateRemoteData : function(url) {
	var df = $.Deferred();

    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {
        return person.name;
      });
      df.resolve(people.sort());
    });

    return df.promise();
  }
};
