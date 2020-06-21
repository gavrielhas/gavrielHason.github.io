import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          right
        >
          <Link
            onClick={() => this.closeMenu()}
            id="about"
            className="menu-item text-capitalize"
            to="/"
          >
            home
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            className="menu-item text-capitalize"
            id="home"
            to="/ProductList"
          >
            product list
          </Link>

          <Link
            onClick={() => this.closeMenu()}
            id="contact"
            className="menu-item text-capitalize"
            to="/"
          >
            Contact
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            id="cart"
            className="menu-item text-capitalize"
            to="/cart"
          >
            cart
          </Link>
        </Menu>
      </div>
    );
  }
}
