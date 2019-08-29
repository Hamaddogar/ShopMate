import React from 'react';
import main from '../layouts/main/Layout';
import Forgot from '../layouts/components/AuthDialog/Forms/forgot/forgot';
import reset from '../layouts/components/AuthDialog/Forms/forgot/reset';
import AddproductAlert from '../components/AddProduct/AddproductAlert.js';
import Profile from '../components/UserProfile/userProfile'
import UserProduct from '../components/UserProduct/UserProduct'


import { BrowserRouter, Route } from "react-router-dom";


 class Allroutes extends React.Component{
    render()
    {
      return(
        <BrowserRouter>
        <Route  exact path="/" component={main}/>
        <Route  path="/forgot" component={Forgot}/>
        <Route path="/reset/:token" component={reset} />
        <Route path="/AddproductAlert" component={AddproductAlert} />
        <Route path="/Profile" component={Profile} />
        <Route path="/UserProduct" component={UserProduct} />
        </BrowserRouter>
  

      )


    }

 }
 export default Allroutes