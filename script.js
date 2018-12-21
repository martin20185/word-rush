/*
Martin Ivanov
December 21, 2018
A game where the user must save the city by using their typing skills to stop missiles.
*/

//create canvas where the game will be shown
var ctx = document.getElementById('canvas').getContext('2d');
ctx.canvas.width  = window.innerWidth / 2;
ctx.canvas.height = window.innerHeight - 60;

//list of words to randomly choose from
var wordList = ['sound', 'report', 'anxiety', 'horizon', 'drawing', 'runner', 'brown', 'finger', 'poll', 'mutter', 'aunt', 'pepper', 'native', 'captain', 'fist', 'stick', 'major', 'tap', 'hip', 'school', 'warrant', 'privacy', 'expect', 'preach', 'auditor', 'dream', 'tidy', 'hike', 'shiver', 'retreat', 'cart', 'rush','act', 'plot', 'chase', 'trunk', 'squeeze', 'flood', 'law', 'round', 'witness', 'fruit', 'margin', 'green', 'dish', 'ranch', 'strict', 'cattle', 'rain', 'justice', 'legend', 'plastic', 'hard', 'worm', 'hair', 'spend', 'plan', 'fraud', 'polite', 'need', 'drain', 'laborer', 'fix', 'gravel', 'disco', 'terrace', 'forbid', 'cry', 'cheap', 'frank', 'book', 'fear', 'egg', 'face', 'opinion', 'source', 'revenge', 'health', 'method', 'affair', 'part', 'achieve', 'inquiry', 'goal', 'pumpkin', 'pattern', 'giant', 'musical', 'knock', 'shape', 'include', 'stun', 'funny', 'snake', 'tile', 'tourist', 'tray', 'viable', 'cousin', 'average', 'bury', 'hold', 'tell', 'weapon', 'squash', 'jest', 'shelf', 'harass', 'allow', 'flour', 'elderly', 'pull', 'fuel', 'purpose', 'clothes', 'time', 'count', 'limited', 'smile', 'tycoon', 'steak', 'outlook','fibre', 'collar', 'lineage', 'ticket', 'feed', 'norm', 'shrink', 'failure', 'layout', 'ant', 'carpet', 'husband', 'neutral', 'news', 'network', 'thin', 'tear', 'indoor', 'dozen', 'redeem', 'piano', 'teach', 'loud', 'path', 'comedy', 'dentist', 'feel', 'pray', 'chicken', 'vote', 'jet', 'voyage', 'roof', 'greet', 'admit', 'pierce', 'sight', 'solo', 'brand', 'suspect', 'fleet', 'hover', 'thrust', 'regard', 'tick', 'wander', 'set', 'boot', 'stream', 'screen', 'excess', 'rescue', 'rib', 'pool', 'feast', 'lay', 'gain', 'heel', 'deputy', 'example', 'protest', 'dress', 'ward', 'left', 'makeup', 'convert', 'driver', 'tender', 'sea', 'distant', 'amuse', 'update', 'athlete', 'lobby', 'shoot', 'total', 'toss', 'virus', 'unique', 'pony', 'remind', 'rank', 'duck', 'dance', 'genuine', 'notice', 'dare', 'global', 'skin', 'prince', 'edition', 'orbit', 'sand', 'ecstasy', 'glacier', 'offend', 'wedding', 'relief', 'deck', 'desert', 'policy', 'railcar', 'middle', 'tempt', 'petty', 'storage', 'suit', 'broken', 'harmful', 'painter', 'command', 'doll', 'get', 'despise','context', 'breathe', 'hell', 'biscuit', 'sigh', 'rung', 'thank', 'piece', 'wolf', 'mask', 'laser', 'moment', 'leaf', 'morning', 'whip', 'depend', 'output', 'delay', 'bulb', 'agenda', 'crude', 'reason', 'market', 'europe', 'reptile', 'short', 'trench', 'rider', 'column', 'first', 'role', 'silk', 'wording', 'carve', 'use', 'clash', 'chew', 'button', 'queue', 'flat', 'freckle', 'text', 'sausage', 'master', 'century', 'soup', 'auction', 'inject', 'teacher', 'lid', 'falsify', 'wing', 'quarrel', 'sail', 'award', 'dealer', 'false','land', 'safari', 'denial', 'cotton', 'veteran', 'freeze', 'writer', 'deep', 'feather', 'despair', 'corner', 'snail', 'sleeve', 'bend', 'drill', 'panic', 'shower', 'fax', 'bubble', 'thumb', 'merit', 'compose', 'braid', 'bind', 'glass', 'sunrise', 'warn', 'room', 'gutter', 'meet', 'tumble', 'warm', 'index', 'curve', 'sacred', 'state', 'coma', 'build', 'guide', 'dragon', 'chord', 'member', 'depart', 'snatch', 'paper', 'circle', 'inflate', 'sweep', 'kick', 'block', 'due', 'banana', 'beard', 'episode', 'boom', 'pour', 'copy', 'spring', 'marine', 'scrap', 'south', 'slam', 'hobby', 'flock', 'equip', 'launch', 'porter', 'packet', 'fixture', 'halt', 'site', 'wait', 'laundry', 'god','treat', 'retiree', 'ethnic', 'self', 'temple', 'turkey', 'fling', 'surgeon', 'harvest', 'society', 'nervous', 'disk', 'link', 'drama', 'manual', 'avenue', 'stuff', 'pig', 'reveal', 'profile', 'game', 'concede', 'charity', 'salt', 'enjoy', 'truth', 'bake', 'define', 'day', 'race', 'symbol', 'pudding', 'noble', 'bee', 'watch', 'crew', 'eat', 'work', 'common', 'beam', 'inside', 'film', 'grip', 'ally', 'start', 'glove', 'fun', 'chart', 'skip', 'shed', 'prefer', 'earwax', 'graphic', 'lecture', 'access', 'deserve', 'energy', 'ethics', 'high', 'waist', 'decline', 'social', 'form', 'improve', 'castle', 'grudge', 'matter', 'garlic', 'grand', 'growth', 'stem', 'row', 'reach', 'spray', 'hunting', 'country', 'moon', 'error', 'late', 'smart', 'risk', 'dash', 'follow', 'seminar', 'video', 'create', 'obscure', 'soprano', 'name', 'donor','scatter', 'pain', 'popular', 'relax', 'related', 'design', 'floor', 'stomach', 'stage', 'uncle', 'occupy', 'open', 'sweat', 'explode', 'manager', 'crouch', 'exploit', 'plain', 'bottom', 'station', 'garbage', 'receipt', 'housing', 'mass', 'breeze', 'crusade', 'brake', 'artist', 'product', 'approve', 'harm', 'bush', 'compact', 'novel', 'gown', 'theory', 'myth', 'scholar', 'vacuum', 'confine', 'pest', 'kidnap', 'mixture', 'mill', 'chance', 'cap', 'west', 'pile', 'mean', 'radical', 'colon', 'mirror', 'tube', 'reflect', 'bald', 'shatter', 'page', 'mine', 'full', 'loose', 'nut', 'clean', 'dilemma', 'loss', 'snub', 'scratch', 'flex', 'key', 'rotate', 'kettle', 'topple', 'inn', 'swarm', 'extinct', 'proper', 'cable', 'acquit', 'angle', 'rumor', 'bomb', 'display', 'absent', 'student', 'fan', 'length', 'crutch', 'essay', 'attract', 'routine', 'moving', 'stroll', 'word', 'tribe', 'tongue', 'vision', 'crisis','craft', 'cross', 'wind', 'measure', 'dose', 'liver', 'suntan', 'owe', 'able', 'shadow', 'deter', 'sale', 'palace', 'counter', 'flow', 'thaw', 'fat', 'concern', 'doubt', 'hand', 'shine', 'velvet', 'killer', 'coast', 'blind', 'widen', 'lounge', 'power', 'printer', 'drown', 'battery', 'garage', 'live', 'bracket', 'pass', 'bowel', 'fresh', 'bark', 'thigh', 'quota', 'balance', 'prevent', 'gift', 'heaven', 'glasses', 'murder', 'request', 'explain', 'add', 'shell', 'nest', 'fine', 'lead', 'extend', 'belief', 'spill', 'misery', 'gallery', 'thinker', 'fate', 'father', 'junior', 'maze', 'begin', 'fade', 'flight', 'folk', 'dynamic', 'muscle', 'gloom', 'slap', 'swallow', 'profit', 'dome', 'ridge', 'burst', 'theater', 'fork', 'rob', 'formal', 'trap', 'seal', 'spine', 'appeal', 'shift', 'lack', 'perfume', 'tension', 'future', 'resign', 'winner', 'outside', 'retire', 'chorus', 'brink', 'reactor', 'style', 'calm', 'bat', 'tragedy', 'hour', 'snack', 'steel', 'age', 'rise', 'bank', 'horror', 'peak', 'gas', 'nose', 'mail', 'flavor', 'shaft', 'museum', 'hunter', 'dull', 'low', 'person', 'line', 'visit', 'lane', 'upset', 'jewel', 'visual', 'section', 'replace', 'sunday', 'troop', 'produce', 'horse', 'check', 'lip', 'evening', 'diagram', 'strong', 'point', 'van', 'harmony', 'smooth', 'pit', 'shock', 'chief', 'asylum', 'texture', 'bell', 'locate', 'twist', 'refer', 'service', 'smoke', 'burial', 'mile', 'branch', 'appoint', 'density', 'agony', 'gesture', 'secular', 'close', 'unlike', 'hate', 'strap', 'scandal', 'gallon', 'entry', 'fairy', 'acute', 'express', 'mold', 'spite', 'cold', 'mystery', 'lamb', 'jealous', 'urge', 'chin', 'rubbish', 'realize', 'contact', 'chop', 'attack', 'bland', 'traffic', 'finance', 'precede', 'abolish', 'sin', 'choice', 'patient', 'stain', 'title', 'lazy', 'sting', 'soldier', 'collect', 'bond', 'dinner', 'place', 'yard', 'diamond', 'swell', 'leg', 'stab', 'perfect', 'leave', 'feign', 'outlet', 'soil', 'flush', 'refuse', 'series', 'maximum', 'win', 'cafe', 'acid', 'old', 'reduce', 'settle', 'quiet', 'wood', 'groan', 'glance', 'volume', 'format', 'weight', 'fitness', 'mars', 'aware', 'gear', 'loop', 'doctor', 'trolley', 'north', 'tune', 'like', 'apathy', 'study','mother', 'push', 'jockey', 'shop', 'board', 'factory', 'drop', 'enhance', 'chain', 'embox', 'city', 'plead', 'spider', 'support', 'serious', 'retain','island', 'image', 'note', 'bolt', 'map', 'patent', 'leash', 'hope', 'wealth', 'frame', 'wall', 'biology', 'owl', 'parking', 'prize', 'step', 'pay', 'analyst', 'portion', 'wonder', 'coal', 'revise', 'cycle', 'cook', 'tree', 'accent', 'expand', 'marble', 'rack', 'forest', 'bishop', 'manner', 'danger', 'racism', 'mess', 'weave', 'obese', 'stroke', 'bother', 'lose', 'motif', 'perform', 'sheet', 'dorm', 'mention', 'bullet', 'move', 'limit', 'ivory', 'match', 'tower', 'swipe', 'hostile', 'haircut', 'poor', 'mislead', 'applaud', 'pace', 'cancer', 'resist', 'gossip', 'mouse', 'silver', 'dilute', 'will', 'tone', 'fault', 'endure', 'deadly', 'cup', 'colony', 'subway', 'black', 'small', 'passion', 'panel', 'ditch', 'rhythm', 'fiction', 'welcome', 'fare', 'calorie', 'drag', 'meaning', 'movie', 'aspect', 'budget', 'pop', 'kit', 'grace', 'chimney', 'camp', 'dump', 'herb', 'mud', 'reverse', 'quaint', 'rare', 'pie', 'basket', 'pursuit', 'extreme', 'ideal', 'belong', 'trouser', 'valley', 'abridge', 'tie', 'iron', 'cabin', 'front', 'guitar', 'draw', 'factor', 'view', 'torture', 'jelly', 'skate', 'zone', 'exact', 'frozen', 'pyramid', 'tribute', 'apology', 'buffet', 'random', 'symptom', 'utter', 'toast', 'swear', 'tin', 'spoil', 'snuggle', 'speech', 'wash', 'stir', 'deer', 'quote', 'deliver', 'capture', 'field', 'banish', 'zero', 'advice', 'pure', 'blonde', 'horn', 'file', 'taste', 'want', 'seed', 'record', 'jacket', 'rage', 'drawer', 'fall', 'faint', 'neglect', 'trustee', 'seller', 'jaw', 'return', 'missile', 'liberal', 'float', 'slot', 'center', 'cream', 'insert', 'hill', 'clique', 'guess', 'pawn', 'embark', 'foot', 'office', 'ego', 'spell', 'salmon', 'cow', 'recruit', 'talk', 'pick', 'needle', 'king', 'valid', 'stool', 'ample', 'care', 'claim', 'prayer'];
var words = [];
var totalWords = 0;
var xPos = [];
var yPos = [];
var speed = [];
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var keyCode;
var userInput;
var lives = 3;
var cratersX = [];
var cratersR = [];
var over = false;
var score = 0;
var speedLoop;
var gameLoop;
var speedIncrease = 0;
//create images to display
var missile = new Image();
missile.src = "bomb.png";
var heart = new Image();
heart.src = "heart.png";
var city = new Image();
city.src = "city.png";

