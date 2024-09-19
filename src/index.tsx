import React from 'react';
import { Label } from './common/components';
import { moderateScale } from 'react-native-size-matters';
import { Platform, StyleSheet, View } from 'react-native';
import { theme } from './common/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from './Dashboard/Home/Home';
import { useDispatch } from 'react-redux';
import { fetchMediaAction } from './Dashboard/redux/actions';
import { Media } from './Dashboard/Media/Media';
import { Games } from './Dashboard/Games/Games';
import { Reports } from './Dashboard/Reports/Reports';
import { Account } from './Dashboard/Account/Account';
import SplashScreen from 'react-native-splash-screen'

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabsStyle: {
    flex: 1
  },
  icon: {
    height: moderateScale(36),
    width: moderateScale(36)
  },
  welcomeLabelStyle: {
    margin: moderateScale(15)
  },
  teamNameStyle: {
    marginBottom: moderateScale(20)
  },
  infoIconStyle: {
    position: 'absolute',
    padding: moderateScale(10),
    right: moderateScale(90),
    bottom: moderateScale(12)
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(20)
  }
});

export const Header = ({ name }: { name: string }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <HeaderBackButton
        style={{ paddingLeft: moderateScale(10) }}
        tintColor="#FFFFFF"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Label
        ellipsizeMode="end"
        numberOfLines={1}
        center
        xl22
        bold
        white
        title={name}
        style={{ width: moderateScale(275), right: moderateScale(10) }}
      />
    </View>
  );
};

const TabBarLabel = ({ color, children }: any) => {
  return (
    <Label
      s
      bold
      title={children}
      style={{ color, paddingBottom: moderateScale(10) }}
    />
  );
};

export const HomeTabbar = () => {
  return (
    <View style={styles.tabsStyle}>
      <Tab.Navigator
        backBehavior={'initialRoute'}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarStyle: {
            height:
              Platform.OS === 'android' ? moderateScale(65) : moderateScale(90),
            paddingTop: moderateScale(0)
          },
          tabBarLabel: TabBarLabel
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ borderTopWidth: focused ? 3 : 0, borderColor: theme.colors.primary, width: moderateScale(50), alignItems: 'center' }}>
                <Entypo
                  name="home"
                  color={
                    focused
                      ? theme.colors.primary
                      : theme.colors.outline
                  }
                  size={moderateScale(30)}
                />
              </View>
            )
          }}
          name={'Home'}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ borderTopWidth: focused ? 3 : 0, borderColor: theme.colors.primary, width: moderateScale(50), alignItems: 'center' }}>
                <Ionicons
                  name="play-outline"
                  color={
                    focused
                      ? theme.colors.primary
                      : theme.colors.outline
                  }
                  size={moderateScale(30)}
                />
              </View>

            )
          }}
          name={'Media'}
          component={Media}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ borderTopWidth: focused ? 3 : 0, borderColor: theme.colors.primary, width: moderateScale(50), alignItems: 'center' }}>
                <MaterialIcons
                  name="food-bank"
                  color={
                    focused
                      ? theme.colors.primary
                      : theme.colors.outline
                  }
                  size={moderateScale(30)}
                />
              </View>

            )
          }}
          name={'Games'}
          component={Games}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ borderTopWidth: focused ? 3 : 0, borderColor: theme.colors.primary, width: moderateScale(50), alignItems: 'center' }}>
                <Entypo
                  name="bar-graph"
                  color={
                    focused
                      ? theme.colors.primary
                      : theme.colors.outline
                  }
                  size={moderateScale(30)}
                />
              </View>

            )
          }}
          name={'Reports'}
          component={Reports}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ borderTopWidth: focused ? 3 : 0, borderColor: theme.colors.primary, width: moderateScale(50), alignItems: 'center' }}>
                <MaterialIcons
                  name="account-circle"
                  color={
                    focused
                      ? theme.colors.primary
                      : theme.colors.outline
                  }
                  size={moderateScale(30)}
                />
              </View>
            )
          }}
          name={'Account'}
          component={Account}
        />
      </Tab.Navigator>
    </View>
  );
};

const Stack = createStackNavigator();

export const Dashboard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  React.useEffect(() => {
    dispatch(fetchMediaAction())
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: theme.colors.primary,
        headerStyle: {
          backgroundColor: theme.colors.background,
          height:
            Platform.OS === 'android'
              ? moderateScale(50)
              : Platform.isTV
                ? 80
                : undefined
        },
        headerTitleStyle: {
          fontSize: theme.font.fontSizes.xl20,
          color: theme.colors.primary,
          fontFamily: theme.font.fontFamily.bold,
          marginHorizontal: moderateScale(20)
        },
        headerTitle: ({ children }: { children: string }) => {
          return (
            <Label
              primary
              bold
              xl20
              title={children}
              ellipsizeMode={'tail'}
              numberOfLines={1}
              style={{ marginHorizontal: moderateScale(25) }}
            />
          );
        }
      }}>
      <>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="HomeTabbar"
          component={HomeTabbar}
        />
      </>
    </Stack.Navigator>
  );
};
