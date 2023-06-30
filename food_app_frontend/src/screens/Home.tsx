import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '../components/searchBar';


const Home = () => {
    return (<View style={styles.screen}>
        <SearchBar />
        <Text>Home</Text>
    </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;