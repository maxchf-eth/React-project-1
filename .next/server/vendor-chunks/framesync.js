"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/framesync";
exports.ids = ["vendor-chunks/framesync"];
exports.modules = {

/***/ "(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framesync/dist/es/create-render-step.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRenderStep: () => (/* binding */ createRenderStep)\n/* harmony export */ });\nfunction createRenderStep(runNextFrame) {\n    let toRun = [];\n    let toRunNextFrame = [];\n    let numToRun = 0;\n    let isProcessing = false;\n    let flushNextFrame = false;\n    const toKeepAlive = new WeakSet();\n    const step = {\n        schedule: (callback, keepAlive = false, immediate = false)=>{\n            const addToCurrentFrame = immediate && isProcessing;\n            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;\n            if (keepAlive) toKeepAlive.add(callback);\n            if (buffer.indexOf(callback) === -1) {\n                buffer.push(callback);\n                if (addToCurrentFrame && isProcessing) numToRun = toRun.length;\n            }\n            return callback;\n        },\n        cancel: (callback)=>{\n            const index = toRunNextFrame.indexOf(callback);\n            if (index !== -1) toRunNextFrame.splice(index, 1);\n            toKeepAlive.delete(callback);\n        },\n        process: (frameData)=>{\n            if (isProcessing) {\n                flushNextFrame = true;\n                return;\n            }\n            isProcessing = true;\n            [toRun, toRunNextFrame] = [\n                toRunNextFrame,\n                toRun\n            ];\n            toRunNextFrame.length = 0;\n            numToRun = toRun.length;\n            if (numToRun) {\n                for(let i = 0; i < numToRun; i++){\n                    const callback = toRun[i];\n                    callback(frameData);\n                    if (toKeepAlive.has(callback)) {\n                        step.schedule(callback);\n                        runNextFrame();\n                    }\n                }\n            }\n            isProcessing = false;\n            if (flushNextFrame) {\n                flushNextFrame = false;\n                step.process(frameData);\n            }\n        }\n    };\n    return step;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvY3JlYXRlLXJlbmRlci1zdGVwLm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsaUJBQWlCQyxZQUFZO0lBQ2xDLElBQUlDLFFBQVEsRUFBRTtJQUNkLElBQUlDLGlCQUFpQixFQUFFO0lBQ3ZCLElBQUlDLFdBQVc7SUFDZixJQUFJQyxlQUFlO0lBQ25CLElBQUlDLGlCQUFpQjtJQUNyQixNQUFNQyxjQUFjLElBQUlDO0lBQ3hCLE1BQU1DLE9BQU87UUFDVEMsVUFBVSxDQUFDQyxVQUFVQyxZQUFZLEtBQUssRUFBRUMsWUFBWSxLQUFLO1lBQ3JELE1BQU1DLG9CQUFvQkQsYUFBYVI7WUFDdkMsTUFBTVUsU0FBU0Qsb0JBQW9CWixRQUFRQztZQUMzQyxJQUFJUyxXQUNBTCxZQUFZUyxHQUFHLENBQUNMO1lBQ3BCLElBQUlJLE9BQU9FLE9BQU8sQ0FBQ04sY0FBYyxDQUFDLEdBQUc7Z0JBQ2pDSSxPQUFPRyxJQUFJLENBQUNQO2dCQUNaLElBQUlHLHFCQUFxQlQsY0FDckJELFdBQVdGLE1BQU1pQixNQUFNO1lBQy9CO1lBQ0EsT0FBT1I7UUFDWDtRQUNBUyxRQUFRLENBQUNUO1lBQ0wsTUFBTVUsUUFBUWxCLGVBQWVjLE9BQU8sQ0FBQ047WUFDckMsSUFBSVUsVUFBVSxDQUFDLEdBQ1hsQixlQUFlbUIsTUFBTSxDQUFDRCxPQUFPO1lBQ2pDZCxZQUFZZ0IsTUFBTSxDQUFDWjtRQUN2QjtRQUNBYSxTQUFTLENBQUNDO1lBQ04sSUFBSXBCLGNBQWM7Z0JBQ2RDLGlCQUFpQjtnQkFDakI7WUFDSjtZQUNBRCxlQUFlO1lBQ2YsQ0FBQ0gsT0FBT0MsZUFBZSxHQUFHO2dCQUFDQTtnQkFBZ0JEO2FBQU07WUFDakRDLGVBQWVnQixNQUFNLEdBQUc7WUFDeEJmLFdBQVdGLE1BQU1pQixNQUFNO1lBQ3ZCLElBQUlmLFVBQVU7Z0JBQ1YsSUFBSyxJQUFJc0IsSUFBSSxHQUFHQSxJQUFJdEIsVUFBVXNCLElBQUs7b0JBQy9CLE1BQU1mLFdBQVdULEtBQUssQ0FBQ3dCLEVBQUU7b0JBQ3pCZixTQUFTYztvQkFDVCxJQUFJbEIsWUFBWW9CLEdBQUcsQ0FBQ2hCLFdBQVc7d0JBQzNCRixLQUFLQyxRQUFRLENBQUNDO3dCQUNkVjtvQkFDSjtnQkFDSjtZQUNKO1lBQ0FJLGVBQWU7WUFDZixJQUFJQyxnQkFBZ0I7Z0JBQ2hCQSxpQkFBaUI7Z0JBQ2pCRyxLQUFLZSxPQUFPLENBQUNDO1lBQ2pCO1FBQ0o7SUFDSjtJQUNBLE9BQU9oQjtBQUNYO0FBRTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvY3JlYXRlLXJlbmRlci1zdGVwLm1qcz8zMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAocnVuTmV4dEZyYW1lKSB7XG4gICAgbGV0IHRvUnVuID0gW107XG4gICAgbGV0IHRvUnVuTmV4dEZyYW1lID0gW107XG4gICAgbGV0IG51bVRvUnVuID0gMDtcbiAgICBsZXQgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgbGV0IGZsdXNoTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgY29uc3QgdG9LZWVwQWxpdmUgPSBuZXcgV2Vha1NldCgpO1xuICAgIGNvbnN0IHN0ZXAgPSB7XG4gICAgICAgIHNjaGVkdWxlOiAoY2FsbGJhY2ssIGtlZXBBbGl2ZSA9IGZhbHNlLCBpbW1lZGlhdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkVG9DdXJyZW50RnJhbWUgPSBpbW1lZGlhdGUgJiYgaXNQcm9jZXNzaW5nO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gYWRkVG9DdXJyZW50RnJhbWUgPyB0b1J1biA6IHRvUnVuTmV4dEZyYW1lO1xuICAgICAgICAgICAgaWYgKGtlZXBBbGl2ZSlcbiAgICAgICAgICAgICAgICB0b0tlZXBBbGl2ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGJ1ZmZlci5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGFkZFRvQ3VycmVudEZyYW1lICYmIGlzUHJvY2Vzc2luZylcbiAgICAgICAgICAgICAgICAgICAgbnVtVG9SdW4gPSB0b1J1bi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICB0b1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdG9LZWVwQWxpdmUuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2VzczogKGZyYW1lRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2luZykge1xuICAgICAgICAgICAgICAgIGZsdXNoTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgW3RvUnVuLCB0b1J1bk5leHRGcmFtZV0gPSBbdG9SdW5OZXh0RnJhbWUsIHRvUnVuXTtcbiAgICAgICAgICAgIHRvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBudW1Ub1J1biA9IHRvUnVuLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChudW1Ub1J1bikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVG9SdW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRvUnVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhmcmFtZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwQWxpdmUuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5zY2hlZHVsZShjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5OZXh0RnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGZsdXNoTmV4dEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZmx1c2hOZXh0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGVwLnByb2Nlc3MoZnJhbWVEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgeyBjcmVhdGVSZW5kZXJTdGVwIH07XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVuZGVyU3RlcCIsInJ1bk5leHRGcmFtZSIsInRvUnVuIiwidG9SdW5OZXh0RnJhbWUiLCJudW1Ub1J1biIsImlzUHJvY2Vzc2luZyIsImZsdXNoTmV4dEZyYW1lIiwidG9LZWVwQWxpdmUiLCJXZWFrU2V0Iiwic3RlcCIsInNjaGVkdWxlIiwiY2FsbGJhY2siLCJrZWVwQWxpdmUiLCJpbW1lZGlhdGUiLCJhZGRUb0N1cnJlbnRGcmFtZSIsImJ1ZmZlciIsImFkZCIsImluZGV4T2YiLCJwdXNoIiwibGVuZ3RoIiwiY2FuY2VsIiwiaW5kZXgiLCJzcGxpY2UiLCJkZWxldGUiLCJwcm9jZXNzIiwiZnJhbWVEYXRhIiwiaSIsImhhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framesync/dist/es/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/framesync/dist/es/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelSync: () => (/* binding */ cancelSync),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   flushSync: () => (/* binding */ flushSync),\n/* harmony export */   getFrameData: () => (/* binding */ getFrameData)\n/* harmony export */ });\n/* harmony import */ var _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-next-frame.mjs */ \"(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs\");\n/* harmony import */ var _create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-render-step.mjs */ \"(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs\");\n\n\nconst maxElapsed = 40;\nlet useDefaultElapsed = true;\nlet runNextFrame = false;\nlet isProcessing = false;\nconst frame = {\n    delta: 0,\n    timestamp: 0\n};\nconst stepsOrder = [\n    \"read\",\n    \"update\",\n    \"preRender\",\n    \"render\",\n    \"postRender\"\n];\nconst steps = stepsOrder.reduce((acc, key)=>{\n    acc[key] = (0,_create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__.createRenderStep)(()=>runNextFrame = true);\n    return acc;\n}, {});\nconst sync = stepsOrder.reduce((acc, key)=>{\n    const step = steps[key];\n    acc[key] = (process, keepAlive = false, immediate = false)=>{\n        if (!runNextFrame) startLoop();\n        return step.schedule(process, keepAlive, immediate);\n    };\n    return acc;\n}, {});\nconst cancelSync = stepsOrder.reduce((acc, key)=>{\n    acc[key] = steps[key].cancel;\n    return acc;\n}, {});\nconst flushSync = stepsOrder.reduce((acc, key)=>{\n    acc[key] = ()=>steps[key].process(frame);\n    return acc;\n}, {});\nconst processStep = (stepId)=>steps[stepId].process(frame);\nconst processFrame = (timestamp)=>{\n    runNextFrame = false;\n    frame.delta = useDefaultElapsed ? _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);\n    frame.timestamp = timestamp;\n    isProcessing = true;\n    stepsOrder.forEach(processStep);\n    isProcessing = false;\n    if (runNextFrame) {\n        useDefaultElapsed = false;\n        (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);\n    }\n};\nconst startLoop = ()=>{\n    runNextFrame = true;\n    useDefaultElapsed = true;\n    if (!isProcessing) (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);\n};\nconst getFrameData = ()=>frame;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sync);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRTtBQUNQO0FBRTVELE1BQU1HLGFBQWE7QUFDbkIsSUFBSUMsb0JBQW9CO0FBQ3hCLElBQUlDLGVBQWU7QUFDbkIsSUFBSUMsZUFBZTtBQUNuQixNQUFNQyxRQUFRO0lBQ1ZDLE9BQU87SUFDUEMsV0FBVztBQUNmO0FBQ0EsTUFBTUMsYUFBYTtJQUNmO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDSDtBQUNELE1BQU1DLFFBQVFELFdBQVdFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztJQUNsQ0QsR0FBRyxDQUFDQyxJQUFJLEdBQUdaLHlFQUFnQkEsQ0FBQyxJQUFPRyxlQUFlO0lBQ2xELE9BQU9RO0FBQ1gsR0FBRyxDQUFDO0FBQ0osTUFBTUUsT0FBT0wsV0FBV0UsTUFBTSxDQUFDLENBQUNDLEtBQUtDO0lBQ2pDLE1BQU1FLE9BQU9MLEtBQUssQ0FBQ0csSUFBSTtJQUN2QkQsR0FBRyxDQUFDQyxJQUFJLEdBQUcsQ0FBQ0csU0FBU0MsWUFBWSxLQUFLLEVBQUVDLFlBQVksS0FBSztRQUNyRCxJQUFJLENBQUNkLGNBQ0RlO1FBQ0osT0FBT0osS0FBS0ssUUFBUSxDQUFDSixTQUFTQyxXQUFXQztJQUM3QztJQUNBLE9BQU9OO0FBQ1gsR0FBRyxDQUFDO0FBQ0osTUFBTVMsYUFBYVosV0FBV0UsTUFBTSxDQUFDLENBQUNDLEtBQUtDO0lBQ3ZDRCxHQUFHLENBQUNDLElBQUksR0FBR0gsS0FBSyxDQUFDRyxJQUFJLENBQUNTLE1BQU07SUFDNUIsT0FBT1Y7QUFDWCxHQUFHLENBQUM7QUFDSixNQUFNVyxZQUFZZCxXQUFXRSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7SUFDdENELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLElBQU1ILEtBQUssQ0FBQ0csSUFBSSxDQUFDRyxPQUFPLENBQUNWO0lBQ3BDLE9BQU9NO0FBQ1gsR0FBRyxDQUFDO0FBQ0osTUFBTVksY0FBYyxDQUFDQyxTQUFXZixLQUFLLENBQUNlLE9BQU8sQ0FBQ1QsT0FBTyxDQUFDVjtBQUN0RCxNQUFNb0IsZUFBZSxDQUFDbEI7SUFDbEJKLGVBQWU7SUFDZkUsTUFBTUMsS0FBSyxHQUFHSixvQkFDUkgsK0RBQWVBLEdBQ2YyQixLQUFLQyxHQUFHLENBQUNELEtBQUtFLEdBQUcsQ0FBQ3JCLFlBQVlGLE1BQU1FLFNBQVMsRUFBRU4sYUFBYTtJQUNsRUksTUFBTUUsU0FBUyxHQUFHQTtJQUNsQkgsZUFBZTtJQUNmSSxXQUFXcUIsT0FBTyxDQUFDTjtJQUNuQm5CLGVBQWU7SUFDZixJQUFJRCxjQUFjO1FBQ2RELG9CQUFvQjtRQUNwQkosK0RBQVdBLENBQUMyQjtJQUNoQjtBQUNKO0FBQ0EsTUFBTVAsWUFBWTtJQUNkZixlQUFlO0lBQ2ZELG9CQUFvQjtJQUNwQixJQUFJLENBQUNFLGNBQ0ROLCtEQUFXQSxDQUFDMkI7QUFDcEI7QUFDQSxNQUFNSyxlQUFlLElBQU16QjtBQUUzQixpRUFBZVEsSUFBSUEsRUFBQztBQUMyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9kaXN0L2VzL2luZGV4Lm1qcz9kZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uTmV4dEZyYW1lLCBkZWZhdWx0VGltZXN0ZXAgfSBmcm9tICcuL29uLW5leHQtZnJhbWUubWpzJztcbmltcG9ydCB7IGNyZWF0ZVJlbmRlclN0ZXAgfSBmcm9tICcuL2NyZWF0ZS1yZW5kZXItc3RlcC5tanMnO1xuXG5jb25zdCBtYXhFbGFwc2VkID0gNDA7XG5sZXQgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xubGV0IHJ1bk5leHRGcmFtZSA9IGZhbHNlO1xubGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuY29uc3QgZnJhbWUgPSB7XG4gICAgZGVsdGE6IDAsXG4gICAgdGltZXN0YW1wOiAwLFxufTtcbmNvbnN0IHN0ZXBzT3JkZXIgPSBbXG4gICAgXCJyZWFkXCIsXG4gICAgXCJ1cGRhdGVcIixcbiAgICBcInByZVJlbmRlclwiLFxuICAgIFwicmVuZGVyXCIsXG4gICAgXCJwb3N0UmVuZGVyXCIsXG5dO1xuY29uc3Qgc3RlcHMgPSBzdGVwc09yZGVyLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9IGNyZWF0ZVJlbmRlclN0ZXAoKCkgPT4gKHJ1bk5leHRGcmFtZSA9IHRydWUpKTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3Qgc3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBzdGVwc1trZXldO1xuICAgIGFjY1trZXldID0gKHByb2Nlc3MsIGtlZXBBbGl2ZSA9IGZhbHNlLCBpbW1lZGlhdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoIXJ1bk5leHRGcmFtZSlcbiAgICAgICAgICAgIHN0YXJ0TG9vcCgpO1xuICAgICAgICByZXR1cm4gc3RlcC5zY2hlZHVsZShwcm9jZXNzLCBrZWVwQWxpdmUsIGltbWVkaWF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3QgY2FuY2VsU3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gc3RlcHNba2V5XS5jYW5jZWw7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbmNvbnN0IGZsdXNoU3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gKCkgPT4gc3RlcHNba2V5XS5wcm9jZXNzKGZyYW1lKTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3QgcHJvY2Vzc1N0ZXAgPSAoc3RlcElkKSA9PiBzdGVwc1tzdGVwSWRdLnByb2Nlc3MoZnJhbWUpO1xuY29uc3QgcHJvY2Vzc0ZyYW1lID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIHJ1bk5leHRGcmFtZSA9IGZhbHNlO1xuICAgIGZyYW1lLmRlbHRhID0gdXNlRGVmYXVsdEVsYXBzZWRcbiAgICAgICAgPyBkZWZhdWx0VGltZXN0ZXBcbiAgICAgICAgOiBNYXRoLm1heChNYXRoLm1pbih0aW1lc3RhbXAgLSBmcmFtZS50aW1lc3RhbXAsIG1heEVsYXBzZWQpLCAxKTtcbiAgICBmcmFtZS50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBzdGVwc09yZGVyLmZvckVhY2gocHJvY2Vzc1N0ZXApO1xuICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIGlmIChydW5OZXh0RnJhbWUpIHtcbiAgICAgICAgdXNlRGVmYXVsdEVsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgb25OZXh0RnJhbWUocHJvY2Vzc0ZyYW1lKTtcbiAgICB9XG59O1xuY29uc3Qgc3RhcnRMb29wID0gKCkgPT4ge1xuICAgIHJ1bk5leHRGcmFtZSA9IHRydWU7XG4gICAgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xuICAgIGlmICghaXNQcm9jZXNzaW5nKVxuICAgICAgICBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xufTtcbmNvbnN0IGdldEZyYW1lRGF0YSA9ICgpID0+IGZyYW1lO1xuXG5leHBvcnQgZGVmYXVsdCBzeW5jO1xuZXhwb3J0IHsgY2FuY2VsU3luYywgZmx1c2hTeW5jLCBnZXRGcmFtZURhdGEgfTtcbiJdLCJuYW1lcyI6WyJvbk5leHRGcmFtZSIsImRlZmF1bHRUaW1lc3RlcCIsImNyZWF0ZVJlbmRlclN0ZXAiLCJtYXhFbGFwc2VkIiwidXNlRGVmYXVsdEVsYXBzZWQiLCJydW5OZXh0RnJhbWUiLCJpc1Byb2Nlc3NpbmciLCJmcmFtZSIsImRlbHRhIiwidGltZXN0YW1wIiwic3RlcHNPcmRlciIsInN0ZXBzIiwicmVkdWNlIiwiYWNjIiwia2V5Iiwic3luYyIsInN0ZXAiLCJwcm9jZXNzIiwia2VlcEFsaXZlIiwiaW1tZWRpYXRlIiwic3RhcnRMb29wIiwic2NoZWR1bGUiLCJjYW5jZWxTeW5jIiwiY2FuY2VsIiwiZmx1c2hTeW5jIiwicHJvY2Vzc1N0ZXAiLCJzdGVwSWQiLCJwcm9jZXNzRnJhbWUiLCJNYXRoIiwibWF4IiwibWluIiwiZm9yRWFjaCIsImdldEZyYW1lRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/framesync/dist/es/on-next-frame.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTimestep: () => (/* binding */ defaultTimestep),\n/* harmony export */   onNextFrame: () => (/* binding */ onNextFrame)\n/* harmony export */ });\nconst defaultTimestep = 1 / 60 * 1000;\nconst getCurrentTime = typeof performance !== \"undefined\" ? ()=>performance.now() : ()=>Date.now();\nconst onNextFrame =  false ? 0 : (callback)=>setTimeout(()=>callback(getCurrentTime()), defaultTimestep);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvb24tbmV4dC1mcmFtZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxrQkFBa0IsSUFBSyxLQUFNO0FBQ25DLE1BQU1DLGlCQUFpQixPQUFPQyxnQkFBZ0IsY0FDeEMsSUFBTUEsWUFBWUMsR0FBRyxLQUNyQixJQUFNQyxLQUFLRCxHQUFHO0FBQ3BCLE1BQU1FLGNBQWMsTUFBNkIsR0FDM0MsQ0FBb0RDLEdBQ3BELENBQUNBLFdBQWFHLFdBQVcsSUFBTUgsU0FBU0wsbUJBQW1CRDtBQUV6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9kaXN0L2VzL29uLW5leHQtZnJhbWUubWpzPzRhZmYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdFRpbWVzdGVwID0gKDEgLyA2MCkgKiAxMDAwO1xuY29uc3QgZ2V0Q3VycmVudFRpbWUgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCJcbiAgICA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xuY29uc3Qgb25OZXh0RnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgPyAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spXG4gICAgOiAoY2FsbGJhY2spID0+IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soZ2V0Q3VycmVudFRpbWUoKSksIGRlZmF1bHRUaW1lc3RlcCk7XG5cbmV4cG9ydCB7IGRlZmF1bHRUaW1lc3RlcCwgb25OZXh0RnJhbWUgfTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0VGltZXN0ZXAiLCJnZXRDdXJyZW50VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiRGF0ZSIsIm9uTmV4dEZyYW1lIiwiY2FsbGJhY2siLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs\n");

/***/ })

};
;