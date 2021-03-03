import React from 'react';
import { Table } from './Table';

function LeftSubpage(props) {
    return (
        <section className='left-subpage'>
            <header>
                <h1>Happiness Report Analysis</h1>
                <p>Click and get the corresponding data visualizations.</p>
            </header>
            <div className="tabcontent table">
                    <h2>View Data Table</h2>
                    <form className="select-input" role="listbox" aria-label="list of selections of areas">
                        <label for="years"><h3>Select A Year:</h3></label>
                        <select name="years" id="years">
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                        </select>
                        <button type="submit" className="submit-button">Search</button>
                    </form>
                    <form className="text-input" role="textbox" aria-label="textbox for selecting country for the table">
                        <label for="country-for-table">
                            <h3>Find A Country:</h3>
                        </label>
                        <p>Get the data from 2015 to 2019.</p>
                        <input type="text" className="country-select"
                            placeholder="Type in a country name" aria-label="country name input" />
                        <button type="submit" className="submit-button">Search</button>
                    </form>
                </div>
        </section>
    );
}

function MidSubpage(props) {
    return (
        <section class="mid-subpage">
            <Table data={props.data} />
        </section>
    );
}

export function IndexTablePage() {
    let [pageNum, setPageNum] = useState(0);
    let [yearState, setYearState] = useState('2015');
    let [countryState, setCountryState] = useState(undefined);

    const handlePageNumClick = (operation) => {
        let updatedPageNum = pageNum;
        if (operation == 'next') {
            let maxLimit = Math.ceil((props.data.length - 1) / pageGap);
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

    const handleYearSubmit = () => {

    }
}