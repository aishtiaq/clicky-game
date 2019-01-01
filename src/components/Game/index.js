import Jumbotron from "../Jumbotron";
import Header from "../Header";
import React, { Component } from 'react';
import data from "../../Data";
import Cards from "../Cards";
import Footer from "../Footer";

import "./index.css";

export default class index extends Component {
    state = {
        data: data,
        score: 0,
        topScore: 0,
        message: "Click an image to begin!"
    }

    randomizeData = data => {
        return data.sort(function(a, b){return 0.5 - Math.random()});
    }
  
    cardClicked = id => {
        var guessed=false;
        const updatedData = this.state.data.map(char => {
            if (char.id === id) {
              if (!char.clicked) {
                char.clicked = true;
                guessed = true;
              }
            }
            return char;     
        }); 
        if(guessed === true) {
            var score = this.state.score;
            score++;
            this.setState(
                {
                    score: score,
                    topScore: Math.max(score, this.state.topScore),
                    data: this.randomizeData(updatedData),
                    message: "You guessed correctly!"

                });
        } else {
            const resetData = data.map(char => ({ ...char, clicked: false }));

            this.setState({
                data: this.randomizeData(resetData),
                score: 0,
                message: "You guessed incorrectly!"
            })
        }
    }

    render() { 
        return (
            <div className="animate fadein"> 
            <Header score={this.state.score} topScore={this.state.topScore}>
                {this.state.message}
            </Header>
            <Jumbotron> <strong>
                <h1>Clicky Game </h1>
                <h3>Click on an image to earn points, but don't click on any more than once!</h3>
                </strong> 
            </Jumbotron> 
            <div className="container">
                {
                    this.state.data.map(char => (
                        <div className="animated">
                            <Cards
                                key={char.id}
                                id={char.id} 
                                image={char.img}
                                animate={!this.state.score && this.state.topScore}
                                clicked={char.clicked}
                                handleClick={this.cardClicked}
                            />      
                        </div>  
                    ))
                }
            </div> 
            <Footer />
            </div>
        )
    }
}
