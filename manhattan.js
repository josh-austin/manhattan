var fs = require('fs');

function zero_pad(s) {
  // credit:
  // http://stackoverflow.com/questions/1267283/how-can-i-create-a-zerofilled-value-using-javascript
  const pad = '00';
  return (pad+s).slice(-pad.length);
}

function three_to_six(s) {
  if (s.length != 3) {
    throw Error("Expected a hex string of length 3.  Actual length: " + s.length);
  }
  return s.charAt(0) + s.charAt(0) +
    s.charAt(1) + s.charAt(1) +
    s.charAt(2) + s.charAt(2);
}

function rgb_to_hex(red, green, blue) {
  return '#' +
    zero_pad(red.toString(16)) +
    zero_pad(green.toString(16)) +
    zero_pad(blue.toString(16));
}

function parseFiles(paths) {
  var colors = [];
  var outputLines = [];
  var newPath = '';
  var hex_color = /#[0-9a-fA-F]{6}/;
  var found_color = '';
  var variableName = '';
  var colorIndex = -1;

  paths.forEach(function(path, index, array) {
    outputLines = [];

    // read lines to render output
    fs.createReadStream()
      .on('error', function(err){
        throw err;
      })
      .lines
      .forEach(function(line){
        // TODO: look for a 3-digit hex color, convert to 6-digit

        // look for a 6-digit hex color
        if (hex_color.test(line)) {
          foundColor = hex_color.exec(line).toLowerCase();
          colorIndex = colors.indexOf(foundColor);
          if (colorIndex > -1) {
            variableName = '$variable' + colorIndex.toString();
          } else {
            colors.push('#' + foundColor);
            variableName = '$variable' + colors.length.toString();
          }
          outputLines.push(line.replace(hex_color, variableName));
        }

        // TODO: look for an RGB color, convert to a 6-digit hex color

      });

      // TODO: save rendered SCSS output file
      newPath = path.replace('.css', '.scss');
      outputLines.forEach(function(line, index, array) {
        fs.appendFileSync(newPath, line);
      });
  });
  // TODO: finally, render the variables file
  colors.forEach(function(line, index, array) {
    line = '$variable' + index + ': #' + line + ';';
    fs.appendFileSync('variables.scss', line);
  });
}

module.exports = {
  zero_pad: zero_pad,
  three_to_six: three_to_six,
  rgb_to_hex: rgb_to_hex
};
