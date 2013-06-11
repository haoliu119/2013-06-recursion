// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  if (obj===null){
  	return "null";
  }
  else if (obj === undefined){
  	return "undefined";
  }
  else if (typeof(obj)==="string"){
  	return '"'+obj+'"';
  }
  else if (Array.isArray(obj)) {
  	var temp="",
  		len=obj.length;

  	for (var i=0;i<len;i++){
  		temp=temp.concat(stringifyJSON(obj[i])+',');
  	}
  	return '['+temp.slice(0,temp.length-1)+']';	// deleting trailing ','
  }
  else if (typeof(obj)==="object"){		// and object
  	var temp="";
  	for (var prop in obj){
  		if (obj[prop] !== undefined && typeof(obj[prop])!=="function"){
  			temp=temp.concat(stringifyJSON(prop)+':'+stringifyJSON(obj[prop])+',');
  		}
  	}
  	return '{'+temp.slice(0,temp.length-1)+'}';	// deleting trailing ','
  }
  else{
  	return obj.toString();
  }

};
