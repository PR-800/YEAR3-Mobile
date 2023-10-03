import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

import firebase from "../database/firebaseDB";

class UpdateScreen extends Component {
    constructor() {
        super();
        this.state = {id: "", name: "", GPA: "",};
    }

    componentDidMount() {

        const subjDoc = firebase.firestore().collection("Students")
        .doc(this.props.route.params.key);

        // console.log(this.props.route.params.key)

        subjDoc.get().then((res) => {
            if (res.exists) {
                const subj = res.data();
                this.setState({
                    key: res.id, 
                    id: subj.id,
                    name: subj.name, 
                    GPA: subj.GPA,
                });
            }
            else {
                console.log("Document does not exist");
            }
        });
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    };

    updateSubject() {
        const updateSubjDoc = firebase
          .firestore()
          .collection("Students")
          .doc(this.state.key);
        updateSubjDoc
          .set({
            id: this.state.id,
            name: this.state.name,
            GPA: this.state.GPA,
          })
          .then(() => {
            Alert.alert(
              "Updating Alert",
              "The subject was updated"
            );
        });
    }

    deleteSubject() {
        const delSubjDoc = firebase
            .firestore()
            .collection("Students")
            .doc(this.state.key);
        delSubjDoc.delete().then((res) => {
            Alert.alert(
                "Deleting Alert",
                "The subject was deleted"
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput  
                        style={ styles.input } 
                        onChangeText={(val) => this.inputValueUpdate(val, "id")}
                        value={this.state.id}
                        placeholder="Student ID"
                    />
                    <TextInput  
                        style={ styles.input } 
                        onChangeText={(val) => this.inputValueUpdate(val, "name")}
                        value={this.state.name}
                        placeholder="Student Name"
                    />
                    <TextInput  
                        style={ styles.input } 
                        onChangeText={(val) => this.inputValueUpdate(val, "GPA")}
                        value={this.state.GPA}
                        placeholder="GPA"
                    />
                </View>
                <View style={ styles.button }>
                    <Button
                        title="Update Student Info"
                        onPress={() => {
                            this.updateSubject()
                            this.props.navigation.navigate("ViewPage", {
                                prev: "UpdatePage",
                            });
                        }}
                    />
                </View>
                <View style={ styles.button }>
                    <Button
                        title="Delete Student"
                        onPress={() => {
                            this.deleteSubject()
                            this.props.navigation.navigate("ViewPage", {
                                prev: "UpdatePage",
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
    inputContainer: {
        width: "70%",
        marginVertical: 15,
        marginTop: 30,
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

export default UpdateScreen;