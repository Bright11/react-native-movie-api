import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import homestyle from './homestyle'
import { movieimg, popularurl, trendingurl } from './Urls'
import axios from 'axios'

const PopularMovies = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          
          try {
          
          const apikey = "api_key=8cf1ea8253dc60fc82c2d83d42b81a48";
            const accessToken =
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2YxZWE4MjUzZGM2MGZjODJjMmQ4M2Q0MmI4MWE0OCIsInN1YiI6IjYzMjBkZDdhYzFmZmJkMDA3ZDI0YTg2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0tFxq6j5hdN5auHQSX6YtGdotS9dZ1odWIr4fGHAO_o";
          const response = await axios
            .get(`${popularurl}?${apikey}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((response) => {
            //  setIsloading(true);
              setData(response.data.results);
            });
         
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
   // console.log(moviedata)
  return (
    <View style={homestyle.movieviewlist}>
        <Text style={homestyle.movietitle}>popular movies</Text>
    <FlatList
    //horizontal={true}
    //showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    nestedScrollEnabled
    data={data}
     numColumns={2}
    renderItem={({item})=>(
     <View style={homestyle.mycontentitemsview}>
         <View >
        <Image source={{uri:`${movieimg}${item.backdrop_path}` }}
       style={homestyle.imageview} />
       </View>
        <Text style={homestyle.moviename}>{item.title}</Text>

     </View>
    )}
    />
    </View>
  )
}

export default PopularMovies