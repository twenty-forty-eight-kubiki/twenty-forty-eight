import AppRouter from './router/AppRouter'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import { IRoute, routes } from './router/routerData'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'


function App() {
    return (
        <Router>
            <Header />
            <div>
                <Switch>
                    {routes.map((route: IRoute) => {
                        if (route.private) {
                            return (
                                <PrivateRoute
                                    key={route.id}
                                    path={route.path}
                                    exact={route.exact}
                                    isAuth={true}
                                    component={route.component}
                                />
                            )
                        } else {
                            return (
                                <Route
                                    key={route.id}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            )
                        }
                    })}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default App