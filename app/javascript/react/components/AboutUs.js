import React from "react"

const AboutUs = () => {
  
  return(
    <div class="grid-container">
      <h1 class="text-center">☕️ Cool Beans</h1>
      <div class="grid-x grid-margin-x grid-padding-x align-center-middle">
        <div class="callout coffee cell small-10">
          <p>Cool Beans is an app that allows users to find great coffeeshops in the area. Users are also able to review and rate a coffeeshop, add a new coffeeshop, and up-vote or down-vote reviews.</p>
          <h4 class="about-us-detail text-center">Technology</h4>
          <p class="text-center">React, Ruby on Rails, Postgres, Heroku, GitHub</p>
        </div>
      </div>
      
      <h1 class="text-center">The Team</h1>
      <div class="grid-x grid-margin-x">
        <div class="callout coffee cell small-6">
          <h3 class="text-center">Martin - <a class="about-us-detail" href="https://github.com/mvserna">@mvserna</a>
          </h3>
            <h4 class="about-us-detail">Favorite Coffee</h4>
            <p> A Chiapas bean, medium roasted, as an extra strong pour over.</p>
            <h4 class="about-us-detail">Favorite Coffeeshop</h4>
            <p>Caffe Vittoria for the old-school Boston charm.</p>
        </div>

        <div class="callout coffee cell small-6">
          <h3 class="text-center">Tracy - <a class="about-us-detail" href="https://github.com/tracyalbernaz">@tracyalbernaz</a>
          </h3>
            <h4 class="about-us-detail">Favorite Coffee</h4>
            <p>Spicy Chai Latte (she actually drinks tea instead 💁🏻‍♀️)</p>
            <h4 class="about-us-detail">Favorite Coffeeshop</h4>
            <p>Coffee Depot</p>
        </div>

        <div class="callout coffee cell small-6">
          <h3 class="text-center">Rupert - <a class="about-us-detail" href="https://github.com/rupertjamessimpson">@rupertjamessimpson</a>
          </h3>
            <h4 class="about-us-detail">Favorite Coffee</h4>
            <p>Starbucks Blonde</p>
            <h4 class="about-us-detail">Favorite Coffeeshop</h4>
            <p>Starbucks</p>
        </div>

        <div class="callout coffee cell small-6">
          <h3 class="text-center">Brian - <a class="about-us-detail" href="https://github.com/blee3D">@blee3D</a>
          </h3>
            <h4 class="about-us-detail">Favorite Coffee</h4>
            <p>Most french-pressed medium roasts</p>
            <h4 class="about-us-detail">Favorite Coffeeshop</h4>
            <p>Thinking Cup @ Boston Common</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs