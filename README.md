# RNTube

| Demo  |
|---|
| <img src="https://github.com/user-attachments/assets/bf28b7fc-bea1-4738-b1c6-852008268393" width="600" /> |

## Main Libraries Used
| Library  |  Used for |
|---|---|
| `@react-native-async-storage/async-storage`  |  For local storage. Used with redux. |
| `@react-navigation/bottom-tabs`  |  Used for showing bottom tabbar. |
| `axios`  |  Used for api calls. |
| `redux`  |  Used for global state management |
| `lottie`  |  Used for prebuild static animations |
| `react-native-config`  |  Used to store environment variables |
| `react-native-paper`  |  Used for prebuilt material components |
| `react-native-vector-icons`  |  Used for icons |
| `eslint`  |  Used for linting the code |
| `react-native-restart`  |  Used to restart app in case of crash |
| `react-native-size-matters`  |  Used for moderate scaling fonts and sizes |


## Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
