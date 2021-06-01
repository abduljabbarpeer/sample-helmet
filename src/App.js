import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <h1>MAIN PAGE WITH DIFFERENT PAGES LINK</h1>
      {/* <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/-QjKbULq7CE'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe> */}
      <button class="btn" onClick={() => setCount(count + 1)}>{count}</button>
      <Link to='/first'>FIRST PAGE</Link>
      <Link to='/second'>SECOND PAGE</Link>
      <Switch>
        <Route path='/first'>
          <Page1 />
        </Route>
        <Route path='/second'>
          <Page2 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
