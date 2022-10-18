import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import {
  CircleButton,
  RectButton,
  DownloadBtn,
  SubInfo,
  DetailsDesc,
  DetailsBid,
  FocusedStatusBar,
  People,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 500 }}>
    <Image
      source={data.bookCover}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      {/* <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.2)",
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          data={data}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View> */}

      <FlatList
        data={data.bid}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <View
              style={{
                width: "100%",
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <People />
              <View
                style={{
                  paddingHorizontal: SIZES.font,
                  paddingVertical: SIZES.base,
                  backgroundColor: COLORS.white,
                  borderRadius: SIZES.font,
                  justifyContent: "center",
                  alignItems: "center",
                  ...SHADOWS.extraLarge,
                  elevation: 1,
                  maxWidth: "50%",
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.primary,
                  }}
                >
                  Subject Code
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                  }}
                >
                  {data.code}
                </Text>
              </View>
            </View>
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
