import React, {Component} from 'react';

class Header extends Component {
  render() {
    const bannerPicture = this.props.bannerPicture;
    return (

      <div className="swiper-container swiper-parent">
        <div className="swiper-wrapper">
          <div className="swiper-slide dark">
            <img src={bannerPicture} style={style.bannerStyle}/>
          </div>
        </div>
      </div>

    )
  }
}

export default Header;
