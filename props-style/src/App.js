import React from 'react'
import Joke from './Joke'

function App() {
  return (
    <div className="App">
      <Joke 
        punchLine="zzzzzzz" 
      />
      <Joke 
        question="aaaaaaaaa" 
        punchLine="bbbbbbbbbb" 
      />
      <Joke 
        question="cccccccc" 
        punchLine="dddddddd" 
      />
      <Joke 
        question="eeeeeeee" 
        punchLine="ffffffff" 
      />
      <Joke 
        question="ggggggg" 
        punchLine="hhhhh" 
      />
      <Joke 
        question="iiiiiii" 
        punchline="jjjjjj" 
      />
    </div>
  );
}

export default App;
