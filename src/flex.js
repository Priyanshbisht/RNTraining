import React from "react";
import { StyleSheet,View, } from "react-native";

const Flex = () => {
  return (
    <View
      style={{
          backgroundColor: "yellow", flex:1
        }}>
      <View style={{flex: 1, backgroundColor: 'yellow',flexDirection:'row'}} >

             <View style={{flex: 1, backgroundColor: 'red',margin:10}} ></View>
             <View style={{flex: 1, backgroundColor: 'red',margin:10}} ></View>
             <View style={{flex: 1, backgroundColor: 'red',margin:10}} ></View>
             <View style={{flex: 1, backgroundColor: 'red',margin:10}} ></View>
      </View>
      <View style={{flex: 1, backgroundColor: 'yellow',flexDirection:'row'}}>
              <View style={{flex: 2, backgroundColor: 'red',margin:10}}></View>
              <View style={{flex: 0.79, backgroundColor: 'yellow',margin:10}}></View>
              <View style={{flex: 1.1,  backgroundColor: 'red',margin:10}}></View>
      
      </View>
      <View style={{flex: 1, backgroundColor: 'yellow',flexDirection:'row'}} >
              <View style={{flex: 0.79, backgroundColor: 'yellow',margin:10}}></View>
              <View style={{flex: 2, backgroundColor: 'red',margin:10}}></View>
              <View style={{flex: 1.1,  backgroundColor: 'red',margin:10}}></View>
      </View>
      <View style={{flex: 3, backgroundColor: 'red',margin:10}} ></View>
      
      <View style={{flex: 2.5, backgroundColor: 'red',margin:10}} ></View>
      
      <View style={{flex: 1.5, backgroundColor: 'red',margin:10}} ></View>
    </View>
  );
};



export default Flex;