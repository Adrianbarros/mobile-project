import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';



export const SearchBarComponent = () => {
    const [search, setSearch] = useState('')

    const onTextChange = (e) => {
        setSearch(e)
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Search'
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    input: {
        color: '#FFF',
        height: 48,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: '#FFF',
        shadowColor: '#001226',
        shadowOpacity: .2,
    },
    container: {
        width: 300,
    },

});

