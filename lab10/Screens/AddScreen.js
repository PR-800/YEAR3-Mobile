import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

import firebase from "../database/firebaseDB";

class AddScreen extends Component {
    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("Students");
        this.state = {id: "", name: "", GPA: "",};
    }
       
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    };

    storeSubject() {
        this.subjCollection.add({
            id: this.state.id,
            name: this.state.name,
            GPA: this.state.GPA,
        })
        .then((res) => {
            this.setState({id: "", name: "", GPA: "",});
        });
    }

    render() {
        // const [studentId, onChangeStudentId] = React.useState('');
        // const [studentName, onChangeStudentName] = React.useState('');
        // const [GPA, onChangeGPA] = React.useState('');

        return (
            <View style={styles.container}>
                <Image
                    source={
                        require('../assets/IT_Logo.png')
                    }
                    style={ styles.image }
                />
                <View style={styles.inputContainer}>
                    <TextInput  
                        style={ styles.input } 
                        onChangeText={(val) => this.inputValueUpdate(val, "id")}
                        value={this.state.id}
                        // onChangeText={onChangeStudentId}
                        // value={studentId}
                        placeholder="Student ID"
                    />
                    <TextInput  
                        style={ styles.input } 
                        onChangeText={(val) => this.inputValueUpdate(val, "name")}
                        value={this.state.name}
                        // onChangeText={onChangeStudentName}
                        // value={studentName}
                        placeholder="Student Name"
                    />
                    <TextInput  
                        style={ styles.input } 
                        onChangeText={(val) => this.inputValueUpdate(val, "GPA")}
                        value={this.state.GPA}
                        // onChangeText={onChangeGPA}
                        // value={GPA}
                        placeholder="GPA"
                    />
                </View>
                <View style={ styles.button }>
                    <Button
                        title="Add Student"
                        onPress={() => {
                            this.storeSubject()
                            this.props.navigation.navigate("ViewPage", {
                                prev: "AddPage",
                            });
                        }}
                    />
                </View>
                <View style={ styles.button }>
                    <Button
                        title="View Student"
                        onPress={() => {
                            this.props.navigation.navigate("ViewPage", {
                                prev: "AddPage",
                            });
                        }}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: 109, 
        height: 90,
        marginTop: 45,
    },
    inputContainer: {
        width: "70%",
        marginVertical: 15,
    },
    input: {
        borderBottomWidth: 1, 
        fontSize: 18,
        marginVertical: 13,
        padding: 5,
    },
    button: {
        width: "70%",
        marginVertical: 5,
    },
});

export default AddScreen;