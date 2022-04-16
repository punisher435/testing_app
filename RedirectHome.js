import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import Intro from './screens/Intro';
import Home from './screens/Home';



const RedirectHome = (props) => {

if(props.isAuthenticated)
{
    return (
        <View>
 
        <Home />
        </View>
       
    )
}
else{
    return (
        <View>
       
               <Intro />
               </View>
    )
}

   
}

const mapStateToProps = state => ({
    isAuthenticated: state.authreducers.isAuthenticated,
   
  });
  
  export default connect(mapStateToProps)(RedirectHome);









