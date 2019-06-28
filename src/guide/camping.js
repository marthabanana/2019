import React from 'react'

import campingImg from './images/camping.jpg'

export default () => (
  <section className="guide-camping">
    <img src={campingImg} alt="Camping is great!" />
    <p>
      To make your festival camping experience as pleasant and comfortable as
      possible, ample shower and toilet facilities are available at the site.
      For your convenience, there is a charging station and designated areas to
      pump inflatable mattresses – please bring your own chargers/pumps! Camping
      is only allowed in the allocated area within the festival site.
    </p>
    <dl>
      <dt>CAMPSITE PASS</dt>
      <dd>
        If festival camping in the great outdoors is your thing, you’ll first
        need an admission pass, and then an additional tent pass that is
        purchased separately. A camping pass is valid from 1 to 4 nights, and is
        only valid for the duration of your Festival Admission Pass. Camping
        passes are also limited, so get hold of yours in time to avoid
        disappointment. Only one camping pass per tent is required.
      </dd>

      <dt>PLEASE REMEMBER</dt>
      <dd>
        <ul>
          <li>Turn off taps and showers when finished.</li>
          <li>• Don't leave rubbish or your camping gear behind!</li>
          <li>
            Smokers, bring your festival reusable ashtray with you, and use it
            to store your cigarette butts instead of chucking them on the
            ground. A lot of love and hard work is put into keeping Val’s Place
            the beautiful, food-providing land that it is. Let’s keep it that
            way.
          </li>
          <li>Re-use your carrier bags.</li>
          <li>
            Take recycling and rubbish bags with you when you leave and keep the
            campsite clean and tidy at all times.
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
