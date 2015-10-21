//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
//Authored by Ellen thomson week 8 with help from lines 53-75,from Xianning Cui. 

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt,
    consoleDisplay = document.getElementById('ConsoleDisplay')
;

//donate button

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});


//find the oldest or youngest speech
getOldestOrYoungestString = function(authorSpeech) {
  var
    oldestSpeech = speechesArray[0].year,
    newestSpeech = speechesArray[0].year
  ;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldestSpeech){
      oldestSpeech = speechesArray[i].year;
    }
    if(speechesArray[i].year > newestSpeech){
      newestSpeech = speechesArray[i].year;
    }
  };

  if(authorSpeech.year === oldestSpeech){
    consoleDisplay.innerHTML += '<p>This is the oldest speech on the page.</p>';
  }
  if(authorSpeech.year === newestSpeech){
    consoleDisplay.innerHTML += '<p>This is the most recent speech on the page.</p>';
  }
};

//Speeches. I feel like there is some redundancy with a few functions, however, it works for now so I'm leaving it alone.

document.getElementById('BtnChurchill').addEventListener('click', function(){
  function getAuthorAndYearString (speech){
  ConsoleDisplay.innerHTML = 'This speech was written by ' + speech.author + ' in ' + speech.year + '<br>';
  }
  getAuthorAndYearString(churchillSpeech);
  

function displayBCEString (boolean) {
  if(churchillSpeech.yearIsBCE === true){
    ConsoleDisplay.innerHTML += 'This speech took place before the common era.<br>';
  }else{
    ConsoleDisplay.innerHTML += 'This speech took place during the common era.<br>';
  }
}
  displayBCEString(churchillSpeech);
  getOldestOrYoungestString(churchillSpeech);

});



document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
 function getAuthorAndYearString (speech){
  
  ConsoleDisplay.innerHTML = 'This speech was written by ' + speech.author + ' in ' + speech.year + '<br>';
  }
  getAuthorAndYearString(ghandiSpeech);


function displayBCEString (boolean) {
  if(ghandiSpeech.yearIsBCE === true){
    ConsoleDisplay.innerHTML += 'This speech took place before the common era.<br>';
  }else{
    ConsoleDisplay.innerHTML += 'This speech took place during the common era.<br>';
  }
}
  displayBCEString(ghandiSpeech);
  getOldestOrYoungestString(ghandiSpeech);

});



document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  function getAuthorAndYearString (speech){
  
  ConsoleDisplay.innerHTML = 'This speech was written by ' + speech.author + ' in ' + speech.year + '<br>';
  }
  getAuthorAndYearString(demosthenesSpeech);  


  function displayBCEString (boolean) {
  if(demosthenesSpeech.yearIsBCE === true){
    ConsoleDisplay.innerHTML += 'This speech took place before the common era.<br>';
  }else{
    ConsoleDisplay.innerHTML += 'This speech took place during the common era.<br>';
  }
}
  displayBCEString(demosthenesSpeech);
  getOldestOrYoungestString(demosthenesSpeech);

});



