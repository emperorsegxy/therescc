import React, { useState } from 'react';
import Slider from './components/Slider.jsx'
import { css, jsx } from '@emotion/core'
import firstSlide from './images/firstSlide.svg'
import secondSlide from './images/secondSlide.svg'
import thirdSlide from './images/thirdSlide.svg'

function App() {
  const images = [firstSlide, secondSlide, thirdSlide]
  return (
    <Slider slides={images}/>
  );
}


export default App;
