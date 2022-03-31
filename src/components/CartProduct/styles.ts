import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: '#ECE9FF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  text: {},
  image: {
    width: 38,
    height: 50,
    borderRadius: 10,
    marginLeft: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: 200,
    marginLeft: 12,
    height: 40,
    justifyContent: 'space-between',
  },
  reduceContainer: {
    height: 25,
    width: 42,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  moreContainer: {
    height: 25,
    width: 40,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
  },
});

export default styles;
