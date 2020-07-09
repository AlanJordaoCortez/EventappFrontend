import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.css";
import { Link, Redirect } from 'react-router-dom';


export default class Events extends Component {
    state = {
        events: [],
        redirect: null 
    };


    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = async () => { 
        const response = await api.get('/events/all'); //gets the data from api acessing the route passed

        //const { docs, ...eventInfo } = response.data;
        //this.setState({events: docs, eventInfo});

        this.setState({events: response.data.events}); //set the list events in the state to be the data from the api
    };

    newEvent = () => {
        this.setState({ redirect: "/events/new" });
    }

    deleteEvent(eventId) {
        console.log(eventId);
        alert()
        api.delete(`/events/${eventId}`, {});
    };

    /*
    prevPage = () => {};

    nextPage = () => {
        const { page, eventInfo } = this.state;

    };*/


    render() {
        const { events } = this.state; //sets the constant events with the value from the state

        if (this.state.redirect) { //if redirect in the state variable is true(not null or false) 
            return <Redirect to={this.state.redirect} /> //page is redirected to the redirect set in state
        }

        return (
            <div>
                <header id="main-header">Events Near You!</header>
                <div className="post-event-container">
                    <h4>Wanna create your own event?<br></br>Well, go ahead!</h4>
                    <button id="post-btn" onClick={this.newEvent}>Post Event</button>
                
                </div>
                
                <div className="event-list">
                {events.map(event => (
                    <article key={event._id}>
                        <strong>{event.name}</strong>
                        <p><b>Location: </b>{event.location}</p>
                        <p><b>Time: </b>{event.date}</p>
                        <p><b>Organizer: </b>{event.organizer}</p>
                        <p><b>Description: </b>{event.description}</p>  
                        <br></br>
                        <a onClick={() => this.deleteEvent(event._id)}>Delete Event</a>
                    </article>
                ))}
                    <div className="actions">
                        <button /*disabled={page === 1}*/ onClick={this.prevPage}>Before</button>
                    <button /*disabled={page === lastPage}*/ onClick={this.nextPage}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}
