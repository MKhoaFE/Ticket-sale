import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const BasicTable = () => {
    const { user } = useContext(AuthContext);
  const [rows, setRows] = useState([]);
  const userId = user ? user._id : null; 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/bookings/${userId}`); // Replace '/api/users' with your backend API endpoint
        setRows(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='BookingTable'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Hotel Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Room Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="middle">Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="middle">Check in</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="middle">Check out</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.hotelName}
                </TableCell>
                <TableCell align="center">{row.roomNumber}</TableCell>
                <TableCell align="middle">{row.price}</TableCell>
                <TableCell align="middle">{row.startDate}</TableCell>
                <TableCell align="center">{row.endDate}</TableCell>
                <TableCell className='Status' sx={{ fontWeight: 'bold', bgcolor: 'success.main', color: 'primary.contrastText' }} align="right">Success</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;
