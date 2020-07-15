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
    const style = {
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 20px",
    };

    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style={style}
      >
        {/* Contains logo and mobile menu button */}
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="">
              <img
                src="https://i.ibb.co/cwF4qcH/logo.png"
                alt="LOGO"
                height="60"
                width="70"
              />
              <h1 className="is-primary-font is-primary-color">
                {" "}
                <b>David Olive</b>
              </h1>
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
