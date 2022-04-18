
import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
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
        <View style={styles.container}>
<RedirectHome/>

        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      
    }
   });



export default connect(null, { checkAuthenticated, load_user })(AuthCheck);





