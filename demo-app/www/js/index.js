/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    const platform = device.platform.toLowerCase();
    const platformTxt = document.getElementById("platformTxt");
    const configText = document.getElementById("configText");
    const resultText = document.getElementById("result");
    const btn = document.getElementById("btn");
    const clearBtn = document.getElementById("clearBtn");
    const startButtonText = document.getElementById("start");
    const spinner = document.getElementById("spinner");
    const shareBtn = document.getElementById("shareBtn");
    const btnPRequest = document.getElementById("btnPRequest");
    const btnPCheck = document.getElementById("btnPerCheck");

    const androidConfig = {
        apiKey: "wrqgslqcvhmjzmpt",
        config: "NCINAG3",
        endpoint: "https://api-sit.starhub.com/ookla/dev/ookla-upload-json",
        clientId: "dc-nonprod",
        token:"Bearer c2c4ca2db8f741fb825386edd8f6f88d",
        keyId: "dc-nonprod",
        clientSecret: "d5602b5a-535a-42b4-a72f-22f6f4e12cea",
        grantType: "client_credentials",
        providerOrgCode: "ookla-dev",
        tokenApi: "https://api-sit.starhub.com/auth/realms/api/protocol/openid-connect/token"
    };


    const iosConfig = {
        apiKey: "wrqgslqcvhmjzmpt",
        config: "Ncinga2",
        count: 3,
        timeInterval: 10,
        endpoint: "https://api-sit.starhub.com/ookla/dev/ookla-upload-json",
        clientId: "dc-nonprod",
        keyId: "dc-nonprod",
        clientSecret: "d5602b5a-535a-42b4-a72f-22f6f4e12cea",
        grantType: "client_credentials",
        providerOrgCode: "ookla-dev",
        tokenApi: "https://api-sit.starhub.com/auth/realms/api/protocol/openid-connect/token"
    };

    platformTxt.innerText = platform;

    function success(result) {
        startButtonText.innerHTML = "START";
        spinner.style.visibility = "hidden";
        resultText.innerText = JSON.stringify(result);
        console.log(result)
    }

    function error(error) {
        startButtonText.innerHTML = "START";
        spinner.style.visibility = "hidden";
        resultText.innerText = JSON.stringify(error);
        console.log(error)
    }

    clearBtn.addEventListener("click", function () {
        resultText.innerText = "";
    });

    btnPRequest.addEventListener("click", function () {
        window.plugins.SpeedTest.requestPermissions(null, (success) =>{alert(JSON.stringify(success))}, (error)=>{alert(JSON.stringify(error))});
    });

    btnPCheck.addEventListener("click", function () {
        window.plugins.SpeedTest.checkPermissions(null, (success) =>{alert(JSON.stringify(success))}, (error)=>{alert(JSON.stringify(error))});
    });

    btn.addEventListener("click", function () {
        startButtonText.innerHTML = "";
        spinner.style.visibility = "visible";
        if (platform == "ios") {
            configText.innerText = `Config : ${JSON.stringify(iosConfig)}`;
            window.plugins.SpeedTest.startTesting(JSON.stringify(iosConfig), success, error);
        } else if (platform == "android") {
            configText.innerText = `Config : ${JSON.stringify(androidConfig)}`;
            window.plugins.SpeedTest.startTesting(JSON.stringify(androidConfig), success, error);
        }

    });

    shareBtn.addEventListener("click", function () {
        const textToShare = resultText.innerText;
        shareText(textToShare);
    });

    function shareText(text) {
        if (window.plugins && window.plugins.socialsharing) {
            window.plugins.socialsharing.share(
                text,
                'Sharing Text',
                null,
                null,
                function () {
                    console.log("Shared successfully!");
                },
                function (err) {
                    console.error("Failed to share: ", err);
                }
            );
        } else {
            console.error("Social Sharing plugin is not available.");
        }
    }


    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
