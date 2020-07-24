import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class FlightsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pilots: [], admins: [], flights: [] };
    }

    async componentDidMount() {
        let resp = await fetch("http://localhost:8080/users");
        let usersData = await resp.json();

        let pilots = usersData.filter(x => !x.is_admin);
        let admins = usersData.filter(x => x.is_admin);

        resp = await fetch("http://localhost:8080/flights/show/all");
        let data = await resp.json();
        this.setState({ flights: data, pilots: pilots, admins: admins});
    }

    render() { 
        return (
            <div>
                <select >
                    {this.state.pilots.map(pilot => (<option>{pilot.name}</option>) )}
                </select>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Depart Time</TableCell>
                      <TableCell>Arrive Time</TableCell>
                      <TableCell>Depart From</TableCell>
                      <TableCell>Arrive To</TableCell>
                      <TableCell>Tail Number</TableCell>
                      <TableCell>Pilot</TableCell>
                      <TableCell>Remarks</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.flights.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell>{row.depart_time}</TableCell>
                        <TableCell>{row.arrive_time}</TableCell>
                        <TableCell>{row.depart_from}</TableCell>
                        <TableCell>{row.arrive_to}</TableCell>
                        <TableCell>{row.tail_number}</TableCell>
                        <TableCell>{row.pilot}</TableCell>
                        <TableCell>{row.remarks}</TableCell>
                      </TableRow>
                    ))}
              </TableBody>
                </Table>
              </TableContainer>
            </div>
        )

    }

}
export default FlightsTable;