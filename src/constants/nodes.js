const customNodes = [
    {
        key: 1,
        className: "dndnode",
        type: "custom",
        data: {
            label: "Sobel",
            functionName: "Sobel",
            returnType: "void",
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "dst", type: "OutputArray", required: true, currentValue: undefined, default: undefined },
                { name: "ddepth", type: "int", required: true, currentValue: undefined, default: undefined },
                { name: "dx", type: "int", required: true, currentValue: undefined, default: undefined },
                { name: "dy", type: "int", required: true, currentValue: undefined, default: undefined },
                { name: "ksize", type: "int", required: false, currentValue: undefined, default: 3, values: [1, 3, 5, 7] },
                { name: "scale", type: "double", required: false, currentValue: undefined, default: 1 },
                { name: "delta", type: "double", required: false, currentValue: undefined, default: 0 },
                { name: "borderType", type: "int", required: false, currentValue: undefined, default: 'BORDER_DEFAULT', values: '#BorderTypes' },
            ]
        }
    },
    {
        key: 2,
        className: "dndnode",
        type: "custom",
        data: {
            label: "blur",
            functionName: "blur",
            returnType: "void",
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "dst", type: "OutputArray", required: true, currentValue: undefined, default: undefined },
                { name: "ksize", type: "Size", required: true, currentValue: undefined, default: undefined },
                { name: "anchor", type: "Point", required: false, currentValue: undefined, default: 'Point(-1, 1)' },
                { name: "borderType", type: "int", required: false, currentValue: undefined, default: 'BORDER_DEFAULT', values: '#BorderTypes' },
            ]
        }
    },
    {
        key: 3,
        className: "dndnode",
        type: "custom",
        data: {
            label: "boxFilter",
            functionName: "boxFilter",
            returnType: "void",
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "dst", type: "OutputArray", required: true, currentValue: undefined, default: undefined },
                { name: "ddepth", type: "int", required: true, currentValue: undefined, default: undefined },
                { name: "ksize", type: "Size", required: true, currentValue: undefined, default: undefined },
                { name: "anchor", type: "Point", required: false, currentValue: undefined, default: 'Point(-1, 1)' },
                { name: "normalize", type: "bool", required: false, currentValue: undefined, default: true },
                { name: "borderType", type: "int", required: false, currentValue: undefined, default: 'BORDER_DEFAULT', values: '#BorderTypes' },
            ]
        }
    },
    {
        key: 4,
        className: "dndnode",
        type: "custom",
        data: {
            label: "compareHist",
            functionName: "compareHist",
            returnType: "double",
            parameters: [
                { name: "_H1", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "_H2", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "method", type: "int", required: true, currentValue: undefined, default: "0,1,2,3" }
            ]
        }
    },
    {
        key: 5,
        className: "dndnode",
        type: "custom",
        data: {
            label: "cornerHarris",
            functionName: "cornerHarris",
            returnType: "void",
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "dst", type: "OutputArray", required: true, currentValue: undefined, default: undefined },
                { name: "blockSize", type: "int", required: true, currentValue: undefined, default: undefined },
                { name: "ksize", type: "int", required: true, currentValue: undefined, default: undefined },
                { name: "k", type: "double", required: true, currentValue: undefined, default: undefined },
                { name: "borderType", type: "int", required: false, currentValue: undefined, default: "BORDER_DEFAULT" }
            ]
        }
    },
    {
        key: 6,
        className: "dndnode",
        type: "custom",
        data: {
            label: "cvtColor",
            functionName: "cvtColor",
            returnType: "void",
            parameters: [
                { name: "_src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "_dst", type: "OutputArray", required: true, currentValue: undefined, default: undefined },
                { name: "code", type: "int", required: true, currentValue: undefined, default: undefined },
                { name: "dcn", type: "int", required: false, currentValue: undefined, default: "0" }
            ]
        }
    },
    {
        key: 7,
        className: "dndnode",
        type: "custom",
        data: {
            label: "Canny",
            functionName: "Canny",
            returnType: "uint8(imageMatrixs)",
            parameters: [
                { name: "_src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "threshold1", type: "double", required: true, currentValue: undefined, default: undefined },
                { name: "threshold2", type: "double", required: true, currentValue: undefined, default: undefined },
                { name: "L2gradient", type: "bool", required: false, currentValue: undefined, default: "false" },
            ],
        }
    },
    {
        key: 8,
        className: "dndnode",
        type: "custom",
        data: {
            label: "GaussianBlur",
            functionName: "GaussianBlur",
            returnType: "imageMatrix",
            parameters: [
                { name: "_src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "destinationImage", type: "OutputArray", required: true, currentValue: undefined, default: undefined },
                { name: "kernelMatrix", type: "size", required: true, currentValue: undefined, default: undefined },
                { name: "sigmaX,", type: "double", required: false, currentValue: undefined, default: undefined },
                { name: "sigmaY", type: "double", required: false, currentValue: undefined, default: "0" },
                { name: "borderType", type: "int", required: false, currentValue: undefined, default: "BORDER_DEFAULT" }
            ],
        }
    },
    {
        key: 9,
        className: "dndnode",
        type: "custom",
        data: {
            label: "Laplacian",
            functionName: "Laplacian",
            returnType: "imageMatrix",
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "destination", type: "OutpuArray", required: true, currentValue: undefined, default: undefined },
                { name: "KernelMatrix", type: "Size", required: true, currentValue: undefined, default: undefined },
                { name: "scale", type: "double", required: false, currentValue: undefined, default: true },
                { name: "delta", type: "double", required: false, currentValue: undefined, default: "0" },
                { name: "borderType", type: "int", required: false, currentValue: undefined, default: "BORDER_DEFAULT" }
            ],
        }
    },
    {
        key: 10,
        className: "dndnode",
        type: "custom",
        data: {
            label: "findContours",
            functionName: "findContours",
            returnType: "OutputArrayOfArrays",
            parameters: [
                { name: "image", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "contours", type: "OutputArrayOfArrays", required: true, currentValue: undefined, default: undefined },
                { name: "mode", type: "int", required: true, currentValue: undefined, default: undefined, values: ["RETR_EXTERNAL", "RETR_LIST", "RETR_CCOMP", "RETR_TREE", "RETR_FLOODFILL"] },
                { name: "method", type: "int", required: true, currentValue: undefined, default: undefined, values: ["CHAIN_APPROX_NONE", "CHAIN_APPROX_SIMPLE", "CHAIN_APPROX_TC89_L1", "CHAIN_APPROX_TC89_KCOS"] },
                { name: "offset", type: "Point", required: false, currentValue: undefined, default: "Point()" }
            ]
        }
    },
    {
        key: 11,
        className: "dndnode",
        type: "custom",
        data: {
            label: "filter2D",
            functionName: "filter2D",
            returnType: "OutputArray",
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "dst", type: "OutputArray", required: true, currentValue: undefined, default: undefined },
                { name: "ddepth", type: "int", required: true, currentValue: undefined, default: undefined, values: ["CV_8U", "CV_16U", "CV_16S", "CV_32F", "CV_64F", "-1"] },
                { name: "kernel", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "anchor", type: "Point", required: false, currentValue: undefined, default: "Point(-1,-1)", values: ["CHAIN_APPROX_NONE", "CHAIN_APPROX_SIMPLE", "CHAIN_APPROX_TC89_L1", "CHAIN_APPROX_TC89_KCOS"] },
                { name: "delta", type: "double", required: false, currentValue: undefined, default: "0" },
                { name: "borderType", type: "int", required: false, currentValue: undefined, default: "BORDER_DEFAULT", values: ["BORDER_CONSTANT", "BORDER_REPLICATE", "BORDER_REFLECT", "BORDER_REFLECT_101", "BORDER_TRANSPARENT", "BORDER_REFLECT101", "BORDER_DEFAULT", "BORDER_ISOLATED"] }
            ]
        }
    },
    {
        key: 12,
        className: "dndnode",
        type: "custom",
        data: {
            label: "distanceTransform",
            functionName: "distanceTransform",
            returnType: "OutputArray",
            parameters: [
                { name: "src", type: "InputArray", required: true, currentValue: undefined, default: undefined },
                { name: "dst", type: "OutputArray", required: true, currentValue: undefined, default: undefined },
                { name: "distanceType", type: "int", required: true, currentValue: undefined, default: undefined, values: ["DIST_USER", "DIST_L1", "DIST_L2", "DIST_C", "DIST_L12", "DIST_FAIR", "DIST_WELSCH", "DIST_HUBER"] },
                { name: "maskSize", type: "int", required: true, currentValue: undefined, default: undefined, values: ["DIST_MASK_3", "DIST_MASK_5"] },
                { name: "dstType", type: "int", required: false, currentValue: undefined, default: "CV_32F", values: ["CV_32F", "CV_8U"] }
            ]
        }
    },
    {
        key: 13,
        className: "dndnode",
        type: "custom",
        data: {
            label: "resize",
            functionName: "resize",
            returnType: "void",
            parameters: [
                { name: "src", type: "ET*", required: true, currentValue: undefined, default: undefined },
                { name: "cn", type: "int", required: "", currentValue: undefined, default: undefined },
                { name: "*ofst", type: "int", required: "", currentValue: undefined, default: undefined },
                { name: "m", type: "FT*", required: "", currentValue: undefined, default: undefined },
                { name: "dst", type: "FT*", required: "", currentValue: undefined, default: undefined },
                { name: "dst_min", type: "int", required: "", currentValue: undefined, default: undefined },
                { name: "dst_max", type: "int", required: "", currentValue: undefined, default: undefined },
                { name: "dst_width", type: "int", required: "", currentValue: undefined, default: undefined }
            ]
        }
    },
    {
        key: 14,
        className: "dndnode",
        type: "custom",
        data: {
            label: "medianBlur",
            functionName: "medianBlur",
            returnType: "void",
            parameters: [
                { name: "_src", type: "const Mat&", required: true, currentValue: undefined, default: undefined },
                { name: "_dst", type: "Mat&", required: false, currentValue: undefined, default: undefined },
                { name: "ksize", type: "int", required: true, currentValue: undefined, default: undefined }
            ]
        }
    },
    {
        key: 15,
        className: "dndnode",
        type: "custom",
        data: {
            label: "putText",
            functionName: "putText",
            returnType: "void",
            parameters: [
                { name: "img", type: "Mat&", required: true, currentValue: undefined, default: undefined },
                { name: "text", type: "const string&", required: true, currentValue: undefined, default: undefined },
                { name: "org", type: "Point", required: false, currentValue: undefined, default: undefined },
                { name: "font", type: "int", required: true, currentValue: undefined, default: "FONT_HERSHEY_PLAIN" },
                { name: "fontScale", type: "double", required: true, currentValue: undefined, default: undefined },
                { name: "color", type: "scalar", required: true, currentValue: undefined, default: undefined },
                { name: "thickness", type: "int", required: false, currentValue: undefined, default: true },
                { name: "lineType", type: "int", required: true, currentValue: undefined, default: "8" },
                { name: "bottomLeftOrigin", type: "bool", required: true, currentValue: undefined, default: "false" }
            ]
        }
    },
]

export default customNodes;