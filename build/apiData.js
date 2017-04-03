define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.apiData = [
        {
            "name": "app",
            "properties": [
                "version",
                "build",
                "getPProPrefPath",
                "getPProSystemPrefPath",
                "project",
                "anywhere",
                "encoder",
                "userGuid",
                "getAppPrefPath",
                "getAppSystemPrefPath",
                "csxs",
                "metadata",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                },
                {
                    "name": "isDocumentOpen",
                    "arguments": []
                },
                {
                    "name": "isDocument",
                    "arguments": [
                        "filePath"
                    ]
                },
                {
                    "name": "openDocument",
                    "arguments": []
                },
                {
                    "name": "quit",
                    "arguments": []
                },
                {
                    "name": "trace",
                    "arguments": [
                        "message"
                    ]
                },
                {
                    "name": "openFCPXML",
                    "arguments": []
                },
                {
                    "name": "setSDKEventMessage",
                    "arguments": [
                        "value",
                        "eventType"
                    ]
                },
                {
                    "name": "setScratchDiskPath",
                    "arguments": [
                        "value",
                        "type"
                    ]
                },
                {
                    "name": "broadcastPrefsChanged",
                    "arguments": [
                        "preferencesThatChanged"
                    ]
                },
                {
                    "name": "setExtensionPersistent",
                    "arguments": [
                        "extensionID",
                        "state"
                    ]
                },
                {
                    "name": "getEnableProxies",
                    "arguments": []
                },
                {
                    "name": "setEnableProxies",
                    "arguments": [
                        "enable"
                    ]
                },
                {
                    "name": "enableQE",
                    "arguments": []
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "project",
            "properties": [
                "documentID",
                "name",
                "path",
                "rootItem",
                "sequences",
                "activeSequence",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                },
                {
                    "name": "openSequence",
                    "arguments": [
                        "sequenceID"
                    ]
                },
                {
                    "name": "importFiles",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "importSequences",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "createNewSequence",
                    "arguments": [
                        "sequenceName",
                        "placeholderID"
                    ]
                },
                {
                    "name": "deleteSequence",
                    "arguments": [
                        "sequence"
                    ]
                },
                {
                    "name": "exportFinalCutProXML",
                    "arguments": [
                        "exportPath",
                        "suppressUI"
                    ]
                },
                {
                    "name": "exportTimeline",
                    "arguments": [
                        "exportControllerName"
                    ]
                },
                {
                    "name": "exportOMF",
                    "arguments": [
                        "sequence",
                        "filePath",
                        "OMFTitle",
                        "sampleRate",
                        "bitsPerSample",
                        "audioEncapsulated",
                        "audioFileFormat",
                        "trimAudioFiles",
                        "handleFrames",
                        "includePan"
                    ]
                },
                {
                    "name": "exportAAF",
                    "arguments": [
                        "sequence",
                        "filePath",
                        "mixDownVideo",
                        "explodeToMono",
                        "sampleRate",
                        "bitsPerSample",
                        "embedAudio",
                        "audioFileFormat",
                        "trimSources",
                        "handleFrames"
                    ]
                },
                {
                    "name": "saveAs",
                    "arguments": [
                        "saveAsPath"
                    ]
                },
                {
                    "name": "save",
                    "arguments": []
                },
                {
                    "name": "pauseGrowing",
                    "arguments": [
                        "pausedOrNot"
                    ]
                },
                {
                    "name": "closeDocument",
                    "arguments": []
                },
                {
                    "name": "placeAsset",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "addPropertyToProjectMetadataSchema",
                    "arguments": [
                        "name",
                        "label",
                        "type"
                    ]
                },
                {
                    "name": "deleteAsset",
                    "arguments": []
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "rootItem",
            "properties": [
                "children",
                "name",
                "treePath",
                "type",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                },
                {
                    "name": "createSmartBin",
                    "arguments": [
                        "name",
                        "query"
                    ]
                },
                {
                    "name": "createBin",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "renameBin",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "deleteBin",
                    "arguments": []
                },
                {
                    "name": "moveBin",
                    "arguments": [
                        "destination"
                    ]
                },
                {
                    "name": "getXMPMetadata",
                    "arguments": []
                },
                {
                    "name": "setXMPMetadata",
                    "arguments": [
                        "buffer"
                    ]
                },
                {
                    "name": "getProjectMetadata",
                    "arguments": []
                },
                {
                    "name": "setProjectMetadata",
                    "arguments": [
                        "buffer"
                    ]
                },
                {
                    "name": "getMarkers",
                    "arguments": []
                },
                {
                    "name": "refreshMedia",
                    "arguments": []
                },
                {
                    "name": "getMediaPath",
                    "arguments": []
                },
                {
                    "name": "canChangeMediaPath",
                    "arguments": []
                },
                {
                    "name": "changeMediaPath",
                    "arguments": [
                        "mediaPath"
                    ]
                },
                {
                    "name": "select",
                    "arguments": []
                },
                {
                    "name": "setOverridePixelAspectRatio",
                    "arguments": [
                        "numerator",
                        "denominator"
                    ]
                },
                {
                    "name": "setScaleToFrameSize",
                    "arguments": []
                },
                {
                    "name": "createSubClip",
                    "arguments": [
                        "name",
                        "startTime",
                        "endTime",
                        "hasHardBoundaries",
                        "takeVideo",
                        "takeAudio"
                    ]
                },
                {
                    "name": "findItemsMatchingMediaPath",
                    "arguments": [
                        "matchString",
                        "ignoreSubclips"
                    ]
                },
                {
                    "name": "attachProxy",
                    "arguments": [
                        "mediaPath",
                        "isHiRes"
                    ]
                },
                {
                    "name": "hasProxy",
                    "arguments": []
                },
                {
                    "name": "getProxyPath",
                    "arguments": []
                },
                {
                    "name": "canProxy",
                    "arguments": []
                },
                {
                    "name": "startTime",
                    "arguments": []
                },
                {
                    "name": "setStartTime",
                    "arguments": [
                        "arg1"
                    ]
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "children",
            "properties": [
                "numItems",
                "length",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "sequences",
            "properties": [
                "numSequences",
                "length",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "anywhere",
            "properties": [
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                },
                {
                    "name": "setAuthenticationToken",
                    "arguments": [
                        "inEAServer",
                        "inEAUsername",
                        "inEAAuthToken"
                    ]
                },
                {
                    "name": "getAuthenticationToken",
                    "arguments": []
                },
                {
                    "name": "listProductions",
                    "arguments": []
                },
                {
                    "name": "openProduction",
                    "arguments": [
                        "inProductionURL"
                    ]
                },
                {
                    "name": "isProductionOpen",
                    "arguments": []
                },
                {
                    "name": "getCurrentEditingSessionURL",
                    "arguments": []
                },
                {
                    "name": "getCurrentEditingSessionSelectionURL",
                    "arguments": []
                },
                {
                    "name": "getCurrentEditingSessionActiveSequenceURL",
                    "arguments": []
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "encoder",
            "properties": [
                "ENCODE_ENTIRE",
                "ENCODE_IN_TO_OUT",
                "ENCODE_WORKAREA",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                },
                {
                    "name": "encodeSequence",
                    "arguments": [
                        "sequence",
                        "outputFilePath",
                        "presetPath",
                        "WorkAreaType",
                        "removeOnCompletion"
                    ]
                },
                {
                    "name": "encodeProjectItem",
                    "arguments": [
                        "projectItem",
                        "outputFilePath",
                        "presetPath",
                        "WorkAreaType",
                        "removeOnCompletion"
                    ]
                },
                {
                    "name": "encodeFile",
                    "arguments": [
                        "inputFilePath",
                        "outputFilePath",
                        "presetPath",
                        "removeOnCompletion",
                        "startTime",
                        "stopTime"
                    ]
                },
                {
                    "name": "startBatch",
                    "arguments": []
                },
                {
                    "name": "launchEncoder",
                    "arguments": []
                },
                {
                    "name": "setSidecarXMPEnabled",
                    "arguments": [
                        "enable"
                    ]
                },
                {
                    "name": "setEmbeddedXMPEnabled",
                    "arguments": [
                        "enable"
                    ]
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "csxs",
            "properties": [
                "resourceCentral",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "resourceCentral",
            "properties": [
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                },
                {
                    "name": "getBrightness",
                    "arguments": []
                },
                {
                    "name": "openURL",
                    "arguments": [
                        "urlString"
                    ]
                },
                {
                    "name": "validateClient",
                    "arguments": [
                        "token"
                    ]
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "metadata",
            "properties": [
                "getMetadata",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "bind",
                    "arguments": [
                        "eventName",
                        "function"
                    ]
                },
                {
                    "name": "unbind",
                    "arguments": [
                        "eventName"
                    ]
                },
                {
                    "name": "setTimeout",
                    "arguments": [
                        "eventName",
                        "function",
                        "milliseconds"
                    ]
                },
                {
                    "name": "setMetadataValue",
                    "arguments": []
                },
                {
                    "name": "setMarkerData",
                    "arguments": []
                },
                {
                    "name": "addMarker",
                    "arguments": []
                },
                {
                    "name": "updateMarker",
                    "arguments": []
                },
                {
                    "name": "deleteMarker",
                    "arguments": []
                }
            ],
            "dom": "regularDOM"
        },
        {
            "name": "qe",
            "properties": [
                "ea",
                "name",
                "version",
                "config",
                "location",
                "platform",
                "language",
                "project",
                "codeProfiler",
                "audioChannelMapping",
                "source",
                "__proto__",
                "__count__",
                "__class__",
                "reflect"
            ],
            "methods": [
                {
                    "name": "getDebugDatabaseEntry",
                    "arguments": []
                },
                {
                    "name": "executeConsoleCommand",
                    "arguments": []
                },
                {
                    "name": "outputToConsole",
                    "arguments": []
                },
                {
                    "name": "exit",
                    "arguments": []
                },
                {
                    "name": "stop",
                    "arguments": []
                },
                {
                    "name": "open",
                    "arguments": []
                },
                {
                    "name": "enablePlayStats",
                    "arguments": []
                },
                {
                    "name": "startPlayback",
                    "arguments": []
                },
                {
                    "name": "stopPlayback",
                    "arguments": []
                },
                {
                    "name": "newProject",
                    "arguments": []
                },
                {
                    "name": "wait",
                    "arguments": []
                },
                {
                    "name": "localize",
                    "arguments": []
                },
                {
                    "name": "enablePerformanceLogging",
                    "arguments": []
                },
                {
                    "name": "disablePerformanceLogging",
                    "arguments": []
                },
                {
                    "name": "isPerformanceLoggingEnabled",
                    "arguments": []
                },
                {
                    "name": "getSequencePresets",
                    "arguments": []
                },
                {
                    "name": "setAudioChannelMapping",
                    "arguments": []
                },
                {
                    "name": "beginDroppedFrameLogging",
                    "arguments": []
                },
                {
                    "name": "log",
                    "arguments": []
                },
                {
                    "name": "getModalWindowID",
                    "arguments": []
                },
                {
                    "name": "setDebugDatabaseEntry",
                    "arguments": []
                },
                {
                    "name": "toLocaleString",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "hasOwnProperty",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "propertyIsEnumerable",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "isPrototypeOf",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "toSource",
                    "arguments": []
                },
                {
                    "name": "unwatch",
                    "arguments": []
                },
                {
                    "name": "watch",
                    "arguments": []
                }
            ],
            "dom": "qeDOM"
        },
        {
            "name": "ea",
            "properties": [
                "__proto__",
                "__count__",
                "__class__",
                "reflect"
            ],
            "methods": [
                {
                    "name": "authenticate",
                    "arguments": []
                },
                {
                    "name": "isLoggedIn",
                    "arguments": []
                },
                {
                    "name": "convertProjectIntoProduction",
                    "arguments": []
                },
                {
                    "name": "isConvertProjectIntoProductionRunning",
                    "arguments": []
                },
                {
                    "name": "getProcessID",
                    "arguments": []
                },
                {
                    "name": "getUsername",
                    "arguments": []
                },
                {
                    "name": "getAuthToken",
                    "arguments": []
                },
                {
                    "name": "setAuthToken",
                    "arguments": []
                },
                {
                    "name": "getProductionList",
                    "arguments": []
                },
                {
                    "name": "getInviteList",
                    "arguments": []
                },
                {
                    "name": "openProduction",
                    "arguments": []
                },
                {
                    "name": "sync",
                    "arguments": []
                },
                {
                    "name": "canShare",
                    "arguments": []
                },
                {
                    "name": "share",
                    "arguments": []
                },
                {
                    "name": "getConflicts",
                    "arguments": []
                },
                {
                    "name": "resolveConflict",
                    "arguments": []
                },
                {
                    "name": "doesEditingSessionHaveLocalMedia",
                    "arguments": []
                },
                {
                    "name": "signOut",
                    "arguments": []
                },
                {
                    "name": "benchmarkReflectEverything",
                    "arguments": []
                },
                {
                    "name": "waitForCurrentReflectionToComplete",
                    "arguments": []
                },
                {
                    "name": "isCollaborationOnly",
                    "arguments": []
                },
                {
                    "name": "isHostedCollaborationOnly",
                    "arguments": []
                },
                {
                    "name": "getExportPresets",
                    "arguments": []
                },
                {
                    "name": "getLoggedInDataServerVersion",
                    "arguments": []
                },
                {
                    "name": "getDiscoveryURL",
                    "arguments": []
                },
                {
                    "name": "getURL",
                    "arguments": []
                },
                {
                    "name": "postURL",
                    "arguments": []
                },
                {
                    "name": "createProduction",
                    "arguments": []
                },
                {
                    "name": "setLocalHubConnectionStatus",
                    "arguments": []
                },
                {
                    "name": "toLocaleString",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "hasOwnProperty",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "propertyIsEnumerable",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "isPrototypeOf",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "toSource",
                    "arguments": []
                },
                {
                    "name": "unwatch",
                    "arguments": []
                },
                {
                    "name": "watch",
                    "arguments": []
                }
            ],
            "dom": "qeDOM"
        },
        {
            "name": "project",
            "properties": [
                "importFailures",
                "currentRendererName",
                "isAudioConforming",
                "isIndexing",
                "isAudioPeakGenerating",
                "numConformedFiles",
                "numIndexedFiles",
                "numAudioPeakGeneratedFiles",
                "name",
                "path",
                "numSequences",
                "numItems",
                "numBins",
                "numSequenceItems",
                "__proto__",
                "__count__",
                "__class__",
                "reflect"
            ],
            "methods": [
                {
                    "name": "undoStack",
                    "arguments": []
                },
                {
                    "name": "undoStackIndex",
                    "arguments": []
                },
                {
                    "name": "importProject",
                    "arguments": []
                },
                {
                    "name": "importPSD",
                    "arguments": []
                },
                {
                    "name": "newBarsAndTone",
                    "arguments": []
                },
                {
                    "name": "newCaption",
                    "arguments": []
                },
                {
                    "name": "newUniversalCountingLeader",
                    "arguments": []
                },
                {
                    "name": "newTransparentVideo",
                    "arguments": []
                },
                {
                    "name": "newBlackVideo",
                    "arguments": []
                },
                {
                    "name": "newColorMatte",
                    "arguments": []
                },
                {
                    "name": "import",
                    "arguments": []
                },
                {
                    "name": "getRendererNames",
                    "arguments": []
                },
                {
                    "name": "setRenderer",
                    "arguments": []
                },
                {
                    "name": "getActiveSequence",
                    "arguments": []
                },
                {
                    "name": "getRemainingMetadataCacheIndexCount",
                    "arguments": []
                },
                {
                    "name": "resetNumFilesCounter",
                    "arguments": []
                },
                {
                    "name": "init",
                    "arguments": []
                },
                {
                    "name": "save",
                    "arguments": []
                },
                {
                    "name": "saveAs",
                    "arguments": []
                },
                {
                    "name": "close",
                    "arguments": []
                },
                {
                    "name": "importFiles",
                    "arguments": []
                },
                {
                    "name": "getSequenceAt",
                    "arguments": []
                },
                {
                    "name": "getItemAt",
                    "arguments": []
                },
                {
                    "name": "getBinAt",
                    "arguments": []
                },
                {
                    "name": "getSequenceItemAt",
                    "arguments": []
                },
                {
                    "name": "getVideoEffectByName",
                    "arguments": []
                },
                {
                    "name": "getAudioEffectByName",
                    "arguments": []
                },
                {
                    "name": "newSequence",
                    "arguments": []
                },
                {
                    "name": "sizeOnDisk",
                    "arguments": []
                },
                {
                    "name": "getVideoTransitionByName",
                    "arguments": []
                },
                {
                    "name": "getAudioTransitionByName",
                    "arguments": []
                },
                {
                    "name": "getVideoEffectList",
                    "arguments": []
                },
                {
                    "name": "getAudioEffectList",
                    "arguments": []
                },
                {
                    "name": "getVideoTransitionList",
                    "arguments": []
                },
                {
                    "name": "getAudioTransitionList",
                    "arguments": []
                },
                {
                    "name": "deletePreviewFiles",
                    "arguments": []
                },
                {
                    "name": "newBin",
                    "arguments": []
                },
                {
                    "name": "newSmartBin",
                    "arguments": []
                },
                {
                    "name": "undo",
                    "arguments": []
                },
                {
                    "name": "redo",
                    "arguments": []
                },
                {
                    "name": "toLocaleString",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "hasOwnProperty",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "propertyIsEnumerable",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "isPrototypeOf",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "toSource",
                    "arguments": []
                },
                {
                    "name": "unwatch",
                    "arguments": []
                },
                {
                    "name": "watch",
                    "arguments": []
                }
            ],
            "dom": "qeDOM"
        },
        {
            "name": "importFailures",
            "properties": [
                "length",
                "__proto__"
            ],
            "methods": [
                {
                    "name": "concat",
                    "arguments": [
                        "item"
                    ]
                },
                {
                    "name": "join",
                    "arguments": [
                        "separator"
                    ]
                },
                {
                    "name": "reverse",
                    "arguments": []
                },
                {
                    "name": "slice",
                    "arguments": []
                },
                {
                    "name": "sort",
                    "arguments": []
                },
                {
                    "name": "pop",
                    "arguments": []
                },
                {
                    "name": "push",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "splice",
                    "arguments": []
                },
                {
                    "name": "shift",
                    "arguments": []
                },
                {
                    "name": "toString",
                    "arguments": []
                },
                {
                    "name": "toLocaleString",
                    "arguments": []
                },
                {
                    "name": "unshift",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "toSource",
                    "arguments": []
                }
            ],
            "dom": "qeDOM"
        },
        {
            "name": "codeProfiler",
            "properties": [
                "__proto__",
                "__count__",
                "__class__",
                "reflect"
            ],
            "methods": [
                {
                    "name": "start",
                    "arguments": []
                },
                {
                    "name": "stop",
                    "arguments": []
                },
                {
                    "name": "reset",
                    "arguments": []
                },
                {
                    "name": "get",
                    "arguments": []
                },
                {
                    "name": "toLocaleString",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "hasOwnProperty",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "propertyIsEnumerable",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "isPrototypeOf",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "toSource",
                    "arguments": []
                },
                {
                    "name": "unwatch",
                    "arguments": []
                },
                {
                    "name": "watch",
                    "arguments": []
                }
            ],
            "dom": "qeDOM"
        },
        {
            "name": "source",
            "properties": [
                "player",
                "clip",
                "__proto__",
                "__count__",
                "__class__",
                "reflect"
            ],
            "methods": [
                {
                    "name": "openFilePath",
                    "arguments": []
                },
                {
                    "name": "toLocaleString",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "hasOwnProperty",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "propertyIsEnumerable",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "isPrototypeOf",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "toSource",
                    "arguments": []
                },
                {
                    "name": "unwatch",
                    "arguments": []
                },
                {
                    "name": "watch",
                    "arguments": []
                }
            ],
            "dom": "qeDOM"
        },
        {
            "name": "player",
            "properties": [
                "loopPlayback",
                "droppedFrames",
                "totalFrames",
                "audioDropouts",
                "audioMediaNotFound",
                "audioClockJitters",
                "audioIOOverloads",
                "audioIODropouts",
                "audioPrefetchBehinds",
                "audioDeviceLoadAvg",
                "audioDeviceLoadMin",
                "audioDeviceLoadMax",
                "audioDeviceLoadStdDev",
                "__proto__",
                "__count__",
                "__class__",
                "reflect"
            ],
            "methods": [
                {
                    "name": "play",
                    "arguments": []
                },
                {
                    "name": "stop",
                    "arguments": []
                },
                {
                    "name": "step",
                    "arguments": []
                },
                {
                    "name": "startScrubbing",
                    "arguments": []
                },
                {
                    "name": "setLoopPlayback",
                    "arguments": []
                },
                {
                    "name": "enableStatistics",
                    "arguments": []
                },
                {
                    "name": "disableStatistics",
                    "arguments": []
                },
                {
                    "name": "clearAudioDropoutStatus",
                    "arguments": []
                },
                {
                    "name": "captureAudioDeviceLoad",
                    "arguments": []
                },
                {
                    "name": "getPosition",
                    "arguments": []
                },
                {
                    "name": "toLocaleString",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "hasOwnProperty",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "propertyIsEnumerable",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "isPrototypeOf",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "toSource",
                    "arguments": []
                },
                {
                    "name": "unwatch",
                    "arguments": []
                },
                {
                    "name": "watch",
                    "arguments": []
                }
            ],
            "dom": "qeDOM"
        },
        {
            "name": "clip",
            "properties": [
                "name",
                "filePath",
                "duration",
                "videoFieldType",
                "videoHasAlpha",
                "videoPixelAspectRatio",
                "videoFrameWidth",
                "videoFrameHeight",
                "videoFrameRate",
                "audioFrameRate",
                "audioSampleSize",
                "audioChannelType",
                "audioNumChannels",
                "__proto__",
                "__count__",
                "__class__",
                "reflect"
            ],
            "methods": [
                {
                    "name": "setInPoint",
                    "arguments": []
                },
                {
                    "name": "setOutPoint",
                    "arguments": []
                },
                {
                    "name": "clearInPoint",
                    "arguments": []
                },
                {
                    "name": "clearOutPoint",
                    "arguments": []
                },
                {
                    "name": "setDuration",
                    "arguments": []
                },
                {
                    "name": "numOfChildClipsInUse",
                    "arguments": []
                },
                {
                    "name": "clearChildClips",
                    "arguments": []
                },
                {
                    "name": "numOfChildClips",
                    "arguments": []
                },
                {
                    "name": "hasChildClipsInUse",
                    "arguments": []
                },
                {
                    "name": "containsCaptions",
                    "arguments": []
                },
                {
                    "name": "containsCaptioningStream",
                    "arguments": []
                },
                {
                    "name": "numCaptioningStreams",
                    "arguments": []
                },
                {
                    "name": "getCaptioningStreamAt",
                    "arguments": []
                },
                {
                    "name": "setVideoInPoint",
                    "arguments": []
                },
                {
                    "name": "setVideoOutPoint",
                    "arguments": []
                },
                {
                    "name": "setAudioInPoint",
                    "arguments": []
                },
                {
                    "name": "setAudioOutPoint",
                    "arguments": []
                },
                {
                    "name": "toLocaleString",
                    "arguments": [
                        "arg1"
                    ]
                },
                {
                    "name": "hasOwnProperty",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "propertyIsEnumerable",
                    "arguments": [
                        "name"
                    ]
                },
                {
                    "name": "isPrototypeOf",
                    "arguments": [
                        "what"
                    ]
                },
                {
                    "name": "toSource",
                    "arguments": []
                },
                {
                    "name": "unwatch",
                    "arguments": []
                },
                {
                    "name": "watch",
                    "arguments": []
                }
            ],
            "dom": "qeDOM"
        }
    ];
});
//# sourceMappingURL=apiData.js.map