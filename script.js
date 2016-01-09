var latitude
var longitude

$( document ).ready(function() {
	$("#calculate").click( function() {
		var xmlhttp = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        var array = JSON.parse(xmlhttp.responseText);
		        setToTextfield(array);
		    }
		};

		var postalcode = $("#postalcode").val()
		if(postalcode.length > 0)
		{
			//Build URL
			var URL =  "https://nominatim.openstreetmap.org/search?format=json&postalcode=" + postalcode
	
			xmlhttp.open("GET", URL)
			xmlhttp.send();
		}
		
		function setToTextfield(array) {
			latitude = array[0].lat //Store data in variables
			longitude = array[0].lon
			$("#result").html("Latitude: " + latitude + "<br>Longitude: " + longitude);
		}
	});
});
