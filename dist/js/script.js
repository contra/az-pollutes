!function e(t,n,o){function a(p,s){if(!n[p]){if(!t[p]){var i="function"==typeof require&&require;if(!s&&i)return i(p,!0);if(r)return r(p,!0);throw new Error("Cannot find module '"+p+"'")}var c=n[p]={exports:{}};t[p][0].call(c.exports,function(e){var n=t[p][1][e];return a(n?n:e)},c,c.exports,e,t,n,o)}return n[p].exports}for(var r="function"==typeof require&&require,p=0;p<o.length;p++)a(o[p]);return a}({1:[function(e,t){t.exports={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-111.876627844,33.408004893]},properties:{contact:{name:"Don Netko",phone:"(480) 413-5136"},company:"Freescale Semiconductor Inc",name:"BROADWAY 101 COMMERCE PARK",address:"2200 W BROADWAY RD, MESA, AZ 85202",pollutants:[{pollutant:"NITROGEN OXIDES",since:"2004-03-01T07:00:00.000Z"},{pollutant:"SULFUR DIOXIDE",since:"2004-03-01T07:00:00.000Z"},{pollutant:"CARBON MONOXIDE",since:"2004-03-01T07:00:00.000Z"},{pollutant:"VOLATILE ORGANIC COMPOUNDS",since:"2004-03-01T07:00:00.000Z"},{pollutant:"PARTICULATE MATTER < 10 UM",since:"2004-03-01T07:00:00.000Z"}]}},{type:"Feature",geometry:{type:"Point",coordinates:[-114.089972537,35.142374831]},properties:{company:"Nucor Steel Kingman Llc",name:"NUCOR STEEL KINGMAN",address:"3000 E ANDY DEVINE AVE, MCCONNICO, AZ 86401",pollutants:[{pollutant:"NITROGEN OXIDES",since:"2004-12-31T07:00:00.000Z"},{pollutant:"SULFUR DIOXIDE",since:"2004-12-31T07:00:00.000Z"},{pollutant:"VOLATILE ORGANIC COMPOUNDS",since:"2004-12-31T07:00:00.000Z"},{pollutant:"PARTICULATE MATTER < 10 UM",since:"2004-12-31T07:00:00.000Z"},{pollutant:"CARBON MONOXIDE",since:"2004-12-31T07:00:00.000Z"}]}},{type:"Feature",geometry:{type:"Point",coordinates:[-112.150975741,33.432505506]},properties:{contact:{name:"Doug Townsend",phone:"(602) 269-5811"},company:"Woodstuff Manufacturing Inc",name:"WOODSTUFF MANUFACTURING",address:"1635 S 43RD AVE, PHOENIX, AZ 85009",pollutants:[{pollutant:"VOLATILE ORGANIC COMPOUNDS",since:"2007-11-30T07:00:00.000Z"}]}},{type:"Feature",geometry:{type:"Point",coordinates:[-111.971476388,33.443595055]},properties:{contact:{name:"Todd Tupper",phone:"(480) 398-2626"},company:"Madison 51, Llc",name:"THORNWOOD FURNITURE MFG INC",address:"5125 E MADISON ST, PHOENIX, AZ 85034",pollutants:[{pollutant:"VOLATILE ORGANIC COMPOUNDS",since:"2012-10-08T07:00:00.000Z"},{pollutant:"PARTICULATE MATTER < 10 UM",since:"2012-10-08T07:00:00.000Z"}]}},{type:"Feature",geometry:{type:"Point",coordinates:[-112.156060969,33.445971403]},properties:{contact:{name:"Martin Boyle",phone:"(602) 447-2233"},company:"Penn Racquet Sports Inc",name:"PENN ATHLETIC PRODUCTS DIVISION",address:"306 S 45TH AVE, PHOENIX, AZ 85043",pollutants:[{pollutant:"VOLATILE ORGANIC COMPOUNDS",since:"2009-03-06T07:00:00.000Z"},{pollutant:"NITROGEN OXIDES",since:"2009-03-06T07:00:00.000Z"},{pollutant:"PARTICULATE MATTER < 10 UM",since:"2009-03-06T07:00:00.000Z"},{pollutant:"SULFUR DIOXIDE",since:"2009-03-06T07:00:00.000Z"},{pollutant:"CARBON MONOXIDE",since:"2009-03-06T07:00:00.000Z"}]}}]}},{}],2:[function(e){function t(e,t){var n='<div class="map-item">';n+="<p><b>Company:</b>&nbsp;"+e.properties.company+"</p>",n+="<p><b>Address:</b>&nbsp;"+e.properties.address+"</p>",n+="<p><b>Polluting:</b></p>",e.properties.pollutants.forEach(function(e){var t=moment(e.since).fromNow();n+='<p>"'+e.pollutant+'" since '+t}),n+="</div>",t.bindPopup(n)}function n(e,t){return L.circleMarker(t,{radius:8,fillColor:"#ff7800",color:"#000",weight:1,opacity:1,fillOpacity:.8})}var o=e("../../data/businesses-geojson"),a=L.map("map").setView([33.45,-112.0667],10);L.tileLayer("http://{s}.tiles.mapbox.com/v3/contracontra.iog333n8/{z}/{x}/{y}.png",{maxZoom:18}).addTo(a),L.geoJson(o,{onEachFeature:t,pointToLayer:n}).addTo(a)},{"../../data/businesses-geojson":1}]},{},[2]);