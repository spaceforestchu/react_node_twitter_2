import React, {Component} from 'react';
import style from './style';

class Tweets extends Component {
  render() {
    //console.log(this.props.tweet.text);
    const text = this.props.tweet.text;
    const profile = this.props.tweet.user.profile_image_url;
    return (
      <div className='container'>
        <div className='row'>
          <div style={style.borderStyle}>

            <img style={style.imageStyle} src={profile}/>
            <span style={style.spanStyle}>{text}</span>
          </div>
        </div>
        <br/>
      </div>

    )
  }
}

export default Tweets;
