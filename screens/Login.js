import React, { useState } from "react";
import { SocialIcon } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native';

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";


import { Colors } from "react-native/Libraries/NewAppScreen";
import axios from "axios";
import ActivityIndicator from "../components/Loading";
import AppModal from '../components/AppModal'
import {
 
  LOGIN_SUCCESS,

} from '../redux/actiontypes/authactiontypes';


const validationSchema = Yup.object().shape({


  username: Yup.string().required().label("Username"),
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

function Login(props) {
  const navigation = useNavigation();

  const [loading, setloading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, settext] = useState('');

  const redirectlogin = () => {
    navigation.navigate('Register');
  }

  const submitform = async ({
    username,
    password,
  }) => {
    
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
      }
  };
setloading(true);
console.log("dtar");
  const body = JSON.stringify({email:username,password});
console.log(body);
  try {
    const res=await axios.post('https://thenightmarketer-hiring.herokuapp.com/user/login', body, config)
    console.log("success");
    setloading(false);
  
    props.loginsuccess(res.data);

  } catch (error) {
    console.log(error.response.data.message);
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
          Welcome Back!
        </Text>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.


        </Text>


        <Form
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={submitform}
          validationSchema={validationSchema}
        >


          <FormField
            autoCapitalize="none"
            autoCorrect={false}


            name="username"
            placeholder="Username"

          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}

            name="password"
            placeholder="Password"

          />

          <View style={styles.logincon}>

            <View style={styles.loginbutton}>
              <TouchableOpacity

                onPress={redirectlogin}
              >
                <Text style={styles.logintext}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttoncontainer}>
            <SubmitButton title="Sign in" obj={obj1} />
          </View>

          <View style={styles.line}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: Colors.dark }} />
              <View>
                <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: Colors.dark }} />
            </View>
          </View>

          <View style={styles.iconcon}>
            <View style={styles.icon}>
              <SocialIcon
                raised={false}
                type='google'
              />

            </View>
            <View style={styles.icon}>
              <SocialIcon
                raised={false}
                type='facebook'
              />
            </View>
            <View style={styles.icon}>
              <Icon
                raised={false}
                type='apple1'
              />
            </View>
          </View>

          <View style={styles.signupcon}>
            <Text style={styles.textcon}>Don't have an account ?</Text>
            <View style={styles.loginbutton}>
              <TouchableOpacity

                onPress={redirectlogin}
              >
                <Text style={styles.logintext}>Register now</Text>
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
    justifyContent: 'flex-end',
  },
  signupcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linecon: {
    flexDirection: 'row',
  },
  iconcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 2,
    marginRight: 2,
  },
});


const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

const mapDispatchToProps = (dispatch) => {
  return {
   
    

    loginsuccess: (res) => dispatch({  type: LOGIN_SUCCESS,
      payload: res.data }),
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
