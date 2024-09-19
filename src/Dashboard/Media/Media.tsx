import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { useSelector } from 'react-redux';
import { Label, LoadingIndicator } from '../../common/components';
// @ts-ignore
import Carousel from 'react-native-snap-carousel';
import { storeType } from '../../common/store/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';

const { height } = Dimensions.get('window');

const VideoPlayer = React.memo(({ uri, isVisible, isMuted, setIsBuffering }: any) => {
  return (
    <Video
      source={{ uri }}
      style={styles.video}
      paused={!isVisible}
      muted={false}
      resizeMode="cover"
      repeat
      onBuffer={(e) => setIsBuffering(e.isBuffering)}
    />
  );
});

const colors = ["black", "green", "black"]

export const Media = () => {
  const loading = useSelector((store: storeType) => store.loader.loading);
  const media = useSelector((store: storeType) => store.dashboard.media);

  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isBuffering, setIsBuffering] = React.useState(false);

  const carouselRef = useRef(null);

  return (
    <View style={styles.container}>
      <LoadingIndicator loading={isBuffering} color='#FFFFFF' />

      <View style={{ zIndex: 1, position: 'absolute', width: "100%", flexDirection: 'row', justifyContent: 'space-between', padding: moderateScale(20) }}>
        <Label white title='Media' />
        <MaterialCommunityIcons name='video' color={"white"} size={moderateScale(30)} />
      </View>

      <Carousel
        ref={carouselRef}
        data={media}
        renderItem={({ item, index }: any) => {
          return (
            <View style={{ flex: 1 }}>

              <View style={{ zIndex: 1, position: 'absolute', bottom: moderateScale(100), right: moderateScale(10) }}>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <MaterialCommunityIcons name='cards-heart' color={"red"} size={moderateScale(30)} />
                  <Label white title={`${item.likes_count}`} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: moderateScale(20) }}>
                  <MaterialCommunityIcons name='chat-outline' color={"#FFFFFF"} size={moderateScale(30)} />
                  <Label white title={`${item.comments_count}`} />
                </View>

              </View>

              <VideoPlayer
                uri={item.urls.mov}
                isVisible={index === activeSlide}
                isMuted={!(index === activeSlide)}
                setIsBuffering={setIsBuffering}
              />

            </View>
          )
        }}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        sliderHeight={Dimensions.get("window").height}
        itemHeight={Dimensions.get("window").height}
        vertical={true}
        onSnapToItem={(index: number) => {
          setActiveSlide(index);
        }}
        initialNumToRender={1}
        firstItem={activeSlide}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    height: height,
    width: '100%',
  },
  controls: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  controlText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
