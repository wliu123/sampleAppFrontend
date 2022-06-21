import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Axios from 'axios'

const Student = () => {
    
    const [fields, setFields] = useState({
        name: "",
        address: ""
    })
    const [students, setStudents] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(fields)
        })
        .then(res => console.log(res))
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then(data => setStudents(data))
    }, [])

    return (
        <>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          pt:3
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" component="div" sx={{textAlign:"center"}}>
            Add Student to List
        </Typography>
        <TextField 
            id="outlined-basic" 
            onChange={(e)=>setFields({...fields, [e.target.name]:e.target.value})} 
            value={fields.name} name="name" 
            label="Student Name" 
            variant="outlined" 
        />
        <TextField 
            id="outlined-basic" 
            onChange={(e)=>setFields({...fields, [e.target.name]:e.target.value})} 
            value={fields.address} 
            name="address" 
            label="Student Address" 
            variant="outlined" 
        />
      </Box>
        <Button variant="contained" onClick={handleClick}>Submit</Button>
        </>
    )
    
}
export default Student