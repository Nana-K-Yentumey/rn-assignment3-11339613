import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.page}>
      <View style={styles.helloSection}>
      <Text style={styles.helloText}>Hello, Devs</Text>
      <Text style={styles.taskText}>14 Tasks Today</Text>
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

  helloSection: {
    marginTop: 80,
    marginLeft: 20,

},

  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  taskText: {
    fontSize: 18,
  },
});
