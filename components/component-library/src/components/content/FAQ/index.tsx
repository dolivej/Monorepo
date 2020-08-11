/*
/ Component : FAQ
/ Use : Creates a simple FAQ filled with frequently asked questions   
/ Responsiveness : Dynamic 
*/

import React from "react";

export interface FAQProps {}

export const FAQ = (props: FAQProps) => {
  return (
    <section className="section">
      <div className="container py-4">
        <h2 className="title has-text-centered mb-6">
          Frequently Asked Questions
        </h2>
        <div className="mb-6">
          <div
            className="card block"
            style={{
              borderTop: "solid 4px #fad052",
            }}
          >
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img
                      className="is-rounded"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTncZN3g6YjgiysnD_pzNnmoKGNV3Ddnm3tMw&usqp=CAU"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <h3 className="title is-4">
                    How is a decentralized network different from the
                    traditional web?
                  </h3>
                  <p>
                    Decentralization is a key aspect of PiperNet. Traditionally,
                    to access data on a website, you needed to connect to a
                    single server containing that data. This method of storing
                    data makes it easy for third parties to get access to it,
                    corrupt it or even delete it. In PiperNet it is securely
                    stored on multiple devices in the network, which makes it
                    harder to hack and interfere with your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card block"
            style={{
              borderTop: "solid 4px #fad052",
            }}
          >
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img
                      className="is-rounded"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTncZN3g6YjgiysnD_pzNnmoKGNV3Ddnm3tMw&usqp=CAU"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <h3 className="title is-4">
                    Why shouldn't I just store my data on a Hooli Box?
                  </h3>
                  <p>
                    That's just the thing - if you store your data in a single
                    place, like Gavin Belsons' poorly-made server box, your data
                    will very susceptible to hacking. Whereas on PiperNet, your
                    data is safe with many copies to back it up from.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card block"
            style={{
              borderTop: "solid 4px #fad052",
            }}
          >
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img
                      className="is-rounded"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTncZN3g6YjgiysnD_pzNnmoKGNV3Ddnm3tMw&usqp=CAU"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <h3 className="title is-4">What makes PiperNet so safe?</h3>
                  <p>
                    Our proprietary middle-out compression algorithm allows data
                    to flow so fast that it can't be hacked! But, in all
                    seriousness, the algorithm helps but it's the public,
                    immutable ledger that makes it secure. This enables PiperNet
                    users to exchange data without risk of it being intercepted
                    by third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card block"
            style={{
              borderTop: "solid 4px #fad052",
            }}
          >
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img
                      className="is-rounded"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTncZN3g6YjgiysnD_pzNnmoKGNV3Ddnm3tMw&usqp=CAU"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <h3 className="title is-4">
                    How long does it take to get a company up and running on
                    PiperNet?
                  </h3>
                  <p>
                    Access to the public network is granted within a day, but
                    moving all your data and integrating your existing software
                    depends on how big your company is. Startups can expect to
                    be fully online within a week, enterprises can take up to a
                    month due to large reliance on legacy systems and huge
                    datasets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons is-centered" style={{ paddingTop: "20px" }}>
          <a className="button is-primary" href="#">
            Read all questions
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
