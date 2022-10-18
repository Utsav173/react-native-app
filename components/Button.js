import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import { Linking } from "react-native";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Download ⏬
      </Text>
    </TouchableOpacity>
  );
};

export const DownloadBtn = ({ minWidth, fontSize, data, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.large,
        minWidth: minWidth,
        ...props,
      }}
      onPress={() => Linking.openURL(`${data.link}`)}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: "white",
          textAlign: "center",
        }}
      >
        Download File ⏬
      </Text>
    </TouchableOpacity>
  );
};

export const GtuPdfdownload = ({ minWidth, fontSize, data, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.botton,
        padding: SIZES.small,
        borderRadius: SIZES.large,
        minWidth: minWidth,
        ...props,
      }}
      onPress={() => Linking.openURL(`${data.GtuLink}`)}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: "white",
          textAlign: "center",
        }}
      >
        GTU Subject PDF 📔
      </Text>
    </TouchableOpacity>
  );
};
