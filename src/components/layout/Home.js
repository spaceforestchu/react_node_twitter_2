import React, {Component} from 'react';
import {Tweet} from '../containers';


class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Lenox Hill Tweets Hospital</h1>
        <Tweet />
      </div>

    )
  }
}

export default Home;
