

$("#input").on( "input", function(){
	console.log($("#input").val());
	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&inprop=url&list=search&srsearch=" + $("#input").val() + "&format=json&origin=*",
		success: function(info){

			$("#putStuff").text("");
			console.log(info);

			//make li with href
			for(var i=0; i<10; i++){
				$("#putStuff").append("<a href=\"https://en.wikipedia.org/?curid=" +  info.query.search[i].pageid + "\"target=\"_blank\"> <li><span class=\"title\">" + info.query.search[i].title+ "</span><br>" + info.query.search[i].snippet + "</li></a>");
			}


		}


	});
});