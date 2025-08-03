/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { QueryProvider } from './providers/query-provider';

export default function Main() {
  return (
    <QueryProvider>
      <App />
    </QueryProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
