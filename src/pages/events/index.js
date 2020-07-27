import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.css";
import { Link, Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default class Events extends Component {
    state = {
        events: [],
        redirect: null, 
        loading: false,
    };

    eventID;

    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = async () => { 
        const response = await api.get('/events/all'); //gets the data from api acessing the route passed

        this.setState({events: response.data.events}); //set the list events in the state to be the data from the api
        this.setState({loading: true});
    };

    newEvent = () => {
        this.setState({ redirect: "/events/new" });
    }

    editEvent(eventId) {
        this.eventID = eventId;
        console.log(this.eventID);
        this.setState({ redirect: `/events/${eventId}` }); 

    }

    deleteEvent(eventId) {
        this.setState({ redirect: "/events/all" });
        api.delete(`/events/${eventId}`, {});
    };


    render() {
        const { events } = this.state; //sets the constant events with the value from the state
        const { loading } = this.state;

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
                {loading ? <div className="event-list">
                {events.map(event => (
                    <article key={event._id}>
                        <strong>{event.name}</strong>
                        <p><b>Location: </b>{event.location}</p>
                        <p><b>Time: </b>{event.date}</p>
                        <p><b>Organizer: </b>{event.organizer}</p>
                        <p><b>Description: </b>{event.description}</p>  
                        <br></br>
                        <button onClick={() => this.editEvent(event._id)}>Edit</button>
                        <button id="del-btn" onClick={() => this.deleteEvent(event._id)}>Delete</button>
                        
                    </article>
                ))}
                    <div className="actions">
                        <button /*disabled={page === 1}*/ onClick={this.prevPage}>Before</button>
                    <button /*disabled={page === lastPage}*/ onClick={this.nextPage}>Next</button>
                    </div>
                </div> : <Spinner animation="border" role="status" id="spinner">
                    <span className="sr-only">Loading...</span>
                </Spinner>}
            </div>
        )
    }
}
