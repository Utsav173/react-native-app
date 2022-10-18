import React, { useState } from "react";
import { View, Text } from "react-native";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { DownloadBtn, GtuPdfdownload } from "./Button";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.disc);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.BookName}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
          style={{ marginVertical: 5 }}
        />

      </View>
      <EthPrice price={data.author} />
      <View>
        <Text>Course : {data.genre[0]}, {data.genre[1]}</Text>
      </View>

      {/* dwonloadbtn */}

      <View style={{ marginVertical: SIZES.large }}>
        <DownloadBtn minWidth={100} data={data} />
      </View>

      {/* gtu pdf download */}

      <View style={{ marginVertical: SIZES.large }}>
        <GtuPdfdownload minWidth={100} data={data} />
      </View>

      {/* code */}
      <View style={{ marginVertical: SIZES.large }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          GTU Subject Credit
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {data.credit}
          </Text>
        </View>
      </View>

      {/* pages */}
      <View style={{ marginVertical: SIZES.large }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Total Pages 📄
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {data.pageNo}
          </Text>
        </View>
      </View>

      {/* material type */}
      <View style={{ marginVertical: SIZES.large }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Material Type
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {data.typess}
          </Text>
        </View>
      </View>

      {/* desc */}
      <View style={{ marginVertical: SIZES.extraLarge }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
          </Text>
        </View>
      </View>

      <View style={{ marginVertical: SIZES.extraLarge }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Key point to subject
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {data.description}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsDesc;
