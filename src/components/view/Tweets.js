import React, {Component} from 'react';
import style from './style';


class Tweets extends Component {
  render() {
    //console.log(this.props.tweet.text);
    const text = this.props.tweet.text;
    const profile = this.props.tweet.user.profile_image_url;
    const created = this.props.tweet.created_at;
    return (
      <div className='container'>
        <div className='row'>
          <div style={style.borderStyle}>
            <div>
              <img style={style.imageStyle} src={profile}/>
              <p style={style.paragraphStyle}>{text}</p>
            </div>
            <div>
              <span style={style.createdStyle}>{created}</span>
            </div>
          </div>

        </div>
        <br/>
      </div>

    )
  }
}

export default Tweets;
