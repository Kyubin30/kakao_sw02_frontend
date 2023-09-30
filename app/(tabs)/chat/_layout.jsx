import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        tabBarStyle: { alignItems: 'center' },
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'My Counsel',
        }}
      />
    </Stack>
  );
}
