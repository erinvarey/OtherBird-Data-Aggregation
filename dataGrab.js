'use strict';

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
const yelp = require('yelp-fusion');
const client = yelp.client('pKMXcbNJkZVaIcXByLxgpVSYBDCULOGGbY6NFsDqcSY2kndHrDm-WL59Re8XDhhuibgq8yGWm-pNJvfKbwYJ4Gtrderjtsp9VAPI5nDtCzxs_EgcIVc99LrL4yPqW3Yx');
var url = 'mongodb://localhost:27017/otherBird';

function createDb(){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("otherBird");
    dbo.createCollection("TestReviews", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
}
//createDb();
function testInsert(obj){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("otherBird");
    //var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("Reviews").insertOne(obj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}
//testInsert();
function grabAll(){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("otherBird");
    dbo.collection("Reviews").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}
grabAll();
// the muleId = h2mI1wBIK1PyaNupaL58gw
// the Rapscallion = iShdeC-lrtqi0VQhHs3Y4A
//apiId = 'ayupbX4GNeCZ1jCkemVgyg';

//Some test code for getting the Business ID for review searches
/*
client.search({
  term:'The Rapscallion',
  location: 'Hamilton, ON'
}).then(response => {
  console.log(response.jsonBody.businesses[0].id);
}).catch(e => {
  console.log(e);
});
*/
function getDataYelp(){
  //Review Data The Mule
client.reviews('h2mI1wBIK1PyaNupaL58gw').then(response => {
var myobj = { name: "The Mule", Data: response.jsonBody.reviews };
    testInsert(myobj);
    console.log("done");
  }).catch(e => {
    console.log(e);
  });
//Review Data the Rapscallion
client.reviews('iShdeC-lrtqi0VQhHs3Y4A').then(response => {
var myobj = { name: "The Rapscallion", Data: response.jsonBody.reviews };
    testInsert(myobj);
    console.log("done");
  }).catch(e => {
    console.log(e);
  });
}
