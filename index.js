var fs = require('fs');

function existPaths(paths) {
  if ( ! Array.isArray(paths) ) {
    paths = Array.prototype.slice.call(arguments);
  }
  return paths.filter(function(path) {
    try { fs.statSync(path); }
    catch(e) { return false; }
    return true;
  });
}

module.exports = exports.default = existPaths;
