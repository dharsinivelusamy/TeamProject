
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useRef } from 'react';
import { useState } from 'react';

export default function Register() {
    let name= useRef(null)
    let email=useRef(null)
    let password=useRef(null)
    const [error,setError]=useState({name:false,email:false,password:false})

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    

        if(name.current.value && email.current.value && password.current.value)
        
        {
            if(! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.current.value))
            {
                setError((prev)=>{
                    return{...prev,email:true,password:false,name:false};
                })
            }
            else{
                setError((prev)=>{
                    return{...prev,email:false,password:false,name:false};
                })
            console.log(name.current.value)
        console.log(email.current.value)
        console.log(password.current.value)
            }
        }
        else{
            if(!name.current.value && !email.current.value && !password.current.value )
            {
                setError((prev)=>{
                    return{...prev,name:true,email:true,password:true};
                })
            }
            else if(!name.current.value)
            {
                setError((prev)=>{
                    return{...prev,name:true};
                })
            }
            else if(!email.current.value)
            {
                setError((prev)=>{
                    return{...prev,email:true};
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
        <Typography sx={{textAlign:"center"}} variant='h4'>REGISTER</Typography>
    <Box>
      <TextField inputRef={name}  id="outlined-basic" label="NAME" variant="outlined" />

      {error.name&&( <Typography color={"red"} fontSize={"10px"}>
        FILL THE NAME</Typography>)}
    </Box>
     <Box>
      <TextField inputRef={email} id="filled-basic" label="MAIL ADDRESS" variant="filled" />
      {error.email&&(<Typography  color={"red"} fontSize={"10px"}>
        Fill the Mail Address
      </Typography>)}
    </Box> 
    <Box>

      <TextField inputRef={password} id="standard-basic" type="password" label="PASSWORD" variant="standard" />
      {error.password&&( <Typography  color={"red"} fontSize={"10px"}>
        Fill the Password
      </Typography>)}
    </Box>
    <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
    </Box>
  );
}