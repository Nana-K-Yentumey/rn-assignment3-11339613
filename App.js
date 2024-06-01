import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native"; 
import SearchBar from './SearchBar';
import Categories from './Categories';
import Hello from './Hello';
import OngoingTasks from './OngoingTasks';



export default function App() {

  return (
    <View style={styles.page}>

      <Hello />

        <SearchBar />

          <Categories />

          <OngoingTasks />
      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff2e6',
  },

  root: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },

  

});
