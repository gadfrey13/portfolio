import React from 'react';
import Particle from 'react-particles-js';
import AnimationSetting from './AnimationSetting';


const BackgroundAnimation = (props) => {
    return (
        <div class="animation">
        <Particle params={AnimationSetting} />
        </div>
    )
}

export default BackgroundAnimation;