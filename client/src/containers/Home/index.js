import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchCards, deleteCard } from "actions";
import { animateScroll as scroll } from "react-scroll";

import Header from "./Header";
import { down, up } from "assets";
import { Footer, Navbar, Loading, Card } from "components";

export class index extends PureComponent {
  componentDidMount() {
    this.props.fetchCards();
  }

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  delete = id => {
    this.props.deleteCard(id);
  };

  render() {
    const { cards } = this.props.cards;
    const { admin } = this.props;
    return (
      <>
        <Navbar admin={admin} />
        <Header />
        <main className='home'>
          <section className='home__wrapper'>
            <img
              onClick={this.scrollToBottom}
              className='home__icon'
              src={down}
              alt='down'
            />
            <br />
            <div className='home__cards'>
              {cards && cards.length > 0 ? (
                cards
                  .sort((a, b) => b.id - a.id)
                  .map(card => (
                    <Card
                      key={card.id}
                      title={card.title}
                      image={card.image}
                      desc={card.description}
                      github={card.github}
                      live={card.live}
                      admin={admin}
                      delete={this.delete.bind(this, card.id)}
                    />
                  ))
              ) : (
                <Loading />
              )}
            </div>
            <br />
            {cards && (
              <img
                onClick={this.scrollToTop}
                className='home__icon '
                src={up}
                alt='up'
              />
            )}
          </section>
        </main>
        {cards && <Footer />}
      </>
    );
  }
}

const mapStateToProps = ({ cards, admin }) => ({ cards, admin });

export default connect(
  mapStateToProps,
  { fetchCards, deleteCard }
)(index);
