var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs');
var images = [];
request('http://megashare.sc/watch-the-social-network-online-TWpFNU9RPT0', function(err, res, html) {
  if(!err && res.statusCode === 200) {
    var $ = cheerio.load(html);
    $('body').each(function() {
      console.log($(this)[0].children[1]);
});
//TODO:write path to megashare doc google file

  }

});
