import React, { Component, ReactNode, useMemo, useState } from 'react';
import { FlatList, Image, RefreshControl, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/DystirStyle';
import RadioGroup from 'react-native-radio-buttons-group';

export default class SelectedEventScreen extends Component {
    eventOfMatch: any;
    match: any;
    navigation: any;
    onChange: any;
    data: any;

    constructor(props : any) {
        super(props);
        const {route, navigation} : any = this.props;

        this.eventOfMatch = route.params.eventOfMatch;
        this.match = route.params.match;
        this.navigation = navigation;

        this.data = [
            {
              label: 'Default value is same as label',
            },
            {
              label: 'Value is different',
              value: "I'm not same as label",
            },
            {
              label: 'Color',
              color: 'green',
            },
            {
              disabled: true,
              label: 'Disabled',
            },
            {
              label: 'Size',
              size: 32,
            },
          ];
    }



      // update state
  onPress = (data: []) => this.setState({ data });


    render() {
        return (
            <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
            <View style={{
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.navigation.pop()}>
                    <View style={{height:40, width:40, marginVertical:8, opacity:0.5, backgroundColor: '#fff', borderRadius: 20}}>
                        <Image
                            source={require('../images/back.png')}
                            style={{tintColor: 'black', margin:6, height:27, width:27}} />
                    </View>
                </TouchableOpacity>

                <Text style={[styles.text, {fontSize:25}]}>{this.eventOfMatch.eventName}</Text>

                <Text style={[styles.text, {fontSize:25}]}>{this.match.homeTeam}</Text>
            </View>

            <RadioGroup radioButtons={this.data} />

        </SafeAreaView>
        );
    }
}
