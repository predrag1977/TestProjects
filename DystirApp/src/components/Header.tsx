import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { BackButton } from './BackButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

export function Header({title, showBackButton}: any) {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    return(
        <View style={{margin:18, flexDirection:'row'}}>
        {
            showBackButton ? 
            <>
                <BackButton onBackPress={() => navigation.pop()} />
                <Text style={{fontSize: 14, flex: 1, textAlign:"center", fontWeight: 700, color:'#fff'}}>{title}</Text>
            </> : 
            <Text style={{fontSize: 28,fontWeight: 700, color:'#fff'}}>{title}</Text>
        }
        </View>
    );
}
