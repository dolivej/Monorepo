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
import Profile from "../data/pictures/profile.png";
import divider from "../data/pictures/divider.svg";
import landingImg from "../data/pictures/background1.svg";
import loadtime from "../data/pictures/loadtime.png";
import dependancyCalls from "../data/pictures/dependancyCalls.png";
import exceptions from "../data/pictures/exceptions.png";
import userFlowImg from "../data/pictures/UserFlow.png";
import userAmount from "../data/pictures/UserAmount.png";
import eventsAmount from "../data/pictures/eventsAmount.png";
import user from "../data/pictures/user.svg";
import data from "../data/pictures/data.svg";
import learning from "../data/pictures/learning.svg";
import siteHealthAnalytics from "../data/pictures/siteHealthAnalytics.svg";
import userAnalytics from "../data/pictures/userAnalytics.svg";
import example from "../data/pictures/example.svg";
import divider2 from "../data/pictures/divider2.svg";

let tagsConst = [
  {
    tagName: "React",
    tagLink:
      "https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element",

    icon: "https://www.drupal.org/files/project-images/react.png",
    size: 2,
    tagColor: "#00bae3",
    textColor: "white",
  },
  {
    tagName: "Storybook",
    tagLink:
      "https://storybook.js.org/",

    icon:
      "https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm.png",
    size: 2,
    tagColor: "rgb(255, 71, 133)",
    textColor: "white",
  },
  {
    tagName: "Bulma",
    tagLink:
      "https://bulma.io/",

    icon:
      "https://img.stackshare.io/service/5204/bulma-logo.png",
    size: 2,
    tagColor: "#00d1b2",
    textColor: "white",
  },
];

