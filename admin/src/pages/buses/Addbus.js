// src/components/AddBus.js
import React, { useState } from 'react';
import axios from 'axios';

function AddBus() {
    const [busData, setBusData] = useState({
        MaTuyen: '',
        DiemBatDau: '',
        DiemKetThuc: '',
        ThoiGianChay: '',
        LoaiXe: '',
        GiaVe: ''
    });

    const handleChange = (e) => {
        setBusData({ ...busData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/buses/', busData)
            .then(response => {
                alert('Bus added successfully');
                // Optionally clear form or redirect
            })
            .catch(error => console.error('Error adding bus:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="MaTuyen" value={busData.MaTuyen} onChange={handleChange} placeholder="Bus Code" />
            {/* Add fields for other properties similarly */}
            <button type="submit">Add Bus</button>
        </form>
    );
}

export default AddBus;
