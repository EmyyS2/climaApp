import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function App(): React.JSX.Element {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>Presidente Epitácio</Text>
      </View>

      <View style={styles.datailsContrainer}>
        <Text style={styles.temperature}>13 °C</Text>
        <Image source={require('./src/assets/images/icon3.png')} style={styles.weatherIcon}></Image>
      </View>

      <View>
        <Text style={styles.weatherCondition}>Nublado</Text>
        <Text style={styles.text}>Sensação térmica: 22 °C</Text>
        <Text style={styles.text}>Probabilidade de chuva: 78%</Text>
        <Text style={styles.text}>Umidade: 99%</Text>
      </View>
        <Image source={require('./src/assets/images/cidade.png')} style={styles.bottomImage}/>
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
    justifyContent: 'space-between',
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
    backgroundColor: '#5c677d'
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10
  }
});

export default App;