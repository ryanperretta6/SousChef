import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'My Recipes',
        }}
      />

      <Stack.Screen
        name="recipes/[id]"
        options={{
          title: 'Recipe',
        }}
      />

      <Stack.Screen
        name="recipes/new"
        options={{
          title: 'New Recipe',
        }}
      />

      <Stack.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Stack>
  );
}