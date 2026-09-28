
import { Tabs } from 'expo-router';
import type { ComponentType } from 'react';
import { Text, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Home from '../../assets/svgs/darkThemed/home.svg';
import Library from '../../assets/svgs/darkThemed/library.svg';
import Settings from '../../assets/svgs/darkThemed/settings.svg';
import { useTheme } from '../../hooks/useTheme';

type HeaderTitleProps = {
  title: string;
  Icon: ComponentType<SvgProps>;
  fillIcon?: boolean;
  color: string;
};

function HeaderTitle({ title, Icon, fillIcon = false, color }: HeaderTitleProps) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Icon width={20} height={20} stroke={fillIcon ? 'none' : color} fill={fillIcon ? color : 'none'} />
      <Text style={{ color, fontSize: 17, fontWeight: '600' }}>{title}</Text>
    </View>
  );
}

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
          headerTitle: () => <HeaderTitle title="Home" Icon={Home} color={theme.primary} />,
          tabBarIcon: ({ color, size }) => (
            <Home width={size} height={size} stroke={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'library',
          headerTitle: () => <HeaderTitle title="Library" Icon={Library} fillIcon color={theme.primary} />,
          tabBarIcon: ({ color, size }) => (
            <Library width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerTitle: () => <HeaderTitle title="Settings" Icon={Settings} color={theme.primary} />,
          tabBarIcon: ({ color, size }) => (
            <Settings width={size} height={size} stroke={color} />
          ),
        }}
      />
    </Tabs>
  );
}
