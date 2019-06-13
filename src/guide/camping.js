import React from 'react'

import campingImg from './images/camping.jpg'

export default () => (
  <section className="guide-camping">
    <img src={campingImg} alt="Camping is great!" />
    <p>
      To make your festival camping experience as pleasant and comfortable as
      possible, ample shower and toilet facilities are available at the site. We
      also recommend you bring those trusty little tent pegs to pin your tents
      down, as it can get quite windy. For your convenience, there is a charging
      station and designated areas to pump inflatable mattresses – please bring
      your own chargers/pumps! Camping is only allowed in the allocated area
      within the festival site and unfortunately, finding somewhere to string up
      a hammock is unlikely, so we suggest you leave it at home.
    </p>
    <dl>
      <dt>CAMPSITE PASS</dt>
      <dd>
        If festival camping in the great outdoors is your thing, you’ll first
        need an admission pass, and then an additional tent pass that is
        purchased separately. Camping passes are also limited, so get hold of
        yours in time to avoid disappointment. Only one camping pass per tent is
        required.
      </dd>

      <dt>PLEASE REMEMBER</dt>
      <dd>
        <ul>
          <li>Turn off taps and showers when finished.</li>
          <li>Don't leave rubbish or your camping gear behind!</li>
          <li>
            Smokers, grab a reusable ashtray on the way in, and use it to store
            your cigarette butts instead of chucking them on the ground..
          </li>
          <li>Re-use your carrier bags.</li>
          <li>
            Take recycling and rubbish bags with you and keep the campsite clean
            and tidy at all times.
          </li>
          <li>
            No cooler boxes or drinks will be permitted onto any part of the
            festival site.
          </li>
          <li>
            Bring your frisbees, swimming suits, sun block, comfortable shoes
            and good festive vibes!
          </li>
        </ul>
      </dd>
    </dl>
  </section>
)
