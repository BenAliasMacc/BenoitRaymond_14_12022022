import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createEmployee } from '../../Redux/createEmployee/actionCreateEmployee';
import './Index.css'
import DropDown from '../../Components/DropDown/Index';
import { useForm } from 'react-hook-form';
import { Modal } from "modal-benoit-p14"

function CreateEmployeeForm() {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const datas = useSelector(state => state.createEmployee);

    const { register, handleSubmit }= useForm()

    const onSubmit = data => {
        let copyData = {...data, id: `${datas.length + 1}`}
        setIsOpen(true)
        dispatch(createEmployee(copyData))
    }

    return (
        <main>
            <h1>HRnet</h1>
            <Link to='/ListEmployee'>View Current Employees</Link>
            <h2>Create Employee</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='input-container'>

                    <fieldset>

                        <legend>Personal Information</legend>

                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" {...register('firstName')}/>

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" {...register('lastName')}/>

                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input id="dateOfBirth" type="date" name='dateOfBirth' {...register('dateOfBirth')}/>

                    </fieldset>

                    <fieldset>

                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" {...register('street')}/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" {...register('city')}/>

                        <label htmlFor="state">State</label>
                        <DropDown register={register}/>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" {...register('zipCode')}/>
                        
                    </fieldset>

                    <fieldset>

                        <legend>Job Information</legend>

                        <label htmlFor="department">Department</label>
                        <select name="department" id="department" {...register('department')}>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>

                        <label htmlFor="startDate">Start Date</label>
                        <input id="startDate" type="date" name='startDate' {...register('startDate')}/>

                    </fieldset>

                </div>

                
                <button>Save</button>

            </form>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

        </main>
    );
}

export default CreateEmployeeForm;
