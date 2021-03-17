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
        <View style={styles.View_78}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/25067/cb6aa45c-c0ae-4edf-81da-74d82522051f.jpg"
            }}
            style={styles.Image_86}
          />
        </View>
        <View style={styles.View_79} />
        <View style={styles.View_80}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/25067/024adc60-6a90-4e4b-8ce8-eb8775458bc7.jpg"
            }}
            style={styles.Image_91}
          />
        </View>
        <View style={styles.View_81} />
      </View>
      <View style={styles.View_95}>
        <View style={styles.View_96} />
        <View style={styles.View_97}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/25067/8192af44-1c5b-400f-8794-39ffe4d9ae8c.jpg"
            }}
            style={styles.Image_103}
          />
        </View>
        <View style={styles.View_98} />
        <View style={styles.View_99} />
        <View style={styles.View_100} />
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
  View_76: {
    width: "100%",
    paddingTop: 10,
    alignSelf: "center",
    flexDirection: "row"
  },
  View_77: {
    width: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  View_78: {
    width: "37%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Image_86: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    borderColor: "#e2e2e2",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5
  },
  View_79: {
    width: "6%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  View_80: {
    width: "37%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Image_91: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#e2e2e2",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5
  },
  View_81: {
    width: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  View_95: { width: "100%", alignSelf: "center", flexDirection: "row" },
  View_96: {
    width: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  View_97: {
    width: "37%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Image_103: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    borderColor: "#e2e2e2",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5
  },
  View_98: {
    width: "6%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  View_99: {
    width: "37%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  View_100: {
    width: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
