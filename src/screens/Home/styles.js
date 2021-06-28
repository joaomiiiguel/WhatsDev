import { StyleSheet } from 'react-native'
import { theme } from '../../styles/globalcss';


export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
        paddingTop: 30,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
    },
    titleWhats:{
        fontWeight:'bold',
        fontSize: 23,
        color: theme.colors.branco,
    },
    headerContainer:{
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: theme.colors.primary,
    },
    iconList:{
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    storesContainer:{
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 20,
        width: '100%',
    },
    chatContainer:{
        flex: 3,
        paddingHorizontal: 20,
        paddingBottom: 80,
        paddingTop: 10,
        width: '100%',
        backgroundColor: theme.colors.branco,
    },
    menuBar:{
        position: 'absolute',
        bottom: 5,
        height: 50,
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: theme.colors.secundary,
    },
});