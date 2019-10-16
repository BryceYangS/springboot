/**
 *  leaflet canvas marker를 이용한 marker 그리는 lib
 *  (javascript Class 공부)
 */

		/** canvasLayer 위에 점 찍기 **/
		/*
		//지점 한글명 표출
		var stnKoLayer = L.canvasIconLayer({}).addTo(mymap);

		function svgText(txt) {
 			return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="30"><text x="0" y="30" style="font-size: 14px;">' + txt + '</text></svg>';      
		}

		var icon;
		var img;

		var markers = [];
	    for (var i = 0; i < stnData.length; i++) {

			img = 'data:image/svg+xml,' + encodeURIComponent(svgText(stnData[i].stnKo));
 			icon = L.icon({
 			  iconUrl: img,
 			  iconSize: [50, 50],
 			  iconAnchor: [50, 50]
 			});


		  //var marker = L.marker([stnData[i].lat, stnData[i].lon], {icon: icon}).bindPopup(stnData[i].stnKo);
		  var marker = L.marker([stnData[i].lat, stnData[i].lon], {icon: icon}).on('click', onClick(stnData[i].stnKo));
	      markers.push(marker);
		}
		
		stnKoLayer.addLayers(markers);


		//지점 점 표출
		stnLayer = L.canvasIconLayer({}).addTo(mymap);

	    var icon = L.icon({
	      iconUrl: '/image/red_dot.png',
	      iconSize: [10, 10],
	      iconAnchor: [10, 9]
	    });

		var markers = [];
		for (var i = 0; i < stnData.length; i++) {
		  //var marker = L.marker([stnData[i].lat, stnData[i].lon], {icon: icon}).bindPopup(stnData[i].stnKo);
		  var marker = L.marker([stnData[i].lat, stnData[i].lon], {icon: icon}).on('click', onClick(stnData[i].stnKo));
		  markers.push(marker);
		}
		stnLayer.addLayers(markers);
		*/
var BaseMap = (function(){
	"use strict";	

	function BaseMap_(){
		this.map;
		this.mapId;
	};
	
	 BaseMap_.prototype = {
			 
			 init : function(mapid){
				this.map;
				this.mapId = mapid; 
			 },
			 
			 drawBaseMap : function(){
					//OSM
					var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
						attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
							//화면 오른쪽 하단 attributors
					});
					
					//Google Map
					var gm = L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}', {
						attribution: '&copy; <a target="_blank" href="https://maps.google.com/maps?ll=36.1358642,128.0785804&amp;z=13&amp;t=m&amp;hl=ko-KR&amp;gl=US&amp;mapclient=apiv3" title="Google 지도에서 이 지역을 보려면 클릭하세요." ><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google4.png" draggable="false"></a>' 
							//화면 오른쪽 하단 attributors
					});

					var lat = 36.1358642; //latitude
					var lng = 128.0785804; //longitude
					var zoom = 7; //zoom Level
					this.map = L.map(this.mapId, {
						center: [lat, lng],
						zoom: zoom,
						layers : gm,
						attributionControl :false // attribution hide
					});
					
					
					var baseMaps = {
							"GM" : gm,
							"OSM" : osm,
					};
					
					L.control.layers(baseMaps).addTo(this.map);
			},
			
			drawCityDot : function(){
				var stnKoLayer = L.canvasIconLayer({}).addTo(this.map);

				function svgText(txt) {
		 			return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="30"><text x="0" y="30" style="font-size: 14px;">' + txt + '</text></svg>';      
				}

				var icon;
				var img;

				var markers = [];
			    for (var i = 0; i < stnData.length; i++) {

					img = 'data:image/svg+xml,' + encodeURIComponent(svgText(stnData[i].stnKo));
		 			icon = L.icon({
		 			  iconUrl: img,
		 			  iconSize: [50, 50],
		 			  iconAnchor: [50, 50]
		 			});
				  var marker = L.marker([stnData[i].lat, stnData[i].lon], {icon: icon}).on('click', onClick(stnData[i].stnKo));
			      markers.push(marker);
				}
				
				stnKoLayer.addLayers(markers);


				//지점 점 표출
				var stnLayer = L.canvasIconLayer({}).addTo(this.map);

			    var icon = L.icon({
			      iconUrl: '/image/red_dot.png',
			      iconSize: [10, 10],
			      iconAnchor: [10, 9]
			    });

				var markers = [];
				for (var i = 0; i < stnData.length; i++) {
				  var marker = L.marker([stnData[i].lat, stnData[i].lon], {icon: icon}).on('click', onClick(stnData[i].stnKo));
				  markers.push(marker);
				}
				stnLayer.addLayers(markers);

			}
	 }
	
	return BaseMap_;
})();
