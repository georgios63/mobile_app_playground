import React, { useRef } from "react";
import MyButton from "../components/myButton";

import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const randomNum = useRef(Math.random()).current;
  const [text, onChangeText] = React.useState(null);
  const [password, onChangeNumber] = React.useState(null);

  const myHeader = () => (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>

      <ActivityIndicator
        size="large"
        color="#c1262c"
        style={{ marginBottom: 30 }}
      />
    </View>
  );

  const myFooter = () => (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="Password"
        keyboardType="numeric"
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <MyButton
          onPress={() => Alert.alert("Learning RN is easy!")}
          title="Learn more"
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <MyButton
          title="Go to GameScreen"
          onPress={() => navigation.navigate("GameScreen")}
        />
      </View>
    </View>
  );

  const renderImages = ({ item }) => {
    const onPress = () => {
      alert("You tapped that!");
    };

    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
          }}
          style={styles.img}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        keyExtractor={(item) => item}
        ListHeaderComponent={myHeader}
        data={[0, 1, 2, 3, 4]}
        renderItem={renderImages}
        ListFooterComponent={myFooter}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
  },

  img: {
    width: "90%",
    alignSelf: "center",
    height: 160,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "black",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
