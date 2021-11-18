import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, Feather } from "react-native-vector-icons"
import Slider from '@react-native-community/slider';
import { color } from 'react-native-elements/dist/helpers';
import songdata from './model/songData';


const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width


export default function App() {

  const playbtn = <AntDesign name="pausecircle" size={50} color="#1740d6" style={{ marginLeft: "12%" }} />
  const pausebtn = <AntDesign name="caretright" size={50} color="#1740d6" style={{ marginLeft: "12%" }} />

  const [playbtnState, setPlayBtnState] = useState(pausebtn)
  const [play, setPlay] = useState(false)
  const playtext = "Now Playing..."
  const pauseText = "Hit Play to Listen"
  const [playingText, setPlayingText] = useState(pauseText)

  const handlePressPlayPause = () => {
    if (play === false) {
      setPlay(true)
      setPlayBtnState(playbtn)
      setPlayingText(playtext)
    }
    else {
      setPlay(false)
      setPlayBtnState(pausebtn)
      setPlayingText(pauseText)
    }



  }



  return (
    <SafeAreaView style={styles.contanier}>
      <View style={styles.mainbar}>
        <AntDesign name="left" size={24} style={{ marginLeft: "5%" }} />
        <Text style={styles.now_playing_text}> {playingText}</Text>
        <Entypo name="dots-three-horizontal" size={24} style={{ marginLeft: "20%" }} />
      </View>

      <View style={styles.music_logo_view}>
        <Image source={require("./assets/logo.jpg")} style={styles.image_view} />
      </View>

      <View style={styles.name_of_song_View} >
        <Text style={styles.name_of_song_Text1}>{songdata[0].title}</Text>
        <Text style={styles.name_of_song_Text2}>{songdata[0].artist}</Text>
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
        <TouchableOpacity>
          <Entypo name="shuffle" size={24} color="#1740d6" style={{ marginLeft: "9%" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="controller-fast-backward" size={24} color="#1740d6" style={{ marginLeft: "12%" }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressPlayPause}
        >
          {playbtnState}
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="controller-fast-forward" size={24} color="#1740d6" style={{ marginLeft: "12%" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="repeat" size={20} color="#1740d6" style={{ marginLeft: "10%" }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  contanier: {
    marginTop: 20,
    height: Dev_Height,
    width: Dev_Width
  },
  mainbar: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  now_playing_text: {
    fontSize: 19,
    marginLeft: "24%"
  },
  music_logo_view: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image_view: {
    height: "100%",
    width: "50%",
    borderRadius: 10,
    justifyContent: "center"
  },
  name_of_song_View: {
    height: "15%",
    width: "100%",
    left: 14,

  },
  name_of_song_Text1: {
    fontSize: 19,
    fontWeight: "500",
    margin: 10


  },
  name_of_song_Text2: {
    color: "#808080",
    marginTop: "4%"
  },
  slider_view: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row"
  },
  slider_style: {
    height: "70%",
    width: "60%"
  },
  slider_time: {
    fontSize: 15,
    marginLeft: "6%",
    color: "#808080"
  },
  functions_view: {
    flexDirection: "row",
    height: "10%",
    width: "100%",
    alignItems: "center",
    marginLeft: 25
  },


})

