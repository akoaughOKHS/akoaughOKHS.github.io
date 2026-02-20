$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(0, 250, 275, 20, "darkblue");
    createPlatform(410, 0, 20, 600, "darkblue");
    createPlatform(0, 650, 10, 15, "darkblue");
    createPlatform(410, 100, 245, 20, "darkblue");
    createPlatform(750, 530, 25, 15, "darkblue");
    createPlatform(900, 586,275, 20, "darkblue");
    createPlatform(665, 405, 100, 20, "darkblue");
    createPlatform(870, 300, 275, 20, "darkblue");
    createPlatform(1250, 250, 5, 5, "lightblue");
    createPlatform(750, 100, 5, 5, "lightblue");
    createPlatform(1500, 105, 270, 5, "lightblue");
    createPlatform(1340, 205, 100, 5, "darkblue");
    createPlatform(450, 300, 100, 3, "darkblue");
    createPlatform(1180, 600, 20,100, "darkblue");
    createPlatform(650, 637, 234, 20,"darkblue") ;
    createPlatform(0, 520, 10, 10, "darkblue");
    

    // TODO 3 - Create Collectables
    createCollectable("cortez", 100, 300);
    createCollectable("cortez", 500, 260);
    createCollectable("cortez", 1100, 648);
    createCollectable("cortez", 1350, 160);
    
    // TODO 4 - Create Cannons
    createCannon("right", 430, 2000);
    createCannon("top", 650, 1875);
    createCannon("top", 1050, 1500);
    createCannon("bottom", 250, 2300);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
