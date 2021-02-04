const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/subscribe', (req, res) => {
  console.log("yo!");
  const { email, js} = req.body;

  const mcData = {
    members: [
      {
        email_address: email,
        status: 'subscribed'
      }
    ]
  }

  const mcDataPost = JSON.stringify(mcData);

  const options = {
    url: 'https://us7.api.mailchimp.com/3.0/lists/dde4d2d85d',
    method: 'POST',
    headers: {
      Authorization: 'auth 9608dee63ad924359446c464b6f948ab-us7'
    },
    body: mcDataPost
  }

  if(email){
    request (options, (err, response, body) => {
      if(err) {
        res.json({error: err})
      }else {
        if(js) {
          res.sendStatus(200);
      } else {
        res.redirect('/index.html');
      }
    }
    })
  }else{
    res.status(404).send({message: 'Failed to subscribe'});
  }
});

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});