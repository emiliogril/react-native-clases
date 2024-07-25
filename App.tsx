
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { SafeAreaView } from 'react-native'

export const App = () => {
  return (
    <SafeAreaView style={ {flex: 1} }>
    <HelloWorldScreen name='Emilio 4' />
    </SafeAreaView>
  )
}

