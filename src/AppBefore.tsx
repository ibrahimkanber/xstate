import {useActor, useMachine} from '@xstate/react';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {appMachine} from './appMachine';
import {Screen1} from './src/screens/Screen1';
import {Screen2} from './src/screens/Screen2';
import {Screen3} from './src/screens/Screen3';
import {Screen4} from './src/screens/Screen4';
import {Screen5} from './src/screens/Screen5';

const AppContext = React.createContext();

function AppProvider({children}) {
  const [, , service] = useMachine(appMachine);
  const values = {service};
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a CountProvider');
  }
  return context;
}

const App = () => {
  const {service} = useAppContext();
  const [state, send] = useActor(service);

  const renderScreen = () => {
    switch (true) {
      case state.value == 'first':
        return <Screen1 />;
      case state.value == 'second':
        return <Screen2 />;
      case state.value == 'third':
        return <Screen3 />;
      case state.value == 'fourth':
        return <Screen4 />;
      case !!state.value?.fifth:
        return <Screen5 />;
      default:
        <Screen1 />;
    }
  };
  return <View style={styles.container}>{renderScreen()}</View>;
};

export default () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: 'yellow',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
