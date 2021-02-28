
import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import RNUpiPayment from 'react-native-upi-payment';

const BookmarkScreen = ({ navigation }) => {
    const [state, setState] = useState({
        Status: "",
        txnId: "",
        GOOGLE_PAY: 'GOOGLE_PAY',
        PHONEPE: 'PHONEPE',
        PAYTM: 'PAYTM',
        message: ""
    });
    function floo(paymentApp) {
        // RNUpiPayment.initializePayment({
        //     vpa: 'something@bank',  		//your upi address like 12345464896@okhdfcbank
        //     payeeName: 'abc',   			// payee name 
        //     amount: '1',				//amount
        //     transactionNote: 'Testing Upi',		//note of transaction
        //     transactionRef: 'aasf-332-aoei-fn'	//some refs to aknowledge the transaction
        // }, paymentApp, successCallback, failureCallback);

        RNUpiPayment.initializePayment({
            vpa: 'kumawatshailesh7@okaxis',  		//your upi address like 12345464896@okhdfcbank
            payeeName: 'testing',   			// payee name 
            amount: '1',				//amount
            transactionNote: 'Testing Upi',		//note of transaction
            transactionRef: 'aasf-332-aoei-fn'	//some refs to aknowledge the transaction
        }, ()=>{console.log('successCallback')}, ()=>{console.log('failureCallback')});
    }
    const failureCallback = (data) => {
        console.log(data)
        // in case no action taken
        if (data['status'] == "FAILURE") {
            setState(state.Status = "FAILURE")
            setState(state.message = data['message'])

            //setState({ state.: "FAILURE" })
            //setState({ message: data['message'] });
        }
        // in case of googlePay
        else if (data['Status'] == "FAILURE") {
            setState(state.Status = "FAILURE");
            setState(state.message = "app closed without doing payment")
            // that.setState({ message: "app closed without doing payment" });;
        }
        // in case of phonepe
        else if (data['Status'] == "Failed") {
            setState(state.Status = "FAILURE");
            setState(state.message = "app closed without doing payment")
        }
        // in case of phonepe
        else if (data['Status'] == "Submitted") {
            setState(state.Status = "FAILURE");
            setState(state.message = "transaction done but pending")
            //   that.setState({ message: "transaction done but pending" });
        }
        // any other case than above mentioned
        else {
            setState(state.Status = "FAILURE");
            setState(state.message = data[Status])
            //  that.setState({ message: data[Status] });
        }
    }
    const successCallback = (data) => {
        //
        console.log(data);

        // setState(state.Status="SUCCESS");
        // setState(state.Status=data['txnId']);
        // setState(state.message="Succccessfull payment" );
        // that.setState({ txnId: data['txnId'] });
        // that.setState({ Status: "SUCCESS" });
        // that.setState({ txnId: data['txnId'] });
        // that.setState({ message: "Succccessfull payment" });
    }
    return (
        <View style={styles.container}>
            <Text>ExploreScreen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
            <Button
                title="Google pay"
                onPress={() => { floo(state.GOOGLE_PAY) }}
            />

            <Button
                title="Google pasy"
                onPress={() => { floo(state.GOOGLE_PAY) }}
            />
        </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
