import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => (
        <BrowserRouter>
            <Container maxidth="lg">
            <GoogleOAuthProvider clientId = "319707115526-v1aheu161ka6gka0d1jdrme02gqv8up2.apps.googleusercontent.com">
                <Navbar />
                <Switch>
                    <Route path= "/" exact component = {Home} />
                    <Route path= "/auth" exact component = {Auth} />
                </Switch>
            </GoogleOAuthProvider>
            </Container>
        </BrowserRouter>

    );


export default App;