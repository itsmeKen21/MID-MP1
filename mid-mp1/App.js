import React, {useState} from 'react'


import { Button, TextInput, StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';

export default function App () {


const [enteredGoalText, setEnteredGoalText ] = useState('');


const [courseGoals, setCourseGoals] =useState([]);


  function goalInputHandler (enteredText) {


    setEnteredGoalText(enteredText);


  }
  function addGoalHandler() {
 
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  setCourseGoals(currentCourseGoals => [
    ...currentCourseGoals,
    { text: enteredGoalText, backgroundColor: randomColor }, // Include both text and background color in the array
  ]);

  setEnteredGoalText('');
}


  return (


      <View style={styles.appContainer}> 
        <View style= {styles.inputContainer}>
          <TextInput style= {styles.textInput} placeholder='My Goal' onChangeText={goalInputHandler} value={enteredGoalText} /> 
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
            
        <FlatList
  data={courseGoals}
  renderItem={({ item }) => (
    <View style={[styles.goalsContainer, { backgroundColor: item.backgroundColor }]}>
      <Text>{item.text}</Text>
    </View>
  )}
/>


      </View>
  );

}




const styles = StyleSheet.create({

appContainer: {
  paddingTop: 50,
  paddingHorizontal: 16,
},

inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  borderBottomWidth: 1,
},

textInput: {
 borderWidth: 1,
 width: '70%',
 marginRight: 8,
 padding: 8,

},
goalsContainer: {

  paddingTop: 20,

},




});