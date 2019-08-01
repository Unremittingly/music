import React from 'react';
import './App.css';


import {BrowserRouter, Route, Switch} from 'react-router-dom'

import  Routers from './router/index.js'

class App extends React.Component{

  renderRouters() {
    let routers = [];

    routers.push(<Route exact key={Routers.path} path={Routers.path} component={Routers.component}/>);
    // Routers.childRoutes.forEach(function (item) {
    //   if(item.auth){
    //     //带登录权限的route
    //     routers.push(<AuthRoute key={item.path} exact path={item.path} component={item.component}/>);
    //   }else{
    //     routers.push(<Route key={item.path} exact  path={item.path} component={item.component}/>);
    //   }
    //
    // });

    return routers;
  }

  render() {
    const children = this.renderRouters();
    return (<BrowserRouter><Switch>
      {children}
    </Switch></BrowserRouter>);
  }
}

export default App;
