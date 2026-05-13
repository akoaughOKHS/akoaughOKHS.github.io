function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  var buildingInstance;
  for (var i = 0; i < scenery.building.instances.length; i++) {
    buildingInstance = scenery.building.instances[i];
    buildingInstance.x += buildingInstance.speedX - currentLevel.speed;
    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }
    var lampInstance;
  for (var i = 0; i < scenery.lamp.instances.length; i++) {
    lampInstance = scenery.lamp.instances[i];
    lampInstance.x += lampInstance.speedX - currentLevel.speed;
    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }

  

}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (var i = 0; i < currentLevel.GameObjects.length; i++) {
    var currentObject = currentLevel.GameObjects[i];
    create(currentObject);
  }
  
} 

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
 if (obj.type === "obstacle") {
  makeObstacle();
 } else if (obj.type === "enemy") {
  makeEnemy();
 } else if (obj.type === "powerup") {
  makepowerUp();
 } else if (obj.type === "goal") {
  makeGoal();
 } else if (obj.type === "platform") {
  makePlatform();
 }

} 

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
var matches = [];
for (var i = 0; i < gameObjects.length; i++) {
  if (type === obj.type) {
    matches.push(i);
  }
}
return matches;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  for (var i = 0; i < objectList.length; i++) {
    
  }
  
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}

