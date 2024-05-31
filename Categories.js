import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from "react-native";

const Categories = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.Categories}>Categories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardsSection}>
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>Exercise</Text>
                    <Text style={styles.taskNo}>2 Tasks</Text>
                    <Image style={styles.cardIcon} source={require('./assets/exercise.png')} />
                    
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>Reading</Text>
                    <Text style={styles.taskNo}>1 Tasks</Text>
                    <Image style={styles.cardIcon} source={require('./assets/reading.png')} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>Coding</Text>
                    <Text style={styles.taskNo}>1 Tasks</Text>
                    <Image style={styles.cardIcon} source={require('./assets/coding.png')} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>Studying</Text>
                    <Text style={styles.taskNo}>1 Tasks</Text>
                    <Image style={styles.cardIcon} source={require('./assets/studying.png')} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>Entertainment</Text>
                    <Text style={styles.taskNo}>2 Tasks</Text>
                    <Image style={styles.cardIcon} source={require('./assets/entertainment.png')} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>Resting</Text>
                    <Text style={styles.taskNo}>2 Tasks</Text>
                    <Image style={styles.cardIcon} source={require('./assets/resting.png')} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>Cleaning</Text>
                    <Text style={styles.taskNo}>3 Tasks</Text>
                    <Image style={styles.cardIcon} source={require('./assets/cleaning.png')} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>Cooking</Text>
                    <Text style={styles.taskNo}>3 Tasks</Text>
                    <Image style={styles.cardIcon} source={require('./assets/cooking.png')} />
                </View>
            </ScrollView>
        </View>
        </ScrollView>
    );

}

export default Categories;

const styles = StyleSheet.create({
    container: {
      margin: 18,
      justifyContent: "flex-start",
      width: "70%",
      flex: 1,
  
    },

    Categories: {

        fontWeight: 'bold',
        fontSize: 17,
        margin: 10,

    },

    cardsSection: {
        margin: 10,

    },

    card: {
        backgroundColor: 'white',
        marginRight: 35,
        borderRadius: 10,
        padding: 10,
        
    },

    cardIcon: {
        width: 151,
        height: 132,
        margin: 20,
        padding: 90,
    },

    cardLabel: {
        fontWeight: 'bold',
        fontSize: 17,
        margin: 10,
    },

    taskNo: {
        marginLeft: 10,
    },


  
  });