//function that initializes all necessary variables and begins necessary loops
function init() {
	document.getElementById("wordBox").focus();
	words = [];
	totalWords = 0;
	xPos = [];
	yPos = [];
	speed = [];
	lives = 3;
	cratersX = [];
	cratersR = [];
	over = false;
	score = 0;
	speedIncrease = 0;
	for(var i = 0; i < 3; i++) { //generates three words
		words.push(wordList[Math.floor(Math.random() * wordList.length)]); //pick and add random word
		xPos.push(Math.floor(Math.random() * (width - 100)) + 50); //add starting x Position for word
		yPos.push(Math.floor(Math.random() * 20) + 5); //add starting y Position for word
		speed.push((12 - words[i].length) / 10);  //add starting speed for word
	}
	speedLoop = setInterval(speedUp, 5000); //loop that makes the game faster over time
	gameLoop = setInterval(game, 16.67); //updates all the game 60 times a second (didn't really figure out a better way to loop)
}

//function that draws the words at their current position
function drawWords() {
	ctx.font = "18px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	for(var i = 0; i < words.length; i++) {
		ctx.fillText(words[i], xPos[i], yPos[i]);
	}
}

//function that draws the rockets slightly above the words
function drawRockets() {
	for(var i = 0; i < words.length; i++) {
		ctx.drawImage(missile, xPos[i] - 37, yPos[i] - 90);
	}
}

