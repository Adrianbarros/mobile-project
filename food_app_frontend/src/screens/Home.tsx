import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBarComponent } from '../components/searchBar';


const Home = () => {
    return (<View style={styles.screen}>
        <SearchBarComponent />
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