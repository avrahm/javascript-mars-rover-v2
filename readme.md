# Ironhack - Mars Rover Kata

We are sending a rover to Mars and we need to program its movements so that we can send it commands from Earth. 

It can turn right or left and  move forwards or backwards based on its current direction.
It receives a string of commands via the `roverCommands` function.

## How to use it

Open `index.html` in Google Chrome. Open the browser's console. With the HTML file open in Chrome, open your developer console. On Linux and Windows this is done with ctrl + shift + j. On Macs, this is done with cmd + opt + j.

In the console, call the `roverCommands` function passing a string of commands using the commands below. For example: `roverCommands('rfrf')`. 

The rover starts North at `[0, 0]`. Using the example above would  move the robot to position `[1, 1]`.

## Commands

Commands to move the rover are:
* `l` = turns the robot to the left.
* `r` = turns the robot to the right.
* `f` = moves the robot forward.
* `b` = moves the robot backward.

## How to view travel log

* `getTravelLog()` = print out an array log of the rover's steps.