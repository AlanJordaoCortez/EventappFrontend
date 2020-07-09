import React, { Component } from 'react';
import "./styles.css";
import api from '../../services/api';
import { Redirect } from 'react-router-dom';

export default class EventForm extends Component {
    eventNameInput;
    eventLocationInput;
    eventDateInput;
    eventOrganizerInput;
    eventDescriptionInput;
    newEvent;
    state = {
        redirect: null //the page will not redirect until this chenges
    };
    
    
    postNewEvent = async () => {
        this.newEvent = { //creates an event based on what's in the body's JSON
        name: this.eventNameInput.value,
        location: this.eventLocationInput.value,
        date: this.eventDateInput.value,
        organizer: this.eventOrganizerInput.value,
        description: this.eventDescriptionInput.value,
    };
    this.setState({ redirect: "/events/all" }); 
    const response = await api.post('/events', this.newEvent); //post the event JSON from the input data in the database

    };

    render() {

        if (this.state.redirect) { //if redirect in the state variable is true(not null or false) 
            return <Redirect to={this.state.redirect} /> //page is redirected to the redirect set in state
        }

        return (
            <div className="new_event-container">
            <div class="form">
                <h2>Post you event here!</h2>
                
                <form action="" method="">
                    <label for="event_name">Event Name: </label>
                    <input type="text" name="event_name" id="event_name" ref={(c) => this.eventNameInput = c} placeholder="Cooking competition" />
                    <label for="event_location">Event Location: </label>
                    <input type="text" name="event_location" id="event_location" ref={(c) => this.eventLocationInput = c} placeholder="Memorial Union, room 231" />
                    <label for="event_time">Event Date: </label>
                    <input type="text" name="event_time" id="event_time" ref={(c) => this.eventDateInput = c} placeholder="7pm 22/09" /> 
                    <label for="event_organizer">Event Organizer: </label>
                    <input type="text" name="event_organizer" id="event_organizer" ref={(c) => this.eventOrganizerInput = c} placeholder="Cooking club" />
                    <label for="event_description">Event Description: </label>
                    <input type="text" name="event_description" id="event_description" ref={(c) => this.eventDescriptionInput = c} placeholder="A 1 hour workshop on how to make a delicious italian dish" />

                    <input type="submit" value="Post!" id="post-button" onClick={this.postNewEvent} />
                </form>
            </div>
        </div>
        )
        
    }

};