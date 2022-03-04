import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const DataTable = ({datas}) => {

    const columns = [
        { field: 'id', headerName: "ID", width: 70},
        { field: 'firstName', headerName: 'First Name', width: 130 },
        { field: 'lastName', headerName: 'Last Name', width: 130 },
        { field: 'dateOfBirth', headerName: 'Date Of Birth', width: 130 },
        { field: 'startDate', headerName: 'Start Date', width: 160 },
        { field: 'street', headerName: "Street", width: 200},
        { field: 'city', headerName: "City", width: 100},
        { field: 'state', headerName: "State", width: 100},
        { field: 'zipCode', headerName: 'Zip Code', type: 'number', width: 70},
        { field: 'department', headerName: "Department", width: 120}    
    ];

    const rows = datas;
    console.log(rows);

    return (
        <div style={{ height: 300, width: '80%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            columnVisibilityModel={{
                // Hide columns status and traderName, the other columns will remain visible
                id: false,
              }}/>
        </div>
    )
}

export default DataTable