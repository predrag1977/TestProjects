import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/DystirStyle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Page } from '../routes/Routes';

export function BackButton({onBackPress}: any) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onBackPress()}>
            <View style={{height:40, width:40, marginVertical:8, opacity:0.5, backgroundColor: '#fff', borderRadius: 20}}>
                <Image
                    source={require('../images/back.png')}
                    style={{tintColor: 'black', margin:6, height:27, width:27}} />
            </View>
        </TouchableOpacity>
    );
}
