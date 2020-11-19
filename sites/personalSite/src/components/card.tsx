import React from "react";
import {useState} from "react";

export interface QuoteProps {

}

import "./index.css";

const Card = (props: QuoteProps) => {
  const [isHover,setHover] = useState(false);
  let readMoreWidth;
  isHover ? readMoreWidth = '100px' : readMoreWidth= '0px';

  return (
      <div style={{margin:'0px', height:'70vh', width:'100%', overflow:'hidden', boxShadow:'10px 10px 31px -17px rgba(0, 0, 0, 0.75)'}}>
          <a className='projectCard' style={{display:'block', overflow:'hidden', position:'relative', backgroundColor:'gray'}} onMouseOver={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} >
              <div className='projectCardOverlay'>
                <div style={{width:'75%', height:'78px', backgroundColor:'rgb(250, 208, 82)', marginTop:'10%'}}>
                  <h4 style={{color:'black', fontSize:'1.7rem', fontFamily:'"Roboto Condensed"', fontWeight:'bold', paddingLeft:'12%', paddingTop:'1%'}}>Project Name</h4>
                  <h4 style={{color:'black', fontSize:'1.0rem', fontFamily:'"Roboto Condensed"', fontWeight:'lighter', paddingLeft:'12%', paddingTop:'1%'}}>Brief few word project description.</h4>
                </div>
                <div className='readMore' style={{marginTop:'40%', marginLeft:'40%', height:'40px', width: readMoreWidth, backgroundColor:'rgb(250, 208, 82)', textAlign:'center'}}>
                    <h4 style={{display: isHover ? 'inline-block' : 'none', color:'black', fontSize:'1.2rem', fontFamily:'"Roboto Condensed"', paddingTop:'8px', width:'100px'}}>Read More</h4>
                </div>
              </div>
          </a>
      </div>
  );
};

export default Card;
