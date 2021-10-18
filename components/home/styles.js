import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
       backgroundColor: "black",
       flex: 1,
       width: "100%",
       marginTop: 30,
       paddingTop: 20,
       paddingLeft: 20,
       paddingRight: 20,
       paddingBottom: 20
   },
   homeScreenTitle: {
       color: "#fff",
       fontSize: 20,
   },
   headerContainer: {
       flexDirection: "row",
       justifyContent: "space-between"
    },
    headerIcons: {
        flexDirection: "row"
    },
    headerIcon: {
        color: "#fff",
        marginLeft: 20
    },
    unreadBadge: {
        backgroundColor: "#ff3250",
        position: "absolute",
        borderRadius: 50,
        left: 35,
        bottom: 20,
        zIndex: 1,
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
        fontWeight: "bold"
    },
    storiesContainer: {
        marginTop: 15,
        marginBottom: 15,
        alignItems: "center"
    },
    userView: {
       justifyContent: "center",
       alignContent: "center"
    },
    userTitle: {
        color: "#fff",
        fontSize: 15,
        marginLeft: 5
    },
    storyImage: {
        width: 55,
        height: 55,
        borderRadius: 50
    },
    footerIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
     },
     footerImage: {
        width: 32,
        height: 32,
        borderRadius: 50
    }
});

export default styles;