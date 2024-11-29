import axios from "axios"

// export const apiUrl = 'http://localhost:5000/api/'
export const apiUrl = 'https://us-central1-acacia-94abb.cloudfunctions.net/api/api'
export const URL = 'http://localhost:3000'


let gg = ""

if (typeof window !== 'undefined') {

    if((JSON.parse(window?.localStorage?.getItem("persist:root")))){
        gg = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).info?.accessToken
    } else { gg = ""}
}


const TOKEN = gg



// const gg = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)?.info?.accessToken


// const TOKEN = gg



// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user)?.info;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: apiUrl,
});

export const userRequest = axios.create({
    baseURL: apiUrl,
    headers: { token: `Bearer ${TOKEN}` } // Set Authorization header
});