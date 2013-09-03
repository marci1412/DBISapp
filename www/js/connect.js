$(document).ready(function(){
				  
/*-------------------------------CHECK INTERNET CONNECTION--------------------------------------------------------------*/
	// Wait for PhoneGap to load
	//
	/*document.addEventListener("deviceready", onDeviceReady, false);
				  
    function onDeviceReady() {
		alert("Ready!");
        checkConnection();
    }
                  
	function checkConnection() {
		var networkState = navigator.network.connection.type;
                  
		var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.NONE]     = 'No network connection';
                  
		if(navigator.network.connection.type == Connection.NONE) {
			alert("Kein Internet!");
		} else {
			alert('Connection type: ' + states[networkState]);
		}
	}*/
				  
/*------------------------------NEWS------------------------------------------------------------------------------------*/
	$(document).on('pageshow', '#news', function(){
		//alert("starte GET");
		$.get('http://www.uni-ulm.de/index.php?id=10794', function(data){
			$('#news').find('div:last').append(""+$(data).html());
		});
	});
	//alert("Test");

/*------------------------------EVENTS----------------------------------------------------------------------------------*/
	$(document).on('pageshow', '#events', function(event, ui){
		alert("Data loading possible!");
	});
/*------------------------------TEACHING--------------------------------------------------------------------------------*/
	$(document).on('pageshow', '#teaching', function(event, ui){
		alert("Data loading possible!");
	});
/*------------------------------EMPLOYEES-------------------------------------------------------------------------------*/
	$(document).on('pageshow', '#employees', function(event, ui){
		$.get('https://dbis.eprints.uni-ulm.de/marcel/StaffForPhone.php', function(data){
			//$('#news').find('div:last').append(""+$(data).text());
			alert("Test: "+data);
		}).error(function(xhr, status, error){alert("Could not load data! "+status);});
		alert("page loaded!");
	});


	/*$('#menu').on('pageinit', function(event, ui){
		alert("Test2");
	});*/
});