import React, { Component } from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';


export default class Main extends Component {
    
    render() {
        return (
            <div className="home-page">
                <header>
                    <h1>Find about awesome events on campus.</h1>
                    <nav>
                        <input type="text" placeholder="Find the event that fits you"/>
                        <button class="search-btn">Search</button>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><Link to="/events/all" >Events</Link></li>
                            <li><a href="#">For organizers</a></li>
                        </ul>               
                    </nav>
                </header>
                <div className="home-container">
                    <p className="about">
                        <span>What's Agora??</span><br></br>
                        Agora stands for exploration. We are here to help you to get to know the community around better.<br></br>
                        <strong>Find out where to get</strong>
                    </p>
                    <figure>
                        <img src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.channel3000.com/content/uploads/2019/12/students_1521138263798_10694196_ver1-0-1024x576.jpg"></img>   
                    </figure>
                </div>
                
                <div className="home-container" id="second">
                    <p class="about">If you are an event organizer, Agora is here to assists you to connect to more people and get more engagement.<br></br>
                    <Link to="/events/all" >Promote your event for free!</Link></p>
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHpMv0fuTxSTIM5kOIZY5jZBXI893Tc-vrnUhcb2S2crs3hs_I&usqp=CAU" alt="" />
                    </figure>
                </div>

                <div class="form">
                    <h3>Enjoy using Agora? Be one of our first app users!</h3>
                    
                    <form action="./form.txt" method="POST">
                        <label for="userEmail">Email: </label>
                        <input type="text" name="userEmail" id="userEmail" placeholder="Example@email.com" />
                    </form>
                </div>

            </div>
        );
    }
}