var homeScreen = new p5(sceneHome,"homeScreen")
var levelsScreen1 = new p5(sceneLevels,"levelsScreen")
var calcScreen = new p5(sceneCalculator, "calculatorScreen")

function level1(){
  calcScreen.calcButtons = [];
  calcScreen.level = 1;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["8"];
  calcScreen.target = 8;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}

var level2 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 2;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 1;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level3 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 3;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 15;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level4 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 4;
  calcScreen.clearMoveHistory();
  calcScreen.displayEndMessage = false;
  calcScreen.brokenKeys = ["2"];
  calcScreen.target = 24;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level5 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 5;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1"];
  calcScreen.target = 11;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level6 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 6;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["3"];
  calcScreen.target = 30;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level7 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 7;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["4", "0"];
  calcScreen.target = 40;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level8 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 8;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1","2", "0"];
  calcScreen.target = 21;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level9 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 9;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1","3","0"];
  calcScreen.target = 33;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level10 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 10;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1","2","5"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}

var level11 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 11;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1","3","4", "6"];
  calcScreen.target = 36;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level12 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 12;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1","3","4", "7"];
  calcScreen.target = 37;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level13 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 13;
  calcScreen.brokenKeys = ["1","2","5","+"];
  calcScreen.target = 10;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level14 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 14;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["7","5", "*"];
  calcScreen.target = 25;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
var level15 = function(){
  calcScreen.calcButtons = [];
  calcScreen.level = 15;
  calcScreen.clearMoveHistory();
  calcScreen.brokenKeys = ["1","2","5", "-"];
  calcScreen.target = 20;
  calcScreen.score = 0;
  calcScreen.makeCalcButtons();
  calcScreen.makeBrokenKeys();
}
