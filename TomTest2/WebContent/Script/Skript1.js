$(document).ready(function(){
    function initMap() {
        var uluru = {lat: 44.766607, lng: 20.469847};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }  
});

function callbackdata(response) {
    alert(response)
 }

function CallURL()  {
	console.log("pocinje");
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://130.206.123.224:1026/v2/entities/Actuator-01/");
	xhr.setRequestHeader('Accept', 'application/json');
	
	xhr.onreadystatechange = processRequest;
	 
	function processRequest(e) {
	    if (xhr.readyState == 4) {
	        alert();
	    }
	}
	
	xhr.send();
	
//	$.ajax({ 
//        type: 'GET', 
//        url: 'http://130.206.123.224:1026/v2/entities/Actuator-01/', 
//        crossDomain: true,
//        data: { get_param: 'value' }, 
//        dataType:'jsonp',	
//        success: function (data) { 
//        	var ss=data;
//        		alert(data);
//        },
//        jsonpCallback : 'callbackdata',
//        error: function(data) {
//            console.log("ERROR");
//            var ss=data;
//            alert(data);
//        }
//    });
	
//	var settings = {
//			  "async": true,
//			  "crossDomain": true,
//			  "url": "http://130.206.123.224:1026/v2/entities/Actuator-01/",
//			  "method": "GET",
//			  "dataType": "json",
//			  "headers": {
//				"accept": "application/json"
//			  }
//			};
//
//			$.ajax(settings).done(function (response) {
//			  console.log(response);
//			});
}
  	
function mojaFunkcija(){
      	alert("nesto");

      	CallURL();
      	
      }

function initMap() {
    var uluru = {lat: 44.766607, lng: 20.469847};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }  