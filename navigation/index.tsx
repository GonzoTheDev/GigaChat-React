/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { ColorSchemeName, Pressable, View } from 'react-native';
import { Octicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatsScreen from '../screens/ChatsScreen';
import CallsScreen from '../screens/CallsScreen';
import CashScreen from '../screens/CashScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { RotateInUpLeft } from 'react-native-reanimated';
import ContactsScreen from '../screens/ContactsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: Colors.light.tint
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 28,
      }

    }}>
      <Stack.Screen name="Root" component={TopTabNavigator} options={{ 
        title: "GigaChat", 
        headerRight: () => (
          <View style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', marginRight: 10}}>
            <Octicons name="search" size={24} color={'white'} />
            <MaterialCommunityIcons name="dots-vertical" size={24}  color={'white'} />
          </View>
          )
        }} />
      <Stack.Screen 
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{flexDirection: 'row', width: 100, justifyContent: 'space-between'}}>
              <MaterialCommunityIcons name="phone" size={24} color={'white'} />
              <MaterialCommunityIcons name="video" size={24} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={24} color={'white'} />
            </View>
          )
        })} 
      />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].tint,
        }
      }}>
      <TopTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({ navigation }: RootTabScreenProps<'Chats'>) => ({
          title: 'Chats',
          tabBarIcon: ({ color }) => <TabBarIcon name="message-processing-outline" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <TopTab.Screen
        name="Calls"
        component={CallsScreen}
        options={{
          title: 'Calls',
          tabBarIcon: ({ color }) => <TabBarIcon name="phone" color={color} />,
        }}
      />
      <TopTab.Screen
        name="Cash"
        component={CashScreen}
        options={{
          title: 'Cash',
          tabBarIcon: ({ color }) => <TabBarIcon name="cash" color={color} />,
        }}
      />
    </TopTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={22} style={{ marginBottom: -3 }} {...props} />;
}
