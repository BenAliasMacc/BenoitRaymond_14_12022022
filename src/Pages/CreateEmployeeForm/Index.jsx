import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DatePicker from '../../Components/DatePicker/DatePicker';
import Modal from '../../Components/Modal/Modal';
import { closeModal, createEmployee } from '../../Redux/createEmployee/actionCreateEmployee';
import './Index.css'

function CreateEmployeeForm() {

    const dispatch = useDispatch()

    const handleForm = e => {
        e.preventDefault()
        dispatch(createEmployee())
    }

    return (
        <main>
            <h1>HRnet</h1>
            <Link to='/ListEmployee'>View Current Employees</Link>
            <h2>Create Employee</h2>

            <form onSubmit={e => handleForm(e)}>

                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker id='date-of-birth'/>

                <label htmlFor="start-date">Start Date</label>
                <DatePicker id='start-date'/>

                <fieldset>

                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                    
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                
                <button>Save</button>

            </form>

            <Modal/>
        </main>
    );
}

export default CreateEmployeeForm;
