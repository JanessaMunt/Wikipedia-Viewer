
$.ajax({
	url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=test&format=json&origin=*",
	success: function(info){
		$("#test").html(info.query.search[0].snippet);
		console.log(info);

		$("putStuff").html("<li>" + info.query.search[0].snippet + "</li>");
		for(var i=0; i<10; i++){
			$("#putStuff").append("<li>" + info.query.search[i].snippet + "</li>");
		}
		//make li with href

	}


});