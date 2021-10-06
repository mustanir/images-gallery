import React from 'react';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
const Welcome = () => (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>
      This is simple application that retrieves photos using Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn More
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
