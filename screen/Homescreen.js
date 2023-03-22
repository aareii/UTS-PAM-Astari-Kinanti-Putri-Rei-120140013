import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Homescreen = ({ navigation }) => {
const [keberangkatan, setKeberangkatan] = useState("");
const [tujuan, setTujuan] = useState("");
const [tanggal, setTanggal] = useState("");
  

    return(
        <View style={styles.container}>
          
            <View style={styles.header}>
            <Image
                style={{width: 350, height:200,}}
                source={require('../assets/header.png')}
              />
            </View>
            <Text style={styles.daftarMusic} >Play List</Text>
            <View style={styles.card}>
            
              <View style={styles.cardMusic}>
            <TouchableOpacity onPress={() => navigation.navigate('Music1')}>
                  <Image
                    style={{width: 150, height:180, borderRadius:10}}
                    source={require('../assets/MUSIC1.png')}
                  />
              </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Music2')}>
                  <Image
                    style={{width: 150, height:180, borderRadius:10}}
                    source={require('../assets/MUSIC2.png')}
                  />
              </TouchableOpacity>
            </View>
              <View style={styles.cardMusic2}>
            <TouchableOpacity onPress={() => navigation.navigate('Music3')}>
                  <Image
                    style={{width: 150, height:180, borderRadius:10}}
                    source={require('../assets/MUSIC3.png')}
                  />
              </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Music4')}>
                  <Image
                    style={{width: 150, height:180, borderRadius:10}}
                    source={require('../assets/MUSIC4.png')}
                  />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Aboutme')}>
            <Text style={styles.copyright}>About Me</Text>
              </TouchableOpacity>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#212121',
    overflow: "hidden",
    alignItems: "center",
  },
    top: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },

  card:{
    width:'100%'
  },
  cardMusic: {
    // top : 10,
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor: 'yellow',
    margin: "auto",
    width: '100%',
    // display:"flex",
    marginTop:40,
    // left : 30,
    padding:20,
    borderRadius:10,
  },
  cardMusic2: {
    // top : 10,
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor: 'yellow',
    margin: "auto",
    width: '100%',
    // display:"flex",
    marginTop:-20,
    // left : 30,
    padding:20,
    borderRadius:10,
  },
  
header: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    top: 40
},
daftarMusic: {
    color: 'white',
    fontSize: 20,
    fontWeight : "bold",
    left : -120,
    top: 50,
    
},
    header2: {
    margin: 5,
    fontWeight : "bold",

},
  kotak: {
    width: "100%",
    flex:1,
    borderRadius:10,
    backgroundColor: '#E5E4E2',
    marginTop : 110,
  },
  copyright: {
    color : '#fff',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 'auto',
    width: 100,
    padding:10,
    textAlign: 'center',
    backgroundColor: '#4F4E4E',
    borderRadius: 20,
    left:240
  }
});

export default Homescreen;