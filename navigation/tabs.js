import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {COLORS} from "../constants";
import {Image} from "react-native";
import icons from "../constants/icons";
import {Home} from "../screens";
import Settings from "../screens/Settings";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator()

const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        height: "10%",
        backgroundColor: COLORS.black
    },
}

const Tabs = () => {
    return (
        <Tab.Navigator
            {...{screenOptions}}
            /*screenOptions={

            ({route}) => (
                {
                    tabBarIcon: ({focused}) => {
                        const tintColor = focused ? COLORS.white : COLORS.gray

                        switch (route.name) {
                            case "Home":
                                return (
                                    <Image
                                        source={icons.dashboard_icon}
                                        resizeMode="contain"
                                        style= {{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                        }}
                                    />
                                )
                            case "Search":
                                return (
                                    <Image
                                        source={icons.search_icon}
                                        resizeMode="contain"
                                        style= {{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                    />
                                )
                            case "Notifications":
                                return (
                                    <Image
                                        source={icons.notification_icon}
                                        resizeMode="contain"
                                        style= {{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                    />
                                )
                            case "Settings":
                                return (
                                    <Image
                                        source={icons.menu_icon}
                                        resizeMode="contain"
                                        style= {{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                    />
                                )
                        }
                    }
                }
            )}*/
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size})=>(
                        <Image
                            source={icons.dashboard_icon}
                            style={{
                                height:25,
                                width:25,
                                tintColor: "white"
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({color, size})=>(
                        <Image
                            source={icons.search_icon}
                            style={{
                                height:25,
                                width:25,
                                tintColor: "white"
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({color, size})=>(
                        <Image
                            source={icons.notification_icon}
                            style={{
                                height:25,
                                width:25,
                                tintColor: "white"
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({color, size})=>(
                        <Image
                            source={icons.menu_icon}
                            style={{
                                height:25,
                                width:25,
                                tintColor: "white"
                            }}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default Tabs
