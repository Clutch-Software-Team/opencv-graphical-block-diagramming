const customNodes = [
  {
      type: "start",
      isExecuted: false,
      data: {
          label: "Start",
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
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Normalize",
          functionName: "normalize",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Convert Scale Abs",
          functionName: "convertScaleAbs",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Blur",
          functionName: "blur",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Box Filter",
          functionName: "boxFilter",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Compare Hist",
          functionName: "compareHist",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Corner Harris",
          functionName: "cornerHarris",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "CVT Color",
          functionName: "cvtColor",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Gaussian Blur",
          functionName: "GaussianBlur",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Find Contours",
          functionName: "findContours",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "MatOfArrays",
          returnValue: null,
          parameters: [
              { name: "image", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "contours", type: "MatOfArrays", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "mode", type: "int", isOutput: false, required: true, currentValue: "", default: "", choices: ["cv.RETR_EXTERNAL", "cv.RETR_LIST", "cv.RETR_CCOMP", "cv.RETR_TREE", "cv.RETR_FLOODFILL"] },
              { name: "method", type: "int", isOutput: false, required: true, currentValue: "", default: "", choices: ["cv.CHAIN_APPROX_NONE", "cv.CHAIN_APPROX_SIMPLE", "cv.CHAIN_APPROX_TC89_L1", "cv.CHAIN_APPROX_TC89_KCOS"] },
              { name: "offset", type: "Point", isOutput: false, required: false, currentValue: "", default: "cv.Point()" }
          ]
      }
  },
  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Filter 2D",
          functionName: "filter2D",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "ddepth", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.CV_8U", choices: ["cv.CV_8U", "cv.CV_16U", "cv.CV_16S", "cv.CV_32F", "cv.CV_64F", "-1"] },
              { name: "kernel", type: "Mat", isOutput: false, required: false, currentValue: "", default: "cv.Mat.eye(3, 3, cv.CV_32FC1)" },
              { name: "anchor", type: "Point", isOutput: false, required: false, currentValue: "", default: "new cv.Point(-1,-1)", choices: ["cv.CHAIN_APPROX_NONE", "cv.CHAIN_APPROX_SIMPLE", "cv.CHAIN_APPROX_TC89_L1", "cv.CHAIN_APPROX_TC89_KCOS"] },
              { name: "delta", type: "double", isOutput: false, required: false, currentValue: "", default: "0" },
              { name: "borderType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.BORDER_DEFAULT", choices: ["cv.BORDER_CONSTANT", "cv.BORDER_REPLICATE", "cv.BORDER_REFLECT", "cv.BORDER_REFLECT_101", "cv.BORDER_TRANSPARENT", "cv.BORDER_REFLECT101", "cv.BORDER_DEFAULT", "cv.BORDER_ISOLATED"] }
          ]
      }
  },
  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Distance Transform",
          functionName: "distanceTransform",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "distanceType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.DIST_L2", choices: ["cv.DIST_USER", "cv.DIST_L1", "cv.DIST_L2", "cv.DIST_C", "cv.DIST_L12", "cv.DIST_FAIR", "cv.DIST_WELSCH", "cv.DIST_HUBER"] },
              { name: "maskSize", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.DIST_MASK_5", choices: ["cv.DIST_MASK_3", "cv.DIST_MASK_5"] },
              { name: "dstType", type: "int", isOutput: false, required: false, currentValue: "", default: "cv.CV_32F", choices: ["cv.CV_32F", "cv.CV_8U"] }
          ]
      }
  },
  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Resize",
          functionName: "resize",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Median Blur",
          functionName: "medianBlur",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          label: "Put Text",
          functionName: "putText",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "img", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "text", type: "const string&", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "org", type: "Point", isOutput: false, required: false, currentValue: "", default: "" },
              { name: "font", type: "int", isOutput: false, required: true, currentValue: "", default: "FONT_HERSHEY_PLAIN", choices: ["cv.FONT_HERSHEY_SIMPLEX", "cv.FONT_HERSHEY_PLAIN","cv.FONT_HERSHEY_DUPLEX","cv.FONT_HERSHEY_COMPLEX","cv.FONT_HERSHEY_TRIPLEX","cv.FONT_HERSHEY_COMPLEX_SMALL","cv.FONT_HERSHEY_SCRIPT_SIMPLEX","cv.FONT_HERSHEY_SCRIPT_COMPLEX","cv.FONT_ITALIC"]},
              { name: "fontScale", type: "double", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "color", type: "scalar", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "thickness", type: "int", isOutput: false, required: false, currentValue: "", default: true },
              { name: "lineType", type: "int", isOutput: false, required: true, currentValue: "", default: "8", choices:["cv.FILLED","cv.LINE_4","cv.LINE_8","cv.LINE_AA"]},
              { name: "bottomLeftOrigin", type: "bool", isOutput: false, required: true, currentValue: "", default: "false" }
          ]
      }
  },

  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Bitwise OR",
          functionName: "bitwise_or",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src1", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "src2", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "mask", type: "Mat", isOutput: false, required: false, currentValue: "", default: "new cv.Mat()" },
          ]
      }
  },

  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Bitwise XOR",
          functionName: "bitwise_xor",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src1", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "src2", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "mask", type: "Mat", isOutput: false, required: false, currentValue: "", default: "new cv.Mat()" },
          ]
      }
  },


  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Bitwise NOT",
          functionName: "bitwise_not",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "mask", type: "Mat", isOutput: false, required: false, currentValue: "", default: "new cv.Mat()" },
          ]
      }
  },


  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Bitwise AND",
          functionName: "bitwise_and",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src1", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "src2", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "mask", type: "Mat", isOutput: false, required: false, currentValue: "", default: "new cv.Mat()" },
          ]
      }
  },
  



  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Multiply",
          functionName: "multiply",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src1", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "src2", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "scale", type: "double", isOutput: false, required: false, currentValue: "", default: "1" },
              { name: "dtype", type: "int", isOutput: false, required: false, currentValue: "", default: "-1" },
          ]
      }
  },



  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Pow",
          functionName: "pow",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "power", type: "double", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
          ]
      }
  },


  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Rotate",
          functionName: "rotate",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              
              { name: "rotateCode", type: "int", isOutput: false, required: true, currentValue: "", default: "", choices:["cv.ROTATE_90_CLOCKWISE","cv.ROTATE_180", "cv.ROTATE_90_COUNTERCLOCKWISE"] },
          ]
      }
  },


  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Divide",
          functionName: "divide",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src1", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "src2", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "scale", type: "double", isOutput: false, required: false, currentValue: "", default: "1" },
              { name: "dtype", type: "int", isOutput: false, required: false, currentValue: "", default: "-1" }, 
          ]
      }
  },



  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Subtract",
          functionName: "subtract",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src1", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "src2", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "mask", type: "Mat", isOutput: false, required: false, currentValue: "", default: "new cv.Mat()" },
              { name: "dtype", type: "int", isOutput: false, required: false, currentValue: "", default: "-1" }, 
          ]
      }
  },



  {
      type: "custom",
      isExecuted: false,
      data: {
          label: "Add",
          functionName: "add",
          infoNodes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          returnType: "void",
          returnValue: null,
          parameters: [
              { name: "src1", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "src2", type: "Mat", isOutput: false, required: true, currentValue: "", default: "" },
              { name: "dst", type: "Mat", isOutput: true, required: true, currentValue: "", default: "" },
              { name: "mask", type: "Mat", isOutput: false, required: true, currentValue: "", default: "noArray()" },
              { name: "dtype", type: "int", isOutput: false, required: true, currentValue: "", default: "-1" }, 
          ]
      }
  },

  {
      type: "finish",
      isExecuted: false,
      data: {
          label: "Finish",
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