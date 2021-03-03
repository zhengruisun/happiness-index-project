import React from 'react';
import { NavLink } from 'react-'
export function LandingPage(props) {
    return (
        <main>
            <section className='intro-text'>
                <LandingHeader />
            </section>
        </main>
    );
}

export function LandingHeader(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <LandingTitle />
                    <LandingDescription />
                </div>
            </div>
        </div>
    );
}

export function LandingTitle(props) {
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

export function LandingDescription(props) {
    return (
        <div className='description'>
            <div className='row'>
                <p>
                    World Happiness Report is a platform for people to acknowledge various data of different countries.
                    We provide information and data visualization for people to have a deeper understanding of each country.
                </p>
            </div>
            <div class="row">
                <p>
                    People will gain a better insight on the correlation between happiness indices
                    and different factors of the country, so that they can publish their studies 
                    or take actions accordingly.
                </p>
            </div>
        </div>
    );
}

export function LandingButton(props) {

}