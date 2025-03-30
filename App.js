import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import InitialScreen from './screens/InitialScreen';
import Navbar from './components/Navbar';

export default function App() {
  const [stateInitialScreen, setInitialScreen] = useState(true);

  return (
    <NavigationContainer>
      {stateInitialScreen && <InitialScreen setState={setInitialScreen} />}
      <Navbar />
    </NavigationContainer>
  );
}
