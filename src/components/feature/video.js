import React from 'react';
import PropTypes from 'prop-types';
import { Player, PosterImage,LoadingSpinner  } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

export default props => {
// set the poster image url to `poster` property
return (
<Player
poster="/video/ezgif.com-video-to-gif.gif"
src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

>
<LoadingSpinner />
</Player>

);

PosterImage.propTypes = {

    // The poster image url
    poster: PropTypes.string,
  
  }
};
