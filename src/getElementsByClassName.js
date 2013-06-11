// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result=[],
  	  getElementByClass = function (nodes){
  	  	if (nodes!==undefined){
  	  		var classList=nodes.classList;
	  	  	if (nodes.length){
	  	  		for (var i=0, len=nodes.length; i<len;i++){
	  	  			if (nodes[i].classList!==undefined){
	  	  				getElementByClass(nodes[i]);
	  	  			}
	  	  		}
	  	  	}
	  	  	else {
	  	  		if (classList){
		  	  		if (classList.contains(className)) {
			  	  		result.push(nodes);
			  	  	}
		  	  		getElementByClass(nodes.childNodes); 		  	  			
	  	  		}
	  	  	}
	  	}
  };
  getElementByClass(document.body);
  return result;
};
