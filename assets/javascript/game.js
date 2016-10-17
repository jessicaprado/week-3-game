//create word bank array
var wordBank = ["coffee", "javascript", "tailor"];


//creates a formula where javascript picks a random word
function random(wordBank) 	{
var index = Math.floor(Math.random(index) * wordBank.length);
	return index;
							}
//once computer has picked word, it needs to be displayed on the screen
var rando = random(wordBank);
console.log(rando);

function wordSelector (wordBank, rando) {
	var select = wordBank[rando];
	return select;
	}

	var select = wordSelector(wordBank, rando);
	console.log(select);

// Display word in dash form
function dashes (select) {
	var hiddenWord = [];
	for (var i = 0; i < select.length; i++) {
		hiddenWord.push("_");		
    }
	return hiddenWord;
    
}
	var hiddenDisplay = dashes(select);
    console.log(hiddenDisplay);

//Spliting word bank words 
function split(select) {
	var arrayWord = select.split("");
	return arrayWord
}

	var arrWord = split(select);
	console.log(arrWord);

//user guess


