$(document).ready(function() {
	$(".btn").on("click",function() {
    	$.getJSON("https://api.myjson.com/bins/2ta1g", function(json) { 

// PRE-FILTER
    		var choice = Math.floor(Math.random() * (Math.floor(1) - Math.ceil(0) + 1)) + 0;
    		var json = json.filter(function(val) {
        		return val.id == choice;
      		});

// HTML-ERIZE
    		json.forEach(function(val) {
          		var html = "<h3>" + val.quote + "</h3>";
          		$("#quoteBox").html(html);
          		
// TWEETER
          		$("#twitter").on("click", function() {
        			var twtLink = "http://twitter.com/home?status=" + encodeURIComponent(val.quote); 
        			window.open(twtLink, "");
        		});
          	});
    	});
    });
});

