import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="searchOnline"
        options={{
          presentation: 'modal', // or 'transparentModal' for web // Optional: hide the header
        }}
      />
    </Stack>
  );
}