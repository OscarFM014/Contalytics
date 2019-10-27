import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Tabla from './components/tabla';
import App from './components/App';

const AppRoute = () =>
<App>
    <Switch>
        <Route exact sensitive path='/ibm' component={Tabla} />
    </Switch>
</App>;

export default AppRoute
