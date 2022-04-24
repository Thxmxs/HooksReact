import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

  import {AboutScreen} from './AboutScreen'
  import {HomeScreen} from './HomeScreen'
  import {LoginScreen} from './LoginScreen'
  import { NavBar } from './NavBar';


export const AppRouter = () => {
  return (
    <Router>
        <NavBar/>
        <div className='container'>
            <Routes>
                <Route exact path='/About' element={<AboutScreen/>}/>
                <Route exact path='/login' element={<LoginScreen/>}/>
                <Route exact path='/' element={<HomeScreen/>}/>
                <Route path='*' element={<HomeScreen/>}/>
            </Routes>
        </div>
    </Router>
  )
}
