import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
// @ts-ignore
import { PrimaryView } from '../../common/components/PrimaryView/PrimaryView';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CurvedButton, Label, LoadingIndicator } from '../../common/components';
import { Appbar, Divider, Icon } from 'react-native-paper';
import { storeType } from '../../common/store/types';
import { FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    justifyContent: 'flex-end'
  }
});

const Header = () => (
  <>
    <Appbar.Header statusBarHeight={moderateScale(20)}>
      <Image source={require("../../common/theme/icons/logo.png")} style={{ width: moderateScale(24), height: moderateScale(24) }} />
      <Appbar.Content title="EK Ventures" style={{ paddingLeft: moderateScale(10) }} />
      <Appbar.Action icon="magnify" onPress={() => { }} size={moderateScale(24)} />
      <Appbar.Action icon="chat-outline" onPress={() => { }} size={moderateScale(24)} />
      <Appbar.Action icon="bell-outline" onPress={() => { }} size={moderateScale(24)} />
    </Appbar.Header>
    <Divider />
  </>
);

const DailyCard = () => {
  return (
    <View style={{ width: "90%", alignSelf: 'center', paddingVertical: moderateScale(10) }}>
      <Label xl secondary title='Please click below' />
      <Card onPress={() => { }} style={{ flexDirection: "row", height: moderateScale(75), padding: 0, borderRadius: moderateScale(10) }}>
        <View style={{ backgroundColor: '#34A653', width: moderateScale(75), borderTopLeftRadius: moderateScale(10), borderBottomLeftRadius: moderateScale(10), justifyContent: 'center', alignItems: 'center' }}>
          <Appbar.Action icon="heart-plus-outline" onPress={() => { }} size={moderateScale(36)} color='#FFFFFF' />
        </View>
        <View style={{ flex: 1, borderTopRightRadius: moderateScale(10), borderBottomRightRadius: moderateScale(10), justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF2CD' }}>
          <View style={{ paddingRight: moderateScale(36) }}>
            <Label primary center title='Title' />
            <Label primary center title='Sub Title' />
          </View>
        </View>
      </Card>
    </View>
  )
}

export const Home = () => {
  const dispatch = useDispatch();

  const loading = useSelector((store: storeType) => store.loader.loading);

  const images = [
    require("../../common/theme/icons/image1.png"),
    require("../../common/theme/icons/image2.png")
  ]

  return (
    <PrimaryView>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <LoadingIndicator loading={loading} color='#000000'/>
        <View style={styles.container}>
          <Label secondary xxl center title='Hello John' style={{ paddingVertical: moderateScale(10) }} />
          <DailyCard />
          <Divider />
          <FlatList
            contentContainerStyle={{ alignSelf: 'center', paddingLeft: moderateScale(50) }}
            data={images}
            renderItem={({ item }) => {
              return (
                <Image source={item} style={{ borderRadius: moderateScale(10) }} />
              )
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ padding: moderateScale(10) }} />}
          />
          <CurvedButton
            title='Upload'
            Icon={<Icon source="video" color='#FFFFFF' size={moderateScale(24)} />}
            buttonStyle={{ width: moderateScale(350), height: moderateScale(45), alignSelf: "center", borderRadius: moderateScale(5), marginBottom: moderateScale(20) }}
          />
        </View>
      </ScrollView>
    </PrimaryView>
  );
};
