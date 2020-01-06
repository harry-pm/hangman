import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    words: [],
    word: [],
  }

  componentDidMount(){
    this.getWords();
  }

  getWords(){
    axios.get('https://random-word-api.herokuapp.com//word?key=3907W1Z4&number=200').then(res => {
      this.setState({ words : res.data });
    })
  }

  render () {
    return (
      <div>
        {/* <Letters/>
        <Form/>
        <Bin/> */}
      </div>
    )
  }
}

export default App;
