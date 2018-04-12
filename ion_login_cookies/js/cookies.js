#!/usr/bin/nodejs

var cookieSession = require('cookie-session');
var express = require('express');
var simpleoauth2 = require("simple-oauth2");
var app = express();
var request = require('request');


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

app.set('trust proxy', 1); // trust first proxy 


app.use(cookieSession({
  name: 'session',
  keys: ['Asdf1', 'Asdf2']
}));


// -------------- variable initialization -------------- //

var ion_client_id = 'H06D3hE9nqDqGyo2gLdG8RHO7HPJYogJtZ5NbOeo';
var ion_client_secret = 'm7oSr7AmX0Ee4dEL8swbex2TB1CcYKkHHeFjdngQVu7CeZ7nKaEkuBpfvIYxGtl7wsx0Nttbjh2IrhId0GDN5sFEO77OEWnEZaKYBpAZQQ2eEMGdfA4ZsKPFwbLAsDwf';
var ion_redirect_uri = 'https://user.tjhsst.edu/2019etian/login';

var oauth2 = simpleoauth2.create({
  client: {
    id: ion_client_id,
    secret: ion_client_secret,
  },
  auth: {
    tokenHost: 'https://ion.tjhsst.edu/oauth/',
    authorizePath: 'https://ion.tjhsst.edu/oauth/authorize',
    tokenPath: 'https://ion.tjhsst.edu/oauth/token/'
  }
});

var authorizationUri = oauth2.authorizationCode.authorizeURL({
    scope: "read",
    redirect_uri: ion_redirect_uri
});

// -------------- express listener -------------- //

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});

// -------------- express 'get' handlers -------------- //

app.get('/', function (req, res, next) {

    if (typeof req.session.token != 'undefined') {
        var access_token = req.session.token.token.access_token;
        
        var my_ion_request = 'https://ion.tjhsst.edu/api/profile?format=json&access_token='+access_token;

        request.get( {url:my_ion_request}, function (e, r, body) {
            var res_object = JSON.parse(body);
        
            user_name = res_object['short_name'];

            var output_string = "";
            output_string += "<!doctype html>\n";
            output_string += "<html><head></head><body>\n";
            output_string += "<p>Hello "+user_name+"!</p>\n";
            output_string += "</body></html>";

            res.send(output_string);
        });
        
    } else {
        var output_string = "";
        output_string += "<!doctype html>\n";
        output_string += "<html><head></head><body>\n";
        output_string += "<a href=";
        output_string += authorizationUri;
        output_string += ">Log in with ION!</a>";
        output_string += "</body></html>";

        res.send(output_string);
    }

});


// -------------- intermediary login helper -------------- //


app.get('/login', function (req, res, next) {
    
    if (typeof req.query.code != 'undefined') {
        var theCode = req.query.code;

        var options = {
            code: theCode,
            redirect_uri: ion_redirect_uri
         };

        oauth2.authorizationCode.getToken(options, function (error, result) {
            if (error) {
                console.log(error);
                return res.send('Authentication failed');
            }

            var token = oauth2.accessToken.create(result);
        
            req.session.token = token;

            res.redirect('https://user.tjhsst.edu/2019etian');
        });
    } else {
        res.redirect('https://user.tjhsst.edu/2019etian');
    }
         
});

