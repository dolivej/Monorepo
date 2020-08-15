import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import {Contact} from '../forms/index'
import { overlayProps, Overlay } from "./index";

storiesOf("Advanced/Overlay", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <div style={{width: '100vw', height:'100vh'}}>
      <Overlay active={boolean('active' , true)}>
            Hello World
      </Overlay>
      
      Background Text
     
      <button className='button'>Background Button</button>
    </div>
  ));
