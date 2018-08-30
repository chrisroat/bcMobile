var sceneCalculator = function(p) {
  p.calcButtons = [];
  p.calcInput;
  p.brokenKeys = ['7', '8']
  p.level = 1;
  p.target = 2;
  var targElem;
  var backButton;
  var levelElem;
  p.score = 0;
  p.moveHistory = [];

  p.clearMoveHistory = function(){
    p.moveHistory = [];
  }


  p.setup = function() {
    p.createCanvas(p.displayWidth, p.displayHeight);
    p.background('#ccffff');
    p.calcButtons.push(p.calcInput = p.createInput('').position(60, 200))
    makeBackButton();
    p.makeCalcButtons();
    p.makeBrokenKeys();
    levelElem = p.createDiv("Level " + p.level).position(20, 20);
    targElem = p.createDiv("Target " + p.target).position(150, 60);
    makeScoreBar();
    p.fill('#0000cc')
    p.rect(50,190,280,350)
  }

  p.draw = function(){

    targElem.html('Target ' + p.target)
    levelElem.html('Level '+ p.level)
    makeScoreBar();
    if (p.score === 1){
      p.fill('pink');
      p.noStroke();
      p.ellipse(70,120,10,10)
    }
    if (p.score === 2){
      p.fill('pink');
      p.noStroke();
      p.ellipse(190,120,10,10)
    }
    if (p.score === 3){
      p.fill('pink');
      p.noStroke();
      p.ellipse(310,120,10,10)
    }
  }

  function makeScoreBar(){
    p.stroke(10);
    p.fill('black');
    p.line(70,120,310,120);
    p.ellipse(70,120,10,10);
    p.ellipse(190,120,10,10);
    p.ellipse(310,120,10,10);
  }

  function makeBackButton(){
    backButton = p.createButton('Back').position((p.displayWidth / 2) + 80, 13)
    backButton.style('height', '30px')
      .style('width', '90px')
      .style('background-color', "#3399ff")
      .style("font-size", "1em")
      .style('font', myFont)
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border', 'none')
      .style('border-radius', '4px')
      .touchStarted(back);
  }


  p.makeCalcButtons = function() {
    p.calcButtons.push(p.createButton('7').position(60, 270));
    p.calcButtons.push(p.createButton('8').position(130, 270));
    p.calcButtons.push(p.createButton('9').position(200, 270));
    p.calcButtons.push(p.createButton('/').position(270, 270));
    p.calcButtons.push(p.createButton('4').position(60, 340));
    p.calcButtons.push(p.createButton('5').position(130, 340));
    p.calcButtons.push(p.createButton('6').position(200, 340));
    p.calcButtons.push(p.createButton('*').position(270, 340));
    p.calcButtons.push(p.createButton('1').position(60, 410));
    p.calcButtons.push(p.createButton('2').position(130, 410));
    p.calcButtons.push(p.createButton('3').position(200, 410));
    p.calcButtons.push(p.createButton('-').position(270, 410));
    p.calcButtons.push(p.createButton('CE').position(60, 480));
    p.calcButtons.push(p.createButton('0').position(130, 480));
    p.calcButtons.push(p.createButton('=').position(200, 480));
    p.calcButtons.push(p.createButton('+').position(270, 480));

    p.calcInput.style('width', '225px')
      .style('height', '35px')
      .style('background-color', "white")
      .style("font-size", "2em")
      .style("align-content", "right");


    for (let i = 1; i < p.calcButtons.length; i++) {
      p.calcButtons[i].style('width', '50px')
        .style('height', '50px')
        .style('background-color', "white")
        .style('font-size', '1em')
        .style('border-radius', '4px')
        .mousePressed(add);
    }
    p.calcButtons[13].mousePressed(zeroed)
    p.calcButtons[15].mousePressed(equals)
  }

  function add() {
    p.calcInput.value(p.calcInput.value() + this.html());
  }
  function zeroed() {
    p.calcInput.value("");
  }
  function equals() {
    var value = eval(p.calcInput.value());
    if (value == p.target && p.moveHistory.indexOf(p.calcInput.value()) === -1) {
      p.score += 1;
      p.moveHistory.push(p.calcInput.value());
      zeroed();
    } else {
      p.calcInput.value(value);
    }
  }
  function donothing() {}


  p.makeBrokenKeys = function() {
    if (p.brokenKeys.indexOf('7') !== -1) {
      p.calcButtons[1].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('8') !== -1) {
      p.calcButtons[2].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('9') !== -1) {
      p.calcButtons[3].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('/') !== -1) {
      p.calcButtons[4].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('4') !== -1) {
      p.calcButtons[5].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('5') !== -1) {
      p.calcButtons[6].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('6') !== -1) {
      p.calcButtons[7].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('*') !== -1) {
      p.calcButtons[8].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('1') !== -1) {
      p.calcButtons[9].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('2') !== -1) {
      p.calcButtons[10].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('3') !== -1) {
      p.calcButtons[11].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('-') !== -1) {
      p.calcButtons[12].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('0') !== -1) {
      p.calcButtons[14].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
    if (p.brokenKeys.indexOf('+') !== -1) {
      p.calcButtons[16].style('background-color', "rgb(256,0,0)")
        .mousePressed(donothing);
    }
  }

  function back() {
    document.getElementById('levelsScreen').style.display = 'block'
    document.getElementById('calculatorScreen').style.display = 'none'
  }
}
