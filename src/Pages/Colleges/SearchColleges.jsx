        import { React, useState } from "react";
        import { Typography, TextField, Button, Switch } from "@mui/material";
        import NavBar from "../../Components/NavBar/Navbar";
        import axios from "axios";
        import "../Colleges/searchColleges.css";
        import CollegeTableSection from "../../Containers/CollegeDataTable/CollegeTableSection";
        import CollegeDataCard from "../../Containers/CollegeDataCard/CollegeDataCard"

        const SearchColleges = () => {
        const [collegeData, setCollegeData] = useState([]);

        const getData = async (college) => { 
            console.log(college);
            let response = await axios.get(`http://universities.hipolabs.com/search?name=${college}`);
            let res = await response.data;
            setCollegeData(res);
            
        };  

        const [checked, setChecked] = useState(true); 
        const [college, setCollege] = useState("") 

        const handleChange = (e) => {
           setCollege(e.target.value);

        };

        const handleToggle = () => {  
            console.log("toggled")
            console.log(checked);
            if(checked){
                setChecked(false);
            }else{
                setChecked(true);
            }

        }

        // useEffect(() => {
        //     getData();
        //     console.log("college page is live");
        // }, []);

        return (
            <div className="web-page">
            <NavBar />
            <div className="toggle-switch">
                <Switch color="warning" onChange={handleToggle} />
            </div>
            <div className="search-brand-logo">
                <Typography variant="h1">Search College</Typography>

                <div className="search-section">
                <TextField
                    className="search-bar"
                    color="warning"
                    label="Search your college..."  
                    value={college}
                    onChange={handleChange}

                />
                <div className="sized-box"></div>
                <Button
                    className="search-button"
                    style={{
                    backgroundColor: "#BE8C63",
                    }}
                    variant="contained"
                    onClick={()=>{getData(college)}}
            
                    
                >
                    search
                </Button>
                </div>
            </div> 

            {
                checked? <div className="college-data-table">
                <CollegeTableSection data={collegeData} />
            </div>: <div className="card-view">
                {
                    // <CollegeDataCard/>
                   collegeData?collegeData?.map((data, index)=>{
                    
                       <CollegeDataCard data={data} key={index}/> 
                    console.log("hello");
                       <CollegeDataCard/>
                   }):<h1>null</h1>
                   
                   
                }
            </div>
            }
            </div>
        );
        };

        export default SearchColleges;
