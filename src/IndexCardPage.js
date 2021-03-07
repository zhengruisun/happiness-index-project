import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export function IndexCardPage(props) {
    let [yearState, setYearState] = useState('2015');
    let [data, setData] = useState([]);

    useEffect(() => {
        let url = 'data/' + yearState + '.csv';
        fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error();
            }
        })
        .then(function(data) {
            let out = [];
            for (let row of data.split('\n')) {
                out.push(row.split(','));
            }
            // remove the last empty element
            out.pop();
            setData(out);
        });
    }, [data]); 

    const handleYearSubmit = (year) => {
        setYearState(year);
    }

    return (
        <div class="container pages">
            <CardLeftSubpage handleYearSubmit={handleYearSubmit} year={yearState}/>
            <CardMidSubpage data={data}/>
        </div>
    );
}

function CardLeftSubpage(props) {
    return (
        <section className="left-subpage">
            <CardPageDescription />
            <YearSelect callbackFun={props.handleYearSubmit}/>
        </section>
    );
}

function CardPageDescription(props) {
    return (
        <div className="tabcontent cards">
            <h2>10 Happiest Countries in the World</h2>
            <p>
                Based on the reported happniess scores, we list the 10 happiest countries around the word. From these country cards,
                we could see that countries with the highest happiness index mostly located in Europe.
            </p>
            <p> 
                These countries also tend to have a strong domestic economy, great public health care, high level of indivial freedom. However,
                there is not a clear correlation between people's trust in governments and a country's happiness score.
            </p>
        </div>
    );
}

function YearSelect(props) {
    let [isOpen, setOpen] = useState(false);
    let [selectedValue, setSelection] = useState('2015');

    const handleChange = (evt) => {
        setSelection(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.callbackFun(selectedValue);
    }

    const toggleDropdown = () => {
        setOpen(prevState => !prevState);
    }

    let selectionList = ['2015', '2016', '2017', '2018', '2019'];
    selectionList = selectionList.map((elem) => {
        return <DropdownItem value={elem} onClick={handleChange}>{elem}</DropdownItem>;
    });

    return (
        <form className="select-input" onSubmit={handleSubmit} role="listbox" aria-label="list of selections of areas">
            <Dropdown direction="right" isOpen={isOpen} toggle={toggleDropdown} >
                <DropdownToggle caret color="orange">{selectedValue}</DropdownToggle>
                <DropdownMenu>
                    {selectionList}
                </DropdownMenu>
            </Dropdown>
            <br/>
            <button type="submit" className="submit-button">Search</button>
        </form>
    );
}

function CardMidSubpage(props) {
    return (
        <CountryList data={props.data}/>
    );
}

function CountryCard(props) {
    return (
        <div>
         <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>View More</Button>
        </CardBody>
      </Card>
        </div>
    );
}

function CountryList(props) {
    let data = Object.entries(props.data);
    let countryCards = data.map((country) => {
        return  <CountryCard key={country[0]} data={country} />
    });
    return (
        {countryCards}
    );
}