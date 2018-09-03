var sceneLevels = function(p) {
  var grid = [];
  p.mousePressed = function() {
    return false
  }
  p.level = 0;
  var backButton;
  var tutorialButton;
  var numberOfLevels = 15;

  p.preload = function() {
    myFont = p.loadFont("assets/GlacialIndifference-Regular.otf");
  }

  p.setup = function() {
    p.createCanvas(p.displayWidth, p.displayHeight*2.7);
    p.background('#ccffff');
    createButtons();
    createLevels();


    //menu bar
    p.noStroke()
    p.fill('lightgrey');
    p.rect(0, 0, p.displayWidth, 50);

    p.fill('black')
    p.textSize(20);
    p.textFont(myFont);
    p.text('Levels', (p.displayWidth / 2) - 22, 35);
  }

  p.draw = function() {
    if (localStorage.level1 === 'true'){
      grid[0].style('background-color', '#ff6666')
    }
    if (localStorage.level2 === 'true'){
      grid[1].style('background-color', '#ff6666')
    }
    if (localStorage.level3 === 'true'){
      grid[2].style('background-color', '#3366ff')
    }
    if (localStorage.level4 === 'true'){
      grid[3].style('background-color', '#3366ff')
    }
    if (localStorage.level5 === 'true'){
      grid[4].style('background-color', '#3366ff')
    }
    if (localStorage.level6 === 'true'){
      grid[5].style('background-color', '#3366ff')
    }
    if (localStorage.level7 === 'true'){
      grid[6].style('background-color', '#3366ff')
    }
    if (localStorage.level8 === 'true'){
      grid[7].style('background-color', '#3366ff')
    }
    if (localStorage.level9 === 'true'){
      grid[8].style('background-color', '#3366ff')
    }
    if (localStorage.level10 === 'true'){
      grid[9].style('background-color', '#3366ff')
    }
    if (localStorage.level11 === 'true'){
      grid[10].style('background-color', '#3366ff')
    }
    if (localStorage.level12 === 'true'){
      grid[11].style('background-color', '#3366ff')
    }
  }




  function createButtons() {

    backButton = p.createButton('Back').position((p.displayWidth / 2) - 140, 13)
    tutorialButton = p.createButton('Tutorial').position((p.displayWidth / 2) + 60, 13)

    backButton.style('height', '30px')
      .style('width', '90px')
      .style('background-color', "#3399ff")
      .style("font-size", "1.2em")
      .style('font', myFont)
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border', 'none')
      .style('border-radius', '4px')
      .touchStarted(back);

    tutorialButton.style('height', '30px')
      .style('width', '90px')
      .style('background-color', "#3399ff")
      .style("font-size", "1em")
      .style('font', myFont)
      .style('text-align', 'center')
      .style("align-content", "right")
      .style('border-radius', '4px')
      .style('border', 'none')
      .touchStarted(tutorial);
    // add a touchStarted

  }

  function createLevels() {
    grid.push(p.createButton(1).position(0 * 110 + 30, Math.floor(0 / 3) * 110 + 70).touchStarted(switchScreen1));
    grid.push(p.createButton(2).position(1 * 110 + 30, Math.floor(1 / 3) * 110 + 70).touchStarted(switchScreen2));
    grid.push(p.createButton(3).position(2 * 110 + 30, Math.floor(2 / 3) * 110 + 70).touchStarted(switchScreen3));
    grid.push(p.createButton(4).position(0 * 110 + 30, Math.floor(3 / 3) * 110 + 70).touchStarted(switchScreen4));
    grid.push(p.createButton(5).position(1 * 110 + 30, Math.floor(4 / 3) * 110 + 70).touchStarted(switchScreen5));
    grid.push(p.createButton(6).position(2 * 110 + 30, Math.floor(5 / 3) * 110 + 70).touchStarted(switchScreen6));
    grid.push(p.createButton(7).position(0 * 110 + 30, Math.floor(6 / 3) * 110 + 70).touchStarted(switchScreen7));
    grid.push(p.createButton(8).position(1 * 110 + 30, Math.floor(7 / 3) * 110 + 70).touchStarted(switchScreen8));
    grid.push(p.createButton(9).position(2 * 110 + 30, Math.floor(8 / 3) * 110 + 70).touchStarted(switchScreen9));
    grid.push(p.createButton(10).position(0 * 110 + 30, Math.floor(9 / 3) * 110 + 70).touchStarted(switchScreen10));
    grid.push(p.createButton(11).position(1 * 110 + 30, Math.floor(10 / 3) * 110 + 70).touchStarted(switchScreen11));
    grid.push(p.createButton(12).position(2 * 110 + 30, Math.floor(11 / 3) * 110 + 70).touchStarted(switchScreen12));
    grid.push(p.createButton(13).position(0 * 110 + 30, Math.floor(12 / 3) * 110 + 70).touchStarted(switchScreen13));
    grid.push(p.createButton(14).position(1 * 110 + 30, Math.floor(13 / 3) * 110 + 70).touchStarted(switchScreen14));
    grid.push(p.createButton(15).position(2 * 110 + 30, Math.floor(14 / 3) * 110 + 70).touchStarted(switchScreen15));
    grid.push(p.createButton(16).position(0 * 110 + 30, Math.floor(15 / 3) * 110 + 70).touchStarted(switchScreen16));
    grid.push(p.createButton(17).position(1 * 110 + 30, Math.floor(16 / 3) * 110 + 70).touchStarted(switchScreen17));
    grid.push(p.createButton(18).position(2 * 110 + 30, Math.floor(17 / 3) * 110 + 70).touchStarted(switchScreen18));
    grid.push(p.createButton(19).position(0 * 110 + 30, Math.floor(18 / 3) * 110 + 70).touchStarted(switchScreen19));
    grid.push(p.createButton(20).position(1 * 110 + 30, Math.floor(19 / 3) * 110 + 70).touchStarted(switchScreen20));
    grid.push(p.createButton(21).position(2 * 110 + 30, Math.floor(20 / 3) * 110 + 70).touchStarted(switchScreen21));
    grid.push(p.createButton(22).position(0 * 110 + 30, Math.floor(21 / 3) * 110 + 70).touchStarted(switchScreen22));
    grid.push(p.createButton(23).position(1 * 110 + 30, Math.floor(22 / 3) * 110 + 70).touchStarted(switchScreen23));
    grid.push(p.createButton(24).position(2 * 110 + 30, Math.floor(23 / 3) * 110 + 70).touchStarted(switchScreen24));
    grid.push(p.createButton(25).position(0 * 110 + 30, Math.floor(24 / 3) * 110 + 70).touchStarted(switchScreen25));
    grid.push(p.createButton(26).position(1 * 110 + 30, Math.floor(25 / 3) * 110 + 70).touchStarted(switchScreen26));
    grid.push(p.createButton(27).position(2 * 110 + 30, Math.floor(26 / 3) * 110 + 70).touchStarted(switchScreen27));
    grid.push(p.createButton(28).position(0 * 110 + 30, Math.floor(27 / 3) * 110 + 70).touchStarted(switchScreen28));
    grid.push(p.createButton(29).position(1 * 110 + 30, Math.floor(28 / 3) * 110 + 70).touchStarted(switchScreen29));
    grid.push(p.createButton(30).position(2 * 110 + 30, Math.floor(29 / 3) * 110 + 70).touchStarted(switchScreen30));
    grid.push(p.createButton(31).position(0 * 110 + 30, Math.floor(30 / 3) * 110 + 70).touchStarted(switchScreen31));
    grid.push(p.createButton(32).position(1 * 110 + 30, Math.floor(31 / 3) * 110 + 70).touchStarted(switchScreen32));
    grid.push(p.createButton(33).position(2 * 110 + 30, Math.floor(32 / 3) * 110 + 70).touchStarted(switchScreen33));
    grid.push(p.createButton(34).position(0 * 110 + 30, Math.floor(33 / 3) * 110 + 70).touchStarted(switchScreen34));
    grid.push(p.createButton(35).position(1 * 110 + 30, Math.floor(34 / 3) * 110 + 70).touchStarted(switchScreen35));
    grid.push(p.createButton(36).position(2 * 110 + 30, Math.floor(35 / 3) * 110 + 70).touchStarted(switchScreen36));
    grid.push(p.createButton(37).position(0 * 110 + 30, Math.floor(36 / 3) * 110 + 70).touchStarted(switchScreen37));
    grid.push(p.createButton(38).position(1 * 110 + 30, Math.floor(37 / 3) * 110 + 70).touchStarted(switchScreen38));
    grid.push(p.createButton(39).position(2 * 110 + 30, Math.floor(38 / 3) * 110 + 70).touchStarted(switchScreen39));
    grid.push(p.createButton(40).position(0 * 110 + 30, Math.floor(39 / 3) * 110 + 70).touchStarted(switchScreen40));
    grid.push(p.createButton(41).position(1 * 110 + 30, Math.floor(40 / 3) * 110 + 70).touchStarted(switchScreen41));
    grid.push(p.createButton(42).position(2 * 110 + 30, Math.floor(41 / 3) * 110 + 70).touchStarted(switchScreen42));
    grid.push(p.createButton(43).position(0 * 110 + 30, Math.floor(42 / 3) * 110 + 70).touchStarted(switchScreen43));
    grid.push(p.createButton(44).position(1 * 110 + 30, Math.floor(43 / 3) * 110 + 70).touchStarted(switchScreen44));
    grid.push(p.createButton(45).position(2 * 110 + 30, Math.floor(44 / 3) * 110 + 70).touchStarted(switchScreen45));

    for (i = 0; i < grid.length; i++) {
      string = "switchScreen" + i
      grid[i]
        .style('height', '100px')
        .style('width', '100px')
        .style('font', myFont)
        .style('font-size', '2em')
        .style('background-color', "lightgrey")
        .style('text-align', 'center')
        .style("align-content", "right")
        .style('border', 'none')
        .style('border-radius', '4px')

    }
  }

  function switchScreen1() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level1();

  }
  function switchScreen2() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level2();
  }
  function switchScreen3() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level3();
  }
  function switchScreen4() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level4();
  }
  function switchScreen5() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level5();
  }
  function switchScreen6() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level6();
  }
  function switchScreen7() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level7();
  }
  function switchScreen8() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level8();
  }
  function switchScreen9() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level9();
  }
  function switchScreen10() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level10();
  }
  function switchScreen11() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level11();
  }
  function switchScreen12() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level12();
  }
  function switchScreen13() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level13();
  }
  function switchScreen14() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level14();
  }
  function switchScreen15() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level15();
  }
  function switchScreen16() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level16();
  }
  function switchScreen17() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level17();
  }
  function switchScreen18() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level18();
  }
  function switchScreen19() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level19();
  }
  function switchScreen20() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level20();
  }
  function switchScreen21() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level21();
  }
  function switchScreen22() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level22();
  }
  function switchScreen23() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level23();
  }
  function switchScreen24() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level24();
  }
  function switchScreen25() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level25();
  }
  function switchScreen26() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level20();
  }
  function switchScreen26() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level21();
  }
  function switchScreen27() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level27();
  }
  function switchScreen28() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level28();
  }
  function switchScreen29() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level29();
  }
  function switchScreen30() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level30();
  }
  function switchScreen31() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level20();
  }
  function switchScreen31() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level31();
  }
  function switchScreen32() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level32();
  }
  function switchScreen33() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level33();
  }
  function switchScreen34() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level34();
  }
  function switchScreen35() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level35();
  }
  function switchScreen36() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level36();
  }
  function switchScreen37() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level37();
  }
  function switchScreen38() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level38();
  }
  function switchScreen39() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level39();
  }
  function switchScreen40() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level40();
  }
  function switchScreen41() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level41();
  }
  function switchScreen42() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level42();
  }
  function switchScreen43() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level43();
  }
  function switchScreen44() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level44();
  }
  function switchScreen45() {
    document.getElementById("levelsScreen").style.display = "none";
    document.getElementById("calculatorScreen").style.display = "block";
    level45();
  }



  function back() {
    document.getElementById('homeScreen').style.display = 'block'
    document.getElementById('levelsScreen').style.display = 'none'
  }

  function tutorial() {
    document.getElementById('tutorialScreen').style.display = 'block'
    document.getElementById('levelsScreen').style.display = 'none'
  }
}