let tagsConst2 = [
  {
    tagName: "React",
    tagLink:
      "https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element",

    icon: "https://www.drupal.org/files/project-images/react.png",
    size: 2,
    tagColor: "#00bae3",
    textColor: "white",
  },
  {
    tagName: "Node.js",
    tagLink:
      "https://nodejs.org/en/",

    icon:
      "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    size: 2,
    tagColor: "#026e00",
    textColor: "white",
  },
  {
    tagName: "IBM Cloud",
    tagLink:
      "ibm.com/cloud/watson-assistant/",

    icon:
      "https://www.consoleconnect.com/wp-content/uploads/2019/07/ibm-cloud-bubble.svg",
    size: 2,
    tagColor: "#0062ff",
    textColor: "white",
  },
  {
    tagName: "Bulma",
    tagLink:
      "https://bulma.io/",

    icon:
      "https://img.stackshare.io/service/5204/bulma-logo.png",
    size: 2,
    tagColor: "#00d1b2",
    textColor: "white",
  },
];

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

          const sectionView = (
            name: string,
            duration: number,
            loggerTemp: any
          ) => {
            if (loggerTemp.loggerService) {
              userFlow.push({
                name: "Viewed " + name,
                properties: { duration: duration, group: "test" },
              });
              setUserFlow(userFlow);
              loggerTemp.loggerService.trackEvent({
                name: "Viewed " + name,
                properties: { duration: duration, group: "test" },
              });
            }
          };

          const timerStart = (loggerTemp: any) => {
            let time = 0;
            let landingTime = 0;
            let skillsTime = 0;
            let projectsTime = 0;
            let analyticsTime = 0;

            const incrementTimer = () => {
              time = time + 1;
              if (time > 3600) {
                time = 0;
              }
              //console.log(time)
              landingTime = timeTracker(
                time,
                landingTime,
                "landing",
                (value: any) => {
                  sectionView("landing", value, loggerTemp);
                }
              );
              skillsTime = timeTracker(
                time,
                skillsTime,
                "skills",
                (value: any) => {
                  sectionView("skills", value, loggerTemp);
                }
              );
              projectsTime = timeTracker(
                time,
                projectsTime,
                "projects",
                (value: any) => {
                  sectionView("projects", value, loggerTemp);
                }
              );
              analyticsTime = timeTracker(
                time,
                analyticsTime,
                "analytics",
                (value: any) => {
                  sectionView("analytics", value, loggerTemp);
                }
              );
            };
            setInterval(incrementTimer, 1000);
          };

          return (
            <div style={{ backgroundColor: "white" }}>
              {logger.loggerService && (
                <Timer runFunction={timerStart} loggerTemp={logger} />
              )}

              <div id="landing">
                <section
                  className="hero is-medium is-primary"
                  style={{
                    height: "90vh",
                    width: "99vw",
                    background:
                      "url(" + landingImg + ") no-repeat center center",
                    WebkitBackgroundSize: "cover",
                    MozBackgroundSize: "cover",
                    OBackgroundSize: "cover",
                  }}
                >
                  <Slider
                    color="white"
                    thickness="2px"
                    slides={[
                      <div className="hero-body-custom">
                        <div
                          className="container"
                          data-scroll
                          style={{ padding: "20px" }}
                        >
                          <div
                            className="columns mobileContainer"
                            style={{
                              backgroundColor: "white",
                              paddingTop: "20px",
                              paddingBottom: "20px",
                              borderRadius: "5px",
                            }}
                          >
                            <div
                              className="column is-5 mobileCenter"
                              style={{
                                textAlign: "center",
                              }}
                            >
                              <img
                                src={Profile}
                                className="imgMobile"
                                style={{
                                  border: "solid 1px white",
                                  boxShadow:
                                    "2px 4px 23px -1px rgba(0,0,0,0.2)",
                                }}
                              />
                            </div>
                            <div className="column">
                              <div
                                className="landingText"
                                style={{
                                  height: "300px",
                                }}
                              >
                                <h1
                                  className="title is-1"
                                  style={{ color: "black" }}
                                >
                                  Hi, im David.
                                </h1>
                                <br />
                                <h2
                                  className="subtitle is-3"
                                  style={{ color: "black", marginTop: "-20px" }}
                                >
                                  <b
                                    className="is-primary-background"
                                    style={{
                                      padding: "5px",
                                      lineHeight: 1.3,
                                    }}
                                  >
                                    User Focused and Data Driven.
                                  </b>
                                </h2>
                                <div className="columns">
                                  <div
                                    className="column is-2"
                                    style={{ minWidth: "135px" }}
                                  >
                                    {typeof window !== "undefined" &&
                                      ScrollLink && (
                                        <ScrollLink
                                          activeClass="skills"
                                          to="skills"
                                          spy={true}
                                          smooth={true}
                                          offset={100}
                                          duration={1000}
                                        >
                                          <button
                                            className="is-primary is-rounded button"
                                            onClick={() => {
                                              logButtonClick(
                                                "landing-skills",
                                                "/#skills"
                                              );
                                            }}
                                          >
                                            My Skills
                                          </button>
                                        </ScrollLink>
                                      )}
                                  </div>
                                  <div
                                    className="column is-2"
                                    style={{ minWidth: "135px" }}
                                  >
                                    {typeof window !== "undefined" &&
                                      ScrollLink && (
                                        <ScrollLink
                                          activeClass="projects"
                                          to="projects"
                                          spy={true}
                                          smooth={true}
                                          offset={100}
                                          duration={1000}
                                        >
                                          <button
                                            className="is-primary is-rounded button is-outlined"
                                            onClick={() => {
                                              logButtonClick(
                                                "landing-projects",
                                                "/#projects"
                                              );
                                            }}
                                          >
                                            My Projects
                                          </button>
                                        </ScrollLink>
                                      )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>,
                      <div
                        className="hero-body-custom"
                        style={{ marginTop: "-60px" }}
                      >
                        <Quote
                          name="Brandon Yanuziello"
                          img="https://mma.prnewswire.com/media/944656/Locnest_Is_Toronto_the_next_Switzerland____Locnest_says_Yes___an.jpg?p=twitter"
                          quote={
                            <p>
                              One of the best things about David is his{" "}
                              <b
                                style={{
                                  backgroundColor: "#fad052",
                                }}
                              >
                                ability to understand business value
                              </b>{" "}
                              and how technology helps drive that value . With
                              minimal requirements and design he was{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                able to produce high quality components and
                                delivered a vast array of features that will
                                help us drive our business forward.
                              </b>{" "}
                            </p>
                          }
                          title="Locnest - Senior Developer"
                        />
                      </div>,
                      <div
                        className="hero-body-custom"
                        style={{ marginTop: "-60px" }}
                      >
                        <Quote
                          name="Chris Lynk"
                          img="https://pbs.twimg.com/profile_images/1267848304093691904/w5v5Ny_F_400x400.png"
                          quote={
                            <p>
                              David is{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                an excellent learner and was able to come up to
                                speed quickly
                              </b>{" "}
                              on the various technologies we work with despite
                              being a relatively junior co-op student. He{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                integrated well into our office culture and was
                                able to leverage the relationships he has built
                              </b>{" "}
                              to progress on his objectives.
                            </p>
                          }
                          title="IBM Cloud - Platform UI Development Manager"
                        />
                      </div>,
                      <div
                        className="hero-body-custom"
                        style={{ marginTop: "-60px" }}
                      >
                        <Quote
                          name="Jason Zhang"
                          img="https://www.imaginecommunications.com/sites/default/files/media-images/imagine_running_man.png"
                          quote={
                            <p>
                              David showed{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                excellent performance
                              </b>{" "}
                              during his work term. He understood his job duties
                              and picked up the skills/technology very quickly
                              and was{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                able to complete tasks with a little guidelines.
                              </b>
                            </p>
                          }
                          title="Imagine Communications - Senior Developer"
                        />
                      </div>,
                    ]}
                  />
                </section>
              </div>

              <div
                id="skills"
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
                            <h4 className="title is-4">User Focused</h4>
                            <p className="block">
                              In my eyes the key to a great product lies within
                              a great understanding of the user.
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
                              I love to unlock insights within data and use data
                              to guide decisions and validate success!
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
                              The more I learn, the more I realize how little I
                              know. Every day I improve.
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

                  <div id="aboutJobs" data-scroll style={{ marginTop: "50px" }}>
                    <LogoShowcase {...myLogos} />
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "url(" + divider2 + ") no-repeat center center",
                  backgroundSize: "cover",
                  height: "1300px",
                  width: "100%",
                  overflow: "hidden",
                  WebkitBackgroundSize: "cover",
                  MozBackgroundSize: "cover",
                  OBackgroundSize: "cover",
                  WebkitBoxShadow: "2px 0px 30px 13px rgba(81,81,81,0.55)",
                  boxShadow: "2px 0px 30px 13px rgba(81,81,81,0.55)",
                  marginTop: "5em",
                }}
              >
                <div id="projects" style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "1200px",
                      marginTop: "20px",
                      paddingBottom: "70px",
                      marginBottom: "20px",
                      textAlign: "center",
                      padding: "10%",
                    }}
                  >
                    <h1
                      data-scroll
                      className="title is-2"
                      style={{
                        backgroundColor: "white",
                        padding: "10px",
                        maxWidth: "300px",
                        margin: "0 auto",
                        marginBottom: "20px",
                        borderRadius: "7px",
                      }}
                    >
                      Projects
                    </h1>
                    <div
                      data-scroll
                      style={{
                        height: "95%",
                        width: "100%",
                        display: "inline-block",
                        maxWidth: "1175px",
                      }}
                    >
                      <Collection
                        sizemap="'a b' 'a b'"
                        minMobileHeight="520px"
                        data={[
                          {
                            data: {
                              tags: tagsConst2,
                              image:
                                "https://i.ibb.co/TYB2ntX/chatbot.png",
                              brief: "Optimizing customer service.",
                              title: "Chatbot",
                              about:
                                "Chatbots are extreemly useful customer service tools. They can help provide an immediate place for customers to ask questions and help reduce questions going to real customer service representatives.",
                              links: [
                                { text: "See At Bottom Right of Screen", link: "/#projects" },
                                { text: "Github", link: "https://github.com/dolivej/Chatbot-API" },
                              ],
                            },
                            gridId: "a",
                          },
                          {
                            data: {
                              tags: tagsConst,
                              image:
                                "https://i.ibb.co/fNk7nJd/component-Library.png",
                              brief: "Consistent component styles and quicker development.",
                              title: "Personal Component Library",
                              about:
                                "Component libraries are a must in any company. They help maintain brand style throughout multiple sites and allow for quicker development",
                              links: [
                                { text: "View", link: "https://sharp-liskov-22d340.netlify.app/" },
                                { text: "Github", link: "https://github.com/dolivej/Frontend-Monorepo/tree/master/components" },
                              ],
                            },
                            gridId: "b",
                          },
                        ]}
                        spacing={"20px"}
                        template={Template}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="analytics"
                style={{
                  textAlign: "center",
                  marginTop: "5em",
                  minHeight: "100vh",
                }}
              >
                <div
                  style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    borderTop: "solid 1px #fad052",
                    padding: "10%",
                    textAlign: "center",
                  }}
                  data-scroll
                >
                  <div style={{ maxWidth: "1100px", marginBottom: "100px" }}>
                    <h3 className="title is-2">Site Analytics</h3>
                    <p>
                      After working on the analytics team at IBM I came to
                      realize the buisness value that analytics provide. Being
                      able to track user flows, site performance and API
                      requests allows for you to guide and quantify the growth
                      of your website and buisness.
                      <br />
                      <br />
                      While I have worked with many analytics tools like
                      Amplitude and New Relic, in my own site I used Microsofts
                      App Insights to grow my portfolio and also because it
                      allows me to track both{" "}
                      <strong> Site Health Analytics </strong> and{" "}
                      <strong> User Experience Analytics.</strong>
                    </p>
                  </div>

                  <FAQ
                    picture={userAnalytics}
                    title="User Flow Analytics"
                    data-scroll
                  >
                    <p>
                      Track metrics like{" "}
                      <strong>
                        {" "}
                        # of monthly users, # visits per page, # user events
                        (like button clicks), user flows (like checkout or
                        signup flows) .
                      </strong>
                      <br />
                      <br />
                      Metrics like these can help you identify where design
                      changes need to be made to increase conversions, visits or
                      time spent on sections.
                    </p>

                    <h3
                      className="title is-4"
                      style={{ paddingTop: "70px", color: "#fad052" }}
                    >
                      {" "}
                      Stats for August:{" "}
                    </h3>
                    <section className="info-tiles">
                      <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                            <figure className="is-square">
                              <img src={userFlowImg} />
                            </figure>
                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                            <figure className="is-square">
                              <img src={userAmount} />
                            </figure>
                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                            <figure className="is-square">
                              <img src={eventsAmount} />
                            </figure>
                          </article>
                        </div>
                      </div>
                    </section>
                  </FAQ>
                  <FAQ
                    picture={siteHealthAnalytics}
                    title="Site Health Analytics"
                    data-scroll
                  >
                    <div>
                      <p>
                        Track metrics like{" "}
                        <strong>
                          {" "}
                          page/component load times, # requests, # of failed
                          requests, exceptions and errors .
                        </strong>
                        <br />
                        <br />
                        Metrics like these can help you identify where code
                        needs to be optimized or you can use it to set up alerts
                        in case of 3rd part outages or errors.
                      </p>

                      <h3
                        className="title is-4"
                        style={{ paddingTop: "70px", color: "#fad052" }}
                      >
                        {" "}
                        Stats for August:{" "}
                      </h3>
                      <section className="info-tiles">
                        <div className="tile is-ancestor has-text-centered">
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <figure className="is-square">
                                <img src={loadtime} />
                              </figure>
                            </article>
                          </div>
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <figure className="is-square">
                                <img src={dependancyCalls} />
                              </figure>
                            </article>
                          </div>
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <figure className="is-square">
                                <img src={exceptions} />
                              </figure>
                            </article>
                          </div>
                        </div>
                      </section>
                    </div>
                  </FAQ>
                  <FAQ
                    picture={example}
                    title="Example: Your Live User Flow"
                    data-scroll
                  >
                    <p>
                      <strong>
                        If you do not have adblock, below you should see some
                        live tracking of your journey on my site!
                      </strong>
                    </p>
                    <br />
                    <div>
                      <section className="info-tiles">
                        <div className="tile is-ancestor has-text-centered">
                          <div className="tile is-parent">
                            <DataBox
                              title="Most Viewed Section"
                              timeFrame="This Session"
                              isNegative={false}
                              value={"" + getMax(userFlow, "views").name}
                              subtitle="Number of Views (Sum)"
                              showArrow={false}
                              subValue={"" + getMax(userFlow, "views").value}
                            />
                          </div>
                          <div className="tile is-parent">
                            <DataBox
                              title="Longest Viewed Section"
                              timeFrame="This Session"
                              isNegative={false}
                              value={"" + getMax(userFlow, "time").name}
                              subtitle="Time Viewed (Max)"
                              showArrow={false}
                              subValue={
                                "" + getMax(userFlow, "time").value + " seconds"
                              }
                            />
                          </div>
                        </div>
                      </section>

                      <div style={{ paddingTop: "30px" }}>
                        <div
                          className="customScrollBar"
                          style={{
                            maxWidth: "1000px",
                            height: "150px",
                            borderTop: "solid 2px black",
                            borderBottom: "solid 2px black",
                            boxShadow:
                              "inset -1px 2px 5px 0px rgba(0,0,0,0.75)",

                            overflowX: "scroll",
                            overflowY: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: (userFlow.length + 1) * 200 + "px",
                              paddingTop: "60",
                            }}
                          >
                            {userFlow.map((event: any, index: number) => {
                              let icon;
                              let detail;
                              let color;

                              if (event.name === "Clicked Nav") {
                                icon = "fa-route";
                                detail = '"' + event.properties.path + '"';
                                color = "yellow";
                              } else if (event.name === "Clicked Button") {
                                icon = "fa-hand-point-down";
                                detail =
                                  '"' + event.properties.buttonName + '"';
                                color = "orange";
                              } else if (event.name.includes("Viewed")) {
                                icon = "fa-eye";
                                detail = event.properties.duration + " seconds";
                                color = "lightblue";
                              }

                              return (
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    paddingTop: "40px",
                                  }}
                                >
                                  <ExpandableTag
                                    picture={icon}
                                    title={event.name}
                                    backgroundColor={color}
                                  >
                                    {detail}
                                  </ExpandableTag>
                                  {index !== userFlow.length && (
                                    <i
                                      className="fa fa-arrow-right"
                                      style={{ padding: "5px" }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FAQ>
                </div>
              </div>

              <div style={{ position: "sticky", bottom: "0" }}>
                <Chatbot
                  messageList={[]}
                  popupRound={"4px 4px 0px 0px"}
                  iconRound={"25%"}
                />
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    </Layout>
  );
};

export default IndexPage;
