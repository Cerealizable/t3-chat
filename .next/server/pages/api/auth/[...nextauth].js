"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("zod");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/db/client */ \"(api)/./src/server/db/client.ts\");\n/* harmony import */ var _server_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../server/env */ \"(api)/./src/server/env.js\");\n\n\n// Prisma adapter for NextAuth, optional and can be removed\n\n\n\nconst authOptions = {\n    // Include user.id on session\n    // callbacks: {\n    // \tsession({ session, user }) {\n    // \t\tif (session.user) {\n    // \t\t\tsession.user.id = user.id;\n    // \t\t}\n    // \t\treturn session;\n    // \t},\n    // },\n    // Configure one or more authentication providers\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_server_db_client__WEBPACK_IMPORTED_MODULE_3__.prisma),\n    providers: [\n        // ...add more providers here\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {\n                name: {\n                    label: \"Name\",\n                    type: \"text\",\n                    placeholder: \"Enter your name\"\n                }\n            },\n            async authorize (credentials, _req) {\n                const user = {\n                    id: 1,\n                    name: credentials?.name ?? \"J Smith\"\n                };\n                return user;\n            }\n        }), \n    ],\n    secret: _server_env__WEBPACK_IMPORTED_MODULE_4__.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJEO0FBRU87QUFFbEUsMkRBQTJEO0FBQ0Q7QUFDUDtBQUNUO0FBRW5DLE1BQU1LLFdBQVcsR0FBb0I7SUFDM0MsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixLQUFLO0lBQ0wsaURBQWlEO0lBQ2pEQyxPQUFPLEVBQUVKLHdFQUFhLENBQUNDLHFEQUFNLENBQUM7SUFDOUJJLFNBQVMsRUFBRTtRQUNWLDZCQUE2QjtRQUM3Qk4sc0VBQW1CLENBQUM7WUFDbkJPLElBQUksRUFBRSxhQUFhO1lBQ25CQyxXQUFXLEVBQUU7Z0JBQ1pELElBQUksRUFBRTtvQkFDTEUsS0FBSyxFQUFFLE1BQU07b0JBQ2JDLElBQUksRUFBRSxNQUFNO29CQUNaQyxXQUFXLEVBQUUsaUJBQWlCO2lCQUM5QjthQUNEO1lBQ0QsTUFBTUMsU0FBUyxFQUFDSixXQUFXLEVBQUVLLElBQUksRUFBRTtnQkFDbEMsTUFBTUMsSUFBSSxHQUFHO29CQUFFQyxFQUFFLEVBQUUsQ0FBQztvQkFBRVIsSUFBSSxFQUFFQyxXQUFXLEVBQUVELElBQUksSUFBSSxTQUFTO2lCQUFFO2dCQUM1RCxPQUFPTyxJQUFJLENBQUM7YUFDWjtTQUNELENBQUM7S0FDRjtJQUNERSxNQUFNLEVBQUViLDREQUFtQjtJQUMzQmUsT0FBTyxFQUFFO1FBQ1JDLFFBQVEsRUFBRSxLQUFLO0tBQ2Y7Q0FDRCxDQUFDO0FBRUYsaUVBQWVwQixnREFBUSxDQUFDSyxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3QzLWNoYXQvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyB0eXBlIE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgRGlzY29yZFByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZGlzY29yZCc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcblxuLy8gUHJpc21hIGFkYXB0ZXIgZm9yIE5leHRBdXRoLCBvcHRpb25hbCBhbmQgY2FuIGJlIHJlbW92ZWRcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uLy4uL3NlcnZlci9kYi9jbGllbnQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vLi4vc2VydmVyL2Vudic7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuXHQvLyBJbmNsdWRlIHVzZXIuaWQgb24gc2Vzc2lvblxuXHQvLyBjYWxsYmFja3M6IHtcblx0Ly8gXHRzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciB9KSB7XG5cdC8vIFx0XHRpZiAoc2Vzc2lvbi51c2VyKSB7XG5cdC8vIFx0XHRcdHNlc3Npb24udXNlci5pZCA9IHVzZXIuaWQ7XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRyZXR1cm4gc2Vzc2lvbjtcblx0Ly8gXHR9LFxuXHQvLyB9LFxuXHQvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG5cdGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Ly8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcblx0XHRDcmVkZW50aWFsc1Byb3ZpZGVyKHtcblx0XHRcdG5hbWU6ICdDcmVkZW50aWFscycsXG5cdFx0XHRjcmVkZW50aWFsczoge1xuXHRcdFx0XHRuYW1lOiB7XG5cdFx0XHRcdFx0bGFiZWw6ICdOYW1lJyxcblx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIG5hbWUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgX3JlcSkge1xuXHRcdFx0XHRjb25zdCB1c2VyID0geyBpZDogMSwgbmFtZTogY3JlZGVudGlhbHM/Lm5hbWUgPz8gJ0ogU21pdGgnIH07XG5cdFx0XHRcdHJldHVybiB1c2VyO1xuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0c2VjcmV0OiBlbnYuTkVYVEFVVEhfU0VDUkVULFxuXHRzZXNzaW9uOiB7XG5cdFx0c3RyYXRlZ3k6ICdqd3QnLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJlbnYiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dGhvcml6ZSIsIl9yZXEiLCJ1c2VyIiwiaWQiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/db/client.ts":
/*!*********************************!*\
  !*** ./src/server/db/client.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ \"(api)/./src/server/env.js\");\n// src/server/db/client.ts\n\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (_env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") {\n    global.prisma = prisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMEJBQTBCO0FBQ29CO0FBQ2pCO0FBTXRCLE1BQU1FLE1BQU0sR0FDakJDLE1BQU0sQ0FBQ0QsTUFBTSxJQUNiLElBQUlGLHdEQUFZLENBQUM7SUFDZkksR0FBRyxFQUFFO1FBQUMsT0FBTztLQUFDO0NBQ2YsQ0FBQyxDQUFDO0FBRUwsSUFBSUgsOENBQVksS0FBSyxZQUFZLEVBQUU7SUFDakNFLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNLENBQUM7Q0FDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90My1jaGF0Ly4vc3JjL3NlcnZlci9kYi9jbGllbnQudHM/MjcyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2VydmVyL2RiL2NsaWVudC50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwiLi4vZW52XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFtcInF1ZXJ5XCJdLFxuICB9KTtcblxuaWYgKGVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJOT0RFX0VOViJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/db/client.ts\n");

/***/ }),

