import path from 'path';
import fs   from 'fs';

var tags = {};

fs.readdirSync(__dirname).forEach(function(filename) {
  var file      = filename.split('.');
  var name      = file[0];
  var extension = file[1];

  if (extension == 'tag') {
    tags[name] = require('./' + filename);
  }
});

export default tags;
