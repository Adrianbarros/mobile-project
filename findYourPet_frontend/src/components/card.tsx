import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import IconLike from '../assets/IconLike.svg'
import IconVerify from '../assets/IconVerify.svg'



export const ItemCard = (info: any) => {

    return (
        <View style={[styles.cardContainer, styles.shadow]}>
            <View>
                <View style={styles.circle}>
                    <IconLike />
                </View>
                <Image
                    style={styles.image}
                    source={require(info.info.picture)}
                />
            </View>
            <View style={styles.nameBox}>
                <Text style={styles.nameTag}>{info.info.name}</Text>
                <IconVerify />
            </View>

            <Text>{info.info.type}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        height: 326,
        width: 264,
        borderRadius: 28,
        padding: 16,
        backgroundColor: 'white',
        marginTop: 30,
        alignItems: 'center',
        marginLeft: 20,
    },
    shadow: {
        shadowColor: '#001226',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    image: {
        height: 228,
        width: 232,
        borderRadius: 16,
    },
    circle: {
        position: 'absolute',
        zIndex: 2,
        top: 16,
        left: 190,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    nameBox: {
        position: 'relative',
        height: 20,
        width: 129,
        borderRadius: 50,
        backgroundColor: '#ffffff4d',
        top: -30,
        marginLeft: 10,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    nameTag: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '600',
        marginRight: 5,
    },

})