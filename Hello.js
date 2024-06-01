import React from "react";
import { StyleSheet, Text, View, Image } from "react-native"; 

const Hello = () => {

    return (
        <View>
        <View style={styles.helloSection}>
          <Text style={styles.helloText}>Hello, Devs</Text>
          <Text style={styles.taskText}>14 Tasks Today</Text>
        </View>
        <Image style={styles.profile} source={require('./assets/profileImage.png')} />
        </View>

    )

};

export default Hello;

const styles = StyleSheet.create({
    
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
    

});