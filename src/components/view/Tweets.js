import React, {Component} from 'react';

class Tweets extends Component {
  render() {
    const text = this.props.tweet.text;
    const profileImage = this.props.tweet.user.profile_image_url;
    const created = this.props.tweet.created_at;

    return (
      <section id="content">

  				<div className="container clearfix">

  					<div className="heading-block center">
  						<h1>Recent Tweets</h1>
  					</div>

  					<div id="posts">

  						<div className="entry clearfix">
  							<ul className="entry-meta clearfix">
  								<li><i className="icon-calendar3"></i>{created}</li>
  							</ul>
  							<div className="entry-content">

  								<p> <img src={profileImage} style={{marginRight: 25}}/> {text}</p>
  								<a href='https://twitter.com/lenoxhill' className="more-link">Read More</a>
  							</div>
  						</div>
  					</div>
ß
  			</div>

  		</section>


    )
  }
}

export default Tweets;
