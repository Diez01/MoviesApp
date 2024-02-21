import React, { useState } from "react";
import { SafeAreaView, Text, Image, FlatList, StyleSheet, View } from 'react-native';

const App = () => {
  const moviesList = [{
    id:1,
    name: "Transformers: La venganza de los caidos",
    director:'Michael Bay',
    url:'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg'
  },
  {
    id:2,
    name: "Cars",
    director:'Disney',
    url:'https://assets2.titleleaf.com/abdopub/product/cover/xl_9781532145469_fc.jpg'
  },
  {
    id:3,
    name: "Avengers",
    director:'Marvel',
    url:'https://i.pinimg.com/736x/69/6d/d9/696dd9e70d854d0562f7d5e180f2f4a5.jpg'
  },
  {
    id:4,
    name: "El laberinto del fauno",
    director:'Gillermo del Toro',
    url:'https://www.museofedericosilva.org/wp-content/uploads/2018/04/el-laberinto-del-fauno.jpg'
  },
  {
    id:5,
    name: "Oppenheimer",
    director:'Christopher Nolan',
    url:'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/08/01/f2ek4f_bmaa_sml-sl684dtezebd.jpg'
  },
  {
    id:6,
    name: "Violet Evergarden",
    director:'Taichi Ishidate',
    url:'https://m.media-amazon.com/images/I/71wq1RlZA5S._AC_UF894,1000_QL80_.jpg'
  },
  {
    id:7,
    name: "Valerian y la Ciudad de los Mil Planetas",
    director:'Luc Besson',
    url:'https://diamondfilms.com/img/poster/5939bcd250cdccc7ae894391b.jpg'
  },
  {
    id:8,
    name: "Los juegos del hambre: balada de pájaros cantores y serpientes",
    director:'Francis Lawrence',
    url:'https://img.asmedia.epimg.net/resizer/2JI3a4RXiXhn26nyoTNBvLh2hWA=/1200x1200/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/ORMROYWVCJHMLKQ6TGA3USQ53A.jpg'
  },
  {
    id:9,
    name: "Infinito (Infinite)",
    director:'Antoine Fuqua',
    url:'https://es.web.img2.acsta.net/pictures/21/06/10/10/03/0580430.jpg'
  },
  {
    id:10,
    name: "Bokura no Nanokakan Sensou",
    director:'Yuta Murano',
    url:'https://somoskudasai.com/wp-content/uploads/2021/08/Bokura.no_.Nanokakan.Sensou.full_.2713132.jpg'
  },
  {
    id:11,
    name: "Fury",
    director:'David Ayer',
    url:'https://musicart.xboxlive.com/7/e9781000-0000-0000-0000-000000000002/504/image.jpg'
  },
  {
    id:12,
    name: "Bastardos sin gloria",
    director:'Quentin Tarantino',
    url:'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg'
  },
];

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>Movies App! 🍿</Text>
      </View>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.movieContainer}>
            <Image
            style={styles.image}
            source={{
              uri: item.url,
            }}
            />
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textDirector}>{item.director}</Text>
            </View>
        )}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28003c',
    flex: 1,
  },
  titleContainer: {
    backgroundColor: '#280050',
    width: '100%',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
  },
  title: {
    textAlign: 'center',
    color: '#f0dcf0',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
  },
  movieContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
    margin: 10,
  },
  image: {
    width: 150,
    height: 266,
    borderRadius: 10,
    marginBottom: 10,
  },
  textDirector:{
    color: '#bdbdbd',
    fontSize: 16,
    textAlign: 'center',
  },
  textName:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatListContainer:{
    paddingHorizontal: 20,
  }
  
});

export default App;
