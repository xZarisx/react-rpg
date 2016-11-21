import { Route, IndexRoute } from 'react-router';
import App from './containers/app.js';
import Home from './containers/home.js';
import map from './containers/map.js';

const routes = (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/demo" component={map} />
    </Route>
);

export default routes;
