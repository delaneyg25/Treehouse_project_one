//Array of quote objects the app will pull from
var quotes = [
  {
   quote: 'If you tell the truth, you don\'t have to remember anything.',
   author: 'Mark Twain',
   citation: 'Notebook entry, January or February 1894, Mark Twain\'s Notebook, ed. Albert Bigelow Paine',
   year: '1935',
   tags: null,
  },
  {
   quote: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
   author: 'Albert Einstein',
   citation: 'Letter to his son Eduard',
   year: '1930',
   tags: null,
  },
  {
   quote: 'Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.',
   author: 'Nikola Tesla',
   citation: '"The Problem of Increasing Human Energy", Century Illustrated Magazine',
   year: '1930',
   tags: null,
  },
  {
   quote: 'I haven\'t a particle of confidence in a man who has no redeeming petty vices whatsoever.',
   author: 'Mark Twain',
   citation: '"Answers to Correspondents", The Californian, 17 June 1865. Anthologized in The Celebrated Jumping Frog of Calaveras County, and Other Sketches',
   year: '1867',
   tags: ['Humor'],
  },
  {
   quote: 'All of science is nothing more than the refinement of everyday thinking.',
   author: 'Albert Einstein',
   citation: '"Physics and Reality" in the Journal of the Franklin Institute Vol. 221, Issue 3',
   year: '1936',
   tags: ['Science'],
  },
  {
   quote: 'Let the future tell the truth and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I really worked, is mine.',
   author: 'Nikola Tesla',
   citation: '"A Visit to Nikola Tesla" by Dragislav L. Petković in Politika',
   year: '1927',
   tags: ['Politics'],
  },
  {
   quote: 'All you need in this life is ignorance and confidence, and then Success is sure.',
   author: 'Mark Twain',
   citation: 'Mark Twain\'s Notebook',
   year: '1887',
   tags: ['Humor'],
  },
  {
   quote: 'Never do anything against conscience even if the state demands it.',
   author: 'Albert Einstein',
   citation: 'as quoted by Virgil Henshaw in Albert Einstein: Philosopher Scientist',
   year: '1949',
   tags: ['Politics'],
  },
  {
   quote: 'Something dreadful happens to students between first and twelfth grades, and it\'s not just puberty.',
   author: 'Carl Sagan',
   citation: 'Science Is a Way of Thinking',
   year: '1996',
   tags: ['Politics', 'Humor'],
  },
  {
   quote: 'That kind of skeptical, questioning, \"dont accept what authority tells you\" attitude of science — is also nearly identical to the attitude of mind necessary for a functioning democracy. Science and democracy have very consonant values and approaches, and I don\'t think you can have one without the other.',
   author: 'Carl Sagan',
   citation: 'Talk of the Nation',
   year: '1996',
   tags: ['Science', 'Poitics'],
  },
]

var newColor = '';
var interval;

function getRandomQuote() {
  //Create a random integer from 0 and the total number of quotes (currently 10) - 1 .
  var randomInt = Math.floor(Math.random() * quotes.length);

  //Use the random iniger to select a quote from the array
  return quotes[randomInt]
}

//Create a random number for an RGB value
function colorMath() {
  return Math.floor(Math.random() * 256 );
 }
 
//Create the string required to set a new RGB value
function randomColor() {
  var theColor =  'rgb(';
  theColor += colorMath() + ',';
  theColor += colorMath() + ',';
  theColor += colorMath() + ')';
  return theColor;
 }

//Function to call and print a new quote and change colors
function printQuote() {

  var theQuote = getRandomQuote();
  var quoteBox = '';

  quoteBox += '<p class="quote">' + theQuote.quote + '</p>';
  quoteBox += '<p class="source">' + theQuote.author;
  
  if (theQuote.citation) {
    quoteBox += '<span class="citation">' + theQuote.citation + '</span>';
  }

  if (theQuote.year) {    
    quoteBox += '<span class="year">' + theQuote.year + '</span>';
  }

  if (theQuote.tags) {    
    quoteBox += '<span class="tags">' + theQuote.tags + '</span>';
  }

  quoteBox += '</p>';
  
  //print the random quote
  var printDiv = document.getElementById("quote-box")
  printDiv.innerHTML = quoteBox;

  //change the background and color styles
  document.body.style.backgroundColor = randomColor()
  document.body.style.color = randomColor()

}

//Automatically change the quote and colors after 20 seconds
interval = setInterval(printQuote, 20000)


// Change the quote and colors when "Show Another Quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);