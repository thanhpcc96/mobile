import React, { Component } from 'react';
import {View, TextInput, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListChuyen from './components/ListChuyen';


class PickScreen extends Component{
    constructor(props){
        super(props);
        this.state({
            isShowSearchBox: false,
        })
    }
    render(){
        return(
            <View style={styles.root}>
            { this.state.isShowSearchBox === true ?
                (<View style={styles.searchbox}>
                    <TextInput placeholder={"Lộ trình tìm kiếm"} style={styles.input}/>
                    <Ionicons name="ios-search-outline" size={15} color={"#90A4AE"}/>
                </View>)
                :
                (<View style={styles.listChuyenXe}>
                    <ListChuyen listchuyenxe />
                </View>)
            }
            </View>
        )
    }
}
export default PickScreen;