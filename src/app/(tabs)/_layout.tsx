
import { Tabs } from 'expo-router';
import { useTheme } from '../../hooks/useTheme';
export default function TabLayout() {
  const theme = useTheme
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
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
