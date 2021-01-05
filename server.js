const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { request } = require("https");
var http = require('https');

const app = express();
const PORT = process.env.PORT || 8000;

//Bodyparser Middleware
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//subscribe route
app.post('/subscribe', (req,res) => {
const {email} = req.body;

if(!email) {
  res.redirect("/index.html");
  return;
}

//Construct req data
const data = {
  members: [
    {
      email_address: email,
      status: 'subscribed'
    }
  ]
};
const postData = JSON.stringify(data);

const options = {
  url: 'https://us7.api.mailchimp.com/3.0/lists/dde4d2d85d',
  path: '/3.0/',
  method: 'POST',
  headers: {
    Authorization: 'auth 9608dee63ad924359446c464b6f948ab-us7',
    'content-type': 'application/json'
  },
  body: postData
};

http.get(options, (res) => {
  console.log(`Got response: ${res.statusCode}`);
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  // consume response body
  res.resume();
}).on('uncaughtException', function (err) { console.log(err); });



//is it not grabbing body?
console.log("This is the data grabbing: " + options.body);
request(options, (err, response, body) => {
  if(err) {
  res.redirect('/index.html');
  }else {
    if(response.statusCode === 200){
      res.redirect('/subscribe')
    } else {
      res.redirect('/index.html')
    }
  }

});
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });