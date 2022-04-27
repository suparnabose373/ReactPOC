import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
// import keyValueMatch from '../../util/keyValueMatch';
import Form from './Form';
import Footer from './Footer';

function Dashboard() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/lib/events.csv");
    //         const reader = response.body.getReader();
    //         const result = await reader.read(); // raw array
    //         const decoder = new TextDecoder('utf-8');
    //         const csv = decoder.decode(result.value); // the csv text
    //         const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    //         const rows = results.data; // array of objects
    //         setData(rows);
    //         keyValueMatch(data);
    //     }
    //     getData();
    // },[]);

    return (
        <div>
            Hello
            <Form />
            <Footer />
        </div>
    );
}

export default Dashboard;