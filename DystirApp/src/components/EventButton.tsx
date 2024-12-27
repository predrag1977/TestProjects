import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';


export function EventButton({title, backgroundColor, borderColor = '', color = 'white', onPress = () => {}}: any) {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    return(
        <TouchableOpacity style={{
            backgroundColor: backgroundColor,
            alignItems:'center',
            justifyContent:'center',
            height:70,
            flex:1,
            padding:3,
            margin:5,
            borderRadius:10,
            borderColor: borderColor,
            borderWidth: borderColor == '' ? 0 : 2,
        }}
        activeOpacity={0.8} onPress={() => onPress()}>
        <Text style={{
            fontSize:14,
            fontWeight:700,
            color: color,
            textAlign:'center',
        }}>{title}
        </Text>
    </TouchableOpacity>
    );
}
