

import React from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import { DrawerContent } from '../components/Drawer';




const Drawer = createDrawerNavigator();

function Category({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Category</Text>
    </View>
  );
}

function About({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About</Text>
    </View>
  );
}

function Messages({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages</Text>
    </View>
  );
}

function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}
function Roles({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Roles</Text>
    </View>
  );
}

function Help({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Help</Text>
    </View>
  );
}



const App = () => {


  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#8A2BE2',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? null : CustomDefaultTheme;


  return (
    <PaperProvider theme={theme}>

      <NavigationContainer theme={theme}>

        <Drawer.Navigator useLegacyImplementation={true}
          drawerContent={props => <DrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#6f00ff',

            },
          }}
          initialRouteName="Category"
        >
          <Drawer.Screen name="Category" component={Category} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Messages" component={Messages} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Roles" component={Roles} />
          <Drawer.Screen name="Help" component={Help} />
        </Drawer.Navigator>


      </NavigationContainer>

    </PaperProvider>
  );
}

export default App;