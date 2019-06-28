import React, { PureComponent } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'

import './style.css'
import FB from './images/fb.svg'
import Instagram from './images/instagram.svg'
import Twitter from './images/twitter.svg'

export default class TopNavBar extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.onToggle = this.onToggle.bind(this)
    this.state = {
      expanded: false,
    }
  }

  handleClick(e) {
    const { expanded } = this.state
    if (expanded) {
      this.setState({
        expanded: !expanded,
      })
    }
  }

  onToggle(expanded) {
    this.setState({
      expanded,
    })
  }

  render() {
    const { expanded } = this.state

    return (
      <Navbar
        expanded={expanded}
        onToggle={this.onToggle}
        onClick={this.handleClick}
        fluid
        className="navigation"
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              ABR <sup>2019</sup>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <ul className="nav navbar-nav">
            <li role="presentation">
              <a href="#timetable">Timetable</a>
            </li>
            <li role="presentation">
              <a href="#guide">Guide</a>
            </li>
            <li role="presentation">
              <a href="#location">Location</a>
            </li>
            <li role="presentation">
              <a href="#about">About</a>
            </li>
            <li role="presentation" className="tickets">
              <a
                href="http://abr.ticket.com.cy/event/page/1"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tickets
              </a>
            </li>
            <li role="presentation" className="social">
              <a
                href="https://www.facebook.com/TheAfroBananaRepublic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FB} alt="" />
              </a>
            </li>
            <li role="presentation" className="social">
              <a
                href="https://twitter.com/afrobananarpb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="" />
              </a>
            </li>
            <li role="presentation" className="social">
              <a
                href="https://www.instagram.com/afrobananarpbc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="" />
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
