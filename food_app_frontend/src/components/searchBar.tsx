import { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, Image } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';


export const SearchBarComponent = () => {
    const [search, setSearch] = useState('')

    const onTextChange = (e) => {
        setSearch(e)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Svg width={200} height={200}>
                <SvgImage
                    href={require('../assets/iconSearch.svg')}
                    width="100%"
                    height="100%" />
            </Svg>
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
        shadowColor: '#001226',
        shadowOpacity: .2,
    },
    container: {
        width: 300,
        backgroundColor: 'black'
    },

});

