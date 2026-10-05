/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40

};

const walker = {
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0
};

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);                          
  $(document).on("keyup", handleKeyUp)
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollisions();
    redrawGameItem();
   
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
 
  /* This function determines which key has been 
 pressed down and assigns it a speed 
 based on that key.
 */

  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
       walker.speedX = -5;
    } else if (event.which === KEY.RIGHT) {
        walker.speedX = 5;
    } else if (event.which === KEY.UP) {
        walker.speedY = -5;
    } else if (event.which === KEY.DOWN) {
        walker.speedY = 5;
    }
  }
  /* This function determines which keys have
  been released from being pressed down and asigns the walkers
  speed based on the key.*/

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
    } else if (event.which === KEY.RIGHT) {
        walker.speedX = 0;
    } else if (event.which === KEY.DOWN) {
        walker.speedY = 0;
    } else if (event.which === KEY.UP) {
        walker.speedY = 0;
    }
    console.log(event.which);
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  /* changes the walkers position by taking the x or 
  y value and adding its x or y speed*/
  function repositionGameItem () {
    walker.x += walker.speedX;
    walker.y += walker.speedY;
    console.log(walker.x, walker.y);
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }
}

  function wallCollisions() {
    walker.right = walker.x + 50;
    walker.bottom = walker.y + 50;
    if (walker.x < 0) {
      walker.x -= walker.speedX;
    }

    if (walker.right > $("#board").width()) {
      walker.x -= walker.speedX;
    }

    if (walker.y < 0) {
     walker.y -= walker.speedY;
   }

    if (walker.bottom > $("#board").height()) {
      walker.y -= walker.speedY;
    }
  }