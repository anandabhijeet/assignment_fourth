    import { React, useState } from "react";
    import { Typography } from "@mui/material";
    import { TextField, Button } from "@mui/material";
    import { useNavigate } from "react-router-dom";
    import "../FormSection/FormPageSection.css";

    const FormPageSection = () => {
        let navigate = useNavigate();

   
        // const userData = [];

    // const [userDataArray, setUserDataArray] = useState([]);
      

    const [userFormData, setUserFormData] = useState({
        name: "",
        birthday: "",
        gender: "",
        address: "",
        country: "",
        college: "",
        hobbies: "",
        short_Bio: "",
        long_bio: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setUserFormData(userFormData =>({
            ...userFormData,
            [name]: value
        }))
    }; 

    const onSubmit = () =>{
       
       
        var userDataArray = JSON.parse(localStorage.getItem('data') || "[]"); 

        userDataArray.push(userFormData);
        localStorage.setItem('data', JSON.stringify(userDataArray)); 
        
        navigate('/userlist')

    }

    return (
        <div className="form-section">
        <Typography variant="h3">New User</Typography>
        <div className="name form-content">
            <Typography className="form-key">Name: </Typography>
            <TextField
            id="outlined-search"
            label="Name"
            type="text"
            name="name"
            value={userFormData.name}
            onChange={handleChange}
            />
        </div>
        <div className="birth-date form-content">
            <Typography className="form-key">Birthday: </Typography>
            <TextField
            id="outlined-search"
            type="date"
            name="birthday"
            value={userFormData.birthday}
            onChange={handleChange}
            />
        </div>
        <div className="gender form-content">
            <Typography className="form-key">Gender:</Typography>
            <TextField
            id="outlined-search"
            label="Gender"
            type="text"
            name="gender"
            value={userFormData.gender}
            onChange={handleChange}
            />
        </div>
        <div className="address form-content">
            <Typography className="form-key">Address: </Typography>
            <TextField
            id="outlined-search"
            label="address"
            type="text"
            name="address"
            value={userFormData.address}
            onChange={handleChange}
            />
        </div>

        <div className="country form-content">
            <Typography className="form-key"> Country: </Typography>
            <TextField
            id="outlined-search"
            label="Country"
            type="text"
            name="country"
            value={userFormData.country}
            onChange={handleChange}
            />
        </div>
        <div className="college form-content">
            <Typography className="form-key">College:</Typography>
            <TextField
            id="outlined-search"
            label="College"
            type="text"
            name="college"
            value={userFormData.college}
            onChange={handleChange}
            />
        </div>
        <div className="hobbies form-content">
            <Typography className="form-key">Hobbies:</Typography>
            <TextField
            id="outlined-search"
            label="Hobbies"
            type="text"
            name="hobbies"
            value={userFormData.hobbies}
            onChange={handleChange}
            />
        </div> 
        <div className="short-bio form-content">
            <Typography className="form-key">Short Bio:</Typography>
            <TextField
            id="outlined-search"
            label="Short bio"
            type="text"
            name="short_bio"
            value={userFormData.short_bio}
            onChange={handleChange}
            />
        </div>

        
        <div className="long-bio form-content">
            <Typography className="form-key">Long Bio:</Typography>
            <TextField
            id="outlined-search"
            label="Bio"
            type="text"
            name="long_bio"
            value={userFormData.long_bio}
            onChange={handleChange}
            />
        </div>
        <Button
            style={{
            marginTop: "20px",
            }}
            variant="contained" 
            onClick={()=>{onSubmit()}}
        >
            Submit
        </Button>
        </div>
    );
    };

    export default FormPageSection;
