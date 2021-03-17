import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_5}>
        <View style={styles.View_8}>
          <Icon name="star" />
        </View>
        <View style={styles.View_61}>
          <Text>Accueil</Text>
        </View>
      </View>
      <View style={styles.View_68}>
        <View style={styles.View_69}>
          <Text>Welcome on board !</Text>
        </View>
      </View>
      <View style={styles.View_76}>
        <View style={styles.View_77} />
        <ImageBackground
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/25067/cb6aa45c-c0ae-4edf-81da-74d82522051f.jpg"
          }}
          style={styles.ImageBackground_78}
        >
          <Button
            title="Les veaux"
            color="#ffffff"
            style={styles.Button_83}
            onPress={() => alert("Pressed!")}
          />
        </ImageBackground>
        <View style={styles.View_79} />
        <ImageBackground
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/25067/024adc60-6a90-4e4b-8ce8-eb8775458bc7.jpg"
          }}
          style={styles.ImageBackground_80}
        >
          <Button
            title="Les vaches"
            color="#ffffff"
            style={styles.Button_86}
            onPress={() => alert("Pressed!")}
          />
        </ImageBackground>
        <View style={styles.View_81} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    width: "100%",
    height: "90%",
    marginBottom: "0%",
    alignSelf: "center",
    color: "#f6f6f6",
    alignItems: "center",
    alignContent: "flex-start",
    borderColor: "#4bb592"
  },
  View_5: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    alignContent: "center"
  },
  View_8: {
    width: "15%",
    height: "55%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Icon_60: {},
  View_61: {
    width: "70%",
    height: "55%",
    paddingLeft: "0%",
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Text_64: {},
  View_68: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  View_69: { width: "80%", alignItems: "center" },
  Text_72: {},
  View_76: { width: "100%", paddingTop: 0, flexDirection: "row" },
  View_77: {
    width: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch"
  },
  ImageBackground_78: {
    width: "37%",
    height: 110,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "stretch",
    borderColor: "#e2e2e2",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
    backgroundSize: "cover"
  },
  Button_83: { marginBottom: 0, overflow: "hidden", alignSelf: "flex-end" },
  View_79: {
    width: "6%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch"
  },
  ImageBackground_80: {
    width: "37%",
    height: 110,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "stretch",
    borderColor: "#e2e2e2",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
    backgroundSize: "cover"
  },
  Button_86: { marginBottom: 0, overflow: "hidden", alignSelf: "flex-end" },
  View_81: {
    width: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch"
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
