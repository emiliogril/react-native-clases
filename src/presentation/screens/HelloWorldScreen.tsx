
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    name?: String;
}

export const HelloWorldScreen = ( { name = ''} : Props) => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Hola Mundo { name }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 75,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
})
