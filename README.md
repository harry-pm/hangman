A small project to keep it ticking over. A game of hangman good sir.

Created with create-react-app, no plan as of yet, this will come next good sir.

PLAN

mvp will have no picture just a loss of lives 

API
https://random-word-api.herokuapp.com//word?key=FNG1CEUK

APP
random words will be retreived from API when the page is opened/refreshed and set to state. one word will be picked at random as the word and transformed to an array and set as state.
an onSubmit function will take an input and set to state. If it is an element of the word, it will  will be rendered in the correct position in LETTERS. If it is not it will be rendered in BIN

LETTERS
will render a '-' for each element in the array 'word'

FORM
will take inputs to be compared in app

BIN
will display inputs that were incorrect