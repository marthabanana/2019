import React from 'react'

import './style.css'
import Ticket from './images/ticket.svg'

export default () => (
  <a
    href="http://abr.ticket.com.cy/event/page/1"
    id="get-tickets"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={Ticket} alt="!" />
  </a>
)
