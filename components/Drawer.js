import React from 'react';
import { View, StyleSheet } from 'react-native';
import {

  Drawer,
  Text,
 
} from 'react-native-paper';
import {
 
  DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const color1 = '#ffffff';
const size1 = 22;
const size2 = 20;


export function DrawerContent(props) {




  return (
    <View style={{ flex: 1 }}>

      <View style={styles.drawerContent}>


        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon2
                name="bars"
                color={color1}
                size={size1}
              />
            )}



            label={() => (<></>)}
            onPress={() => { props.navigation.closeDrawer(); }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon1
                name="category"
                color={color1}
                size={size1}
              />
            )}



            label={() => (<Text style={{ color: color1, fontSize: size2 }}>Category</Text>)}
            onPress={() => {props.navigation.navigate("Category") }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon2
                name="unknowfile1"
                color={color1}
                size={size1}
              />
            )}
            label={() => (<Text style={{ color: color1, fontSize: size2 }}>About</Text>)}
            onPress={() => {props.navigation.navigate("About") }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="android-messages"
                color={color1}
                size={size1}
              />
            )}
            label={() => (<Text style={{ color: color1, fontSize: size2 }}>Messages</Text>)}
            onPress={() => {props.navigation.navigate("Messages")  }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon1
                name="settings"
                color={color1}
                size={size1}
              />
            )}
            label={() => (<Text style={{ color: color1, fontSize: size2 }}>Settings</Text>)}
            onPress={() => { props.navigation.navigate("Settings") }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="arrow-right-circle"
                color={color1}
                size={size1}
              />
            )}
            label={() => (<Text style={{ color: color1, fontSize: size2 }}>Roles</Text>)}
            onPress={() => { props.navigation.navigate("Roles") }}
          />

        </Drawer.Section>

      </View>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="help"
              color={color1}
              size={size1}
            />
          )}
          label={() => (<Text style={{ color: color1, fontSize: size2 }}>Help</Text>)}
          onPress={() => { props.navigation.navigate("Help") }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 45,
    paddingBottom: 35,
    borderBottomColor: color1,

    borderBottomWidth: 1
  },
  bottomDrawerSection: {
    flex: 0.6,

  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});