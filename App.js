import React from 'react';
import { Text, View, StyleSheet ,SafeAreaView,Image,Dimensions} from 'react-native';
import {AntDesign,Entypo,Feather} from "react-native-vector-icons"
import Slider from '@react-native-community/slider';


const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width


export default class App extends React.Component {
   

render(){
    return(
      <SafeAreaView style={styles.contanier}>
        <View style={styles.mainbar}>
          <AntDesign name="left" size={24} style={{marginLeft:"5%"}} />
          <Text style={styles.now_playing_text}> Now Playing...</Text>
          <Entypo name="dots-three-horizontal" size={24} style={{marginLeft:"20%"}} />
        </View>

        <View style={styles.music_logo_view}>
          <Image source={require("./assets/logo.jpg")} style={styles.image_view}/>
        </View>

        <View style={styles.name_of_song_View} >
          <Text style={styles.name_of_song_Text1}>Hello</Text>
          <Text style={styles.name_of_song_Text2}>Adele</Text>
        </View>

        <View style={styles.slider_view}>
          <Text style={styles.slider_time}> 4:10 </Text>
            <Slider
                  style={styles.slider_style}
                  minimumValue={0}
                  maximumValue={12.02}
                  minimumTrackTintColor="#1740d6"
                  maximumTrackTintColor="#d3d3d3"
                  thumbTintColor="#1740d6"
                  value={3.5}
                />
          <Text style={styles.slider_time}>12:02</Text>
        </View>

        <View style={styles.functions_view}>
          <Entypo name="shuffle" size={24} color="#1740d6" style={{marginLeft:"9%"}}/>
          <Entypo name="controller-fast-backward" size={24} color="#1740d6" style={{marginLeft:"12%"}}/>
          <AntDesign name="pausecircle" size={50} color="#1740d6" style={{marginLeft:"12%"}}/>
          <Entypo name="controller-fast-forward" size={24} color="#1740d6" style={{marginLeft:"12%"}}/>
          <Feather name="repeat" size={20} color="#1740d6" style={{marginLeft:"10%"}}/>
        </View>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  contanier:{
    height:Dev_Height,
    width:Dev_Width
  },
  mainbar:{
    height:"10%",
    width:"100%",
    flexDirection:"row",
    alignItems: "center",
  },
  now_playing_text:{
    fontSize:19,
    marginLeft:"24%"
  },
  music_logo_view:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  image_view:{
    height:"100%",
    width:"50%",
    borderRadius:10,
    justifyContent: "center"
  },
  name_of_song_View:{
    height:"15%",
    width:"100%",
    left: 14,

   },
  name_of_song_Text1:{
    fontSize: 19,
    fontWeight:"500",
    
    
   },
  name_of_song_Text2:{
    color:"#808080",
    marginTop:"4%"
  },
  slider_view:{
    height:"10%",
    width:"100%",
    alignItems:"center",
    flexDirection:"row"
  },
  slider_style:{
    height:"70%",
    width:"60%"
  },
  slider_time:{
    fontSize:15,
    marginLeft:"6%",
    color:"#808080"
  },
  functions_view:{
    flexDirection:"row",
    height:"10%",
    width:"100%",
    alignItems:"center"
  },
 
  
})