/***/ "(api)/./src/server/env-schema.js":
/*!**********************************!*\
  !*** ./src/server/env-schema.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { z  } = __webpack_require__(/*! zod */ \"zod\");\nconst envSchema = z.object({\n    DATABASE_URL: z.string().url(),\n    NODE_ENV: z.enum([\n        \"development\",\n        \"test\",\n        \"production\"\n    ]),\n    NEXTAUTH_SECRET: z.string(),\n    NEXTAUTH_URL: z.string().url(),\n    DISCORD_CLIENT_ID: z.string(),\n    DISCORD_CLIENT_SECRET: z.string()\n});\nmodule.exports.envSchema = envSchema;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2Vudi1zY2hlbWEuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEVBQUVBLENBQUMsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLGdCQUFLLENBQUM7QUFFNUIsTUFBTUMsU0FBUyxHQUFHRixDQUFDLENBQUNHLE1BQU0sQ0FBQztJQUN6QkMsWUFBWSxFQUFFSixDQUFDLENBQUNLLE1BQU0sRUFBRSxDQUFDQyxHQUFHLEVBQUU7SUFDOUJDLFFBQVEsRUFBRVAsQ0FBQyxDQUFDUSxJQUFJLENBQUM7UUFBQyxhQUFhO1FBQUUsTUFBTTtRQUFFLFlBQVk7S0FBQyxDQUFDO0lBQ3ZEQyxlQUFlLEVBQUVULENBQUMsQ0FBQ0ssTUFBTSxFQUFFO0lBQzNCSyxZQUFZLEVBQUVWLENBQUMsQ0FBQ0ssTUFBTSxFQUFFLENBQUNDLEdBQUcsRUFBRTtJQUM5QkssaUJBQWlCLEVBQUVYLENBQUMsQ0FBQ0ssTUFBTSxFQUFFO0lBQzdCTyxxQkFBcUIsRUFBRVosQ0FBQyxDQUFDSyxNQUFNLEVBQUU7Q0FDbEMsQ0FBQztBQUVGUSx3QkFBd0IsR0FBR1gsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdDMtY2hhdC8uL3NyYy9zZXJ2ZXIvZW52LXNjaGVtYS5qcz84YWMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgeiB9ID0gcmVxdWlyZShcInpvZFwiKTtcblxuY29uc3QgZW52U2NoZW1hID0gei5vYmplY3Qoe1xuICBEQVRBQkFTRV9VUkw6IHouc3RyaW5nKCkudXJsKCksXG4gIE5PREVfRU5WOiB6LmVudW0oW1wiZGV2ZWxvcG1lbnRcIiwgXCJ0ZXN0XCIsIFwicHJvZHVjdGlvblwiXSksXG4gIE5FWFRBVVRIX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgTkVYVEFVVEhfVVJMOiB6LnN0cmluZygpLnVybCgpLFxuICBESVNDT1JEX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgRElTQ09SRF9DTElFTlRfU0VDUkVUOiB6LnN0cmluZygpLFxufSk7XG5cbm1vZHVsZS5leHBvcnRzLmVudlNjaGVtYSA9IGVudlNjaGVtYTtcbiJdLCJuYW1lcyI6WyJ6IiwicmVxdWlyZSIsImVudlNjaGVtYSIsIm9iamVjdCIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsIk5PREVfRU5WIiwiZW51bSIsIk5FWFRBVVRIX1NFQ1JFVCIsIk5FWFRBVVRIX1VSTCIsIkRJU0NPUkRfQ0xJRU5UX0lEIiwiRElTQ09SRF9DTElFTlRfU0VDUkVUIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/env-schema.js\n");

