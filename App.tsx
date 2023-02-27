/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList, SubStackParamList} from './RootNavigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();
const SubStack = createNativeStackNavigator<SubStackParamList>();
const Tab = createBottomTabNavigator();

const TabHome = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home!</Text>
  </View>
);

const TabSub = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Sub!</Text>
  </View>
);

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: HomeProps) => {
  // const navigation =
  //   useNavigation<StackNavigationProp<RootStackParamList, 'SubStack'>>();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.base}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Sub"
            onPress={() =>
              navigation.navigate('SubStack', {
                screen: 'Sub',
                params: {id: '1111'},
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

type SubProps = NativeStackScreenProps<SubStackParamList, 'Sub'>;

const SubScreen = ({navigation, route}: SubProps) => {
  // const navigation = useNavigation<StackNavigationProp<SubStackParamList>>();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.base}>
          <Text>Sub Screen ({route.params.id})</Text>
          <Button
            title="Open to SubModal"
            onPress={() => navigation.navigate('SubModal', {user: 'Jana'})}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

type SubModalProps = NativeStackScreenProps<SubStackParamList, 'SubModal'>;

const SubModal = ({route}: SubModalProps) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.base}>
          <Text>Sub Modal ({route.params.user})</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SubScreenStack = () => (
  <SubStack.Navigator
    initialRouteName="Sub"
    screenOptions={{headerShown: false}}>
    <SubStack.Group>
      <SubStack.Screen
        name="Sub"
        component={SubScreen}
        initialParams={{id: '0'}}
      />
    </SubStack.Group>
    <SubStack.Group>
      <SubStack.Screen
        name="SubModal"
        component={SubModal}
        options={{presentation: 'modal'}}
      />
    </SubStack.Group>
  </SubStack.Navigator>
);

const TabStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="TabHome" component={TabHome} />
    <Tab.Screen name="TabSub" component={TabSub} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="SubStack" component={SubScreenStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
