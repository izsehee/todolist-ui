import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TodoListComponent from './components/TodoListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {TodoListComponent}></Route>
              <Route path = "/todo" component = {TodoListComponent}></Route>
            </Switch>
          </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
