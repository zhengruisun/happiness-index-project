import React from 'react';
import { NavLink } from 'react-router-dom'


export function LandingPage() {
    return (
        <main>
            <section className='intro-text'>
                <header>
                    <LandingHeader />
                </header>
            </section>
            <section>
                    <LandingData />
            </section>
            <section>
                <LandingInfo />
            </section>
            <section className='galary center'>
                <LandingGalary />
            </section>
        </main>
    );
}

export function LandingHeader() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <LandingTitle />
                    <LandingDescription />
                    <LandingButton />
                </div>
                <LandingIntroImg />
            </div>
        </div>
    );
}

export function LandingTitle() {
    return (
        <div>
            <div className='row'>
                <h1>Welcome to The World Happiness Analysis</h1>
            </div>
            <div className="row">
                <h2>The World Happiness Report is the first report to rank countries by how people feel about their life.</h2>
            </div>
        </div>
    );
}

export function LandingDescription() {
    return (
        <div className='description'>
            <div className='row'>
                <p>
                    World Happiness Report is a platform for people to acknowledge various data of different countries.
                    We provide information and data visualization for people to have a deeper understanding of each country.
                </p>
            </div>
            <div className="row">
                <p>
                    People will gain a better insight on the correlation between happiness indices
                    and different factors of the country, so that they can publish their studies 
                    or take actions accordingly.
                </p>
            </div>
        </div>
    );
}

export function LandingButton() {
    return (
        <div className='row'>
            <NavLink exact to='/' role='button'>
                <button href="index.html" aria-label="Button for moving to data analysis page">
                    <span>Explore more</span>
                </button>
            </NavLink>
        </div>
    );
}

export function LandingIntroImg() {
    return (
        <div className='col intro-img'>
            <img className="intro-img" src="img/happy-child.jpg" alt="a happy child"></img>
        </div>
    );
}

export function LandingData() {
    return (
        <div className='data container'>
            <div className="row">
                <div className="col">
                    <p>155</p>
                    <p>Countries with Happiness Index</p>
                </div>
                <div className="col">
                    <p>7 Billion +</p>
                    <p>Individuals from the World</p>
                </div>
                <div className="col">
                    <p>7 +</p>
                    <p>Factors of Happiness</p>
                </div>
            </div>
        </div>
    );
}

export function LandingInfo() {
    return (
        <div>
            <div className="container center">
                <div className="row">
                    <div className="col">
                        <h2>
                            Happiness can change, and does change, according to the quality of the society in which
                            people live.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="parts">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>Physical</h3>
                            <p>
                                Laugh is the most beautiful and natural excercise. According to
                                modern scientific report, laughter is an activity beneficial to the human
                                body. A laugh can make the diaphragm, chest, abdomen, heart, lungs, and even 
                                the liver in the human body receive exercise, and laugh can relax the
                                muscles of the whole body. </p>
    
                        </div>
                        <div className="col">
                            <h3>Mental</h3>
                            <p>
                                Happiness will produce a substance called dopamine. The latest research by
                                scientists shows that this substance is also very important for human
                                intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function LandingGalary() {
    return (
        <div>
            <div className="container">
                <h2>Happiness Galary</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="img/happy-couple.jpg" alt="a happy family"></img>
                    </div>
                    <div className="col">
                        <img src="img/happy-kid.jpg" alt="a happy kid with his dog"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="img/happy-man.jpg" alt="a happy man in red shirt"></img>
                    </div>
                    <div className="col">
                        <img src="img/happy-people.jpg" alt="two happy friends"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}