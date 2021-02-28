React-Native-Template
================================================
The goal of this project is to work as template for react-native applications, providing a base project structure, core dependencies and boilerplate to jumpstart development.

## Prerequisites
- [Node JS > 12](https://nodejs.org/) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman/)
- [Xcode](https://developer.apple.com/xcode/)
- [Cocoapods](https://cocoapods.org/)
- [JDK > 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)


## Base dependencies
- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
- [react-native-mmkv-storage](https://github.com/ammarahm-ed/react-native-mmkv-storage#readme) as storage solution.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage

#### Use Template button
Click the "Use this template" button above the file list, then use the Owner drop-down menu, and select the account you want to own the repository. Creating a repository from a template has the following advantages:

- A repository created from a template starts with a single commit.
- Commits to a repository created from a template do appear in your contribution graph.
- Creating a repository from a template starts a new project quickly.

### Option #1: Using React-Native-Rename
You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:
- Go to your project's root folder and run `npm install`.
- Create a `.env` file to store all your configuration constants. Remember to not commit this file, since it can store sensible information of your product.
- Run `npm run ios` or `npm run android` to start your application!

### Option #2: Copy the structure to your project
If you want to roll on your own and don't want to use this as a template, you can create your own project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure
This template follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `controllers`: Folder to store all your network logic (you should have one controller per resource).
  - `localization`: Folder to store the languages files.
  - `navigation`: Folder to store the navigators.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all your application screens/features.
      - `Screen`: Each screen should be stored inside it's own folder, and inside it a file for its code and a separate one for the styles and tests. Then, the `index.js` is only used to export the final component that will be used on the app.
        - `Screen.js`
        - `Screen.styles.js`
        - `Screen.test.js`
        - `index.js`
  - `selectors`: Folder to store your selectors for each reducer.
  - `storage`: Folder that contains the application storage logic.
  - `store`: Folder to put all redux middlewares and the store.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Splash screen customization
To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Setup environments
Add the environment variables files in root folder(.env.staging and .env.production)

#### Android
A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS
The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

Start by creating a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "Production"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

Expand the "Build" settings on left
- Click "Pre-actions", and under the plus sign select "New Run Script Action"
- Where it says "Type a script or drag a script file", type: `echo ".env.production" > /tmp/envfile` replacing .env.production with your file

## Styleguide
For coding styling we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).
"# MyKiranaBookRN" 
"# MyKiranaBookRN" 
"# MyKiranaBookRN" 
https://medium.com/@niraj_prajapati/automate-android-app-publishing-on-play-store-using-github-actions-554de7801c36

#TOOLS

https://github.com/react-native-community/lottie-react-native
https://www.awesome-react-native.com/



adb reverse tcp:8081 tcp:8081

C:\Users\saurabhdr\AppData\Local\Android\sdk\emulator\emulator.exe -avd Pixel_2_API_28 -dns-server 8.8.8.8
C:\Users\saurabhdr\AppData\Local\Android\sdk\emulator\emulator.exe -avd Pixel_2_XL_API_27 -dns-server 8.8.8.8
cmd

#PATH
F:\expos\git\way2love\way2loveReactnative\android\app\build\outputs\apk\debug
#release
F:\expos\git\way2love\way2loveReactnative\android\app\release

npx react-native init way2love --package=com.in.kumawat.way2love 


#ScreenMaker

https://previewed.app/screenshots/maker

npm run android

react-native run-android
npx react-native run-android
npm i react-native-svg

react-native start --reset-cache 

INSTALL || https://reactnavigation.org/
npm install @react-navigation/native
npm i @react-navigation/stack

if need

react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res


#For Keystore Generator


-------------------------------------------------------------------------------------------------------------
F:\expos\git\way2love\way2loveReactnative\android\app>keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
Enter keystore password:  
Re-enter new password: 
What is your first and last name?
  [Unknown]:  KamleshKumar Kumawat
What is the name of your organizational unit?
  [Unknown]:  kumawat org
What is the name of your organization?
  [Unknown]:  kumawat
What is the name of your City or Locality?
  [Unknown]:  ahmedabad
What is the name of your State or Province?
  [Unknown]:  GJ
What is the two-letter country code for this unit?
  [Unknown]:  IN
Is CN=KamleshKumar Kumawat, OU=kumawat org, O=kumawat, L=ahmedabad, ST=GJ, C=IN correct?
  [no]:  yes

Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
        for: CN=KamleshKumar Kumawat, OU=kumawat org, O=kumawat, L=ahmedabad, ST=GJ, C=IN
Enter key password for <my-key-alias>
        (RETURN if same as keystore password):
[Storing my-upload-key.keystore]

Warning:
The JKS keystore uses a proprietary format. It is recommended to migrate to PKCS12 which is an industry standard format using "keytool -importkeystore -srckeystore my-upload-key.keystore -destkeystore my-upload-key.keystore -deststoretype pkcs12".


#Help Link
https://reactnative.dev/docs/signed-apk-android
https://www.youtube.com/watch?v=yfYTOQBCnsc 
--------------------------------------------------------------------------------------------

#ANDROID BUILD 
----------------------------------------------
Goto Android folder -> gradlew bundleRelease

-------------------------------------------
 #Upload apk for testing 
-------------------------
 https://www.diawi.com/

 https://www.installonair.com/
-------------------------
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# For BUILD 
-> build.gradle -> uncomment below line
    // bundleInDebug: true,
    //  devDisabledInDebug: true


#Logo with Credit
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

// const App: () => React$Node = () => {
// //   state = {
// //     myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod'
// //  }
//   // firstFunc=()=>{
//   //   Alert.alert('hello')
//   // }
//   // showAlert=()=> {
//   //   AlertIOS.alert('Awesome Alert', 'This is my first React Native alert.', [{text: 'Thanks'}] )
//   // }
//   return (
//     <>
//     <StatusBar barStyle="dark-content" />
//     <SafeAreaView>
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={styles.scrollView}>
//          <View style={{ backgroundColor: "blue", flex: 0.3 }} />
//       <View style={{ backgroundColor: "red", flex: 0.5 }} />
//       <Text>Hello World! zxczxc</Text>
//       <View>
//          {/* <Text> {this.state.myState} </Text> */}
//       </View>
//         <Button
//           title="Press me"
//           onPress={this.showAlert}
//         />
//         <Image source={{uri:'https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png'}} style={styles.img}/>
//       </ScrollView>
//     </SafeAreaView>
//   </>
//   );

// };
