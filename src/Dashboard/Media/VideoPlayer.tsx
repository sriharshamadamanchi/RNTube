import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Video, {VideoRef} from 'react-native-video';

var styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
  });

export const VideoPlayer = ({uri}: any) => {
 const videoRef = React.useRef<VideoRef>(null);

 return (
   <Video 
    source={{uri}}
    ref={videoRef}            
    style={styles.container}
   />
 )
}