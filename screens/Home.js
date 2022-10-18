import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Dimensions } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";
import Svg, { Path } from "react-native-svg";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter(
      (item) =>
        item.BookName.toLowerCase().includes(value.toLowerCase()) ||
        item.disc.toLowerCase().includes(value.toLowerCase()) ||
        item.code.includes(value)
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ height: 70}}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280" >
              <Path
                fill= "#001F2D"
                fill-opacity="1"
                d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,245.3C840,267,960,245,1080,208C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></Path>
            </Svg>
          </View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
