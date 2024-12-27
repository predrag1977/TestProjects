import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor:'#000', 
    height: '100%'
  },
  eventButton: {
    backgroundColor: '#333',
    paddingHorizontal:5,
    paddingVertical: 12,
    margin: 5,
    justifyContent:'center',
    flex:1,
    borderRadius:10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  tabBarIcon: {
    width: 30,
    height: 30
  },
  tabBarIconFocused: {
    width: 32,
    height: 32
  }
});
