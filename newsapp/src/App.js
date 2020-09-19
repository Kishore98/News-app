/*import React, { Component } from 'react'
import ShowNavbar from './components1/ShowNavbar'
import Model from './components1/Model'
import Feature from './components1/Feature'
import Home from './components1/Home'
import AboutUs from './components1/AboutUs'
import VolksWagenLogo from './components1/VolksWagenLogo'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import SideDrawer from './components1/SideDrawer/SideDrawer'
import Backdrop from './components1/BackDrop/Backdrop'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      sideDrawerOpen:false
    }
  }

  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    })
  }

  backdropClickHandler=()=>{
    this.setState({
      sideDrawerOpen:false
    })
  }
  
  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      sideDrawer=<SideDrawer />;
      backdrop=<Backdrop click={this.backdropClickHandler}/>
    }

  return (
    <div style={{height:'100%'}}>
      <BrowserRouter>
      <ShowNavbar clickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
      
      <Switch>
     
        <Route exact path="/" component={Home}  />
        <Route path="/models" component={Model}/>
        <Route path="/features" component={Feature}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/home" component={VolksWagenLogo} />
       </Switch>  
       </BrowserRouter>
     
      </div>
    
  )
}
}

export default App*/

import React, { Component } from 'react'
import Home from './components/Home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Technology from './components/Technology'
import Breaking from './components/Breaking'
import NewsAppNavBar from './components/NewsAppNavBar'
//import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NewsAppNavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/tech' component={Technology}/>
          <Route path='/breaking' component={Breaking}/>
        </Switch>
        </BrowserRouter>
        
      </div>
    )
  }
}
export default App

