import axios from "axios"; 
import * as URL from "../Utils/url"; 

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("AuthorizationToken")}`,
    },
}

