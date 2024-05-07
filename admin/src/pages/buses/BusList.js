// src/components/BusList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BusList() {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/buses/')
            .then(response => setBuses(response.data))
            .catch(error => console.error('Error fetching buses:', error));
    }, []);

    return (
        <div>
            <h1>List of Buses</h1>
            <ul>
                {buses.map(bus => (
                    <li key={bus._id}>{bus.MaTuyen} - From {bus.DiemBatDau} to {bus.DiemKetThuc} - {bus.LoaiXe}</li>
                ))}
            </ul>
        </div>
    );
}

export default BusList;
