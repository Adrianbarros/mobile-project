import { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, View, Pressable } from 'react-native';
import IconSearch from '../assets/IconSearch.svg'
import Filters from '../assets/Filters.svg'

export const SearchBarComponent = () => {
    const [search, setSearch] = useState('')

    const onTextChange = (e: any) => {
        setSearch(e)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder='Search'
                    value={search}
                    onChangeText={setSearch}
                />
                <IconSearch style={styles.icon} />
            </View>
            <Pressable
                style={styles.button}
            >

                <Filters />

            </Pressable>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    searchBar: {
        display: 'flex',
        width: 300,
        flexDirection: 'row',
    },

    input: {
        height: 50,
        width: 300,
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

    icon: {
        right: 50,
        top: 25,
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A58EFF',
        height: 50,
        width: 50,
        boxShadow: '0px 6px 12px rgba(186, 169, 255, 0.43)',
        borderRadius: 12,
    },

});

