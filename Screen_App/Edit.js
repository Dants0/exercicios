import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EditScreen = ({ route, navigation }) => {
  const { userName, userEmail } = route.params || {};

  console.log(userName, userEmail); // Para verificar os valores recebidos

  return (
    <View style={styles.container}>
      <View style={styles.inputView} testID="screen-2">
        <Text style={[styles.name]} testID="name">
          {userName}
        </Text>

        <Text style={[styles.email]} testID="email">
          {userEmail}
        </Text>
      </View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
});

export default EditScreen;
