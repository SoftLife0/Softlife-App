import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import profile from './profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Softlife, It time to get hungry !!</Text>
      <Link href="/profile" style={{color:'blue'}}>Go to Profile</Link>
      <StatusBar style="auto" />
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
});
