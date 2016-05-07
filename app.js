var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs');
var images = [];
request('http://megashare.sc/watch-the-social-network-online-TWpFNU9RPT0', function(err, res, html) {
  if(!err && res.statusCode === 200) {
    var $ = cheerio.load(html);
    $('body').each(function() {
      //console.log($(this)[0].);
      console.log($(this)[0].children[1].children[1].children[3].children[1].children[1].children[1].children[3].children[1].children[1].children[3].children);
});
//TODO:why does div holder not show up. after that find ifranme src and wget it.

  }

});
