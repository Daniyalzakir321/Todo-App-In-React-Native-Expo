import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
// import Fab from './Components/Home'
import { TextInput, Button, } from 'react-native-paper';

export default function App() {

  const [text, setText] = useState('');
  const [list, setList] = useState(['Done My Hom Work At 4:00PM', 'Build a Todo App', 'Practice Chap No:6 Part No:2!', 'Call The Plumber for Repairing', 'Adobe Photo Shop Exam',]);

  const addTodo = () => {
    if (text == '') {
      alert('Please Enter Todo Items')
    }
    // else if(deleteSingleTodo){
    //   alert('Done')
    // }
    else {
      setList([...list, text])
      setText('')
    }
  }


  const deleteSingleTodo = (index) => {
    console.log(index)
    console.log(list[index])
    console.log('==========')
    list.splice(index, 1)
    console.log('List Array = ', [...list])
    console.log('==========')
    setList(
      [...list]
    )
  }



  const editSingleTodo = (index) => {
    const demo = list[index]
    console.log(demo)
    setText(
      demo
    )
    deleteSingleTodo(index)
  }



  const deleteAllTodo = () => {
    setList(
      []
    )
  }


 // Date Time
 var today = new Date();
 var dateTime = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()+"    "+
 today.getHours() + ":" + today.getMinutes();
  

  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.todoAppView}>
        <Text style={styles.inputText}>TODO APP</Text>
      </View>

      <View style={styles.textView}>
        <TextInput style={{ backgroundColor: '#ffffff', color: 'white', height: 55, }}
          label="Enter Todo"
          value={text}
          onChangeText={text => setText(text)} />


        <View style={styles.buttonView}>
          <Button style={{ marginTop: 10, width: "48.5%", marginRight: 5, }}
            icon="recycle"
            mode="contained"
            color={'#2979ff'}
            // contentStyle={{ height: 44 }} 
            onPress={deleteAllTodo}>
            DELETE ALL
        </Button>

          <Button style={{ marginTop: 10, width: "48.5%", marginLeft: 5, }}
            icon="plus"
            mode="contained"
            color={'#2979ff'}
            onPress={addTodo}>
            ADD
        </Button>
        </View>




        <ScrollView style={styles.scrollView}>

          {list.map((list, index) => {
            return <TouchableOpacity style={styles.listText} key={index}><Text style={styles.listInnerText}>{list}</Text>
            

            <Text style={styles.dateTime}>{dateTime}</Text>


              <Button style={styles.editButtion}
                icon="pencil"
                color={'#2979ff'}
                onPress={() => editSingleTodo(index)}>
              </Button>

              <Button style={styles.delButtion}
                icon="recycle"
                color={'#2979ff'}
                // mode="contained"
                onPress={() => deleteSingleTodo(index)}>
              </Button>
            </TouchableOpacity>
          })
          }
        </ScrollView>

      </View>



      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#42a5f5', }}>
        <Text style={{ color: 'white', fontWeight: "bold", fontSize: 11, textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 0.2, height: 0.2 }, textShadowRadius: 5, }}>© Daniyal Zakir</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },


  todoAppView: {
    backgroundColor: '#42a5f5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

  },
  inputText: {
    fontWeight: "bold",
    fontSize: 37,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1.2, height: 1.2 },
    textShadowRadius: 10,

  },



  textView: {
    backgroundColor: '#42a5f5',
    flex: 8,
    padding: 10,
    // paddingTop: 20,
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
  },

  scrollView: {
    backgroundColor: '#42a5f5',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 15,
    // flex: 1,
    // marginBottom: 15,
  },


  buttonView: {
    flexDirection: 'row',
    // flex: 1,
    // backgroundColor: 'black',
    // display:'flex',
    // flexWrap:'wrap',
    // flexWrap:'spacearond',
  },

  listText: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 5,
    borderRadius: 5,
    fontSize: 15,
  },

  listInnerText: {
    // backgroundColor: '#ffffff',
    width: '82%',
  },

  delButtion: {
    // backgroundColor: '#ffffff',
    marginTop: 4,
    // paddingRight: -10,
    height: 32,
    width: 5,
    position: 'absolute',
    right: -22,

  },

  editButtion: {
    marginTop: 4,
    height: 32,
    width: 5,
    position: 'absolute',
    right: 10,
  },


  dateTime:{
    position: 'absolute',
    left: 7,
    bottom:1,
    fontSize:7,

  }




});












{/* <ScrollView style={styles.scrollView}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15].map((u, i) => {
            return (
            <TextInput  onChangeText={(e) => console.log(e)}  style={styles.ma} > {i}. TODO ITEMS</TextInput>  )
          })}
        </ScrollView> */}