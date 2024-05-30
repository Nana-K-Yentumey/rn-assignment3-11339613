import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.page}>
      <View style={styles.part1}>
        <View style={styles.helloSection}>
          <Text style={styles.helloText}>Hello, Devs</Text>
          <Text style={styles.taskText}>14 Tasks Today</Text>
        </View>
        <Image style={styles.whiteCircle} source={require('./assets/whiteCircle.png')} />
        <Image style={styles.personIcon} source={require('./assets/personIcon.png')} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E8D1BA',
  },

  part1: {
    flexDirection: 'row',
  },

  helloSection: {
    marginTop: 70,
    marginLeft: 20,

},

  helloText: {
    fontSize: 27,
    fontWeight: 'bold',
  },

  taskText: {
    fontSize: 10,
  },

  whiteCircle: {
    width: 50,
    height: 50,
    marginTop: 70,
    marginLeft: 285,
    position: 'absolute',
  },

  personIcon: {
    width: 40,
    height: 40,
    marginTop: 72,
    marginLeft: 290,
    position: 'absolute',
  },
});