//function that draws the lives the user has left in the corner
function drawLives() {
	for(var i = 0; i < lives; i++) {
		ctx.drawImage(heart, width - 40 - (i * 30), height - 40, 30, 30);
	}
}

//function that draws the sky and the city (clears the previous frame)
function drawCity() {
	ctx.fillStyle = "#008cff";
	ctx.fillRect(0, 0, width, height);
	ctx.drawImage(city, 0, height - 350);
}

//function that adds a crater (if a bomb hits the city)
//parameter k - the array number of the word that hit the ground
function addCrater(k) {
	cratersX.push(xPos[k]); //get x position of the word that hit the city
	cratersR.push(Math.floor(Math.random() * 40) + 50); //generate random radius
}

//function that draws any craters that may have been made
function drawCraters() {
	for(var i = 0; i < cratersX.length; i++) {
		//draws circles at specified x position and radius
		ctx.beginPath();
		ctx.arc(cratersX[i], height - 130, cratersR[i], 0, 2 * Math.PI);
		ctx.fillStyle = "#008cff";
    		ctx.fill();
    		ctx.closePath();
	}
}

//function that moves the words down at a specific speed
function moveWords() {
	for(var i = 0; i < words.length; i++) {
		yPos[i] += speed[i];
	}
}

//function that replaces an old word with a new word, as well as restarting position and speed
//parameter j - the array number of the word to replace 
function newWord(j) {
	words[j] = wordList[Math.floor(Math.random() * wordList.length)];
	xPos[j] = Math.floor(Math.random() * (width - 100)) + 50;
	yPos[j] = Math.floor(Math.random() * 20) + 5;
	speed[j] = ((12 - words[j].length) / 10) + speedIncrease;  //add the increase in speed generated by the speedUp() function
}

