import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from './styles';
import Home from './pages/Home';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={'Frutas'}
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.font,
            paddingLeft: 5,
          },
          headerTitleAlign: 'left',
        }}>
        <AppStack.Screen name="Frutas" component={Home} />
        <AppStack.Screen
          name="Detalhes"
          component={Detail}
          options={{color: '#fff'}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
