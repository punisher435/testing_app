import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './redux/store';
import AuthCheck from './AuthCheck';

export default function App() {
  return (
    <Provider store = { store }>
      <View style={styles.container}>
      <AuthCheck />

      </View>
     
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
