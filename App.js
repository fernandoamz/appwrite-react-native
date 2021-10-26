import React, { useState} from 'react';
import sdk from './src/config';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
} from 'react-native';

function App() {
  const [alert, setAlert] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    sdk.account
      .create(email, password, name)
      .then(setAlert('User created successfully'))
      .catch(setAlert('User created successfully'));
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{alert}</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={nameText => setName(nameText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={nameEmail => setEmail(nameEmail)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={namePassword => setPassword(namePassword)}
        />
        <Button title="Sign Up" onPress={() => handleSubmit()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
  },
});

export default App;
