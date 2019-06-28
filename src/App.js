import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Sticky from 'react-stickynode'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import About from './about'
import Camping from './guide/camping'
import Directions from './directions'
import Environment from './guide/environment'
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
        <Sticky>
          <Nav />
        </Sticky>
        <Switch>
          <Route
            path="/guide/camping"
            render={() => (
              <Modal show={true} onHide={this.goHome}>
                <Modal.Header closeButton>
                  <Modal.Title>Camping</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Camping />
                </Modal.Body>
              </Modal>
            )}
          />
          <Route
            path="/guide/environment"
            render={() => (
              <Modal show={true} onHide={this.goHome}>
                <Modal.Header closeButton>
                  <Modal.Title>Environment, Health, &amp; Safety</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Environment />
                </Modal.Body>
              </Modal>
            )}
          />
          <Route
            path="/artist/:id"
            render={props => (
              <ArtistModal id={props.match.params.id} goBack={this.goHome} />
            )}
          />
          <Route
            path="/activity/:id"
            render={props => (
              <ActivityModal id={props.match.params.id} goBack={this.goHome} />
            )}
          />
        </Switch>
        <Landing />
        <a name="timetable" className="section-break">
          &nbsp;
        </a>
        <Timetable />
        <a name="guide" className="section-break">
          &nbsp;
        </a>
        <Guide />
        <a name="location" className="section-break">
          &nbsp;
        </a>
        <Directions />
        <a name="about" className="section-break">
          &nbsp;
        </a>
        <About />
        <Tickets />
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
