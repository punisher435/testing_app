
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from './redux/actions/authactions';

import RedirectHome from './RedirectHome';

const AuthCheck = (props) => {

    useEffect(() => {
        const fetchData = () => {
            try {
                props.checkAuthenticated();
            } catch (err) {

            }
        }

        fetchData();
    }, []);

    return (

       <RedirectHome/>
    )
}



export default connect(null, { checkAuthenticated, load_user })(AuthCheck);





