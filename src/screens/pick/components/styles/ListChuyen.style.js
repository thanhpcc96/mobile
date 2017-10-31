import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleConatiner: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
    // #2196F3
  },
  title: {
    color: '#424242',
    fontSize: 25,
  },
  contentContainer: {
    flex: 1,
  },
  chuyenxeCard: {
    height: 150,
    width: '90%',
    marginVertical: '1.5%',
    backgroundColor: '#F7F9FC',
  },
  // F7F9FC
  chuyenxeCardTopContainer: {
    flex: 0.3,
    position: 'relative',
    backgroundColor: '#82AACB',
  },
  chuyenxeCardTitle: {
    fontSize: 20,
    // fontWeight: 100,
    color: '#fff',
    top: '1%',
    left: '1.5%',
  },
  CardContentContainer: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  ChuyenxeInfo: {
    flex: 0.2,
    flexDirection: 'row',
  },
  ChuyenxeInfoText: {
    flex: 4,
  },
  textContent: {
    fontSize: 15,
    color: '#5C5C5C',
    left: '0.5%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#1E9DFB',
  },
  textButton: {
    color: '#fff',
    fontSize: 17,
  },
});
export default styles;
