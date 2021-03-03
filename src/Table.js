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

function TableBotton() {
    const handlePrevious = () => {

    }

    const handleNext = () => {

    }

    return (
        <div className='table-footer'>
            <button className='submit-button' onClick={handlePrevious}>Previous</button>
            <button className='submit-button' onClick={handleNext}>Next</button>
        </div>
    );
}

export function Table(props) {
    let headers = props.data[0];
    let 
}