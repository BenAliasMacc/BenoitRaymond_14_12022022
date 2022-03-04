import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from '../../Components/DataTable/DataTable';
//import './Index.css'

function ListEmployee() {

    const datas = useSelector(state => state.createEmployee)

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTable datas={datas}/>
            <Link to={'/'}>Home</Link>
        </div>
    );
}

export default ListEmployee;
