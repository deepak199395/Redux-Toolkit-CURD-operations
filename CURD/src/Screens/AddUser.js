import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../Redux/UseSlice';
import { useNavigation, useRoute } from '@react-navigation/native';
const AddUser = () => {
    const route= useRoute()

    const [name, setName] = useState(route.params.type=='edit' ? route.params.data.name:'');
    const [email, setEmail] = useState(route.params.type=='edit'? route.params.data.email:'');
    const [mobile, setMobile] = useState(route.params.type=='edit'? route.params.data.mobile:"");
    const [address, setAddress] = useState(route.params.type=='edit'? route.params.data.address:"");
    const [gender, setGender] = useState(route.params.type=='edit'? route.params.data.gender:"");
    const [qualification, setQualification] = useState(route.params.type=="edit" ? route.params.data.qualification:"");


    const navigation =useNavigation()
    const dispatch = useDispatch();
   
    const validateInputs = () => {
        if (!name || !email || !mobile || !address || !gender || !qualification) {
            Alert.alert('All fields are required');
            return false;
        }
        return true;
    };

    // const handleAddUser = () => {
    //     if (validateInputs()) {
    //         if(route.params.type=='edit'){
    //             dispatch(
    //                 updateUser({
    //                 name:name,
    //                 email:email,
    //                 mobile:mobile,
    //                 address:address,
    //                 gender:gender,
    //                 qualification:qualification,
    //                 index:route.params.index,
    //             }),
    //             );
    //         }
    //         }else{
    //             dispatch(addUser({ name, email, mobile, address, gender, qualification }));
    //            }
    //     navigation.goBack()

    // }
    const handleAddUser = () => {
        if (validateInputs()) {
            if (route.params.type === 'edit') {
                dispatch(
                    updateUser({
                        name: name,
                        email: email,
                        mobile: mobile,
                        address: address,
                        gender: gender,
                        qualification: qualification,
                        index: route.params.index,
                    }),
                );
            } else {
                dispatch(addUser({ name, email, mobile, address, gender, qualification }));
            }
            navigation.goBack();
        }
    }
    

    return (
        <View style={styles.container}>
       
            <Text>USER DETAILS</Text>
            <ScrollView>
            <TextInput
            style={styles.input}
            value={name}
            onChangeText={txt => setName(txt)}
            placeholder='Enter user Name'
        />
        <TextInput
            style={styles.input}
            value={email}
            onChangeText={txt => setEmail(txt)}
            placeholder='Enter user Email'
            keyboardType='email-address'
        />
        <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={txt => setMobile(txt)}
            placeholder='Enter user Mobile'
            keyboardType='number-pad'
            maxLength={10}
        />
        <TextInput
            style={styles.input}
            value={address}
            onChangeText={txt => setAddress(txt)}
            placeholder='Enter user Address'
        />
        <TextInput
            style={styles.input}
            value={gender}
            onChangeText={txt => setGender(txt)}
            placeholder='Enter user gender'
        />
        <TextInput
            style={styles.input}
            value={qualification}
            onChangeText={txt => setQualification(txt)}
            placeholder='Enter user Qualifications'
        />
        <TouchableOpacity
            style={styles.btn}
            onPress={handleAddUser}
        >
            <Text style={{color:'white',alignItems:"center",alignContent:"center" }}>SUBMIT DETAILS</Text>
        </TouchableOpacity>
            </ScrollView>
           
        </View>
    );
};

export default AddUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width:"99%",
        borderWidth:1
        
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '90%',
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        paddingLeft: 30,
        width:"100%"
    },
    btn: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'black',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf:"center",
        
    },
});
