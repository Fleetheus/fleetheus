"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = {
    login: (username, password) => {
        debugger;
        return axios_1.default.post('/api/users/login', { username, password });
    }
};
//# sourceMappingURL=users.js.map