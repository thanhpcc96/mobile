import React from "react";
import { Text } from "react-native";
import {
  Container,
  CardItem,
  View,
  Tab,
  Tabs,
  TabHeading,
  Icon
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles/BottomHeader.style";

const BottomHeader = () => (
  <View style={styles.modal}>
    <Tabs>
      <Tab
        heading={
          <TabHeading>
            <Icon ios="ios-bus" android="md-bus" />
            <Text>Thông tin</Text>
          </TabHeading>
        }
      >
        <View style={{ height: 100 }}>
          <Text>Tab 1</Text>
        </View>
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon ios="ios-options-outline" android="ios-options-outline" />
            <Text>Giao thông</Text>
          </TabHeading>
        }
      >
        <View style={{ height: 100 }}>
          <Text>Tab 2</Text>
        </View>
      </Tab>
    </Tabs>
  </View>
);
export default BottomHeader;
