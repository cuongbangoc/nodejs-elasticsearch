var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client(
        {
            hosts: ['localhost:9200'],
            log: 'trace'
        }
    );


// Index data to demo index and users doc_type
function index_data(){
    client.index({
      index: 'demo',
      type: 'users',
      id: '4',
      body: {
        id: '4',
        name: 'Son Nguyen',
        gender: 'male',
      }
    }, function (error, response) {
        if (error) {
            console.error(error);
        }else{
            console.log(response);
        }
    });
}

function search_data(field, query){
   client.search({
        index: 'demo',
        type: 'users',
        body: {
            query: {
                match: {
                    name: query
                }
            }
        }
    }).then(function (resp) {
        var hits = resp.hits.hits;
    }, function (err) {
        console.trace(err.message);
    }); 
}

search_data('name', 'cuong');


