import React, { useState, useEffect } from 'react';
import { Table } from './Table';
import 'whatwg-fetch';

function YearSelect(props) {
    let [selectValue, setSelect] = useState('2015');

    const handleChange = (evt) => {
        setSelect(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.callbackFun(selectValue);
    }

    return (
        <form className="select-input" onSubmit={handleSubmit} role="listbox" aria-label="list of selections of areas">
            <label htmlFor="years"><h3>Select A Year:</h3></label>
            <select name="years" value={selectValue} onChange={handleChange}>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
            </select>
            <button type="submit" className="submit-button">Search</button>
        </form>
    );
}

function CountrySelect(props) {
    let [inputValue, setInput] = useState('');
    const handleChange = (evt) => {
        setInput(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.callbackFun(inputValue);
    }

    return (
        <form className="text-input" onSubmit={handleSubmit} role="textbox" aria-label="textbox for selecting country for the table">
            <label htmlFor="country-for-table">
                <h3>Find A Country:</h3>
            </label>
            <p>Get the data from 2015 to 2019.</p>
            <input type="text" className="country-select"
                placeholder="Type in a country name" aria-label="country name input" 
                value={inputValue} onChange={handleChange} />
            <button type="submit" className="submit-button">Search</button>
        </form>
    );
}

function LeftSubpage(props) {
    return (
        <section className='left-subpage'>
            <header>
                <h1>Happiness Report Analysis</h1>
                <p>Click and get the corresponding data visualizations.</p>
            </header>
            <div className="tabcontent table">
                    <h2>View Data Table</h2>
                    <YearSelect callbackFun={props.handleYearSubmit} />
                    <CountrySelect callbackFun={props.handleCountrySubmit} />
                </div>
        </section>
    );
}

function MidSubpage(props) {
    return (
        <section className="mid-subpage">
            <Table data={props.data} handlePageNumClick={props.handlePageNumClick} pageNum={props.pageNum} countryCondition={props.countryCondition} />
        </section>
    );
}

export function IndexTablePage() {
    let [pageNum, setPageNum] = useState(0);
    let [yearState, setYearState] = useState('2015');
    let [countryState, setCountryState] = useState('');
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
    }, []); 

    const handlePageNumClick = (operation) => {
        let pageGap = 15;
        let updatedPageNum = pageNum;
        if (operation == 'next') {
            let maxLimit = Math.ceil((data.length - 1) / pageGap);
            updatedPageNum += 1;
            if (updatedPageNum >= maxLimit) {
                updatedPageNum = maxLimit - 1;
            }
        } else if (operation == 'previous') {
            updatedPageNum -= 1;
            if (updatedPageNum < 0) {
                updatedPageNum = 0
            }
        }
        setPageNum(updatedPageNum);
    }

    const handleYearSubmit = (year) => {
        setYearState(year);
    }

    const handleCountrySubmit = (country) => {
        setCountryState(country);
    }

    return (
        <div className="container pages">
            <LeftSubpage handleYearSubmit={handleYearSubmit} handleCountrySubmit={handleCountrySubmit} />
            <MidSubpage countryCondition={countryState} data={data} handlePageNumClick={handlePageNumClick} pageNum={pageNum} />
        </div>
    );
}