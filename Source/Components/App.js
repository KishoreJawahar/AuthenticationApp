import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from "react-redux";
import {persistor, store} from "../Redux/Store/ConfigureStore";
import {PersistGate} from "redux-persist/lib/integration/react";
import ApplicationNavigation from "../Navigation/ApplicationNavigation";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <View style={{flex: 1, backgroundColor: 'white'}}>
                        <ApplicationNavigation/>
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
