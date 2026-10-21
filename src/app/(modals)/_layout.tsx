import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';
export default function RootLayout() {
  const theme = useTheme();
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: theme.background,
      },
      headerTintColor: theme.text,
    }}>
      <Stack.Screen
        name="Search Online"
        options={{
          headerShown: true,
          presentation: 'fullScreenModal',
          animation: 'slide_from_bottom',
        }
        }
      />
    </Stack>
  );
}