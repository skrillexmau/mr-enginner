tomtom.setProductInfo('MrEnginner', '4.40.10');

var map, marker;

var coord = [19.343857, -99.169703];

tomtom.key('EbtLcetbGjGDxlb738Tr3wZbpmaQH8Kh');

tomtom.searchKey('Mr.Enginner');

map = tomtom.map('map', {
    source: 'vector',
    basePath: 'https://api.tomtom.com/maps-sdk-js/4.40.10/examples/sdk'
}).setView(coord, 18);

marker = tomtom.L.marker(coord, {
    title: 'Mr. Enginner',
    riseOnHover: true,
}).bindPopup('Ayuntamiento 157, Del. Coyoacan, Col. Santa Catarina C.P. 04310 Ciudad de México, CDMX', {
    keepInView: true,
    closeButton: false
}).addTo(map);