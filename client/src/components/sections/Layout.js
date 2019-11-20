import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { logo, folder, github, about, tool } from "assets";
import { Link } from "react-router-dom";

export class Layout extends PureComponent {
  render() {
    const { admin, cards } = this.props;
    return (
      <>
        <nav className='navbar'>
          <Link to={"/"}>
            <div className='navbar__box'>
              <img className='navbar__logo' alt='Logo' src={logo} />
              <p className='navbar__text'>showcase</p>
            </div>
          </Link>
          <div className='navbar__box'>
            {admin.admin && (
              <Link to={"/create"}>
                <img className='navbar__icon' alt='create' src={folder} />
              </Link>
            )}
            <Link to={"/about"}>
              <img className='navbar__icon' alt='about' src={about} />
            </Link>
            <a
              href='https://github.com/MateenCode'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='navbar__icon' alt='github' src={github} />
            </a>
          </div>
        </nav>

        <main>{this.props.children}</main>

        {cards && (
          <footer className='footer'>
            <p className='footer__copyright'>
              © 2019 Mateen Kazia All Right Reserved
            </p>
            <img className='footer__logo' src={tool} alt='logo' />
          </footer>
        )}
      </>
    );
  }
}
const mapStateToProps = ({ admin, cards }) => ({ admin, cards });

export default connect(mapStateToProps)(Layout);
