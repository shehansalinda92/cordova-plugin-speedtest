// AUTOGENERATED FILE - DO NOT MODIFY!
// This file was generated by Djinni from config.djinni

#import "STConnectionType.h"
#import <Foundation/Foundation.h>
@class STTrigger;


@interface STTrigger : NSObject

+ (nullable STTrigger *)newPeriodicTrigger:(nonnull NSString *)name
                                     delay:(int32_t)delay
                                  interval:(int32_t)interval;

+ (nullable STTrigger *)newNetworkTrigger:(nonnull NSString *)name
                                     from:(nonnull NSArray<NSNumber *> *)from
                                       to:(nonnull NSArray<NSNumber *> *)to;

+ (nullable STTrigger *)newDistanceTrigger:(nonnull NSString *)name
                                  distance:(int32_t)distance;

@end
