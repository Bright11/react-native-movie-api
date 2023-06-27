const { StyleSheet } = require("react-native");

const homestyle= StyleSheet.create({
    homeviwcontainer:{
        flex:1,
        backgroundColor:"#00f",
        flexDirection:"row"
    },
    movieviewlist:{
        flex:1,
        marginLeft:6,
        marginRight:6,
        backgroundColor:"black"
    },
    // hometopimageview:{
    //     padding:5,
    //     borderRadius:10
    // },
    // topimage:{
    //     width:"100%",
    //     height:200,
    // },
   
    mycontentitemsview:{
        alignItems:"center",
        justifyContent:"space-between",
        flex:0.5,
        marginHorizontal: 1,
        elevation:50,
        backgroundColor:"#343A40",
        marginBottom:20,
        borderRadius:10,
        padding:5
    },
    imageview:{
       width:150,
       height:200
    },
    moviename:{
        textAlign:"center",
        alignSelf:"center",
        fontSize:12,
        fontFamily:"Roboto-Regular",
        color:"white",
        marginTop:10,
        marginBottom:10,
      
    },
    movietitle:{
        color:"white",
        margin:10,
    },
     // chosemovie
     chosemovie:{
        flexDirection:"row",
        marginTop:20,
        marginBottom:20,
        gap:20,
        alignItems:"center",
        justifyContent:"space-around"
    },
    // the end
    chosemoviebtn:{
        backgroundColor:"#AC1A19",
        padding:8,
        borderRadius:10,
    },
    chosemovietext:{
        color:"white",
        fontSize:16,
        fontFamily:"Roboto-Regular",
    },
    // saerchview
    saerchview:{
        width:"100%",
        flexDirection:"row",
        backgroundColor:"#343A40",
        alignItems:"center",
        borderRadius:25,
        padding:2,
    },
    saerchinput:{
        width:"80%",
        color:"white"
    },
    saerchbtn:{
        width:"20%"
    },
    saerchbtntext:{
        color:"white"
    }
})

export default homestyle