import * as React from 'react';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import {BookDetail} from "./screens";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
                >
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="BookDetail"
                    component={BookDetail}
                    options={{
                        headerShown: false
                    }}
                />
                </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
