import React from "react";


function Projects() {
    return (
        <div id="works">
            <div class="slideshow-container">
                <h2>Solo Endeavors</h2>
                <div class="assignments">
                    <div class="works codeRefactor">
                        <h3>Accessibility</h3>
                        <p>When considering the most important aspect of a webpage it is tempting to say layout, color
                            coordination, or perhaps even readability. What first has to be considered for each
                            indificual user though is whether or not the can even perceive the page. This work took an
                            accessibility first approach with focus on aria labels</p>
                        <a href="https://jmsingh9899.github.io/first-day-repo/" target="_blank">Horiseon Code
                            Refactor</a>
                        <a href="https://github.com/jmsingh9899/horieson-accessibility" target="_blank">Repository</a>
                    </div>
                    <div class='works dailyPlanner'>
                        <h3>Managing the day</h3>
                        <p>Ever feel like your losing track of your day, as if every moment passes far to quickly with
                            too much to do. Writing it all out can be tedious and putting it your phone calendar can get
                            overwhelming as you arre presented with numerous days and times. Keeping it simple and
                            optimized for the daily life this application has already sectioned off the hours and only
                            presents
                            you with the current day.</p>
                        <a href="https://jmsingh9899.github.io/daily-planner/" target="_blank">Daily Planner</a>
                        <a href="https://github.com/jmsingh9899/daily-planner" target="_blank">Repository</a>
                    </div>
                    <div class="works passwordGenerator">
                        <h3>Security</h3>
                        <p>Often times the most daunting aspect of life is being told to do something on the spot. The
                            demand of creativity on a moments whim can leave even the wittiest of us confused. Even more
                            so when that moments worth of creativity is related to the scurity of something potentially
                            meaningful. Passwords with all their requirements and their connection to security are made
                            friendly with this password generator where all you have to do is provide the parameters.
                        </p>
                        <a href="https://jmsingh9899.github.io/security-generator/" target="_blank">Password
                            Generator</a>
                        <a href="https://github.com/jmsingh9899/security-generator" target="_blank">Repository</a>
                    </div>
                </div>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
        </div>
    )
}


export default Projects