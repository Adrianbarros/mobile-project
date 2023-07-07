import { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';


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
                value={search}
                onChangeText={setSearch}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        shadowColor: '#001226',
        shadowOpacity: 0.3,
        elevation: 2,
    },
    container: {
        width: 300,
    },

});

