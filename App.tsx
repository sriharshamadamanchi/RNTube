import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { navigationRef } from './src/common/navigation/navigationService';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/common/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { ErrorBoundary } from './src/common/ErrorBoundary/ErrorBoundary';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from './src';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from './src/common/theme/colors.json';
import { theme } from './src/common/theme';


const getActiveRouteName = (state: any): any => {
  const route = state?.routes[state?.index];

  if (route?.state) {
    return getActiveRouteName(route.state);
  }

  return route?.name;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background }
});

export const App = () => {
  const routeNameRef = React.useRef();

  React.useEffect(() => {
    const state = navigationRef?.current?.getRootState();

    routeNameRef.current = getActiveRouteName(state);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootSiblingParent>
          <PaperProvider theme={theme}>
            <ErrorBoundary>
              <GestureHandlerRootView style={styles.container}>
                <View style={styles.container}>
                  <NavigationContainer
                    ref={navigationRef}
                    onReady={() => {
                      const state = navigationRef?.current?.getRootState();
                      const currentRouteName = getActiveRouteName(state);
                    }}
                    onStateChange={(state: any) => {
                      const previousRouteName = routeNameRef.current;
                      const currentRouteName = getActiveRouteName(state);
                      if (previousRouteName !== currentRouteName) {
                        console.log('Analytics : ', currentRouteName);
                        routeNameRef.current = currentRouteName;
                      }
                    }}>
                    <Dashboard />
                  </NavigationContainer>
                </View>
              </GestureHandlerRootView>
            </ErrorBoundary>
          </PaperProvider>
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
};