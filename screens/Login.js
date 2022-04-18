import React,{useState} from "react";
import { StyleSheet} from "react-native";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton} from "../components/forms";

import { sendotp } from '../redux/actions/authactions';


const validationSchema = Yup.object().shape({
  
  phone: Yup.string().required().min(10).max(10).label("Phone"),
  country_code: Yup.object().required().nullable().label("Country code"),
});

const codes = [
  {
    backgroundColor: "#fc5c65",
    icon: "phone",
    label: "India +91",
    value: "+91",
  },
  
];

const obj1={
  bgcolor:'dark',
  color:'white',
  x1:10,
  x2:10,
  x3:0,
  x4:0,
  width:110,
}

function Login({sendotp}) {
  const navigation = useNavigation();

  const [loading,setloading] =useState(false);
  const [modalVisible,setModalVisible] =useState(false);
  const [text,settext] =useState('');

  const submitform = async ({phone,country_code}) => {
    setloading(true);
    console.log(phone);
    console.log(country_code.value);
    
    try {
      const res = await sendotp({
        phone,country_code:country_code.value,
      })
      console.log('success')
      console.log(res.data);
      
     
      navigation.navigate('Verify',{
        signup:false,
        data:res.data,
        login:true,
      });
    } catch (error) {
      setloading(false);
      settext(error.response.data.msg);
      setModalVisible(true);
    }
   
  }
  



  return (
    <>
   
    <Screen style={styles.container}>
      
      <Form
        initialValues={{ phone:"",country_code:{
          backgroundColor: "#fc5c65",
          icon: "floor-lamp",
          label: "India +91",
          value: "+91",
        }, }}
        onSubmit={submitform}
        validationSchema={validationSchema}
      >

     
      
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="phone"
          keyboardType="numeric"
          name="phone"
          placeholder="Phone"
          
        />
       
        <SubmitButton title="Login" obj={obj1}/>
      </Form>
    </Screen>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1,
    justifyContent:'center'
  },
});


const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { sendotp })(Login);
