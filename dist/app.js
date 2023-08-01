"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.get('/*', (req, res) => {
    console.log(req.url);
    res.status(200).send("Hello world express");
});
server.listen(3000, () => {
    console.log("server is listening to 3000");
});
//# sourceMappingURL=app.js.map