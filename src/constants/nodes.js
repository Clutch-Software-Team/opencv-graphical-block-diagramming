const customNodes = [
    {
        type: "start",
        isExecuted: false,
        data: {
            label: "start",
            functionName: "start",
            returnType: "Mat",
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "ddepth", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.CV_8U" },
                { name: "dx", type: "int", isOutput: false, required: false, currentValue: "", default: "1" },
                { name: "dy", type: "int", isOutput: false, required: false, currentValue: "", default: "0" },
                { name: "ksize", type: "int", isOutput: false, required: false, currentValue: "", default: 3, values: [1, 3, 5, 7] },
                { name: "scale", type: "double", isOutput: false, required: false, currentValue: "", default: 1 },
                { name: "delta", type: "double", isOutput: false, required: false, currentValue: "", default: 0 },
                { name: "borderType", type: "int", isOutput: false, required: false, currentValue: "", default: 'cv.BORDER_DEFAULT', values: '#BorderTypes' },
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "normalize",
            functionName: "normalize",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "alpha", type: "double", isOutput: false, required: false, currentValue: "", default: 1 },
                { name: "beta", type: "double", isOutput: false, required: false, currentValue: "", default: 0 },
                { name: "norm_type", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.NORM_L2" },
                { name: "dtype", type: "int", isOutput: false, required: false, currentValue: "", default: "-1" },
                { name: "mask", type: "Mat", isOutput: false, required: false, currentValue: "", default: "new cv.Mat()" }
            ]
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "convertScaleAbs",
            functionName: "convertScaleAbs",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "alpha", type: "double", isOutput: false, required: false, currentValue: "", default: 1 },
                { name: "beta", type: "double", isOutput: false, required: false, currentValue: "", default: 0 }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "ksize", type: "Size", isOutput: false, required: false, currentValue: "", default: "new cv.Size(5, 5)" },
                { name: "anchor", type: "Point", isOutput: false, required: false, currentValue: "", default: 'new cv.Point(-1, -1)' },
                { name: "borderType", type: "int", isOutput: false, required: false, currentValue: "", default: 'cv.BORDER_DEFAULT', values: '#BorderTypes' },
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "ddepth", type: "int", isOutput: false, required: false, currentValue: "", default: "-1" },
                { name: "ksize", type: "Size", isOutput: false, required: false, currentValue: "", default: "new cv.Size(5, 5)" },
                { name: "anchor", type: "Point", isOutput: false, required: false, currentValue: "", default: 'new cv.Point(-1, 1)' },
                { name: "normalize", type: "bool", isOutput: false, required: false, currentValue: "", default: true },
                { name: "borderType", type: "int", isOutput: false, required: false, currentValue: "", default: 'cv.BORDER_DEFAULT', values: '#BorderTypes' },
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
                { name: "H1", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "H2", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "method", type: "int", isOutput: false, required: true, currentValue: "", default: "0,1,2,3" }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "blockSize", type: "int", isOutput: false, required: false, currentValue: "", default: "2" },
                { name: "ksize", type: "int", isOutput: false, required: false, currentValue: "", default: "3" },
                { name: "k", type: "double", isOutput: false, required: false, currentValue: "", default: "0.04" },
                { name: "borderType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.BORDER_DEFAULT" }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "code", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.COLOR_RGB2GRAY", choices: ["cv.COLOR_RGB2GRAY", "cv.COLOR_RGB2RGBA"] },
                { name: "dcn", type: "int", isOutput: false, required: false, currentValue: "", default: "0" }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "threshold1", type: "double", isOutput: false, required: false, currentValue: "", default: "50" },
                { name: "threshold2", type: "double", isOutput: false, required: false, currentValue: "", default: "100" },
                { name: "apertureSize", type: "double", isOutput: false, required: false, currentValue: "", default: "3" },
                { name: "L2gradient", type: "bool", isOutput: false, required: false, currentValue: "", default: "false" }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "kernelMatrix", type: "size", isOutput: false, required: false, currentValue: "", default: "new cv.Size(5, 5)" },
                { name: "sigmaX,", type: "double", isOutput: false, required: false, currentValue: "", default: "0" },
                { name: "sigmaY", type: "double", isOutput: false, required: false, currentValue: "", default: "0" },
                { name: "borderType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.BORDER_DEFAULT" }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "ddepth", type: "int", isOutput: false, required: false, currentValue: "", default: "-1" },
                { name: "ksize", type: "Size", isOutput: false, required: false, currentValue: "", default: "1" },
                { name: "scale", type: "double", isOutput: false, required: false, currentValue: "", default: "1" },
                { name: "delta", type: "double", isOutput: false, required: false, currentValue: "", default: "0" },
                { name: "borderType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.BORDER_DEFAULT" }
            ],
        }
    },
    {
        type: "custom",
        isExecuted: false,
        data: {
            label: "findContours",
            functionName: "findContours",
            returnType: "MatOfArrays",
            returnValue: null,
            parameters: [
                { name: "image", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "contours", type: "MatOfArrays", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "mode", type: "int", isOutput: false, required: true, currentValue: "", default: "", choices: ["RETR_EXTERNAL", "RETR_LIST", "RETR_CCOMP", "RETR_TREE", "RETR_FLOODFILL"] },
                { name: "method", type: "int", isOutput: false, required: true, currentValue: "", default: "", choices: ["CHAIN_APPROX_NONE", "CHAIN_APPROX_SIMPLE", "CHAIN_APPROX_TC89_L1", "CHAIN_APPROX_TC89_KCOS"] },
                { name: "offset", type: "Point", isOutput: false, required: false, currentValue: "", default: "cv.Point()" }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "ddepth", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.CV_8U", choices: ["cv.CV_8U", "cv.CV_16U", "cv.CV_16S", "cv.CV_32F", "cv.CV_64F", "-1"] },
                { name: "kernel", type: "Mat", isOutput: false, required: false, currentValue: "", default: "cv.Mat.eye(3, 3, cv.CV_32FC1)" },
                { name: "anchor", type: "Point", isOutput: false, required: false, currentValue: "", default: "new cv.Point(-1,-1)", choices: ["CHAIN_APPROX_NONE", "CHAIN_APPROX_SIMPLE", "CHAIN_APPROX_TC89_L1", "CHAIN_APPROX_TC89_KCOS"] },
                { name: "delta", type: "double", isOutput: false, required: false, currentValue: "", default: "0" },
                { name: "borderType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.BORDER_DEFAULT", choices: ["BORDER_CONSTANT", "BORDER_REPLICATE", "BORDER_REFLECT", "BORDER_REFLECT_101", "BORDER_TRANSPARENT", "BORDER_REFLECT101", "BORDER_DEFAULT", "BORDER_ISOLATED"] }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
                { name: "distanceType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.DIST_L2", choices: ["cv.DIST_USER", "cv.DIST_L1", "cv.DIST_L2", "cv.DIST_C", "cv.DIST_L12", "cv.DIST_FAIR", "cv.DIST_WELSCH", "cv.DIST_HUBER"] },
                { name: "maskSize", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.DIST_MASK_5", choices: ["cv.DIST_MASK_3", "cv.DIST_MASK_5"] },
                { name: "dstType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.CV_32F", choices: ["CV_32F", "CV_8U"] }
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
                { name: "src", type: "ET*", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "cn", type: "int", isOutput: false, required: "", currentValue: "", default: "" },
                { name: "*ofst", type: "int", isOutput: false, required: "", currentValue: "", default: "" },
                { name: "m", type: "FT*", isOutput: false, required: "", currentValue: "", default: "" },
                { name: "dst", type: "FT*", isOutput: false, required: "", currentValue: "", default: "" },
                { name: "dst_min", type: "int", isOutput: false, required: "", currentValue: "", default: "" },
                { name: "dst_max", type: "int", isOutput: false, required: "", currentValue: "", default: "" },
                { name: "dst_width", type: "int", isOutput: false, required: "", currentValue: "", default: "" }
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
                { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "dst", type: "Mat", isOutput: true, required: false, currentValue: "", default: "" },
                { name: "ksize", type: "int", isOutput: false, required: false, currentValue: "", default: "5" }
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
                { name: "img", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "text", type: "const string&", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "org", type: "Point", isOutput: false, required: false, currentValue: "", default: "" },
                { name: "font", type: "int", isOutput: false, required: true, currentValue: "", default: "FONT_HERSHEY_PLAIN", choices: ["FONT_HERSHEY_SIMPLEX", "FONT_HERSHEY_PLAIN","FONT_HERSHEY_DUPLEX","FONT_HERSHEY_COMPLEX","FONT_HERSHEY_TRIPLEX","FONT_HERSHEY_COMPLEX_SMALL","FONT_HERSHEY_SCRIPT_SIMPLEX","FONT_HERSHEY_SCRIPT_COMPLEX","FONT_ITALIC"]},
                { name: "fontScale", type: "double", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "color", type: "scalar", isOutput: false, required: true, currentValue: "", default: "" },
                { name: "thickness", type: "int", isOutput: false, required: false, currentValue: "", default: true },
                { name: "lineType", type: "int", isOutput: false, required: true, currentValue: "", default: "8", choices:["FILLED","LINE_4","LINE_8","LINE_AA"]},
                { name: "bottomLeftOrigin", type: "bool", isOutput: false, required: true, currentValue: "", default: "false" }
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
                { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
            ]
        }
    },
]

export default customNodes;
