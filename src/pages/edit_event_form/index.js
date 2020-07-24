import React, { Component } from 'react';
import "./styles.css";
import api from '../../services/api';
import { Redirect } from 'react-router-dom';

export default class UpdateEventForm extends Component {
    state = {
        redirect: null, //the page will not redirect until this chenges
        ID: this.props.match.params.id,
        eventName: '',
        eventLocation: '',
        eventDate: '',
        eventOrganizer: '',
        eventDescription: '',
    };

    componentDidMount() {
        this.getEventData(this.state.ID);
    }
    
    getEventData = async (ID) => { 
        const response = await api.get(`/events/${ID}`); //gets the data from api acessing the route passed

        this.newEvent = { //Updates the event data with the existing on the database
        name: response.data.events['name'],
        location: response.data.events['location'],
        date: response.data.events['date'],
        organizer: response.data.events['organizer'],
        description: response.data.events['description'],
    };
        
        //changes the newEvent data to the information in the database
        this.setState({eventName: this.newEvent['name']});
        this.setState({eventLocation: this.newEvent['location']});
        this.setState({eventDate: this.newEvent['date']});
        this.setState({eventOrganizer: this.newEvent['organizer']});
        this.setState({eventDescription: this.newEvent['description']});
    };

    updateEvent = async (ID) => {
        this.newEvent = { //updates the event data based on the input value
        name: this.state.eventName,
        location: this.state.eventLocation,
        date: this.state.eventDate,
        organizer: this.state.eventOrganizer,
        description: this.state.eventDescription,
    };
        this.setState({ redirect: "/events/all" }); 
        const response = await api.put(`/events/${ID}`, this.newEvent); //post the event JSON from the input data in the database 
    };

    handleInputChange = (event) => {
        //event.target.name is equal to the name of the input using the function
        //event.target.value is equal to the value of the input using the function
        this.setState({
        [event.target.name]: event.target.value //sets the name of the input being changed to the value typed
        });
    };


    render() {

        if (this.state.redirect) { //if redirect in the state variable is true(not null or false) 
            return <Redirect to={this.state.redirect} /> //page is redirected to the redirect set in state
        }
        
        return (
            <div className="edit_event-container">
            <div class="form">
                <h2>Post you event here!</h2>
                <form>
                    <label for="event_name">Event Name: </label>
                    <input type="text" name="eventName" id="event_name" value={this.state.eventName} onChange={this.handleInputChange} />
                    <label for="event_location">Event Location: </label>
                    <input type="text" name="eventLocation" id="event_location" value={this.state.eventLocation} onChange={this.handleInputChange} />
                    <label for="event_time">Event Date: </label>
                    <input type="text" name="eventDate" id="event_time" value={this.state.eventDate} onChange={this.handleInputChange} /> 
                    <label for="event_organizer">Event Organizer: </label>
                    <input type="text" name="eventOrganizer" id="event_organizer" value={this.state.eventOrganizer} onChange={this.handleInputChange} />
                    <label for="event_description">Event Description: </label>
                    <input type="text" name="eventDescription" id="event_description" value={this.state.eventDescription} onChange={this.handleInputChange} />

                    <input type="submit" value="Post!" id="edit-button" onClick={() => this.updateEvent(this.state.ID)} />
                </form>
            </div>
        </div>
        )
        
    }

};
