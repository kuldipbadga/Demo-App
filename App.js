import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial
} from 'expo-ads-admob';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.bannerAdId = "ca-app-pub-3940256099942544/6300978111";
    this.interstitialAdID = "ca-app-pub-3940256099942544/1033173712";
  }
  async componentDidMount() {
    AdMobInterstitial.setAdUnitID(this.interstitialAdID);
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
    await AdMobInterstitial.showAdAsync();
  }
  await client.getFileLink('UtAqweADGTo4Gz8cZAeR-ouu4XBx78EeqRkABPL_pM4A1UpI0koD65K2');
  render() {
    return (
      <View style={styles.container}>
        <AdMobBanner
          bannerSize="mediumRectangle"
          adUnitID={this.bannerAdId}
          servePersonalizedAds={false}
        />
        <Text>Google AdMob Testing</Text>
      </View>
    );

  }

};
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
