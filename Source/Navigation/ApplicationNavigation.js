import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppDeciderScreen from "../Components/AppModules/LaunchScreenModule/AppDeciderScreen";
import Login from "../Components/AppModules/AuthModule/Login";
import Dashboard from "../Components/AppModules/Dashboard/Dashboard";
import Register from "../Components/AppModules/AuthModule/Register";

const Stack = createStackNavigator();
const ApplicationNavigation = props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="AppDeciderScreen">
                    <Stack.Screen
                        name="AppDeciderScreen"
                        component={AppDeciderScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default ApplicationNavigation;
