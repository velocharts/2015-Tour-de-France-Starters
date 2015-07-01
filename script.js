$(function () {

    var data =[{"name":"France","code":"FR","z":41},
{"name":"Netherlands","code":"NL","z":20},
{"name":"Italy","code":"IT","z":16},
{"name":"Spain","code":"ES","z":15},
{"name":"Belgium","code":"BE","z":11},
{"name":"Germany","code":"DE","z":10},
{"name":"Australia","code":"AU","z":10},
{"name":"United Kingdom","code":"GB","z":10},
{"name":"Switzerland","code":"CH","z":10},
{"name":"Colombia","code":"CO","z":6},
{"name":"Portugal","code":"PT","z":4},
{"name":"Czech Republic","code":"CZ","z":4},
{"name":"South Africa","code":"ZA","z":4},
{"name":"Poland","code":"PL","z":4},
{"name":"United States","code":"US","z":3},
{"name":"Austria","code":"AT","z":3},
{"name":"Denmark","code":"DK","z":3},
{"name":"Luxembourg","code":"LU","z":3},
{"name":"Ireland","code":"IE","z":3},
{"name":"Canada","code":"CA","z":2},
{"name":"New Zealand","code":"NZ","z":2},
{"name":"Estonia","code":"EE","z":2},
{"name":"Eritrea","code":"ER","z":2},
{"name":"Norway","code":"NO","z":2},
{"name":"Kazakhstan","code":"KZ","z":1},
{"name":"Slovenia","code":"SI","z":1},
{"name":"Ukraine","code":"UA","z":1},
{"name":"Argentina","code":"AR","z":1},
{"name":"Lithuania","code":"LT","z":1},
{"name":"Croatia","code":"HR","z":1},
{"name":"Slovakia","code":"SK","z":1},
{"name":"Russia","code":"RU","z":1}];
    
  
        
        // Initiate the chart
        $('#container').highcharts('Map', {
            
            title : {
                text : 'BlackRock Sovereign Risk Index',
                style: {fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif', color: '#4B4B4B'}
            },
  legend: {
                enabled: false
            },
            
            credits: {
                text: 'velocharts',
                href: 'http://www.velocharts.com',
             
            },
            mapNavigation: {
                enabled: true,
               
            },

            colorAxis: {
          //      min: 1,
           //     max: 3,
          //      type: 'logarithmic'
           },

            series : [{
                name: 'Countries',
                mapData: Highcharts.maps.world,
                nullColor: '#eaeaea',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                 color: 'orange',
                 marker: {
            //  fillOpacity:0.3
               fillColor: 'rgb(255,255,0)'
              
            },
                mapData: Highcharts.maps.world,
                name: 'Number of Riders 2015',
                joinBy: [ 'code'],
                data: data,
                minSize: 4,
                maxSize: '10%',
                tooltip: {
                    pointFormat: '{point.name}: {point.z}'
                   
                }
            }]
        });
 
});
