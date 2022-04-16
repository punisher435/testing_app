
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from './redux/actions/authactions';

import Intro from './screens/Intro';

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
       <Intro />
    )
}

export default connect(null, { checkAuthenticated, load_user })(AuthCheck);





