/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'wooden-background',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '907px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wooden-background.jpg",'0px','0px']
                        },
                        {
                            id: 'Text1',
                            type: 'text',
                            rect: ['0px', '7px', '187px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(184, 184, 184, 0.741176); font-size: 43px;\">Rowlg&nbsp;</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['523px', '210px', '234px', '44px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Video</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(212,212,212,0.95)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['437px', '846px', '522px', '91px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Made by&nbsp;</p><p style=\"margin: 0px;\">Copyright © 2016. All rights reserved.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(184,184,184,0.74)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['537px', '846px', '202px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgba(184, 184, 184, 0.741176); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">loghmanmaroofi.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(184,184,184,0.7412)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Video',
                            type: 'video',
                            tag: 'video',
                            rect: ['320px', '308px', '640', '360', 'auto', 'auto'],
                            controls: 'controls',
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [vid+"Video1.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'buttonNext',
                            type: 'image',
                            rect: ['999px', '749px', '74px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["16px", "16px", "16px", "16px 16px"],
                            fill: ["rgba(0,0,0,0)",im+"button.png",'0px','0px'],
                            boxShadow: ["", 3, 3, 10, 0, "rgba(0,0,0,1.00)"]
                        },
                        {
                            id: 'buttonBack',
                            display: 'none',
                            type: 'image',
                            rect: ['209px', '749px', '74px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["16px", "16px", "16px", "16px 16px"],
                            fill: ["rgba(0,0,0,0)",im+"button2.png",'0px','0px'],
                            boxShadow: ["", -3, -3, 10, 0, "rgba(0,0,0,1.00)"],
                            transform: [[],['180']]
                        },
                        {
                            id: 'countText',
                            type: 'text',
                            rect: ['545px', '723px', '280px', '91px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(255, 255, 255, 0.8);\">​</span><span style=\"color: rgba(255, 255, 255, 0.8); font-size: 25px;\">​</span><span style=\"color: rgba(224, 224, 224, 0.952941);\">​</span><span style=\"color: rgba(224, 224, 224, 0.952941); font-size: 36px;\">1 of 3</span></p>",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [45, "px"], "rgba(240,240,240,0.74)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '907px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 47160,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${buttonBack}",
                            'none',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Rowlg-Video_edgeActions.js");
})("EDGE-33885671");
