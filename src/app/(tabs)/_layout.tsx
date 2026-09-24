
import { Tabs } from 'expo-router';
import Home from '../../assets/svgs/darkThemed/home.svg';
import Library from '../../assets/svgs/darkThemed/library.svg';
import Settings from '../../assets/svgs/darkThemed/settings.svg';
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
          tabBarIcon: ({ color, size }) => (
            <Home width={size} height={size} stroke={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'library',
          tabBarIcon: ({ color, size }) => (
            <Library width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Settings width={size} height={size} stroke={color} />
          ),
        }}
      />
    </Tabs>
  );
}
