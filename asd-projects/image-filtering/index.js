// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(invertColor);
  applyFilter(makePurple);
  applyFilterNoBackground(makePurple);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
/* Applies the desired filters to the image*/
function applyFilter(filterFunction) {
  for (let r = 0; r < image.length; r++) {
    var row = image[r];
    for (let c = 0; c < row.length; c++) {
      var pixel = row[c];
      var pixelArray = rgbStringToArray(pixel);
      //This is where I'll modify the color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      row[c] = updatedPixel;
    }
  }
}
// TODO 9 Create the applyFilterNoBackground function
/* Applies the filters without affecting the background*/
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    var value = image[i];
    for (let j = 0; j < value.length; j++) {
      if (value[j] !== backgroundColor) {
        var pixel = value[j];
        var pixelArray = rgbStringToArray(pixel);
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        value[j] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
/* keeps the rgb value within the limits of 0 too 225*/
function keepInBounds(num) {
  return num < 0 ? 0 : num > 225 ? 225 : num;
}
// TODO 4: Create reddify filter function
/*This function sets every affected pixel to 200*/
function reddify(pixelArray) {
  pixelArray[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
/* decreases the amount of blue in the image */
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] -= 50;
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE]);
}
/* increases the amount of green in the 
image by adding the current amount of blue to it*/
function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] += pixelArray[BLUE];
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN]);
}
// CHALLENGE code goes below here
/* inverts the color of the image*/
function invertColor(pixelArray) {
  pixelArray[RED] = 255 - pixelArray[RED];
  pixelArray[GREEN] = 255 - pixelArray[GREEN];
  pixelArray[BLUE] = 255 - pixelArray[BLUE];
  keepInBounds(pixelArray[RED]);
  keepInBounds(pixelArray[GREEN]);
  keepInBounds(pixelArray[BLUE]);
}

/* creates the purple filter by increasing the red and blue rgb values 
while decreasing the green*/
function makePurple(pixelArray) {
  pixelArray[BLUE] += pixelArray[RED];
  pixelArray[GREEN] = 225 - pixelArray[GREEN];
  keepInBounds(pixelArray[BLUE]);
  keepInBounds(pixelArray[RED]);
  keepInBounds(pixelArray[GREEN]);
}
