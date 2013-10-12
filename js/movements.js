var countryCoordinates = {
    "GB" : {latitude: 53.5500, longitude: 2.4333},
    "CN" : {latitude: 35.0000, longitude: 103.0000},
    "JP" : {latitude: 35.0000, longitude: 136.0000},
    "US" : {latitude: 40.0000, longitude: -100.0000},
};

var stockMovements = [
        {
            origin: 'GB',
            destination : 'CN'
        },
        {
            origin: 'CN',
            destination : 'US'
        }
    ];

function getMovements(){
    return _.map(stockMovements, function(m){
            return {
                    origin : toCoordinates(m.origin),
                    destination:  toCoordinates(m.destination)
                };
    });   
}

function toCoordinates(country){
    return countryCoordinates[country];
}