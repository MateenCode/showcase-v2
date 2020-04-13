import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchCards, deleteCard } from "actions";
import { animateScroll as scroll } from "react-scroll";

import { down, up } from "assets";
import { Loading, Card, Header, Slideshow } from "components";

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

  delete = (id) => {
    this.props.deleteCard(id);
  };

  render() {
    const { cards } = this.props.cards;
    const { admin } = this.props;
    return (
      <>
        <Header
          header='Mateen Kazia'
          sub='Demonstration page to display my work'
        />

        <article className='home'>
          <section className='home__wrapper'>
            <img
              onClick={this.scrollToBottom}
              className='home__icon'
              src={down}
              alt='down'
            />
            <br />
            <Slideshow
              title='KittyFresh'
              image='https://user-images.githubusercontent.com/28902787/79084682-aaf3e400-7cfa-11ea-92c1-cceea055420a.png'
              desc='massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. This is a full stack app (MERN stack), using Firebase.'
              github='https://github.com/MateenCode/KittyFresh'
              live='https://kittyfresh.herokuapp.com/'
              admin='false'
            />
            <div className='home__cards'>
              {cards && cards.length > 0 ? (
                cards
                  .sort((a, b) => b.id - a.id)
                  .map((card) => (
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
        </article>
      </>
    );
  }
}

const mapStateToProps = ({ cards, admin }) => ({ cards, admin });

export default connect(mapStateToProps, { fetchCards, deleteCard })(index);
