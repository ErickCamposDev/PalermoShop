import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: Platform.OS === 'android' ? 20 : 0
  },
  textContainer: {
    marginVertical: 30,
  },
  content: {
    marginHorizontal: 20,
    flex: 1,
  },
});

export default styles;
