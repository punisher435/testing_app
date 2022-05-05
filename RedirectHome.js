import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavigationTab from './screens/NavigationTab';
import Home from './screens/Home';

const { width, heigth } = Dimensions.get('window')

const RedirectHome = (props) => {

    if (!props.isAuthenticated) {
        return (
            <SafeAreaProvider>
                <View style={styles.container}>

                    <Home />
                </View>
            </SafeAreaProvider>

        )
    }
    else {
        return (
            <View style={styles.container}>

                <NavigationTab />
            </View>



        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: width,

    }
});

const mapStateToProps = state => ({
    isAuthenticated: state.authreducers.isAuthenticated,

});

export default connect(mapStateToProps)(RedirectHome);









