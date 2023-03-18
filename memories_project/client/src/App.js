import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
    <Container maxidth="xl">
      <GoogleOAuthProvider clientId="319707115526-v1aheu161ka6gka0d1jdrme02gqv8up2.apps.googleusercontent.com">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" /> } />
          <Route path="/posts" exact component={Home}/> 
          <Route path="/posts/search" exact component={Home}/> 
          <Route path="/posts/:id" component={PostDetails}/> 
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to= "/posts/" /> )} />
        </Switch>
      </GoogleOAuthProvider>
    </Container>
  </BrowserRouter>
  );
};
  


export default App;
