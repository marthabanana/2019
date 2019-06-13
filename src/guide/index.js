import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Thumbnail from '../Thumbnail'

import mapImg from './images/map.png'

export default class Guide extends PureComponent {
  render() {
    return (
      <section className="guide">
        <h1>Your Guide to ABR</h1>
        <Thumbnail offset={[0, '40%']}>
          <a href={mapImg} target="_blank" rel="noopener noreferrer">
            <img src={mapImg} alt="Location map" />
          </a>
        </Thumbnail>
        <div className="box-container">
          <div className="box">
            <h3>THE MUSIC</h3>
            <p>
              Music lovers listen up. Yep, we’re talking to you! This year we’ve
              put together a thrilling three-day line up of genre-defying music
              that we think is going to blow your minds! You can look forward to
              two epic new stage concepts and three full days and nights of
              brilliant beats by the beach. Right now, a hand-picked selection
              of 30 of the best internationally renowned artists, bands and DJs
              from across the world, including right here in Cyprus are gearing
              up to get your feet moving to a soundtrack of explosive fusion
              sounds from around the world. From Afrojazz to electro Cumbia;
              funk to blues and mambo to flamenco, you name it. We’ve got it –
              and more!
            </p>
          </div>
          <div className="box">
            <h3>DAYTIME ACTIVITIES & FAMILY TIME</h3>
            <p>
              The next generation of AfroBananians are very important to us and
              we love seeing whole families and kids come down and join in the
              fun. Our dedicated Kid’s Area provides an inspiring schedule of
              children’s activities aiming to engage young minds, ignite
              curiosity and celebrate creativity. And for the adults, relax and
              unwind, with wellness activities such as yoga and Tai Chi, or get
              stuck in with interactive music labs and collaborative beach
              racket matches by Ace Playground.
            </p>
          </div>
          <div className="box">
            <h3>ARTISTIC EXPLORATIONS</h3>
            <p>
              AfroBanana Festival is all about transporting you to a surreal
              parallel universe; opening the doors to a whimsical playground
              infused by the magic of artistic innovation, curiosity and
              creative expression. So, whether you’ve come for the music, or
              just for a weekend camping at the beach, be sure to keep your eyes
              peeled for creative projects; glowing light structures and
              interactive art installations embracing the natural phenomena of
              the site such as the wind, or. So, join in, expand your horizons,
              awaken the senses and really live the experience.
            </p>
          </div>
          <div className="box">
            <h3>Camping</h3>
            <p>
              Our festival campsite this year is the enchanting Kiti Forest.
              Just steps away from the clear blue sea and populated by a family
              of fledgling eucalyptus trees, the area perfectly delivers the
              ultimate summer festival experience. Really make the most of the
              three-day event by pitching your tent in the great outdoors and
              sleeping under the stars. For the total comfort of our campers,
              we’ll be installing a purpose-built, shade-providing structure to
              ensure you can relax and stay cool. Camping space is limited and
              cannot be reserved; its first-come-first-served, so come down
              early!.{' '}
            </p>
            <Link to="/guide/camping" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className="box">
            <h3>Environment, Health & Safety</h3>
            <p>
              Looking after your safety as well as the environment that is so
              kindly hosting us, is one of our top priorities at AfroBanana
              Festival. We’re not just about dancing to mind-blowing music until
              the sun comes up! We also have a strong environmental conscience
              and a dedication to providing the best holistic experience
              possible. Read on for more information on how we plan to keep you
              and Mother Nature safe during the event.
            </p>
            <Link to="/guide/environment" className="btn btn-primary">
              Health &amp; Safety
            </Link>
          </div>
          <div className="box">
            <h3>Food &amp; Drinks</h3>
            <p>
              Foodies and gastronomes; prepare to have your taste buds well and
              truly tantalised at our new and improved Food & Drinks Market.
              We’ve gone bigger and better than ever before, with an even wider
              variety of mouth-watering taste sensations from around the world,
              from the best pop-up stalls and eateries the island has to offer.
              Whatever you want, and whenever you want it – we’ve got those
              hunger pangs covered, with hearty breakfasts fit for a king; light
              midnight snacks; nutrition packed combos for daytime dining and
              those ever-popular festival staples. Oh, and expert mixologists
              will also be on hand throughout, concocting delicious cocktails
              exclusively for the occasion.
            </p>
            <Link to="/guide/menu" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    )
  }
}
