import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import FastImage, { ResizeMode } from 'react-native-fast-image';
// @ts-ignore
import { VLCPlayer } from 'react-native-vlc-media-player';

export declare type MediaType = 'video' | 'audio' | 'image';

declare const mediaType: {
  readonly video: 'video';
  readonly audio: 'audio';
  readonly image: 'image';
};

export interface Props {
  source: object,
  type: MediaType;
  style?: StyleProp<ViewStyle>,
  playerStyle?: StyleProp<ViewStyle>,
  paused?: boolean,
  repeat?: boolean,
  rate?: number,
  seek?: number,
  volume?: number,
  muted?: boolean,
  playInBackground?: boolean,
  videoAspectRatio?: string,
  autoAspectRatio?: boolean,
  resizeMode?: string
  onPlaying?: () => void
  onProgress?: () => void,
  onPaused?: () => void
  onStopped?: () => void,
  onBuffering?: () => void
  onEnded?: () => void,
  onError?: () => void
}

interface State {
  refresh: number
}

export class NFTMediaPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      refresh: 0,
    };
  }

  getResizeMode = (mode?: string): ResizeMode => {
    switch (mode) {
      case 'contain':
        return FastImage.resizeMode.contain;
      case 'cover':
        return FastImage.resizeMode.cover;
      case 'stretch':
        return FastImage.resizeMode.stretch;
      case 'center':
        return FastImage.resizeMode.center;
      default:
        break;
    }
    return FastImage.resizeMode.contain;
  };

  render() {
    const {
      type,
      source,
      style,
      playerStyle,
      paused,
      repeat,
      rate,
      volume,
      muted,
      playInBackground,
      videoAspectRatio,
      autoAspectRatio,
      resizeMode,
      onPlaying,
      onProgress,
      onPaused,
      onStopped,
      onBuffering,
      onEnded,
      onError,
    } = this.props || {};
    const isImage = type === mediaType.image;
    return (
      <View style={style || styles.container}>
        {
          isImage ? (
            <FastImage
              style={playerStyle}
              source={source}
              resizeMode={this.getResizeMode(resizeMode)}/>
          ) : (
            <VLCPlayer
              style={playerStyle}
              source={source}
              paused={paused}
              repeat={repeat}
              rate={rate}
              volume={volume}
              muted={muted}
              playInBackground={playInBackground}
              videoAspectRatio={videoAspectRatio}
              autoAspectRatio={autoAspectRatio}
              resizeMode={resizeMode}
              onPlaying={onPlaying}
              onProgress={onProgress}
              onPaused={onPaused}
              onStopped={onStopped}
              onBuffering={onBuffering}
              onEnded={onEnded}
              onError={onError}
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
