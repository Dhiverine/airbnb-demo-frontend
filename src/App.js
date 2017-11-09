import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Explore Airbnb</h2>
        </div>
        <div class="garden">
          <div class="card-small">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 2-2.png")}
            />
            <h3>Home</h3>
          </div>
          <div class="card-small">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle_2_1.png")}
            />
            <h3>Experiences</h3>
          </div>
          <div class="card-small">
            <img class="img" src={require("./Airbnb_images/Rectangle 2.png")} />
            <h3>Restaurants</h3>
          </div>
        </div>
        <div>
          <h2>Experiences</h2>
        </div>
        <div class="Experiences">
          <div class="card-high">
            <img class="img" src={require("./Airbnb_images/Rectangle-3.png")} />
            <h4>$29</h4> <p2>Forest therapy</p2>
          </div>
          <div class="card-high">
            <img class="img" src={require("./Airbnb_images/Rectangle-2.png")} />
            <h4>$69</h4> <p2>Whale watching</p2>
          </div>
          <div class="card-high">
            <img class="img" src={require("./Airbnb_images/Rectangle-1.png")} />
            <h4>$69</h4> <p2>Table Mountain Summit</p2>
          </div>
          <div class="card-high">
            <img class="img" src={require("./Airbnb_images/Rectangle.png")} />
            <h4>$50</h4> <p2>Salsa night</p2>
          </div>
        </div>
        <div>
          <h2>Homes</h2>
        </div>
        <div class="homes">
          <div class="card-medium">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-2.png")}
            />
            <h4>$82 La Salentina, nature & relax</h4>
          </div>
          <div class="card-medium">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-1.png")}
            />
            <h4>$82 Your private 3 bedr. riad and axclusi...</h4>
          </div>
          <div class="card-medium">
            <img class="img" src={require("./Airbnb_images/Rectangle 6.png")} />
            <h4>>$200 Dreamy Tropical Tree House</h4>
          </div>
        </div>
        <div>
          <h2>Popular reservations around the world</h2>
        </div>
        <div class="Experiences">
          <div class="card-smaller">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-6.png")}
            />
            <h5>Chumley's</h5>
          </div>
          <div class="card-smaller">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-5.png")}
            />
            <h5>Hanjan</h5>
          </div>
          <div class="card-smaller">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-4.png")}
            />
            <h5>Prime Meats</h5>
          </div>
          <div class="card-smaller">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-3.png")}
            />
            <h5>Seaprice</h5>
          </div>
        </div>
        <div>
          <h2>Featured destinations</h2>
        </div>
        <div class="two-colomned">
          <div class="small-high">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-12.png")}
            />
          </div>
          <div class="small-high">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-11.png")}
            />
          </div>
          <div class="small-high">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-10.png")}
            />
          </div>
          <div class="small-high">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-9.png")}
            />
          </div>
          <div class="small-high">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-8.png")}
            />
          </div>
          <div class="small-high">
            <img
              class="img"
              src={require("./Airbnb_images/Rectangle 6-7.png")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
