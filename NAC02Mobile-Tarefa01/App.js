import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      image_source: '',
    };
  }

  componentDidMount() {
    this.fetchJSON();

  }

  fetchJSON() {
    fetch("https://reqres.in/api/users/1")
      .then(response => response.json())
      .then((responseJson) => {

        var first_name = responseJson['data']['first_name']
        var last_name = responseJson['data']['last_name']
        var image_source = responseJson['data']['avatar']

        this.setState({
          first_name: first_name,
          last_name: last_name, image_source: image_source
        })

      })
      .catch(error => console.log(error))
  }

  render() {

    return (
      <View style={styles.loader}>
        <Text>{this.state.first_name}</Text>
        <Text>{this.state.last_name}</Text>
        <Image
          style={styles.tinyLogo}
          source={this.state.image_source}
        />
      </View>
    )
  }

}

export default App;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});