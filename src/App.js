import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Sticky from 'react-stickynode'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import About from './about'
import Camping from './guide/camping'
import Directions from './directions'
import Environment from './guide/environment'
import FoodMenu from './guide/menu'
import Guide from './guide'
import Landing from './landing'
import Nav from './nav'
import Tickets from './tickets'
import Timetable from './timetable'
import { ActivityModal } from './activities'
import { ArtistModal } from './artists'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.goHome = this.goHome.bind(this)
  }

  componentDidMount() {
    const { history } = this.props
    this.stopTracking = history.listen((location, action) => {
      window.capture(
        'pageview',
        `${location.pathname}${location.search}${location.hash}`
      )
    })
  }

  componentWillUnmount() {
    this.stopTracking()
  }

  goHome() {
    const history = this.props.history
    history.push('/')
  }

  render() {
    return (
      <section className="abr">
        <Landing />
        <p className="copyright">
          Copyright &copy; {new Date().getUTCFullYear()} Alternative Brains Rule
          <br />
          <a href="https://github.com/afrobanana/2019">
            <small>{process.env.REACT_APP_VERSION}</small>
          </a>
        </p>
      </section>
    )
  }
}

export default withRouter(App)
