# exist-paths
[![Build Status](https://travis-ci.org/hoto17296/node-exist-paths.svg)](https://travis-ci.org/hoto17296/node-exist-paths)

Filters not exist file or directory paths.

## Usage
Invoke with array or arguments.

``` js
var existPaths = require('exist-paths');

// array
existPaths(['/not/exist/file', '/exist/file']); //=> ['/exist/file']

// arguments
existPaths('/not/exist/file', '/exist/file'); //=> ['/exist/file']
```
