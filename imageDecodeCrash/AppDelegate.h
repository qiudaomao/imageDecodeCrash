//
//  AppDelegate.h
//  imageDecodeCrash
//
//  Created by zfu on 2019/2/16.
//  Copyright © 2019 zfu. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <TVMLKit/TVMLKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, TVApplicationControllerDelegate>

@property (strong, nonatomic) UIWindow *window;
@property (strong, nonatomic) TVApplicationController *appController;

@end

