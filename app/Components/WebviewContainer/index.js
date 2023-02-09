import React from 'react';
import {WebView} from 'react-native-webview';

export default function WebviewContainer({url}) {
  return (
    <>
      <WebView
        originWhitelist={['http://*', 'https://*', 'intent://*']}
        source={{uri: url}}
        containerStyle={{width: '100%', height: '100%'}}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.99,
          minHeight: 1,
        }}
      />
    </>
  );
}
