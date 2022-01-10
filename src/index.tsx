import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-nft-media-player' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type NftMediaPlayerProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'NftMediaPlayerView';

export const NftMediaPlayerView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<NftMediaPlayerProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
