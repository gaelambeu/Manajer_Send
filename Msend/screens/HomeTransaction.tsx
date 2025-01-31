import { View, StyleSheet, Text } from 'react-native';

export default function HomeTransaction() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choisir une transacton</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
  },
});