import styles from '../../styles/RecoveryPasswordStyle';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useState } from 'react';
import { Platform, Text, View } from 'react-native';

function ConfirmationCode({ code, onChangeCode }) {
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    onChangeCode,
  });

  return (
    <CodeField
      value={code}
      onChangeText={onChangeCode}
      cellCount={6}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
      testID="my-code-input"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={styles.cell}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  )
};

export default ConfirmationCode;