import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Image, View, FlatList, StyleSheet, Text, Button, ImageBackground} from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5, Icon } from '@expo/vector-icons';
import { Audio } from 'expo-av';



const Music3 = ({ navigation }) => {

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/WEYOUNG.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ImageBackground
        source={require('../assets/BG.jpg')}
        style={{flex : 1}}>     
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.detail}>
        
         <Text style={styles.memutar}>Sedang Memutar</Text>
            <Image
                style={{width: 300, height:300, borderRadius:10, marginTop:25}}
                source={require('../assets/WEYOUNG.png')}
            />
        <Text style={styles.judulLagu}>We Young</Text>
        <Text style={styles.pencipta}>NCT DREAM</Text>
        <Image
                style={{width: 300, height:3, borderRadius:10, marginTop:-40}}
                source={require('../assets/garis.png')}
            />
      </View>
    
      {/* tombol play */}
      <View style={styles.detail}>
        <FontAwesome5 name="play" size={40} color="white" onPress={playSound}/>
      </View>
      <Text style={styles.copyright}>Copyright Astari Kinanti Putri Rei - 120140013</Text>
   
    </ImageBackground>
  );

}

const styles = StyleSheet.create({

  header:{
    width:'100%',
    // backgroundColor: '#6fb23e',
    padding:20,
    height: 130,
    
  },
  detail:{
    //top : 100,
    // backgroundColor: 'blue',
    margin: "auto",
    width: '100%',
    // height: 100,
    // padding:20,
    borderRadius:10,
    padding:10,
    flexDirection:'column',
    alignItems:'center'
  },
  audioControll:{
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
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  memutar:{
    color: "white",
    textAlign:'center',
    fontSize :18,
    fontWeight : "bold"
  },
  judulLagu:{
    color: "white",
    marginTop:15,
    left: -104,
    textAlign:'center',
    fontSize :25,
    fontWeight : "bold"
  },
  pencipta:{
    textAlign:'center',
    left: -115,
    fontSize :15,
    color : "white",
    marginBottom : 50
  },
  heading2: {
    color: "#373737",
    fontSize: 12,
    // fontWeight : "bold",
    textAlign: 'right',
    top : 4,
    left:10
  },
  top: {
    top : 24,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
    //backgroundColor:'red',
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

export default Music3;
