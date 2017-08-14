import React, {Component} from 'react';
import {Tweets} from '../view';
import { APIManager } from '../../utils';


class Tweet extends Component {

  constructor(){
    super()
      this.state = {
        data: []
      }

  }


  componentDidMount(){
    APIManager
      .get('/api/tweet', null, (err, response) => {
        if (err) {
          alert(err.message);
          console.log(JSON.stringify(err.message));
          return;
        }
        //console.log(JSON.stringify(response['results'][0]['tweets']));
        let data = Object.assign({}, this.state.data);
        let userData = response['results'][0]['tweets'];
        this.setState({
          data: userData
        });
      })
  }


  render(){

    const tweetItems = this.state.data.map( (tweet, index) => {
      return (
        <li key={index} style={{listStyle: 'none'}}>
          <Tweets tweet={tweet}/>
        </li>
      )
    })


    return(
      <div>
        {tweetItems}
      </div>
    )
  }
}

export default Tweet;
