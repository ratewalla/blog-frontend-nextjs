import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie';


// api request for registration
// passes user in json format
export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



// api request for login

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// sign out
export const signout = (next) =>{
    // removes cookie and user
    removeCookie('token');
    removeLocalStorage('user');
    next();

    // makes api request to signout
    return fetch(`${API}/signout`, {
        method: 'GET'
    }).then(response => {
        console.log('signout success');
    }).catch(err => console.log(err));
}




// set and remove cookies
export const setCookie = (key, value) => {
    // check to see if environment if client side, and set cookie with expiry of 1 day
    if(process.browser){
        cookie.set(key, value , {
            expires: 1
        });
    }
}; 

export const removeCookie = key => {
    // removes cookie
    if(process.browser){
        cookie.remove(key, {
            expires: 1
        });
    }
}; 


// get cookies
export const getCookie = key => {
    if(process.browser){
        return cookie.get(key);
    }
}; 


// set and remove cookies from local storage
// set cookie in local storage and json to string
export const setLocalStorage = (key, value) => {
    if(process.browser){
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if(process.browser){
        localStorage.removeItem(key);
    }
};


// authenticate user
export const authenticate = (data, next) => {
    // sets cookie with the name token and data passed in from signin component 
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    // call back function
    next();
};

// checks to see if user is authenticated
export const isAuth = () => {
    if(process.browser){
        // checks to see if there is a cookie with the name of token
        const checkCookie = getCookie('token');
        if(checkCookie){
            // if there is a cookie, get the user item from local storage
            if(localStorage.getItem('user')){
                // converts json user data back to javascript object
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false;
            }
        }
    }
};