import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'

import dg from "./DG.jpg"


function App() {
  return (
    <div>
<Image src = {dg} centered />
<Comments />


</div>
  );
}



export default App;
