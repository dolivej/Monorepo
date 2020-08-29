import "@locnest/component-library/lib/styles/componentstyles.sass";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "./index.css";

import { graphql } from "gatsby";
import ScrollOut from "scroll-out";
import React from "react";
import { useState, useEffect } from "react";

import { Context, Contact, Slider } from "@locnest/component-library";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Chatbot from "../components/Chatbot";
import Quote from "../components/quote";
import divider from "../data/pictures/divider.svg";
import resumePDF from "../data/resumee.pdf";
import resumePNG from "../data/resume.png";

const ContactPage = () => {
  useEffect(() => {
    ScrollOut({
      once: true,
    });
  }, []);

  return (
    <Layout>
      <SEO title="Experience" lang="en" />
      <Context.Consumer>
        {({ logger, userFlow, setUserFlow }: any) => {
          return (
            <div>
              <div id="testimonials">
                <section
                  className="hero is-medium is-primary"
                  style={{
                    height: "90vh",
                    width: "99vw",
                    background: "url(" + divider + ") no-repeat center center",
                    WebkitBackgroundSize: "cover",
                    MozBackgroundSize: "cover",
                    OBackgroundSize: "cover",
                  }}
                >
                  <Slider
                    color="white"
                    thickness="2px"
                    slides={[
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
                id="workhistory"
                style={{
                  textAlign: "center",
                  padding: "50px",
                  backgroundColor: "lightgray",
                }}
              >
                <h2 className="title is-2">📄 Work History</h2>

                <section style={{ display: "inline-block" }}>
                  <a
                    className="button"
                    href={resumePDF}
                    download
                    style={{ margin: "30px" }}
                  >
                    Download
                  </a>

                  <figure
                    className="image imageHover"
                    style={{ width: "80vw" }}
                  >
                    <img src={resumePNG} />
                  </figure>
                </section>
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

export default ContactPage;
