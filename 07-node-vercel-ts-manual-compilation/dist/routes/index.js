"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Hello, Vercel!");
});
router.get("/first-route", (req, res) => {
    console.log("routes called");
    res.send("routes route called");
});
router.get("/slow", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("timer started");
    // Use Promise-based delay to avoid issues with async/await
    yield new Promise((resolve) => setTimeout(resolve, 20000));
    console.log("timer over");
    res.send("slow route called");
}));
exports.default = router;
