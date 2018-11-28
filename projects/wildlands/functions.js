function init() {
	/**
	 * 1 - CONFIG
	 * 2 - PLUGINS
	 * 3 - ICONS
	 * 4 - POLYLINES
	 * 5 - INITS
	 * 6 - EVENTS
	 * 7 - FUNCTIONS
	 * 8 - JQUERY
	 * 9 - DEPRECATED
	 */


	// 1 - CONFIG
	var mapMinZoom = 1;
	var mapMaxZoom = 6;

	L.CRS.MySimple = L.extend({}, L.CRS.Simple, {
		// At zoom 0, tile 256px x 256px should represent the entire "world" of size 16384 x 16384.
		// Scale is therefore 16384 / 256 = 64 (use the reverse in transformation, i.e. 1 / 64).
		// We want the center of tile 0/0/0 to be coordinates [0, 0], so offset is 16384 * 1 / 64 / 2 = 256 / 2 = 128.
		transformation: new L.Transformation(1 / 64, 128, -1 / 64, 128)
	});
	
	var myBounds = [[-128000, -128000],[128000, 128000]];

	var map = L.map('map', {
		maxBounds: myBounds,
		maxZoom: mapMaxZoom,
		minZoom: mapMinZoom,
		zoomControl: false,
		crs: L.CRS.MySimple
	}).setView([0, 0], 2);

	L.tileLayer('https://rogerhn.github.io/projects/wildlands/wildlands256px/{z}_{x}_{y}.jpg', {
		minZoom: mapMinZoom,
		maxZoom: mapMaxZoom,
		maxNativeZoom: 6,
		tileSize: 256,
		noWrap: true,
		reuseTiles: true,
		tms: false,
		bounds: myBounds,
		//errorTileUrl: "assets/wildlands256px/404.jpg",
		continuousWorld: true
	}).addTo(map);

	new L.Control.Zoom({position: 'topright'}).addTo(map);

	var sidebar = L.control.sidebar('sidebar').addTo(map);
	
	sidebar.open('home');

	var hash = new L.Hash(map);

	map.setMaxBounds([[-18000, -18000], [18000, 18000]]);

	window.latLngToPixels = function(latlng) {
		return window.map.project([latlng.lat, latlng.lng], window.map.getMaxZoom());
	};
	
	window.pixelsToLatLng = function(x, y) {
		return window.map.unproject([x, y], window.map.getMaxZoom());
	};


	// 2 - PLUGINS
	// Using Leaflet.Coordinates plugin at https://github.com/MrMufflon/Leaflet.Coordinates
	// Patch first to avoid longitude wrapping
	L.Control.Coordinates.include({
		_update: function(evt) {
			var pos = evt.latlng,
			opts = this.options;
			if (pos) {
				//pos = pos.wrap(); // Remove that instruction
				this._currentPos = pos;
				this._inputY.value = L.NumberFormatter.round(pos.lat, opts.decimals, opts.decimalSeperator);
				this._inputX.value = L.NumberFormatter.round(pos.lng, opts.decimals, opts.decimalSeperator);
				this._label.innerHTML = this._createCoordinateLabel(pos);
			}
		}
	});

	L.control.coordinates({
		position: "bottomright",
		decimals: 0, //optional default 4
		decimalSeperator: ".", //optional default "."
		labelTemplateLat: "Y: {y}", //optional default "Lat: {y}"
		labelTemplateLng: "X: {x}", //optional default "Lng: {x}"
		enableUserInput: true, //optional default true
		useDMS: false, //optional default false
		useLatLngOrder: true, //ordering of labels, default false -> lng-lat
		markerType: L.marker, //optional default L.marker
		markerProps: {} //optional default {}
	}).addTo(map);


	// 3 - ICONS

	var hurtmarker = L.icon({
		iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',

		iconSize:     [25, 41], // size of the icon
		iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
		popupAnchor:  [1, -41] // point from which the popup should open relative to the iconAnchor
	});

	//L.marker([0, 0], {icon: sampleMarker, title: "Sample Marker"}).addTo(map).bindPopup("Sample Marker!");


	// 7 - FUNCTIONS
	
	
	var layerGroups = [];
	
	function getIcon(index) {
		var iconURL = markers[index].icon;

		var customIcon = L.icon({
			iconUrl: iconURL,
			iconSize: [28,28], // size of the icon
			iconAnchor:   [14, 28], // point of the icon which will correspond to marker's location
			popupAnchor:  [2, -28],
			// point from which the popup should open relative to the iconAnchor
		});

		return customIcon;
	}
	
	for (var i = 0; i < regions.length; i++) {
		// Se o grupo não existir em layerGroups...
		if (layerGroups[regions[i].group] === undefined) {
			// Cria o grupo
			layerGroups[regions[i].group] = new L.LayerGroup();
		}
		// Adiciona a marcação
		L.polygon(regions[i].coords, {color: '#aa861e',opacity: 1,weight: 3,fillColor: '#aa861e',fillOpacity: 0.1,}).bindPopup(regions[i].name + "<br>").addTo(layerGroups[regions[i].group]);
	}
	
	//var polygon = L.polygon([[51.509, -0.08],[51.503, -0.06],[51.51, -0.047]]).addTo(mymap);
		
	for (var k = 0; k < markers.length; k++) {
		// Se o grupo não existir em layerGroups...
		if (layerGroups[markers[k].group] === undefined) {
			// Cria o grupo
			layerGroups[markers[k].group] = new L.LayerGroup();
		}
		if (markers[k].bonus === undefined) {
			markers[k].bonus = "";
		}
		// Adiciona a marcação
		L.marker(markers[k].coords, {icon: getIcon(k)}).bindPopup(markers[k].name + "<br>"+ markers[k].bonus).addTo(layerGroups[markers[k].group]);
	}
	
	// LOCATE MARKERS ON CLICK!
	var locatedGroup = L.layerGroup();
	markers.forEach(function (items) {
	  var marker = L.marker(items.latLng, {
		title: items.name,
		riseOnHover: true
	  }).bindPopup(items.name);

	  // Add each marker to the group
	  locatedGroup.addLayer(marker);

	  // Save the ID of the marker with it's data
	  items.marker_id = locatedGroup.getLayerId(marker);
	  //console.log(items.marker_id);
	});

	markers.forEach(function (items) {
	  $('.locate').on('click', function(){
		var locateMarker = $(this).attr('data-marker');
		if(locateMarker == items.title){
		  var locatedMarkerIcon = L.icon({
			iconUrl: items.icon,
			iconSize: [28,28],
			iconAnchor:   [14, 28],
			popupAnchor:  [2, -28],
		  });
		  
		  $('#'+items.group).prop('checked', true);
		  map.addLayer(layerGroups[items.group]);

		  var locatedMarker = L.marker(items.coords, {icon: locatedMarkerIcon}).bindPopup(items.name + "<br>"+ items.bonus).addTo(map);
		  map.panTo(locatedMarker.getLatLng());
		  locatedMarker.openPopup();
		  locatedMarker.on('popupclose', function() {
			map.removeLayer(locatedMarker);
		  });
		}
	  });
	});
	
	// TOGGLE ALL LAYERS
	
	var allmarkers = document.getElementById('allmarkers');
	
	function toggleAll(element) {
			if (element.checked) {
				$('.markers-list input').prop('checked', true);
				for (var key in layerGroups) {
					map.addLayer(layerGroups[key]);
				}
			} else {
				$('.markers-list input').prop('checked', false);
				for (var keys in layerGroups) {
					map.removeLayer(layerGroups[keys]);
				}
			}
		}

	allmarkers.onchange = function() {toggleAll(this)};
	
	// TOGGLE LAYERS
	
	var koani = document.getElementById('koani');
	var mediaLuna = document.getElementById('mediaLuna');
	var tabacal = document.getElementById('tabacal');
	var montePuncu = document.getElementById('tabacal');
	
	var bonusMedal = document.getElementById('bonusMedal');
	var weaponCase = document.getElementById('weaponCase');
	var skillPoint = document.getElementById('skillPoint');
	
	function toggle(element, layer) {
		if (element.checked) {
			map.addLayer(layerGroups[layer]);
		} else {
			$('#allmarkers').prop('checked', false);
			map.removeLayer(layerGroups[layer]);
		}
	}
	
	// TOGGLE ONLY SOME LAYERS
	
	var only = document.getElementById('only');
	var provinces = document.getElementById('provinces');
	
	function toggleOnly(element, layers) {
		if (element.checked) {
			for (var i = 0; i < layers.length; i++) {
				map.addLayer(layerGroups[layers[i]]);
			}
		} else {
			for (var j = 0; j < layers.length; j++) {
				map.removeLayer(layerGroups[layers[j]]);
			}
		}
	}
		
	// only.onchange = function() {toggleOnly(this, ['animais', 'frutas'])};
	provinces.onchange = function() {toggleOnly(this, ['koani', 'itacua', 'medialuna'])};
	
	intel.onchange = function() {toggle(this, 'intel')};
	kingslayerFile.onchange = function() {toggle(this, 'kingslayerFile')};
	bonusMedal.onchange = function() {toggle(this, 'bonusMedal')};
	skillPoint.onchange = function() {toggle(this, 'skillPoint')};
	accessoryCase.onchange = function() {toggle(this, 'accessoryCase')};
	weaponCase.onchange = function() {toggle(this, 'weaponCase')};
	
	
	breachCommCenter.onchange = function() {toggle(this, 'breachCommCenter')};
	defendRadio.onchange = function() {toggle(this, 'defendRadio')};
	hackAntenna.onchange = function() {toggle(this, 'hackAntenna')};
	intimidateSicario.onchange = function() {toggle(this, 'intimidateSicario')};
	parachuteDrop.onchange = function() {toggle(this, 'parachuteDrop')};
	stealHelicopter.onchange = function() {toggle(this, 'stealHelicopter')};
	stealPlane.onchange = function() {toggle(this, 'stealPlane')};
	
	// Toggle content
	
	$('.toggle-title').click(function(){
		$(this).toggleClass('active');
		$(this).next('.hidden-content').slideToggle(500);
	});
	
	$('.toggle-content').click(function(){
		$(this).toggleClass('active');
		$(this).next('.hidden-content').slideToggle(500);
	});
	

	// Log on console all the markers with its quantity
	function markerCountLog() {
		var count = 0;
		var group = markers[0].group;
		
		for (var i = 0; i < markers.length; i++) {
			if (group != markers[i].group) {
				console.log((i + 1) + " " + group + " " + count);
				count = 0;
				group = markers[i].group;
			}
			
			count++;
		}
	}
	// Log on console all the markers with its quantity
  //markerCountLog();


  // Get popup content old function 
  /*
	function getPopupContent(index) {
		var resPname = icons.resources[index].pname;
		var resDropName = icons.resources[index].dropname;
		var resDropIcon = icons.resources[index].dropicon;

		var popupContent = '<span class="markername">'+resPname+'</span>';

		if (resDropName != undefined && resDropIcon != undefined) {
			var popupContentDrops = '';
			
			popupContent += '<span class="drop">Drops:</span><div class="dropimgs">';
			
			for (var i = 0; i < resDropName.length; i++) {
				popupContentDrops += '<img src="assets/drops/'+resDropIcon[i]+'"><span class="dropimgtext">'+resDropName[i]+'</span>';
			}
			
			popupContent += popupContentDrops + '</div>';
		}

		return popupContent;
	}*/
	
var groupUser;

	initUserLayerGroup();

function initUserLayerGroup() {
	if (localStorage.userMarkers !== undefined) {
		var storageMarkers = [];
		var markersUser = [];
		
		storageMarkers = JSON.parse(localStorage.userMarkers);
		
		for (var i = 0; i < storageMarkers.length; i++) {
			var x = storageMarkers[i].coords.x;
			var y = storageMarkers[i].coords.y;
			var name = storageMarkers[i].name;
			
			var marker = L.marker([x, y], {draggable: true,icon: hurtmarker}).bindPopup(name + "<br>coords: "+ x +","+ y +"<br><a href='#' class='delete'>Delete</a>").addTo(map);
			
			marker.on("popupopen", onPopupOpen);
			
			markersUser.push(marker);
		}
		
		//groupUser = L.layerGroup(markersUser);
		
		//map.addLayer(groupUser);
	}
}

	function onMapClick(e) {
	var storageMarkers = [];
	var markersUser = [];
	
	if (localStorage.userMarkers !== undefined) {
		storageMarkers = JSON.parse(localStorage.userMarkers);
	}
	
	var markerCount = storageMarkers.length+1;
	
	storageMarkers.push({
		"coords": {
			"x": e.latlng.lat,
			"y": e.latlng.lng
		},
		"name": "Marker " + markerCount
	});
	
	var x = storageMarkers[storageMarkers.length -1].coords.x;
	var y = storageMarkers[storageMarkers.length -1].coords.y;
	var name = storageMarkers[storageMarkers.length -1].name;
	
	var marker = L.marker([x, y], {draggable: true,icon: hurtmarker}).bindPopup("<span class='marker-name'>"+ name + "</span><br>coords: "+ x +","+ y +"<br><a href='#' class='delete'>Delete</a>").addTo(map);
	
	marker.on("popupopen", onPopupOpen);
	
	marker.on('dragend', function(event) {
    var marker = event.target;  // you could also simply access the marker through the closure
    var result = marker.getLatLng();  // but using the passed event is cleaner
    console.log(result);
	});
	
	markersUser.push(marker);
	
	//groupUser = L.layerGroup(markersUser);
	
	//map.addLayer(groupUser);
	
	localStorage.userMarkers = JSON.stringify(storageMarkers);
	//console.log(localStorage.userMarkers);
}

map.on('click', onMapClick);

function onPopupOpen() {
	var _this = this;
	var clickedMarkerCoords = this.getLatLng();
	
	$('.delete').click(function() {
	  storageMarkers = JSON.parse(localStorage.userMarkers);
	  for(i = storageMarkers.length; i > -1; i--) {
	    if (typeof storageMarkers[i] != 'undefined' && 
	      (clickedMarkerCoords.lat == storageMarkers[i].coords.x &&
	      clickedMarkerCoords.lng == storageMarkers[i].coords.y)
	    ) {
	      storageMarkers.splice(i, 1);
	      localStorage.userMarkers = JSON.stringify(storageMarkers);
	    }
	     
	  }   
		//localStorage.removeItem('userMarkers');
		map.removeLayer(_this);
	});
}

	// 8 - JQUERY
	// LayerGroups Toggles
	$(document).ready(function () {
		$('#tokartoggle').change(function () {
			if (this.checked)
				map.addLayer(groupTokar);
			else
				map.removeLayer(groupTokar);
		});
	});


	// 9 - DEPRECATED
	/*DRAGEND FUNCTION
	function onMapClick(e) {
    marker = new L.marker(e.latlng, {id:uni, icon:redIcon, draggable:'true'});
    marker.on('dragend', function(event){
            var marker = event.target;
            var position = marker.getLatLng();
            console.log(position);
            marker.setLatLng(position,{id:uni,draggable:'true'}).bindPopup(position).update();
    });
    map.addLayer(marker);
	};


	marker.on('dragend', function(event) {
    var marker = event.target;  // you could also simply access the marker through the closure
    var position = marker.getLatLng();  // but using the passed event is cleaner
	var x = position.lat;
	var y = position.lng;
	marker.setLatLng([position],{draggable:true,icon: hurtmarker}).bindPopup("<span class='marker-name'>"+ name + "</span><br>coords: "+ x +","+ y +"<br><a href='#' class='delete'>Delete</a>").update();
    console.log(position);
	});
	
	
	// Start popup message
	/*
	var popup = L.popup()
		.setLatLng([-1000, -1000])
		.setContent("<center>This is the first version of the map.<br>If you find any bug please post to the <a target='_blank' href='https://www.reddit.com/r/hurtworld/comments/44stfy/hurtworld_interactive_map/'>reddit thread</a>.</center>")
		.openOn(map);
	*/

	// Right mouse button (or long press on mobile) click show coordinates (x, y)
	/*
	var popup = L.popup();
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("X: " + e.latlng.lng + ", Y: " + e.latlng.lat)
			.openOn(map);
	}
	map.on('contextmenu', onMapClick);
	*/

	// User markers functions
	/*
	function onMapClick(e) {
		var geojsonFeature = {
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "Point",
				"coordinates": [e.latlng.lat, e.latlng.lng]
			}
		}
		
		var marker;
		
		L.geoJson(geojsonFeature, {
			pointToLayer: function(feature, latlng){
				marker = L.marker(e.latlng, {
					title: "Resource Location",
					alt: "Resource Location",
					riseOnHover: true,
					draggable: false,
					icon: totem
				}).bindPopup("<span>X: " + e.latlng.lng + ", Y: " + e.latlng.lat + "</span><br><a href='#' id='marker-delete-button'>Delete marker</a>");
				
				marker.on("popupopen", onPopupOpen);
				
				// Begin store markers in local storage
				//storeMarker(e.latlng);
				// End store markers in local storage
				
				return marker;
			}
		}).addTo(map);
	}
	
	function onPopupOpen() {
		var tempMarker = this;
		
		$("#marker-delete-button:visible").click(function() {
			map.removeLayer(tempMarker);
			localStorage.removeItem("markers");
		});
	}

	function storeMarker(marker){
		var markers = localStorage.getItem("markers");
		
		if (!markers) {
			markers = new Array();
			console.log(marker);
			markers.push(JSON.stringify(marker));
		} else {
			markers = JSON.parse(markers);
			markers.push(JSON.stringify(marker));
		}
		
		console.log(JSON.stringify(markers));
		localStorage.setItem('markers', JSON.stringify(markers));
	}

	function loadMarkers() {
		var markers = localStorage.getItem("markers");
		if (!markers) return;
		markers = JSON.parse(markers);
		markers.forEach(function(entry) {
			latlng = JSON.parse(entry);
			var geojsonFeature = {
				"type": "Feature",
				"properties": {},
				"geometry": {
					"type": "Point",
					"coordinates": [latlng.lat, latlng.lng]
				}
			}
			
			var marker;
			
			L.geoJson(geojsonFeature, {
				pointToLayer: function(feature){
					marker = L.marker(latlng, {
						title: "Resource Location",
						alt: "Resource Location",
						riseOnHover: true,
						draggable: true,
						icon: redmarker
					}).bindPopup("<span>X: " + latlng.lng + ", Y: " + latlng.lat + "</span><br><a href='#' id='marker-delete-button'>Delete marker</a>");
					
					marker.on("popupopen", onPopupOpen);
					
					return marker;
				}
			}).addTo(map);
		});
	}
	*/
}