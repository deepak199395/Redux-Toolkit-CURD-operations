import { ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser } from '../Redux/UseSlice';

const UserScreen = () => {
    const navigation = useNavigation();
    const users = useSelector(state => state.user.data);
   const dispatch= useDispatch()
    console.log(users);

    return (
        <View style={{ flex: 1 }}>
            
                <FlatList 
                    data={users}
                    renderItem={({ item,index }) => (
                        <View style={styles.container}>
                        <View>
                        <Text>{"NAME        "+item.name}</Text>
                        <Text>{"Email Id.    "+item.email}</Text>
                        <Text>{"Phone        "+item.mobile}</Text>
                        <Text>{"Address.    "+item.address}</Text>
                        <Text>{"Gender        "+item.gender}</Text>
                        <Text>{"Qlification.   "+item.qualification}</Text>
                        </View>
                           <View>
                           <Text style={{padding:10,
                                        borderWidth:1,
                                        margin:5,
                                        borderColor:"blue",
                                        backgroundColor:"blue",
                                        color:"white"}}
                                        onPress={()=>{
                                            navigation.navigate('AddUser',{type:'edit',data:item,index:index})
                                        }}
                                        >Edit</Text>
                           <Text style={{padding:10, borderWidth:1,borderColor:"red",backgroundColor:"red",color:"white"}}
                           onPress={()=>{
                         dispatch(deleteuser(index))
                           }}
                           >Delete</Text>
                           </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            
            <TouchableOpacity style={styles.footer} activeOpacity={1} onPress={() => navigation.navigate('AddUser',{type:'add'})}>
                <Text style={styles.txt}>Add new user</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserScreen;

const styles = StyleSheet.create({
   footer:{
    width:"99%",
    borderWidth:1,
    alignSelf:"center",
    alignItems:"center",
    position:"absolute",
    bottom:0,
    height:40,
    justifyContent:"center",
    padding:5,
    margin:0,
    backgroundColor:"black"
   },
   container:{
    width:"90%",
    borderWidth:1,
    margin:5,
    alignSelf:"center",
    padding:10,
    backgroundColor:"lightgreen", 
    borderRadius:10,
    justifyContent:"space-between",
   flexDirection:"row"
   },
   txt:{
    color:"white"
   }
});
