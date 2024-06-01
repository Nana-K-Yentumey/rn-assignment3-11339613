import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Button } from "react-native";

const OngoingTasks = () => {
    return (
            
  <View style={styles.container}>
  <ScrollView>

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
  <Button title='Add a new task'></Button>


</ScrollView>
</View>




)
};

export default OngoingTasks;


const styles = StyleSheet.create({


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
      }
});