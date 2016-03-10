exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	return arr.indexOf(item);
  },

  sum : function(arr) {
	  var sum=0;
     for (var i=0;i<arr.length;i++){
		 sum+=arr[i];
	 }
	 return sum;
  },

  remove : function(arr, item) {
	 			if(item > -1) {
				for(i in arr){
				if(arr[i]==item) {
					arr.splice(i,1);
				}
			}
		}
           return arr;		
  },

  removeWithoutCopy : function(arr, item) {
	for(var i = 0; i < arr.length; i++){
        if(arr[i]==item) {
            arr.splice(i,1);
            i--; 
        }
    }
	return arr;

  },

  append : function(arr, item) {
	  arr.push(item);
	  return arr;
  },

  truncate : function(arr) {
		arr.pop();
		return arr;
  },

  prepend : function(arr, item) {
      var newArray=[];
	  newArray.push(item);
	  for (var i =0;i<arr.length;i++){
		  newArray.push(newArray[i]);
	  }
	  return newArray;
  },

  curtail : function(arr) {
	 arr.shift();
	 return arr;
  },

  concat : function(arr1, arr2) {
		return arr1.concat(arr2);
		
  },

  insert : function(arr, item, index) {
	  arr.splice(index, 0, item);

		return arr;

  },

  count : function(arr, item) {
	  var counter=0;
		for(var i=0;i<arr.length;i++){
			if(item === arr[i]){
				counter=counter+1;
			}
		}
		return counter;
  },

  duplicates : function(arr) {
var sorted_arr = arr.slice().sort();                                      
   var results = [];
   for (var i = 0; i < arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
		  if(results.indexOf(sorted_arr[i])<0){
			results.push(sorted_arr[i]);
		  }
       }
   }
   return results;
   

  },

  square : function(arr) {
     var newArray=[];
	  for(var i =0;i<arr.length;i++){
		  newArray.push(arr[i]*arr[i]);
	  }
	  return newArray;
  },

  findAllOccurrences : function(arr, target) {
	  var newArray=[];
    for(var i=0;i<arr.length;i++){
		if(arr[i]===target){
			newArray.push(i);
		}
	}
    return newArray;
  }
};
