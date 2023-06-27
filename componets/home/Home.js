import { View, Text, Image, ScrollViewBase, ScrollView, FlatList, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import homestyle from './homestyle'
// import moviedata, { trendingurl } from './moviedata'
import { movieimg, trendingurl } from './Urls'
import axios from 'axios'
import TrendingMovies from './TrendingMovies'
import PopularMovies from './PopularMovies'
import DiscoverMovies from './DiscoverMovies'

const Home = ({navigation}) => {
   const [trendding,setTrendding]=useState(null)
   const[popurlar,setPopular]=useState(true)
  const[discovering,setDiscovering]=useState(null)
  // 
useLayoutEffect(()=>{
navigation.setOptions({
  title:"",
  headerLeft:()=>(
  <Text>Home of moves</Text>
  ),
  headerRight:()=>(
    <Text>Enjoy our moves</Text>
    )
})
},{navigation})


  // 
   const chostrendding=()=>{
    setPopular(false)
    setDiscovering(false)
    setTrendding(true)
   }
   const chosepopurlar=()=>{
    setTrendding(false)
    setDiscovering(false)
    setPopular(true)
   }
   const chosedicovering=()=>{
    setTrendding(false)
    setDiscovering(false)
    setPopular(false)
    setDiscovering(true)
   }
  return (
    <View  style={{ flex:1,}}>
    {/* <View style={homestyle.hometopimageview}>
    <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'}} style={homestyle.topimage} />
    </View> */}
  
  <View style={{ flex:1,backgroundColor:"black" }}>
   <View style={homestyle.chosemovie}>
      <TouchableOpacity style={homestyle.chosemoviebtn} onPress={chostrendding}>
        <Text style={homestyle.chosemovietext}>Trending</Text>
      </TouchableOpacity >
      <TouchableOpacity style={homestyle.chosemoviebtn} onPress={chosepopurlar}>
        <Text style={homestyle.chosemovietext}>Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={homestyle.chosemoviebtn} onPress={chosedicovering}>
        <Text style={homestyle.chosemovietext}>Discovering</Text>
      </TouchableOpacity>
    </View>
  
      <KeyboardAvoidingView>
      <View style={homestyle.saerchview}>
        <TextInput  style={homestyle.saerchinput} placeholder='Search here' placeholderTextColor="white"/>
        <TouchableOpacity style={homestyle.saerchbtn}>
          <Text style={homestyle.saerchbtntext}>Search</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    
{trendding&&<TrendingMovies/>}
   
{popurlar&&<PopularMovies/>}
{discovering&&<DiscoverMovies/>}
   </View>

    </View>
  )
}

export default Home