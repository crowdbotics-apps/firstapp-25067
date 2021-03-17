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
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    width: "100%",
    height: "90%",
    marginBottom: "0%",
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
  Text_72: {}
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
