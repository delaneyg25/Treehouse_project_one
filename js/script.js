//Array of quote objects the app will pull from
var quotes = [
  {
   Quote: 'If you tell the truth, you don\'t have to remember anything.',
   Author: 'Mark Twain',
   Citation: 'Notebook entry, January or February 1894, Mark Twain\'s Notebook, ed. Albert Bigelow Paine',
   Year: '1935',
   Tags: ['Wisdom'],
  },
  {
   Quote: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
   Author: 'Albert Einstein',
   Citation: 'Letter to his son Eduard',
   Year: '1930',
   Tags: ['Wisdom'],
   
  },
  {
   Quote: 'Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.',
   Author: 'Nikola Tesla',
   Citation: '"The Problem of Increasing Human Energy", Century Illustrated Magazine',
   Year: '1930',
   Tags: ['Wisdom'],
  },
  {
   Quote: 'I haven\'t a particle of confidence in a man who has no redeeming petty vices whatsoever.',
   Author: 'Mark Twain',
   Citation: '"Answers to Correspondents", The Californian, 17 June 1865. Anthologized in The Celebrated Jumping Frog of Calaveras County, and Other Sketches',
   Year: '1867',
   Tags: ['Humor', 'Wisdom'],
  },
  {
   Quote: 'All of science is nothing more than the refinement of everyday thinking.',
   Author: 'Albert Einstein',
   Citation: '"Physics and Reality" in the Journal of the Franklin Institute Vol. 221, Issue 3',
   Year: '1936',
   Tags: ['Science'],
  },
  {
   Quote: 'Let the future tell the truth and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I really worked, is mine.',
   Author: 'Nikola Tesla',
   Citation: '"A Visit to Nikola Tesla" by Dragislav L. Petković in Politika',
   Year: '1927',
   Tags: ['Wisdom', 'Politics'],
  },
  {
   Quote: 'All you need in this life is ignorance and confidence, and then Success is sure.',
   Author: 'Mark Twain',
   Citation: 'Mark Twain\'s Notebook',
   Year: '1887',
   Tags: ['Humor', 'Wisdom'],
  },
  {
   Quote: 'Never do anything against conscience even if the state demands it.',
   Author: 'Albert Einstein',
   Citation: 'as quoted by Virgil Henshaw in Albert Einstein: Philosopher Scientist',
   Year: '1949',
   Tags: ['Wisdom', 'Politics'],
  },
  {
   Quote: 'Something dreadful happens to students between first and twelfth grades, and it\'s not just puberty.',
   Author: 'Carl Sagan',
   Citation: 'Science Is a Way of Thinking',
   Year: '1996',
   Tags: ['Politics', 'Humor'],
  },
  {
   Quote: 'That kind of skeptical, questioning, \"dont accept what authority tells you\" attitude of science — is also nearly identical to the attitude of mind necessary for a functioning democracy. Science and democracy have very consonant values and approaches, and I don\'t think you can have one without the other.',
   Author: 'Carl Sagan',
   Citation: 'Talk of the Nation',
   Year: '1996',
   Tags: ['Science', 'Poitics'],
  },
]


function getRandomQuote() {
  //Create a random integer from 0 and the total number of quotes (currently 10) - 1 .
  var randomInt = Math.floor(Math.random() * quotes.length);
  console.log(randomInt);

  //Use the random iniger to select a quote from the array
  for (i=0; i <= quotes.length;  i += 1) {
    if (i === randomInt) {
      return quotes[i]
    } 
  }
}

var test = getRandomQuote();

console.log(test);



function printQuote() {
/***
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
}



// When the "Show another quote" button is clicked, call the `printQuote` function.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);