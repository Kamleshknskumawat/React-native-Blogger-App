import Rate, { AndroidMarket } from 'react-native-rate'
import InAppReview from 'react-native-in-app-review';
import { View, StyleSheet, StatusBar, SafeAreaView, Alert, FlatList, ActivityIndicator, Linking } from 'react-native';
InAppReview.isAvailable();
export const rattingUs = () => {
    console.log("RattingUs ");
    InAppReview.RequestInAppReview()
        .then((hasFlowFinishedSuccessfully) => {
            // when return true in android it means user finished or close review flow
            console.log('InAppReview in android', hasFlowFinishedSuccessfully);

            // when return true in ios it means review flow lanuched to user.
            console.log(
                'InAppReview in ios has lanuched successfully',
                hasFlowFinishedSuccessfully,
            );

            // 1- you have option to do something ex: (navigate Home page) (in android).
            // 2- you have option to do something,
            // ex: (save date today to lanuch InAppReview after 15 days) (in android and ios).

            // 3- another option:
            if (hasFlowFinishedSuccessfully) {
                // do something for ios
                // do something for android
            }

            // for android:
            // The flow has finished. The API does not indicate whether the user
            // reviewed or not, or even whether the review dialog was shown. Thus, no
            // matter the result, we continue our app flow.

            // for ios
            // the flow lanuched successfully, The API does not indicate whether the user
            // reviewed or not, or he/she closed flow yet as android, Thus, no
            // matter the result, we continue our app flow.
        })
        .catch((error) => {
            //we continue our app flow.
            // we have some error could happen while lanuching InAppReview,
            // Check table for errors and code number that can return in catch.
            console.log(error);
        });


}
export const rattingLink = () => {

    const options = {
        AppleAppID: "2193813192",
        GooglePackageName: "com.way2love",
        AmazonPackageName: "com.way2love",
        OtherAndroidURL: "https://play.google.com/store/apps/details?id=com.way2love",
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp: false,
        openAppStoreIfInAppFails: true,
        fallbackPlatformURL: "https://way2love-15416.web.app/",
    }
    Rate.rate(options, success => {
        if (success) {
            Alert.alert("Thank You for Giving Me Your Valuable Time");
        }
    })
}

export const openInBrowser = (url) => {
    Linking.openURL(url)
        .catch(err => {
            console.error("Failed opening page because: ", err)
            alert('Failed to open page')
        })
}