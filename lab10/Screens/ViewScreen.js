import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem } from '@rneui/themed';

import firebase from "../database/firebaseDB";

class ViewScreen extends Component {
    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("Students");
        this.state = { student_list: [], };
    }

    getCollection = (querySnapshot) => {
        const all_data = [];
        querySnapshot.forEach((res) => {
            const { id, name, GPA } = res.data();
            all_data.push({ key: res.id, GPA, id, name, });
        });
        this.setState({ student_list: all_data,});
    };

    componentDidMount() {
        this.unsubscribe = this.subjCollection.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();    
    }   

    render() {
        return (
            <ScrollView>
                {this.state.student_list.map((item, i) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("UpdatePage", {
                                    prev: "ViewPage",
                                    key: item.key,
                                });
                            }}
                        >
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title style={styles.listTitle}>{item.id}</ListItem.Title>
                                    <ListItem.Subtitle style={styles.listSubTitle}>{item.name}</ListItem.Subtitle>
                                    <ListItem.Subtitle style={styles.listSubTitle}>{item.GPA}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem> 
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
          );
    }
       
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listTitle: {
        fontSize: 18,
    },
    listSubTitle: {
        color: "grey",
        fontSize: 15,
    },
});

export default ViewScreen;