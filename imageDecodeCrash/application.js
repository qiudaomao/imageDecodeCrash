//# sourceURL=application.js

//
//  application.js
//  imageDecodeCrash
//
//  Created by zfu on 2019/2/16.
//  Copyright © 2019 zfu. All rights reserved.
//

/*
 * This file provides an example skeletal stub for the server-side implementation 
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is 
 * configured in the AppDelegate of the TVML application. Note that  the various 
 * javascript functions here are referenced by name in the AppDelegate. This skeletal 
 * implementation shows the basic entry points that you will want to handle 
 * application lifecycle events.
 */

/**
 * @description The onLaunch callback is invoked after the application JavaScript 
 * has been parsed into a JavaScript context. The handler is passed an object 
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the 
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents 
 * the URL that was used to retrieve the application JavaScript.
 */
App.onLaunch = function(options) {
    var alert = createAlert("Hello World!", "Welcome to tvOS");
    navigationDocument.pushDocument(alert);
}


App.onWillResignActive = function() {

}

App.onDidEnterBackground = function() {

}

App.onWillEnterForeground = function() {
    
}

App.onDidBecomeActive = function() {
    
}

App.onWillTerminate = function() {
    
}


/**
 * This convenience funnction returns an alert template, which can be used to present errors to the user.
 */
var createAlert = function(title, description) {
    let img = [
            "http://static-baidu.lazycat.net.cn/imgs/ef8d00877db000a7a63351623c0d17.png",
            "http://static-baidu.lazycat.net.cn/imgs/f319d08d840bf7c776fb0079692a54.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/f596850fe7aaa1a5e782c2cebf4e2b.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180620_344.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180709_589.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180711_640.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180719_759.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180728_903.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180731_1006.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180811_1192.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180811_1200.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180820_1430.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180825_1640.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180827_1721.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180829_1822.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180918_2550.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20180930_3217.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20181009_3589.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20181012_3724.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20181017_4063.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20181018_4121.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20181126_5822.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20181225_7363.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/m_20190104_7816.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mahua401.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mahua407.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mahua4c2.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1164.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1203.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1230.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1551.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1605.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1649.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1689.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1699.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb1884.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb2159.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb2501.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb370.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb482.jpg",
            "http://static-baidu.lazycat.net.cn/imgs/mhb944.jpg",

    ]
    var alertString = `<document>
    <stackTemplate>
    <banner>
    <title>Available Action Movies</title>
    </banner>
    <collectionList>`
    for (let i=0; i<img.length/5; i++) {
        alertString +=`
        <shelf>
        <section>`
        for (let idx=i*5; idx<(i+1)*5; idx++) {
            alertString += `
            <lockup>
            <img src="${img[idx]}" width="285" height="376"/>
            <title>${idx}</title>
            </lockup>
            `
        }
        alertString += `
        </section>
        </shelf>`
    }
        alertString += `
    </collectionList>
    </stackTemplate>
    </document>`

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc
}
