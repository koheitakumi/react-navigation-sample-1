import {NavigatorScreenParams} from '@react-navigation/native';
import {navigationRef} from './App';

export type RootStackParamList = {
  Home: undefined;
  SubStack: NavigatorScreenParams<SubStackParamList>;
};

export type SubStackParamList = {
  Sub: {id: string};
  SubModal: {user: string};
};

export function navigate(name: keyof RootStackParamList, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}
