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
      
       
               <Intro />
             
    )
}

   
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
    }
   });

const mapStateToProps = state => ({
    isAuthenticated: state.authreducers.isAuthenticated,
   
  });
  
  export default connect(mapStateToProps)(RedirectHome);









