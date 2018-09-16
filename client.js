var request = require('request');

// Make a HTTP request to fetch a resouce
function doGET () {
    request.get({
        uri: 'http://localhost:3500/api/v1/storage?sendCompressed=true&email=user@client.com&resource=hello.txt',
        headers: {
            'client_id': 'id_x',
            'password': 'bigWombat'
        }
    }, function (err, res) {
        if (err) console.log(res.body);
        else console.log(res.body);
    });
}

// Test a GET Request
doGET();
