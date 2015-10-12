'use strict';


exports.test = function (req,res,next) {

    //Your logic comes here
	console.log(req.query); // will console parameters which you get from url 
    res.json(req.query);    // return result in response, i.e request params
};

exports.testPost = function (req,res,next) {

    //Your logic comes here
    console.log(req.query); // will console parameters which you get from url 
    console.log(req.body); // will console request body
    res.json(req.body); // return result in response, i.e request body
};