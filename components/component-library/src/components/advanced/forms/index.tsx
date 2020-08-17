import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";

export interface contactProps {
  contactData: any;
}

export const Contact = (props: contactProps) => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <section className="section" style={{ maxWidth: "100%" }}>
      <div className="container py-4">
        <div className="columns">
          <div className="column is-6">
            <h4 className="title is-spaced is-4">{props.contactData.title}</h4>
            <p className="subtitle">{props.contactData.subtitle}</p>
            <div>
              {props.contactData.options.map((value: any) => {
                return <div className="media">{value()}</div>;
              })}
            </div>
          </div>
          <div className="column is-5 is-offset-1">
            <form onSubmit={handleSubmit(props.contactData.onSubmit)}>
              <div className="field">
                <div className="control">
                  <input
                    name="email"
                    className="input"
                    type="email"
                    placeholder="Email"
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              <div className="field">
                <div className="select is-fullwidth">
                  <select
                    name="ContactReason"
                    ref={register({ required: true })}
                  >
                    <option value="" disabled selected>
                      Contact Reason
                    </option>
                    <option>Hiring Interest</option>
                    <option>Project Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea
                    name="ContactMessage"
                    className="textarea"
                    rows={6}
                    placeholder="Write something..."
                    ref={register({ required: true })}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-primary is-fullwidth"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
