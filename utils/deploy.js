'use strict';

var ghPages = require('gh-pages');
var path = require('path');
var colors = require('colors');

var config = {
  message: 'Publish App'
};

ghPages.publish(path.join(__dirname, '../', 'public'), config, function(err) {
  if (err) { console.log(err); }
  console.log('Successfully Deployed to Github Pages'.green.bold);
});
