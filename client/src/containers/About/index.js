import React from "react";
import { Header } from "components";

export default function index() {
  return (
    <>
      <article className='about'>
        <Header
          header='About Me'
          sub='Front-End Development | UI/UX Design & Development'
        />
        <br />
        <section className='about__text u-margin-bottom-small u-margin-top-small'>
          <p>
            I am a self-taught developer with an insatiable thirst for learning
            new technologies, as demonstrated by the many courses I have taken
            through Udemy and similar programs. In 2017, I also completed a
            12-week, fullstack immersion program, during which I gained a
            foundational understanding of server-side and front-end development.
            It was during this time that I discovered my passion for teaching
            which prompted me to start AlphaCode Academy, through which I
            provide 1-on-1 training for aspiring and beginner-level software
            engineers.
          </p>
          <br />
          <p>
            Over my four years in software development, I have had the pleasure
            of working in both startup and corporate environments. Most
            recently, I served as the Lead Front-End Developer for SERVE where I
            played an integral role in designing and developing
            fully-decentralized logistics solutions for world-renowned
            companies, including Amazon, Walmart, and Walgreens. Leveraging an
            agile development approach, I led a team of four engineers to design
            user-centric software solutions that would allow our clients to
            control inventory, optimize processes, and reduce costs. All of the
            solutions that we built were developed using blockchain technology
            and concepts.
          </p>
          <br />
          <p>
            After finishing my project with SERVE Token, I have been focusing on
            my tutoring business while searching for a company to call home.
            When starting my career in software development, I was eager to work
            for a variety of companies so I could gain practical exposure to a
            large number of technologies, but after accumulating over four years
            of experience, I am now eager to find a company where I can settle
            down. As your new developer, I will commit myself to making a
            positive impact on your customers, partners, and employees. I know,
            firsthand, the drive and dedication that it takes to build a
            thriving company and am here to help you take your organization to
            the next level, no excuses.
          </p>
        </section>
        <footer className='about__footer u-margin-bottom-small'>
          <h2>Mateen Kazia</h2>
          <ul>
            <li>
              <strong>Github:</strong> github.com/mateencode
            </li>
            <li>
              <strong>Portfolio:</strong> mateencode.com
            </li>
            <li>
              <strong>Email:</strong> mateencode@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> (818) 581-0902
            </li>
          </ul>
        </footer>
      </article>
    </>
  );
}
