import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

import { signup } from '../redux/actions/authactions';
import { Colors } from "react-native/Libraries/NewAppScreen";
import ActivityIndicator from "../components/Loading";
import AppModal from '../components/AppModal'


const validationSchema = Yup.object().shape({
  phone: Yup.string().required().min(10).max(10).label("Phone no."),
  name: Yup.string().required().label("name"),
  business_name: Yup.string().required().label("business name"),
  email: Yup.string().required().label("email"),
  password: Yup.string().required().label("password"),
  
});



const obj1 = {
  bgcolor: 'dark',
  color: 'white',
  x1: 10,
  x2: 10,
  x3: 10,
  x4: 10,
  width: '100%',
}

function Register({ signup }) {
  const navigation = useNavigation();

  const [loading, setloading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, settext] = useState('');

  const redirectlogin = () => {
    navigation.navigate('Login');
  }

  const submitform = async ({
    phone,
    name,
    business_name,
    email,
    password,
  }) => {
    setloading(true);
    console.log("submit form");

    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
      }
  }

  const body = JSON.stringify({
      firstName:name,
      lastName:business_name,
      email: email,
      password:password,
      phoneNumber:phone
  }); 

 console.log(body);
  try {
    const res=await axios.post(`https://thenightmarketer-hiring.herokuapp.com/user/register`, body, config);
    console.log("success");
    setloading(false);
    console.log(res.data);
    navigation.navigate('Login');
  } catch (error) {
    console.log(error);
    setloading(false);
    setModalVisible(true);
    settext(error.response.data.message);
  }     

  

  }




  return (
    <>

      <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
    <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} text={text}/>
        <Text style={styles.title}>
          Sign Up!
        </Text>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.


        </Text>


        <Form
          initialValues={{
            phone: "",
            name: "",
            business_name: "",
            email: "",
            password: "",
          }}
          onSubmit={submitform}
          validationSchema={validationSchema}
        >


          <FormField
            autoCapitalize="none"
            autoCorrect={false}


            name="name"
            placeholder="Name"

          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}


            name="business_name"
            placeholder="Business name"

          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}

            keyboardType="numeric"
            name="phone"
            placeholder="Phone"

          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}


            name="email"
            placeholder="Email"

          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}

            secureTextEntry={true}
            name="password"
            placeholder="Password"

          />
          <View style={styles.buttoncontainer}>
            <SubmitButton title="Register" obj={obj1} />
          </View>
          <View style={styles.logincon}>
            <Text style={styles.textcon}>Already have an account ?</Text>
            <View style={styles.loginbutton}>
              <TouchableOpacity

                onPress={redirectlogin}
              >
                <Text style={styles.logintext}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Form>

      </Screen>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,

  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  description: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.grey,
    marginBottom: 20,

    marginTop: 10,
  },
  buttoncontainer: {
    marginTop: 15,
  },
  buttoncontainer: {

  },
  textcon: {
    fontSize: 15,
    color: Colors.normgrey,
  },
  logintext: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginbutton: {
    marginLeft: 10,
  },
  logincon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});


const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { signup })(Register);
