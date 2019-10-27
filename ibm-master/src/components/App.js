import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from '../components/global/';// cuando se utilise varias veces


class App extends Component {
  static propTypes ={
    children: PropTypes.object.isRequired
  };

  render(){
    const { children } = this.props;
    return(
      <div >       
        <Content body={ children } />
      </div>
    )
  }

}

export default App