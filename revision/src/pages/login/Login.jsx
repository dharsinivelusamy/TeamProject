
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BasicTextFields() {
    let name= useRef(null)
    let email=useRef(null)
    let password=useRef(null)
    const [error,setError]=useState({name:false,password:false})

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    

        if(name.current.value && password.current.value)
        
        {
            console.log(name.current.value)
        //console.log(email.current.value)
        console.log(password.current.value)
        }
        else{
            if(!name.current.value && !password.current.value)
            {
                setError((prev)=>{
                    return{...prev,name:true,password:true};
                })
            }
            else if(!name.current.value)
            {
                setError((prev)=>{
                    return{...prev,name:true};
                })
            }
            else if(!password.current.value)
            {
                setError((prev)=>{
                    return{...prev,password:true};
                })
            }
            console.log("error")
        }
    }
    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        width:"100%",
        height:"100vh"
      }}
      noValidate
      autoComplete="off"
    >
        <Typography sx={{textAlign:"center"}} variant='h4'>LOGIN</Typography>
    <Box>
      <TextField inputRef={name}  id="outlined-basic" label="NAME" variant="outlined" />

      {error.name&&( <Typography color={"red"} fontSize={"10px"}>
        FILL THE NAME</Typography>)}
    </Box>
    {/* <Box>
      <TextField inputRef={email} id="filled-basic" label="MAIL ADDRESS" variant="filled" />
      <Typography  color={"red"} fontSize={"10px"}>
        Fill the Mail Address
      </Typography>
    </Box> */}
    <Box>

      <TextField inputRef={password} id="standard-basic" type="password" label="PASSWORD" variant="standard" />
      {error.password&&( <Typography  color={"red"} fontSize={"10px"}>
        Fill the Password
      </Typography>)}
    </Box>
    <Button type='submit' variant="contained" onClick={handleSubmit}>SUBMIT</Button>
    <Link to="/registration">New user to register</Link>
    </Box>
  );
}