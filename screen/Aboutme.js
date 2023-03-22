import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Image, View, FlatList, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';



const Aboutme = ({ navigation }) => {
 
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            {/* <Text style={styles.heading}>Hiling.id</Text> */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            </TouchableOpacity>
          </View>
          
      </View>
      <View style={styles.detail}>
         <Text style={styles.memutar}>About Me</Text>
            <Image
                style={{width: 160, height:160, borderRadius:10, marginTop:25}}
                source={require('../assets/Profil.png')}
            />
        <Text style={styles.teks}>Astari Kinanti Putri Rei</Text>
        <Text style={styles.teks}>120140013</Text>
        <Text style={styles.teks}>Teknik Informatika</Text>
        <Text style={styles.teks}>Institut Teknologi Sumatera</Text>
        
      </View>
      <Text style={styles.copyright}>Copyright Astari Kinanti Putri Rei - 120140013</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  header:{
    width:'100%',
    // backgroundColor: '#6fb23e',
    padding:20,
    height: 130,
    
  },
  detail:{
     // top : 100,
    // backgroundColor: 'blue',
    margin: "auto",
    width: '100%',
    // height: 100,
    // padding:20,
    borderRadius:10,
    flexDirection:'column',
    alignItems:'center'
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  memutar:{
    color: "white",
    textAlign:'center',
    fontSize :25,
    fontWeight : "bold"
  },
  teks:{
    color: "white",
    top:10,
    marginTop:15,
    textAlign:'center',
    fontSize :24,
    backgroundColor:'#4F4E4E',
    padding:10,
    width : 280,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.1,
shadowRadius: 3.65,

elevation: 3,
  },
  pencipta:{
    textAlign:'center',
    fontSize :14,
    color : '#626262',
    marginBottom : 50
  },
  heading2: {
    color: "#373737",
    fontSize: 12,
    // fontWeight : "bold",
    textAlign: 'right',
    top : 4,
    left: -10
  },
  top: {
    top : 24,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
    // backgroundColor:'red',
    padding:15
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginTop: 90,
    marginBottom: 20,
    padding:20,
    // marginTop: 50,
    textAlign: 'center',
  },
});

export default Aboutme;