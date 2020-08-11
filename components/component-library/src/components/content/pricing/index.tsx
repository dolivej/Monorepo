/*
/ Component : Pricing
/ Use : Creates a simple pricing cost/benifit/link display
/ Responsiveness : Dynamic 
*/

import React from "react";

export interface PricingProps {
  title: string;
  plans: any;
}
export interface ItemProps {
  included?: boolean;
  showIncluded?: boolean;
  tooltip?: string;
  text: string;
  image?: string;
}
export interface ItemGrouping {
  items: any;
  columns: number;
}

export const Item = (props: ItemProps) => {
  return (
    <div className="tags has-addons" style={{ marginBottom: "0px" }}>
      <span
        className="tag  is-medium"
        style={{
          backgroundColor: "white",
          marginRight: "-10px",
        }}
      >
        {props.image && (
          <figure className="image is-24x24">
            <img src={props.image} />
          </figure>
        )}

        {!props.image && (
          <span className="icon has-text-success">
            <i className="fas fa-check-square"></i>
          </span>
        )}
      </span>
      <span
        className="tag  is-medium"
        style={{
          backgroundColor: "white",
        }}
      >
        {props.text}
      </span>
    </div>
  );
};

export const ItemGrouping = (props: ItemGrouping) => {
  const total = props.items.length;
  const rows = Math.ceil(total / props.columns);
  let configuredItems = [];
  for (let i = 0; i < rows; i++) {
    configuredItems.push(
      props.items.slice(i * props.columns, props.columns + i * props.columns)
    );
  }
  return (
    <div
      style={{
        marginBottom: "30px",
        borderTop: "solid 1px #fad052",
        borderBottom: "solid 1px #fad052",
        paddingBottom: "12px",
      }}
    >
      {configuredItems.map((value: any) => {
        return (
          <div className="columns is-mobile">
            {value.map((data: any) => {
              return (
                <div
                  className="column"
                  style={{
                    marginBottom: "-20px",
                    textAlign: "center",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                  }}
                >
                  <div style={{ display: "inline-block" }}>
                    {data.image && <Item text={data.text} image={data.image} />}
                    {!data.image && <Item text={data.text} />}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const Pricing = (props: PricingProps) => {
  return (
    <section className="section">
      <div className="container has-text-centered py-4">
        <h2 className="title mb-6">{props.title}</h2>
        <div className="columns">
          {props.plans.map((plan: any) => {
            return (
              <div className="column">
                <div
                  className="card"
                  style={{
                    borderTop: "solid 2px #fad052",
                    borderBottom: "solid 2px #fad052",
                  }}
                >
                  <div className="card-content" style={{ textAlign: "center" }}>
                    {plan.img && (
                      <figure
                        className="image is-96x96"
                        style={{ display: "inline-block" }}
                      >
                        <img className="" src={plan.img} />
                      </figure>
                    )}

                    <h3 className="title is-4">{plan.title}</h3>
                    <p className="block">{plan.description}</p>

                    {plan.groups.map((group: any) => {
                      return (
                        <div>
                          <h3
                            className="title is-6"
                            style={{ marginBottom: "5px" }}
                          >
                            {group.title}
                          </h3>
                          <div>
                            <ItemGrouping
                              items={group.items}
                              columns={group.columns}
                            />
                          </div>
                        </div>
                      );
                    })}

                    <h4 className="title is-spaced is-5">{plan.price}</h4>
                    <a href={plan.callToActionLink}>
                      <button className="button is-primary" type="button">
                        {plan.callToAction}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
