import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading/Loading';
import { routes } from './routes/routes';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                ></Route>
              )
            })
          }
        </Switch>
      </Router>

    </Suspense>
  );
}

export default App;