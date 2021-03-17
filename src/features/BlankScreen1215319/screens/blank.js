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
        <View>
          <Icon name="star" />
        </View>
        <View style={styles.View_61} />
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
    justifyContent: "center",
    alignContent: "flex-start"
  },
  View_8: {},
  Icon_60: {},
  View_61: { alignSelf: "center", alignItems: "center" }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
