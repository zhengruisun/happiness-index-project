import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';



export function IndexCardsPage(props) {
const IMG_URL_TEMPLATE = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages&piprop=original&format=json&titles=";
const INFO_URL_TEMPLATE = "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="

    return (
        <div>
        
        </div>
      );

}

export function CountryCards() {


    return (
    <div>
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle tag="h5">Country Name</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>More</Button>
          </Card>
          
        </div>
      );
}

export function Countrynfo() {}


