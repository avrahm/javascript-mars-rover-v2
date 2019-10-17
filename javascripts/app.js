// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
    }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
  case "N":
    rover.direction = "E";
    break;
  case "S":
    rover.direction = "W";
    break;
  case "E":
    rover.direction = "S";
    break;
  case "W":
    rover.direction = "N";
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction=="W"){
    rover.x -= 1;
  }
  if(rover.direction=="E"){
    rover.x += 1;
  }
  if(rover.direction=="N"){
    rover.y -= 1;
  }
  if(rover.direction=="S"){
    rover.y += 1;
  }
}

function moveBackward(rover){
  console.log("moveBackward was called")
  if(rover.direction=="W"){
    rover.x += 1;
  }
  if(rover.direction=="E"){
    rover.x -= 1;
  }
  if(rover.direction=="N"){
    rover.y += 1;
  }
  if(rover.direction=="S"){
    rover.y -= 1;
  }
}

var list = ""

var travelLogData = rover.travelLog;

function roverCommands(list){
  for (i=0; i < list.length; i++){
    if(list[i]=='r'){
      turnRight(rover);
      
      var logData = rover.x + ',' + rover.y;
      travelLogData.push(logData);
      rover.travelLog = travelLogData;

    } else if(list[i]=='l'){
      turnLeft(rover);
      var logData = rover.x + ',' + rover.y;
      travelLogData.push(logData);
      rover.travelLog = travelLogData;

    } else if(list[i]=='f'){
      moveForward(rover);
      var logData = rover.x + ',' + rover.y;
      travelLogData.push(logData);
      rover.travelLog = travelLogData;

    } else if(list[i]=='b'){
      moveBackward(rover);
      var logData = rover.x + ',' + rover.y;
      travelLogData.push(logData);
      rover.travelLog = travelLogData;

    } 
  }
}

function getTravelLog(){
  console.log(rover.travelLog);
}