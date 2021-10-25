import React from 'react'
import { Route, BrowserRouter as Router , Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Tech from './Tech'


function AppRouter() {
    return (
        <>
       
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            
                <Route exact path='/tech' component={Tech} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        
        </>
    )
}

export default AppRouter
