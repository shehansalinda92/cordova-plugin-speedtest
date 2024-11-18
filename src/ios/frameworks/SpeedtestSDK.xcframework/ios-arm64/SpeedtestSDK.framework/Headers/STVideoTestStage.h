// AUTOGENERATED FILE - DO NOT MODIFY!
// This file was generated by Djinni from video.djinni

#import "STVideoTestStageRendition.h"
#import "STVideoTestStageType.h"
#import <Foundation/Foundation.h>

/** Stage the video test is currently running. */
@interface STVideoTestStage : NSObject
- (nonnull instancetype)init NS_UNAVAILABLE;
+ (nonnull instancetype)new NS_UNAVAILABLE;
- (nonnull instancetype)initWithStageType:(STVideoTestStageType)stageType
                                rendition:(nullable STVideoTestStageRendition *)rendition NS_DESIGNATED_INITIALIZER;
+ (nonnull instancetype)VideoTestStageWithStageType:(STVideoTestStageType)stageType
                                          rendition:(nullable STVideoTestStageRendition *)rendition;

/** The type of stage. */
@property (nonatomic, readonly) STVideoTestStageType stageType;

/** The rendition of the stage if this is a Fixed stage. */
@property (nonatomic, readonly, nullable) STVideoTestStageRendition * rendition;

@end
