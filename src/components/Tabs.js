import React from "react";

import { ScrollView, StyleSheet, Text, TouchableHighlight } from "react-native";

const Tabs = (props) => {
  const { tabs, activeTab, setActiveTab } = props;
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.tabsContainer}
    >
      {tabs.map((tab, index) => {
        return (
          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor="#DDDDDD"
            style={styles.tabContainer}
            key={index}
            onPress={() => setActiveTab(index)}
          >
            <Text
              style={{
                textAlign: "center",
                color: activeTab === index ? "black" : "#adadad",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {tab}
            </Text>
          </TouchableHighlight>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    marginTop: 20,
    transition: "all 0.3s ease",
  },
  tabContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default Tabs;
