var countryCoordinates = {
    "GB" : {latitude: 52.2050, longitude: 0.1190},
    "UK" : {latitude: 52.2050, longitude: 0.1190},
    "CN" : {latitude: 35.0000, longitude: 103.0000},
    "JP" : {latitude: 35.0000, longitude: 136.0000},
    "US" : {latitude: 40.0000, longitude: -100.0000},
};

function getMovements(){
    return $.getJSON('http://localhost:3211/StockMovement')
            .then(function(data){
                return _.map(data, function(m){
                                return $.extend({},m,toCoordinates(m.origin), {radius: m.count, originCode: m.origin});
                            });
    });   
}

function toCoordinates(country){
    return countryCoordinates[country];
}

function getMovementPerCountry(){
    return getMovements()
            .then(function(data){
                return data;
            });
}