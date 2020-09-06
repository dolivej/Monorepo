import "@locnest/component-library/lib/styles/componentstyles.sass";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "./index.css";

import { graphql } from "gatsby";
import ScrollOut from "scroll-out";
import React from "react";
import { useState, useEffect } from "react";

import { Context, Contact } from "@locnest/component-library";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Chatbot from "../components/Chatbot";
import Axios from "axios";

const ContactPage = () => {
  useEffect(() => {
    ScrollOut({
      once: true,
    });
  }, []);

  const [buttonText, setButtonText] = useState("");

  const handleSubmit = (data: any) => {
    setButtonText("...Submitting");
    let sendData = {
      name: data.name,
      email: data.email,
      message: data.ContactReason + " : " + data.ContactMessage,
    };
    Axios.post(
      process.env.GATSBY_EMAIL_API ? process.env.GATSBY_EMAIL_API : "",
      sendData
    )
      .then((res) => {
        setButtonText("Submitted!");
      })
      .catch((err) => {
        setButtonText("Failed!");
      });
  };

  return (
    <Layout>
      <SEO title="Contact" lang="en" />
      <Context.Consumer>
        {({ logger, userFlow, setUserFlow }: any) => {
          return (
            <div>
              <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <h1 className="title is-1">Contact Me</h1>
              </div>

              <div style={{ minHeight: "55vh" }}>
                <Contact
                  contactData={{
                    title: "I am always open to a new opportunity!",
                    subtitle:
                      "Feel free to reach out if you are interested in my skills, projects or just want to talk.",
                    options: [
                      () => {
                        return (
                          <a
                            href="https://www.linkedin.com/in/dmolive/"
                            target="_blank"
                          >
                            Linkedin
                          </a>
                        );
                      },
                      () => {
                        return (
                          <a href="https://github.com/dolivej" target="_blank">
                            Github
                          </a>
                        );
                      },
                    ],
                    onSubmit: (data: any) => {
                      handleSubmit(data);
                    },
                  }}
                />
                <div style={{ width: "100%", textAlign: "center" }}>
                  <p className="subtitle is-4" style={{ transition: "0.5s" }}>
                    {buttonText}
                  </p>
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

export default ContactPage;
