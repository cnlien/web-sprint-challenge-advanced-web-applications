import React, { useState } from 'react';

import { Container } from 'reactstrap';

import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/sprintAnswers.scss'

const SprintAnswers = () => {

  return(
    <div className="sprint-answers">
    <Navigation/>
    <Container className='sprint-answers-inner'>
        <h3>Explain what a token is used for:</h3>
        <p>A token is a string that can be added to localStorage to access items in a Private Route</p>

        <h3>What steps can you take in your web apps to keep your data secure?</h3>
        <p>On the front-end side you can add information inside of Private Routes so that that information is only accessible to individuals with a token. Require stronger passwords and the ability to revoke the token after a session expires.</p>


        <h3>Describe how web servers work.</h3>
        <p>Web servers provide a location to store and manage the files that displayed by the browser. The files are requested through a web browser and an API and then returned to display the data in the DOM.</p>


        <h3>Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.</h3>
        <ul>
            <li>Post: Create</li>
            <li>Get: Read</li>
            <li>Put: Update</li>
            <li>Delete: Destory</li>
        </ul>

        {/* <Button outline size='sm' onClick={toggle}>Reveal Answers</Button> */}

    </Container>
    </div>
  )
}

export default SprintAnswers;