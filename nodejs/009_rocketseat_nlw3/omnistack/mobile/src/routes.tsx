import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import OrphanageDetails from './pages/OrphanageDetails';
import Header from './components/Header';

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator
      screenOptions={{
       headerShown: false,
       cardStyle: { backgroundColor: '#F2F3F5' }
      }}>
        <Screen
        name="OrphanagesMap" 
        component={OrphanagesMap} 
        options={{ 
          headerShown: true, 
          header: () => <Header showCancel={false} title="Mapa de Orfanatos" />
        }}
        />

        <Screen 
        name="OrphanageDetails" 
        component={OrphanageDetails} 
        options={{ 
          headerShown: true ,
          header: () => <Header showCancel={false} title="Orfanato" />
        }}/>

        <Screen 
        name="SelectMapPosition" 
        component={SelectMapPosition} 
        options={{ 
          headerShown: true ,
          header: () => <Header showCancel={true} title="Selecione no mapa" />
        }}/>
        
        <Screen 
        name="OrphanageData" 
        component={OrphanageData} 
        options={{ 
          headerShown: true, 
          header: () => <Header showCancel={true} title="Informe os dados" />
        }}/>

      </Navigator>
    </NavigationContainer>
  );
}