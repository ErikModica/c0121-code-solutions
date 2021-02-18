var $image = document.querySelector('img');
var $leftBumper = document.querySelector('.fa-chevron-left');
var $rightBumper = document.querySelector('.fa-chevron-right');
var $ballColumn = document.querySelector('.cycle-column');
var $cycleCircleList = document.querySelectorAll('.ball');
var $pressedBall = null;
var i = 0;
var imageSrcArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var lastSrcListIndex = imageSrcArr.length - 1;

var intervalID = setInterval(cyclePokemon, 3000);

function cyclePokemon() {
  i++;
  if (i === 5) {
    i = 0;
  }
  $image.setAttribute('src', imageSrcArr[i]);
  $cycleCircleList[i].className = 'ball fas fa-circle';
  if (i === 0) {
    $cycleCircleList[lastSrcListIndex].className = 'ball far fa-circle';
  } else {
    $cycleCircleList[i - 1].className = 'ball far fa-circle';
  }
}

function switchLeft() {
  clearInterval(intervalID);
  if (i === 0) {
    $image.setAttribute('src', imageSrcArr[lastSrcListIndex]);
    $cycleCircleList[i].className = 'ball far fa-circle';
    i = lastSrcListIndex;
    $cycleCircleList[i].className = 'ball fas fa-circle';
  } else {
    $image.setAttribute('src', imageSrcArr[i - 1]);
    $cycleCircleList[i].className = 'ball far fa-circle';
    i = i - 1;
    $cycleCircleList[i].className = 'ball fas fa-circle';
  }
  intervalID = setInterval(cyclePokemon, 3000);
}

function switchRight() {
  clearInterval(intervalID);
  if (i === lastSrcListIndex) {
    $image.setAttribute('src', imageSrcArr[0]);
    $cycleCircleList[lastSrcListIndex].className = 'ball far fa-circle';
    i = 0;
    $cycleCircleList[i].className = 'ball fas fa-circle';
  } else {
    $image.setAttribute('src', imageSrcArr[i + 1]);
    $cycleCircleList[i].className = 'ball far fa-circle';
    i = i + 1;
    $cycleCircleList[i].className = 'ball fas fa-circle';
  }
  intervalID = setInterval(cyclePokemon, 3000);
}

function goToBall(event) {
  if (event.target.tagName === 'I') {
    $cycleCircleList[i].className = 'ball far fa-circle';
    clearInterval(intervalID);
    $pressedBall = (event.target.closest('.ball'));
    i = parseInt($pressedBall.dataset.idNum);
    $image.setAttribute('src', imageSrcArr[i]);
    $cycleCircleList[i].className = 'ball fas fa-circle';
    intervalID = setInterval(cyclePokemon, 3000);
  }
}

$leftBumper.addEventListener('click', switchLeft);
$rightBumper.addEventListener('click', switchRight);
$ballColumn.addEventListener('click', goToBall);