//function that checks if any words have hit the city
function checkWordPositions() {
	for(var i = 0; i < words.length; i++) {
		if(yPos[i] > height - 130) { //if it passed the  middle of the city
			addCrater(i); //add a crater where it hit the city
			newWord(i); //replace the word
			lives -= 1;
		}
	}
}

//function that checks if the word entered by the user is on the screen
function checkForWord() {
	userInput = document.getElementById("wordBox").value; //get the inputted word
		document.getElementById("wordBox").value = null; //clear the wordBox
	for(var i = 0; i < words.length; i++) {
		if(userInput == words[i]) { //if the word is on the screen
			totalWords += 1;
			updateScore(words[i].length); //update score
			newWord(i); //create new word
			break; //break the for loop so it doesn't remove more than one word at once
		}
	}
}

//function that generates a speed increase amount and increases speed of all words on the screen
function speedUp() {
	speedIncrease = (totalWords / 70); //speed increase based on the number of words the user has entered (can do some tweaking)
	for(var i = 0; i < speed.length; i++) { //for speeds of all words
		speed[i] += speedIncrease; //increase speed by the amount
	}
}

//checks for any keyboard input from user
document.addEventListener("keypress", myEventHandler);

//function that checks if user pressed entered a word
//keyCode 13 - Enter
function myEventHandler(e){
    keyCode = e.keyCode; //get keycode of key pressed
    if(keyCode == 13 && over == false) { //if the key is "enter" and game is not over
	checkForWord();
    }
};

