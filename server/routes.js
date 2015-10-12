// Load modules

var Query   = require('./controller/query');


// API Server Endpoints
module.exports = function(app){

  app.get('/', function(req, res) {
        res.render('index');
    });

  app.route('/test')
     .get(Query.test)
     .post(Query.testPost);
 
}
