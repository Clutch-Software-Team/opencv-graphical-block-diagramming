const customNodes = [
    {
        type: "start",
        isExecuted: false,
        data: {
            label: "start",
            functionName: "start",
            returnType: "InputArray",
            returnValue: null,
            parameters: []
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "Sobel",
            functionName: "Sobel",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "ddepth", type: "int", required: true, currentValue: "", default: "" },
                { name: "dx", type: "int", required: true, currentValue: "", default: "" },
                { name: "dy", type: "int", required: true, currentValue: "", default: "" },
                { name: "ksize", type: "int", required: false, currentValue: "", default: 3, values: [1, 3, 5, 7] },
                { name: "scale", type: "double", required: false, currentValue: "", default: 1 },
                { name: "delta", type: "double", required: false, currentValue: "", default: 0 },
                { name: "borderType", type: "int", required: false, currentValue: "", default: 'cv.BORDER_DEFAULT', values: '#BorderTypes' },
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "blur",
            functionName: "blur",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "ksize", type: "Size", required: false, currentValue: "", default: "new cv.Size(5, 5)" },
                { name: "anchor", type: "Point", required: false, currentValue: "", default: 'new cv.Point(-1, -1)' },
                { name: "borderType", type: "int", required: false, currentValue: "", default: 'cv.BORDER_DEFAULT', values: '#BorderTypes' },
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "boxFilter",
            functionName: "boxFilter",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "ddepth", type: "int", required: false, currentValue: "", default: "-1" },
                { name: "ksize", type: "Size", required: false, currentValue: "", default: "new cv.Size(5, 5)" },
                { name: "anchor", type: "Point", required: false, currentValue: "", default: 'new cv.Point(-1, 1)' },
                { name: "normalize", type: "bool", required: false, currentValue: "", default: true },
                { name: "borderType", type: "int", required: false, currentValue: "", default: 'cv.BORDER_DEFAULT', values: '#BorderTypes' },
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "compareHist",
            functionName: "compareHist",
            returnType: "double",
            returnValue: null,
            parameters: [
                { name: "H1", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "H2", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "method", type: "int", required: true, currentValue: "", default: "0,1,2,3" }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "cornerHarris",
            functionName: "cornerHarris",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "blockSize", type: "int", required: true, currentValue: "", default: "" },
                { name: "ksize", type: "int", required: true, currentValue: "", default: "" },
                { name: "k", type: "double", required: true, currentValue: "", default: "" },
                { name: "borderType", type: "int", required: false, currentValue: "", default: "cv.BORDER_DEFAULT" }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "cvtColor",
            functionName: "cvtColor",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "code", type: "int", required: true, currentValue: "", default: "" },
                { name: "dcn", type: "int", required: false, currentValue: "", default: "0" }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "Canny",
            functionName: "Canny",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "threshold1", type: "double", required: false, currentValue: "", default: "50" },
                { name: "threshold2", type: "double", required: false, currentValue: "", default: "100" },
                { name: "apertureSize", type: "double", required: false, currentValue: "", default: "3" },
                { name: "L2gradient", type: "bool", required: false, currentValue: "", default: "false" }
            ],
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "GaussianBlur",
            functionName: "GaussianBlur",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "kernelMatrix", type: "size", required: false, currentValue: "", default: "new cv.Size(5, 5)" },
                { name: "sigmaX,", type: "double", required: false, currentValue: "", default: "0" },
                { name: "sigmaY", type: "double", required: false, currentValue: "", default: "0" },
                { name: "borderType", type: "int", required: false, currentValue: "", default: "cv.BORDER_DEFAULT" }
            ],
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "Laplacian",
            functionName: "Laplacian",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "ddepth", type: "int", required: false, currentValue: "", default: "-1" },
                { name: "ksize", type: "Size", required: false, currentValue: "", default: "1" },
                { name: "scale", type: "double", required: false, currentValue: "", default: "1" },
                { name: "delta", type: "double", required: false, currentValue: "", default: "0" },
                { name: "borderType", type: "int", required: false, currentValue: "", default: "cv.BORDER_DEFAULT" }
            ],
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "findContours",
            functionName: "findContours",
            returnType: "OutputArrayOfArrays",
            returnValue: null,
            parameters: [
                { name: "image", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "contours", type: "OutputArrayOfArrays", required: true, currentValue: "", default: "" },
                { name: "mode", type: "int", required: true, currentValue: "", default: "", values: ["RETR_EXTERNAL", "RETR_LIST", "RETR_CCOMP", "RETR_TREE", "RETR_FLOODFILL"] },
                { name: "method", type: "int", required: true, currentValue: "", default: "", values: ["CHAIN_APPROX_NONE", "CHAIN_APPROX_SIMPLE", "CHAIN_APPROX_TC89_L1", "CHAIN_APPROX_TC89_KCOS"] },
                { name: "offset", type: "Point", required: false, currentValue: "", default: "cv.Point()" }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "filter2D",
            functionName: "filter2D",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "ddepth", type: "int", required: false, currentValue: "", default: "cv.CV_8U", values: ["cv.CV_8U", "cv.CV_16U", "cv.CV_16S", "cv.CV_32F", "cv.CV_64F", "-1"] },
                { name: "kernel", type: "InputArray", required: false, currentValue: "", default: "cv.Mat.eye(3, 3, cv.CV_32FC1)" },
                { name: "anchor", type: "Point", required: false, currentValue: "", default: "new cv.Point(-1,-1)", values: ["CHAIN_APPROX_NONE", "CHAIN_APPROX_SIMPLE", "CHAIN_APPROX_TC89_L1", "CHAIN_APPROX_TC89_KCOS"] },
                { name: "delta", type: "double", required: false, currentValue: "", default: "0" },
                { name: "borderType", type: "int", required: false, currentValue: "", default: "cv.BORDER_DEFAULT", values: ["BORDER_CONSTANT", "BORDER_REPLICATE", "BORDER_REFLECT", "BORDER_REFLECT_101", "BORDER_TRANSPARENT", "BORDER_REFLECT101", "BORDER_DEFAULT", "BORDER_ISOLATED"] }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "distanceTransform",
            functionName: "distanceTransform",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
                { name: "distanceType", type: "int", required: false, currentValue: "", default: "cv.DIST_L2", values: ["cv.DIST_USER", "cv.DIST_L1", "cv.DIST_L2", "cv.DIST_C", "cv.DIST_L12", "cv.DIST_FAIR", "cv.DIST_WELSCH", "cv.DIST_HUBER"] },
                { name: "maskSize", type: "int", required: false, currentValue: "", default: "cv.DIST_MASK_5", values: ["cv.DIST_MASK_3", "cv.DIST_MASK_5"] },
                { name: "dstType", type: "int", required: false, currentValue: "", default: "cv.CV_32F", values: ["CV_32F", "CV_8U"] }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "resize",
            functionName: "resize",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "ET*", required: true, currentValue: "", default: "" },
                { name: "cn", type: "int", required: "", currentValue: "", default: "" },
                { name: "*ofst", type: "int", required: "", currentValue: "", default: "" },
                { name: "m", type: "FT*", required: "", currentValue: "", default: "" },
                { name: "dst", type: "FT*", required: "", currentValue: "", default: "" },
                { name: "dst_min", type: "int", required: "", currentValue: "", default: "" },
                { name: "dst_max", type: "int", required: "", currentValue: "", default: "" },
                { name: "dst_width", type: "int", required: "", currentValue: "", default: "" }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "medianBlur",
            functionName: "medianBlur",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "_src", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "_dst", type: "OutputArray", required: false, currentValue: "", default: "" },
                { name: "ksize", type: "int", required: false, currentValue: "", default: "5" }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "putText",
            functionName: "putText",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "img", type: "InputArray", required: true, currentValue: "", default: "" },
                { name: "text", type: "const string&", required: true, currentValue: "", default: "" },
                { name: "org", type: "Point", required: false, currentValue: "", default: "" },
                { name: "font", type: "int", required: true, currentValue: "", default: "FONT_HERSHEY_PLAIN" },
                { name: "fontScale", type: "double", required: true, currentValue: "", default: "" },
                { name: "color", type: "scalar", required: true, currentValue: "", default: "" },
                { name: "thickness", type: "int", required: false, currentValue: "", default: true },
                { name: "lineType", type: "int", required: true, currentValue: "", default: "8" },
                { name: "bottomLeftOrigin", type: "bool", required: true, currentValue: "", default: "false" }
            ]
        }
    },
    {
        type: "finish",
        isExecuted: false,
        data: {
            label: "finish",
            functionName: "finish",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
            ]
        }
    },
]

export default customNodes;
