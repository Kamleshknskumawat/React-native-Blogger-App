import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // marginBottom: 36,
    // padding:20
  },
  text: {
    textAlign: 'center' // Centered horizontally

  },
  terms: {
    marginTop: 15,
    paddingLeft:5
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',

    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  image: {
    width: "100%",

  },
  block: {
    width: "100%",
    borderRadius: 5,
    borderBottomColor: 10
  },
  blocks: {

    justifyContent: 'flex-end',
    marginTop: 10,
    padding: 20
  },
  input: {
    marginTop: 5,
    height: 50,


  },
  submitButton: {
    marginTop: 20,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    width: "100%"
  },
  textColor: {
    color: '#718093',
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
    paddingLeft: 10
  }
});

export default styles;
