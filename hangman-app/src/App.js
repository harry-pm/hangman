import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    words: [],
    word: []
  }

  componentDidMount(){
    this.getWords();
    this.getRandomWord();
  }
//need new API coz this one breaks
  getWords(){
    axios.get('https://random-word-api.herokuapp.com//word?key=3907W1Z4&number=200').then(res => {
      this.setState({ words : res.data });
    })
  }

  getRandomWord(){
    this.setState({ word : this.state.words[Math.floor(Math.random() * 200)]})//must turn into an array also
  }

  onSubmit(){
    //if (event is element of this.state.word) {}
  }

  render () {
    // for letters of this.state.word
    return (
      <div>        
    {/* //     <Letters {letter = letters}/> */}
        {/* <Form/>
        <Bin/> */}
      </div>
    )
  }
}

export default App;
