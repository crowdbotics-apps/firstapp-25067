import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen1215322Navigator from '../features/CopyOfCopyOfBlankScreen1215322/navigator';
import CopyOfBlankScreen1215321Navigator from '../features/CopyOfBlankScreen1215321/navigator';
import BlankScreen1215319Navigator from '../features/BlankScreen1215319/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen1215322: { screen: CopyOfCopyOfBlankScreen1215322Navigator },
CopyOfBlankScreen1215321: { screen: CopyOfBlankScreen1215321Navigator },
BlankScreen1215319: { screen: BlankScreen1215319Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
