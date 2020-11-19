import "@locnest/component-library/lib/styles/componentstyles.sass";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "./index.css";

import { graphql } from "gatsby";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ScrollOut from "scroll-out";
import React from "react";
import { useState, useEffect } from "react";
import { timeTracker, getMax } from "../data/helperMethods";


import {
  Pricing,
  PostPreview,
  Collection,
  LogoShowcase,
  Context,
  FAQ,
  ExpandableTag,
  Slider,
  DataBox,
} from "@locnest/component-library";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Timer from "../components/Timer";
import Chatbot from "../components/Chatbot";
import Quote from "../components/quote";
import Card from "../components/card";

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

import { mySkills, myLogos } from "../data/index";
import user from "../data/pictures/user.svg";
import data from "../data/pictures/data.svg";
import learning from "../data/pictures/learning.svg";
import profile from "../data/pictures/bg_landing.png";
import bg_test from "../data/pictures/bg_test.jpg";


const Template = (props: any) => {
  return (
    <div style={{ gridArea: props.gridId, width: "100%", height: "100%" }}>
      <PostPreview {...props.data} />
    </div>
  );
};

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ScrollOut({
      once: true,
    });
  }, []);

  return (
    <Layout>
      <SEO title="About" lang="en" />
      <Context.Consumer>
        {({ logger, userFlow, setUserFlow }: any) => {
          const logButtonClick = (name: string, path: string) => {
            setTimeout(function() {
              if (logger.loggerService) {
                userFlow.push({
                  name: "Clicked Button",
                  properties: { buttonName: name, path: path, group: "test" },
                });
                setUserFlow(userFlow);
                logger.loggerService.trackEvent({
                  name: "Clicked Button",
                  properties: { buttonName: name, path: path, group: "test" },
                });
              }
            }, 4000);
          };

         

          return (
            <div style={{ backgroundColor: "white" }}>
                    <div style={{
                      backgroundImage:'url(' + bg_test + ')',
                      height:'74vh',
                      width:'100vw',
                      backgroundAttachment: 'fixed',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}>
                      <div className="container" style={{height:'74vh', paddingTop:'0'}}>
                          <div style={{position:'relative', width:'inherit', height:'inherit'}}>
                            <img className='landingProfile' src={profile} alt='profile' style={{position:'absolute', zIndex:'2', right:'-5%', filter:''}}/>
                            <div style={{position:'absolute', width:'200vw', height:'10px', zIndex:'3', backgroundColor:'#fad052', left:'-30%', bottom:'0%'}}></div>
                            <div className='landingBubble' style={{position:'absolute', zIndex:'3', left:'0'}}>
                              <div className="columns">
                                <div className='column box' style={{padding:'30px', backgroundColor:'#FAFAFA', borderRadius:'0px'}}>
                                  <h4 className='font1' style={{textTransform:'uppercase', fontFamily:'"Roboto Condensed"', paddingTop:'5px', paddingBottom:'5px', color:'#878a8f', letterSpacing:'0.4em', fontWeight:'400'}}>David Olive</h4>
                                  <h1 className='font2' style={{display:'inline-block', fontFamily:'"Roboto Condensed"', marginTop:'5px', marginBottom:'15px', color:'black', fontWeight:'800', marginLeft:'-2px', backgroundColor:'#fad052'}}>Product Manager</h1>
                                  <h2 className='font3' style={{fontFamily:'"Roboto Condensed"', paddingBottom:'10px', paddingTop:'10px', color:'#878a8f', fontWeight:'500', marginLeft:'-2px'}}>I'm a user focused and data driven Product Manager who over the past 2 years has completed 4 internships with enterprise companies like IBM & BlackBerry and startups like Locnest.</h2>
                                  <div style={{display:'block', width:'inherit', position:'relative'}}>
                                    <h4 className='font4'  style={{fontFamily:'"Roboto Condensed"', marginTop:'15px', marginBottom:'5px', color:'#878a8f', fontWeight:'500', marginLeft:'-2px'}}>
                                     <ScrollLink
                                          activeClass="projects"
                                          to="projects"
                                          spy={true}
                                          smooth={true}
                                          offset={0}
                                          duration={1000}
                                      >
                                      <a className='font5' style={{color:'black', border: '0 none',position:'relative', display:'inline-block', fontWeight:'800', backgroundColor:'', borderBottom:'5px solid black'}}>View Projects</a> 
                                      </ScrollLink>
                                      &nbsp; or &nbsp;  
                                      <ScrollLink
                                          activeClass="about"
                                          to="about"
                                          spy={true}
                                          smooth={true}
                                          offset={-50}
                                          duration={1000}
                                      >
                                      <a className='font6' style={{color:'black', border: '0 none',position:'relative', display:'inline-block', fontWeight:'800'}}>Read About Me</a>
                                      </ScrollLink>
                                      </h4>
                                  </div>
                                </div>
                                <div className='columns' style={{width:'40%'}}>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>


              <div
                id='projects'
                style={{
                  width: "100%",
                  overflow: "hidden",
                  WebkitBackgroundSize: "cover",
                  MozBackgroundSize: "cover",
                  OBackgroundSize: "cover",
                }}
              >
              <div className='container' style={{marginTop:'10vh'}}>
                <div className='columns'>
                  <div className='column' style={{padding:'40px'}}>
                  <Card/>
                  </div>
                  <div className='column' style={{padding:'40px'}}>
                  <Card/>
                  </div>
                </div>

                <div className='columns'>
                  <div className='column' style={{padding:'40px'}}>
                  <Card/>
                  </div>
                  <div className='column' style={{padding:'40px'}}>
                  <Card/>
                  </div>
                </div>
              </div>
             
            
              </div>

              

              <div className='notOnMobile' style={{height:'450px', width:'100vw', padding:'30px', marginTop:'200px', marginBottom:'200px',                  
                  backgroundImage:'url(' + bg_test + ')',
                  backgroundAttachment: 'fixed',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'}}>
                <Slider
                    color="white"
                    thickness="2px"
                    slides={[
                      <div
                        className='container'
                      >
                        <Quote
                          name="Brandon Yanuziello"
                          img="https://i.ibb.co/VV3jkcx/Capture213123.png"
                          quote={
                       <p>
                              "One of the best things about David is his{" "}
                              ability to understand business value
                              and how technology helps drive that value. With
                              minimal requirements and design he was
                              able to produce high quality components and
                              delivered a vast array of features that will
                              help us drive our business forward."
                            </p>
                          }
                          title="Locnest - Senior Developer"
                        /> 
                      </div>,
                      <div
                      >
                        <Quote
                          name="Chris Lynk"
                          img="https://pbs.twimg.com/profile_images/1267848304093691904/w5v5Ny_F_400x400.png"
                          quote={
                            <p>
                              "David is
                                an excellent learner and was able to come up to
                                speed quickly
                              on the various technologies we work with despite
                              being a relatively junior co-op student. He
                                integrated well into our office culture and was
                                able to leverage the relationships he has built
                              to progress on his objectives."
                              </p>
                          }
                          title="IBM Cloud - Platform UI Development Manager"
                        />
                      </div>,
                      <div
                      >
                        <Quote
                          name="Jason Zhang"
                          img="https://media.glassdoor.com/sqll/343918/imagine-communications-squarelogo-1424089742300.png"
                          quote={
                            <p>
                              "David showed excellent performance
                              during his work term. He understood his job duties
                              and picked up the skills/technology very quickly
                              and was able to complete tasks with a little guidelines."
                            </p>
                          }
                          title="Imagine Communications - Senior Developer"
                        />
                      </div>,
                    ]}
                  />   
              </div>

              <div
                id="about"
                style={{
                  textAlign: "center",
                  marginTop: "5em",
                  paddingBottom: "2em",
                }}
              >
                <div
                  style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    borderTop: "solid 1px #fad052",
                    borderBottom: "solid 1px #fad052",
                    padding: "3vw",
                  }}
                >
                  <div id="aboutText" data-scroll>
                    <h3 className="title is-2">About Me</h3>
                    <section className="section">
                      <div className="container has-text-centered py-4">
                        <div className="columns">
                          <div className="column">
                            <div className="level">
                              <div className="level-item">
                                <figure className="image is-128x128">
                                  <img src={user} alt="" />
                                </figure>
                              </div>
                            </div>
                            <h4 className="title is-4">Customer Focused</h4>
                            <p className="block">
                              I put myself in the customer's shoes to understand
                              their needs and wants.
                            </p>
                          </div>
                          <div className="column">
                            <div className="level">
                              <div className="level-item">
                                <figure className="image is-128x128">
                                  <img src={data} alt="" />
                                </figure>
                              </div>
                            </div>
                            <h4 className="title is-4">Data Driven</h4>
                            <p className="block">
                              I unlock insights within data and use data to
                              guide decisions and validate success.
                            </p>
                          </div>
                          <div className="column">
                            <div className="level">
                              <div className="level-item">
                                <figure className="image is-128x128">
                                  <img src={learning} alt="" />
                                </figure>
                              </div>
                            </div>
                            <h4 className="title is-4">Always Growing</h4>
                            <p className="block">
                              I love to learn new things and grow my skillset.
                              Every day I try to level up.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div
                    id="aboutSkills"
                    data-scroll
                    style={{ marginTop: "50px" }}
                  >
                    <Pricing {...mySkills} />
                  </div>

                 
                
                </div>
              </div>

          
              
                  
            </div>
          );
        }}
      </Context.Consumer>
    </Layout>
    
  );
};

export default IndexPage;
