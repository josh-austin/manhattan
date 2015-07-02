# manhattan
[![Build Status](https://travis-ci.org/josh-austin/manhattan.svg)](https://travis-ci.org/josh-austin/manhattan)
[![Coverage Status](https://coveralls.io/repos/josh-austin/manhattan/badge.svg)](https://coveralls.io/r/josh-austin/manhattan)
[![npm](https://img.shields.io/badge/npm-0.1.2-green.svg)](https://www.npmjs.com/package/manhattan)
![Stability](https://img.shields.io/badge/stability-experimental-red.svg)

Command line tool that extracts CSS colors as SCSS variables.  
Also a node.js/io.js library with a few handy functions.

## Installation
```
$npm install manhattan
```

## CLI Usage
Using this command:
```
$ manhattan input.css
```
An input.scss and variables.scss file will be created.

## Reference
```javascript
var manhattan = require('manhattan');

var faa = 'faa';
faa = manhattan.three_to_six(faa); // var faa = 'ffaaaa';
```
