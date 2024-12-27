import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/DystirStyle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Page } from '../routes/Routes';

export function EventView({eventOfMatch, match}: any) {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <TouchableOpacity style={[styles.eventButton]} activeOpacity= {0.8} onPress={() => navigation.navigate(Page.SelectedEvent, {eventOfMatch: eventOfMatch, match: match})}>
            <Text style={[styles.text, {color:'yellow'}]}>{eventOfMatch.eventMinute}</Text>
            <Text style={[styles.text]}>{eventOfMatch.eventText}</Text>
        </TouchableOpacity>
    );
}
