import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Button } from "react-native"; 
import SearchBar from './SearchBar';
import Categories from './Categories';


export default function App() {

  return (
    <View style={styles.page}>

      <View style={styles.part1}>
        <View style={styles.helloSection}>
          <Text style={styles.helloText}>Hello, Devs</Text>
          <Text style={styles.taskText}>14 Tasks Today</Text>
        </View>
        <Image style={styles.profile} source={require('./assets/profileImage.png')} /> 
      </View>

      <View>
        <SearchBar />
      </View>
      <ScrollView>
    
        <Categories />
    

      <View style={styles.container}>

        <Text style={styles.ongoingTasks}>Ongoing Tasks</Text>

      <FlatList style={styles.list}
        data={[
          {key: 'Mobile App Development'},
          {key: 'Web Development'},
          {key: 'Doing Laudry'},
          {key: 'Game development'},
          {key: 'Chess Game'},
          {key: 'Preparing for Exam'},
          {key: 'Push ups'},
          {key: 'Meditating'},
          {key: 'Running'},
          {key: 'Making Dinner'},
          {key: 'Reading'},
          {key: 'Watchin TV'},
          {key: 'Making popcorn'},
          {key: 'Sleeping'},
          {key: 'Eating'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>

    <Button title='Add a new task'></Button>


    </ScrollView>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff2e6',
  },

  part1: {
    flexDirection: 'row',
  },

  helloSection: {
    marginTop: 70,
    marginLeft: 20,

},

  helloText: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  taskText: {
    fontSize: 12,
  },

  profile: {
    marginTop: 72,
    marginLeft: 285,
    position: 'absolute',
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

  ongoingTasks: {

    fontWeight: 'bold',
    fontSize: 17,
    margin: 10,
    marginLeft: 25,
  },

  item: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#FBF9F7',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: "#E8D1BA",
    borderWidth: 1,
    
  },
  

});
