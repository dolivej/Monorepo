import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { SliderProps, Slider } from './index';

storiesOf('Slider/Slider', module)
  .addDecorator(withKnobs)
  .add('example', () => (
    <div style={{ width: '100%', height: '500px' }}>
      <Slider
        slides={[
          <img
            src='https://wallpaperaccess.com/full/359168.jpg'
            style={{ backgroundColor: 'red', width: '100%', height: '100%' }}
          ></img>,
          <img
            src='https://i.ytimg.com/vi/yrTP-k26e94/maxresdefault.jpg'
            style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}
          ></img>,
          <img
            src='https://i.ytimg.com/vi/u71QsZvObHs/maxresdefault.jpg'
            style={{ backgroundColor: 'yellow', width: '100%', height: '100%' }}
          ></img>,
          <img
            src='https://d.justpo.st/media/images/2019/03/07/just-a-photograph-from-hawaii-beautiful-scenery-1551968708.jpg'
            style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}
          ></img>,
        ]}
        color={text('color', 'white')}
        thickness={text('thickness', '2px')}
      />
    </div>
  ));
