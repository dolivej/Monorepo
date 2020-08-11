import React, { ReactNode } from "react";

export interface NavProps {
  children?: ReactNode;
}

export class Nav extends React.Component<
  {
    children?: ReactNode;
  },
  { clicked: boolean; active: string }
> {
  constructor(
    props: Readonly<{
      children?: ReactNode;
    }>
  ) {
    super(props);

    this.state = {
      clicked: false,
      active: "",
    };
  }

  onClick = () => {
    this.setState(
      {
        clicked: !this.state.clicked,
      },
      () => {
        if (this.state.clicked) {
          this.setState({
            active: "is-active",
          });
        } else {
          this.setState({
            active: "",
          });
        }
      }
    );
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {/* Contains logo and mobile menu button */}
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="">
              <div className="tags has-addons">
                <span
                  className="tag is-medium is-primary"
                  style={{ padding: "5px" }}
                >
                  {" "}
                  <h1 className="title is-4">⚡</h1>{" "}
                </span>
                <span
                  className="tag is-medium"
                  style={{
                    backgroundColor: "white",
                    border: "solid 2px #fad052",
                  }}
                >
                  {" "}
                  <h1 className="title is-4">David Olive</h1>
                </span>
              </div>
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar"
              onClick={this.onClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          {/* Contains Navbar Links and Buttons, this.state.active for mobile menu popup */}
          <div id="navbar" className={"navbar-menu " + this.state.active}>
            {this.props.children}
          </div>
        </div>
      </nav>
    );
  }
}
