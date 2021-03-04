import React, { useState } from 'react';

let HIDE_INDEX = [4, 5, 6 ,7];

function TableHeader(props) {
    let headers = props.headers;
    let headerRow = headers.map((header) => {
        if (HIDE_INDEX.includes(headers.indexOf(header))) {
            return (<td className="hide-mobile">{header}</td>);
        } else {
            return (<td>{header}</td>);
        }
    });
    return (
        <thead>
            <tr>
                {headerRow}
            </tr>
        </thead>
    );
}

function TableRow(props) {
    let row = props.row;
    row = row.map((elem) => {
        if (HIDE_INDEX.includes(rows.indexOf(elem))) {
            return (<td className="hide-mobile">{elem}</td>);
        } else {
            return (<td>{elem}</td>);
        }
    });
    return (
        <tr>
            {rows}
        </tr>
    );
}

function TableBody(props) {
    let rows = props.rows;

    rows = rows.map((row) => {
        return (<TableRow row={row} />);
    });
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

function TableBotton(props) {
    return (
        <div className='table-footer'>
            <button className='submit-button' onClick={() => { props.callbackFunc('previous'); }}>Previous</button>
            <button className='submit-button' onClick={() => { props.callbackFunc('next'); }}>Next</button>
        </div>
    );
}

export function Table(props) {
    let headers = props.data[0];
    let countryCondition = props.countryCondition;
    let pageNum = props.pageNum;
    let parsedData = [];

    let pageGap = 15;

    for (let row of props.data.shift()) {
        if (countryCondition != '') {
            if (row[0] == countryCondition) {
                parsedData.push(row);
            }
        } else {
            parsedData.push(row);
        }
    }
 
    if (props.data.shift().length < 1) {
        return (
            <div className='table data-table-frame'>
                <table className='data-table'>
                    <TableHeader headers={headers} />
                </table>
                <div className="alerts"><p>No data, please check you input!</p></div> 
            </div>
        );
    } else {
        return (
            <div className='table data-table-frame'>
                <table className='data-table'>
                    <TableHeader headers={headers} />
                    <TableBody rows={parsedData.slice(pageNum * pageGap, (pageNum + 1) * pageGap)} />
                </table>
                <TableBotton callbackFunc={props.handlePageNumClick} />
            </div>
        );
    }
}