import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import UserList from '../componentes/UserList/userList';
import Home from '../componentes/Home/home';
import Images from '../componentes/UploadImg/images';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route exact path="/user-list" render={(props) => <UserList {...props} />} />
                    <Route exact path="/upload-image" render={(props) => <Images {...props} />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;