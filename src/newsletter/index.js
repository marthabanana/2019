import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import React from 'react'

import './style.css'

export default () => (
  <form
    className="newsletter"
    method="post"
    target="_blank"
    action="//afrobananarepublic.us5.list-manage2.com/subscribe/post?u=f58ce58e822a97a9cbfcef2e2&amp;id=79ef686f01"
  >
    <FormGroup>
      <InputGroup>
        <FormControl
          type="email"
          name="EMAIL"
          placeholder="Your email address"
          required
        />
        <InputGroup.Button>
          <Button type="submit" name="subscribe" bsStyle="primary">
            Subscribe!
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>

    <HelpBlock>
      We send newsletters <strong>infrequently</strong>.
      <br />
      We keep your e-mail to ourselves and won't share it with anyone.
    </HelpBlock>
  </form>
)
