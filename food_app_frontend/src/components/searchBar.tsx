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
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    input: {
        color: '#FFF',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        width: 300,
    },

});

