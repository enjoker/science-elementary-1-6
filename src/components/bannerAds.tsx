import React from 'react';
import { BannerAd, BannerAdSize } from '@react-native-admob/admob';

const BannerAds = () => {
   return (
      <BannerAd
         size={BannerAdSize.ADAPTIVE_BANNER}
         unitId={'ca-app-pub-1678137107426089/2312586032'}
         onAdFailedToLoad={(error) => console.error(error)}
      />
   )
}

export default BannerAds