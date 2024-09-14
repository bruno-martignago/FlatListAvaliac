import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaPessoaScreen from './components/ListaPessoaScreen';
import DetalhePessoaScreen from './components/DetalhePessoaScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaPessoa'>
        <Stack.Screen name="ListaPessoa" component={ListaPessoaScreen} />
        <Stack.Screen name='DetalhePessoa' component={DetalhePessoaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;