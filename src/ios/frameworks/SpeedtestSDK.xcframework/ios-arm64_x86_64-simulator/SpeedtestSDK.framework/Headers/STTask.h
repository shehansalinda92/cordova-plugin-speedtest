// AUTOGENERATED FILE - DO NOT MODIFY!
// This file was generated by Djinni from config.djinni

#import "STThroughputStage.h"
#import <Foundation/Foundation.h>
@class STTask;


/**
 * A task is a sub-test that is executed in parallel. So for example, throughput task
 * and the traceroute task are executed in parallel. Note that the tasks are ordered 
 * to ensure that they do not affect the accuracy of each other
 */
@interface STTask : NSObject

/** Grabs the network data from device and includes it as part of the result */
+ (nullable STTask *)newCaptureDeviceStateTask;

/**
 * Measures the packetloss using the UDP protocol
 * Additional details: https://www.speedtest.net/about/knowledge/glossary
 */
+ (nullable STTask *)newPacketlossTask;

/** Default throughput task which comprises of Latency, Upload and Download */
+ (nullable STTask *)newThroughputTask;

/**
 * A task that does nothing but time out the run. Useful when running a test 
 * without a throughput test. 
 *
 * Note: The timeout task will not be used when running a throughput task with
 * upload or download stages.
 */
+ (nullable STTask *)newTimeoutTask:(int8_t)timeoutSeconds;

/** Configure which stages to run */
+ (nullable STTask *)newCustomThroughputTask:(nonnull NSSet<NSNumber *> *)stages;

/**
 * Runs a traceroute against the given endpoint. Multiple traceroute tasks
 * can run in parallel against different endpoints
 * Additional details: https://www.speedtest.net/about/knowledge/glossary
 */
+ (nullable STTask *)newTracerouteTask:(nonnull NSString *)endpoint;

/**
 * Runs a traceroute against the server used for the throughput task. If a throughout task
 * is not running, the traceroute will still execute against the server that would have been
 * selected for the throughput task.
 */
+ (nullable STTask *)newServerTracerouteTask;

/**
 * Runs a video test. Can optionally limit the video resolution to the view size.
 * A video test needs to be appropriately configured. The configuration must satisfy the
 * following requirements:
 * - There must be stages.
 * - All named videos and renditions in a stage must be present in the videos section.
 * - All adaptive renditions in a video must be listed under the renditions list.
 */
+ (nullable STTask *)newVideoTestTask:(BOOL)limitAdaptiveVideoResolutionToViewSize;

@end