/***/ }),

/***/ "(api)/./src/server/env.js":
/*!***************************!*\
  !*** ./src/server/env.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// @ts-check\n/**\n * This file is included in `/next.config.js` which ensures the app isn't built with invalid env vars.\n * It has to be a `.js`-file to be imported there.\n */ const { envSchema  } = __webpack_require__(/*! ./env-schema */ \"(api)/./src/server/env-schema.js\");\nconst env = envSchema.safeParse(process.env);\nconst formatErrors = (/** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */ errors)=>Object.entries(errors).map(([name, value])=>{\n        if (value && \"_errors\" in value) return `${name}: ${value._errors.join(\", \")}\\n`;\n    }).filter(Boolean);\nif (!env.success) {\n    console.error(\"\\u274C Invalid environment variables:\\n\", ...formatErrors(env.error.format()));\n    process.exit(1);\n}\nmodule.exports.env = env.data;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2Vudi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFLQTtBQUxBLFlBQVk7QUFDWjs7O0dBR0csQ0FDSCxNQUFNLEVBQUVBLFNBQVMsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFjLENBQUM7QUFFN0MsTUFBTUMsR0FBRyxHQUFHRixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDRixHQUFHLENBQUM7QUFFNUMsTUFBTUcsWUFBWSxHQUFHLENBQ25CLHlFQUF5RSxDQUN6RUMsTUFBTSxHQUVOQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDLENBQ25CRyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLEtBQUssQ0FBQyxHQUFLO1FBQ3RCLElBQUlBLEtBQUssSUFBSSxTQUFTLElBQUlBLEtBQUssRUFDN0IsT0FBTyxDQUFDLEVBQUVELElBQUksQ0FBQyxFQUFFLEVBQUVDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkQsQ0FBQyxDQUNEQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztBQUVwQixJQUFJLENBQUNiLEdBQUcsQ0FBQ2MsT0FBTyxFQUFFO0lBQ2hCQyxPQUFPLENBQUNDLEtBQUssQ0FDWCx5Q0FBb0MsS0FDakNiLFlBQVksQ0FBQ0gsR0FBRyxDQUFDZ0IsS0FBSyxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxDQUNwQyxDQUFDO0lBQ0ZmLE9BQU8sQ0FBQ2dCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNqQjtBQUVEQyxrQkFBa0IsR0FBR25CLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3QzLWNoYXQvLi9zcmMvc2VydmVyL2Vudi5qcz9lMjZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1jaGVja1xuLyoqXG4gKiBUaGlzIGZpbGUgaXMgaW5jbHVkZWQgaW4gYC9uZXh0LmNvbmZpZy5qc2Agd2hpY2ggZW5zdXJlcyB0aGUgYXBwIGlzbid0IGJ1aWx0IHdpdGggaW52YWxpZCBlbnYgdmFycy5cbiAqIEl0IGhhcyB0byBiZSBhIGAuanNgLWZpbGUgdG8gYmUgaW1wb3J0ZWQgdGhlcmUuXG4gKi9cbmNvbnN0IHsgZW52U2NoZW1hIH0gPSByZXF1aXJlKFwiLi9lbnYtc2NoZW1hXCIpO1xuXG5jb25zdCBlbnYgPSBlbnZTY2hlbWEuc2FmZVBhcnNlKHByb2Nlc3MuZW52KTtcblxuY29uc3QgZm9ybWF0RXJyb3JzID0gKFxuICAvKiogQHR5cGUge2ltcG9ydCgnem9kJykuWm9kRm9ybWF0dGVkRXJyb3I8TWFwPHN0cmluZyxzdHJpbmc+LHN0cmluZz59ICovXG4gIGVycm9ycyxcbikgPT5cbiAgT2JqZWN0LmVudHJpZXMoZXJyb3JzKVxuICAgIC5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICh2YWx1ZSAmJiBcIl9lcnJvcnNcIiBpbiB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGAke25hbWV9OiAke3ZhbHVlLl9lcnJvcnMuam9pbihcIiwgXCIpfVxcbmA7XG4gICAgfSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG5pZiAoIWVudi5zdWNjZXNzKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgXCLinYwgSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXM6XFxuXCIsXG4gICAgLi4uZm9ybWF0RXJyb3JzKGVudi5lcnJvci5mb3JtYXQoKSksXG4gICk7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZW52ID0gZW52LmRhdGE7XG4iXSwibmFtZXMiOlsiZW52U2NoZW1hIiwicmVxdWlyZSIsImVudiIsInNhZmVQYXJzZSIsInByb2Nlc3MiLCJmb3JtYXRFcnJvcnMiLCJlcnJvcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwibmFtZSIsInZhbHVlIiwiX2Vycm9ycyIsImpvaW4iLCJmaWx0ZXIiLCJCb29sZWFuIiwic3VjY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsImZvcm1hdCIsImV4aXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/env.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();