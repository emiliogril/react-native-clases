import { SafeAreaView } from 'react-native'
import CounterScreen from './src/presentation/screens/CounterScreen'

// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'

export const App = () => {
  return (
    <SafeAreaView>
    {/* <HelloWorldScreen name='Emilio 45' /> */}
    <CounterScreen />
    </SafeAreaView>
  )
}