//function that begins the game
//runs when the user clicks on the canvas element (triggered from code in index.html)
function restart(){
	if(over == true) {
		init();
	}
}

//function that increases score
//parameter l - the length of the entered word
function updateScore(l) {
	score += l * 50;
}

//menu that runs when the page first loads
//just displays background and text with game title and simple instructions
function menu() {
	over = true;
	ctx.fillStyle = "#bababa";
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = "black";
	ctx.fillRect(width / 2 - 160, height / 2 - 140, 320, 97);
	ctx.fillStyle = "yellow";
	ctx.fillRect(width / 2 - 150, height / 2 - 130, 300, 77);
	ctx.fillStyle = "black";
	ctx.font = "bold 60px Impact";
	ctx.textAlign = "center";
	ctx.fillText("Word Rush", width / 2, height / 2 - 70);
	ctx.font = "bold 18px Verdana";
	ctx.fillStyle = "black";
	ctx.fillText("Use your typing skills to save the city!", width / 2, height / 2 - 10);
	ctx.fillText("Type the word under the missile in the text box", width / 2, height / 2 + 20);
	ctx.fillText("below and press enter!", width / 2, height / 2 + 50);
	ctx.font = "bold italic 20px Courier";
	ctx.fillStyle = "white";
	ctx.fillText("Click here to begin", width / 2, height / 2 + 50);
}

//function that displays the current score
function drawScore() {
	ctx.font = "18px Verdana";
	ctx.fillStyle = "white";
	ctx.fillText("Score: " +  score, 60, height - 20);
}

//function that shows game over screen, final score, and total words entered
function gameOver() {
	//ends game and loops 
	over = true;
	clearInterval(speedLoop);
	clearInterval(gameLoop);
	ctx.fillStyle = "#ff1e1e";
	ctx.fillRect(0, 0, width, height);
	ctx.font = "bold 25px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.fillText("Game Over", width / 2, height / 2 - 60);
	ctx.font = "18px Arial";
	ctx.fillText("Score: " + score, width / 2, height / 2 - 30);
	ctx.fillText("Total words: " + totalWords, width / 2, height / 2);
	ctx.font = "italic 16px Arial";
	ctx.fillText("Click here to restart", width / 2, height / 2 + 30);
}

//function that runs all other functions in the right order so that the game continuosly updates
function game() {
	drawCity();
	drawCraters();
	moveWords();
	drawWords();
	drawRockets();
	checkWordPositions();
	drawLives();
	drawScore();
	if(lives <= 0) { //check if the user is out of lives and end game if so
		gameOver();
	}
}

//display the menu when the page loads
menu();
