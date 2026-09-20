
import { Tabs } from 'expo-router';
import { useTheme } from '../../hooks/useTheme';
export default function TabLayout() {
  const theme = useTheme()
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: theme.primary,
      headerTintColor: theme.text,
      headerStyle: { backgroundColor: theme.background },
      tabBarStyle: {
        backgroundColor: theme.backgroundSecondary,
        borderTopWidth: 0,
        elevation: 0,
        shadowColor: 'transparent',
      },
      tabBarInactiveTintColor: theme.textMuted
    }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}
