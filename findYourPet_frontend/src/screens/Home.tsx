import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SearchBarComponent } from '../components/searchBar';
import { ItemCard } from '../components/card';



const Home = () => {
    const payload = {
        data: [{
            id: '1',
            name: 'munchkin',
            type: 'big boy',
            liked: false
        }, {
            id: '2',
            name: 'munchkin',
            type: 'big boy',
            liked: false
        },]

    }
    return (
        <View style={styles.screen}>
            <SearchBarComponent />
            <View style={styles.titleContainer}>
                <Text style={styles.title} >Recommended For You</Text>
                <Text style={styles.link}>On The Map </Text>
            </View>

            <FlatList data={payload.data}
                renderItem={({ item }) => <ItemCard info={item} />}
                keyExtractor={(item) => item.id}
                horizontal

            />
            <View style={styles.titleContainer}>
                <Text style={styles.title} >Most Recent Additions</Text>

            </View>

            <FlatList data={payload.data}
                renderItem={({ item }) => <ItemCard info={item} />}
                keyExtractor={(item) => item.id}
                horizontal

            />
        </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },


    titleContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginTop: 20,
    },

    title: {
        color: '#313131',
        fontSize: 20,
        fontWeight: '700',
    },

    link: {
        color: '#989898',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 16,
    },


});

export default Home;