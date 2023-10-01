import { Stack } from 'expo-router';
import React from 'react';

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen
        name="signup"
        options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
