// AUTOGENERATED FILE - DO NOT MODIFY!
// This file was generated by Djinni from handler.djinni

#import "STLogLevel.h"
#import <Foundation/Foundation.h>


@protocol STLogHandler

- (void)onLogMessage:(nonnull NSString *)message
               level:(STLogLevel)level;

@end
