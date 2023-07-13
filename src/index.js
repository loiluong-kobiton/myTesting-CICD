/*
 * Math functions on shapes
 */

'use strict';

// For package depenency demonstration purposes only
var multiply = require('lodash/multiply');

module.exports = {
  area_rectangle: function(width, height) {
    if (width === 0 || height === 0) {
      return 0;
    }
    return multiply(height, width);
  }
}