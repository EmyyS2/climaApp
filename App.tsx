import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function App(): React.JSX.Element {

  const [city, setCity] = useState<string>("São Paulo");
  const [humidity, setHumidity] = useState<string>("15");
  const [condition, useContion] = useState<string>("Ensolarado");
  const [rainProbability, setRainProbability] = useState<string>("30");
  const [feelsLike, setFreeLike] = useState<string>("41");
  const [temperature, setTemperature] = useState<string>("37");
  const [night, setNight] = useState<boolean>(false);


  function isNight() {
    const hour = new Date().getHours();
    console.log(hour);
    if (hour >= 18 || hour < 6) {
      setNight(true);
    } else {
      setNight(false);
    }
  }


  useEffect(() => {
    const intervalId=setInterval(()=>{
      isNight();
    },600);
   
  })
  return (
    <View style={[styles.container,night==false ? styles.containerBgDay : styles.containerBgNight]}>
      <View style={styles.header}>
        <Text style={styles.city}>{city}</Text>
      </View>

      <View style={styles.datailsContrainer}>
        <Text style={styles.temperature}>{temperature}°C</Text>
        <Image source={require('./src/assets/images/icon3.png')} style={styles.weatherIcon}></Image>
      </View>

      <View>
        <Text style={styles.weatherCondition}>{condition}</Text>
        <Text style={styles.text}>Sensação térmica:{feelsLike}°C</Text>
        <Text style={styles.text}>Probabilidade de chuva: {rainProbability}%</Text>
        <Text style={styles.text}>Umidade: {humidity}%</Text>
      </View>
      <Image source={require('./src/assets/images/cidade.png')} style={styles.bottomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomImage: {
    width: '115%',
    position: 'absolute',
    bottom: 0,
    resizeMode: 'cover',
    height: '65%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  city: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 25
  },
  weatherIcon: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    marginBottom: 20,
    flexDirection: 'row'
  },
  datailsContrainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weatherCondition: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#000000'
  },
  temperature: {
    fontSize: 50,
    marginBottom: 20,
    color: '#000000'
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#7c98b3'
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10
  },
  containerBgDay: {
    backgroundColor: '#48cae4'
  },
  containerBgNight: {
    backgroundColor: '#2c3d55'
  }
});

export default App;