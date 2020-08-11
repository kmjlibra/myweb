import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
<p> 안녕하세요 </p>
<Button primary> 제 이름은 김민정입니다 </Button>
<Progress percent = {66} indicating/>
</div>
  );
}

export default App;
