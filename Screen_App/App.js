import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator();

const App = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleEmail = (newText) => {
    setUserEmail(newText);
  };

  const handleUser = (newText) => {
    setUserName(newText);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen">
          {(props) => (
            <View style={[styles.container]}>
              <Image
                source={{ uri: 'https://cdn.jsdelivr.net/npm/h8k-design@latest/dist/assets/logo.png' }}
                style={[styles.image]}
              />
              <View style={[styles.loginContainer]}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>Your Profile</Text>

                  <TouchableOpacity
                    style={[styles.editButton]}
                    testID="edit-button"
                    onPress={() => props.navigation.navigate('EditScreen', { userName, userEmail })}
                  >
                    <Text style={[styles.editButtonText]}>EDIT</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.inputView} testID="screen-1">
                  <TextInput
                    style={[styles.input, styles.TextInput]}
                    placeholder="Name"
                    testID="name-input"
                    onChangeText={handleUser}
                    value={userName}
                  />
                  <TextInput
                    style={[styles.input]}
                    placeholder="Email"
                    testID="email-input"
                    onChangeText={handleEmail}
                    value={userEmail}
                  />
                </View>
                <TouchableOpacity
                  style={[styles.loginBtn]}
                  testID="submit-button"
                  onPress={() => props.navigation.navigate('EditScreen', { userName, userEmail })}
                >
                  <Text style={[styles.loginButtonText]}>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="EditScreen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
