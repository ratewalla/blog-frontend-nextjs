import {useEffect} from 'react';
import Router from 'next/router';
import {isAuth} from '../../actions/auth';


// only displays content if the user is authenticated and is admin

const Admin = ({children}) => {
    useEffect(()=>{
        if(!isAuth()){
            Router.push('/signin')
        } else if(isAuth().role !== 'admin'){
            Router.push('/')
        }
    }, [])

    return <>{children}</>
}

export default Admin;