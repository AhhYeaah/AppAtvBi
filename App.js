import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Aluno from './src/components/Aluno';

export default function App() {
  return (
    <View style={styles.container}>
      <Aluno></Aluno>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
