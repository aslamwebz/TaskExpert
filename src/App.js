import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Provider} from 'react-redux'
import store from './store'



class App extends React.Component{

  state = {
    color:''
  }

  colorchange = (color) => {
    this.setState({
      color:color.hex
    })
    console.log(this.state.color)
  }

  dragEnd = () => {
    console.log('hi')
  }

  render(){
    return (
      <Provider store={store}>
            <div className="App" style={{background:this.state.color, height:'100vh !important'}}>
                <Navbar colorchange={this.colorchange}/>
                <Home />
            </div>
      </Provider>
    )
  }
}

export default App;
