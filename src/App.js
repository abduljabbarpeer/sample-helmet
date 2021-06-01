import { Helmet } from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';

function App() {
  return (
    <div className='App'>
      <h1>MAIN PAGE WITH DIFFERENT PAGES LINK</h1>
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
