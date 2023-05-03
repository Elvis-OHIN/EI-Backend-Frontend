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
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const cors = require('cors');
const repository = require('./repository.ts');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.get('/api/tickets', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tickets = yield repository.getTickets();
    res.json(tickets);
}));
app.get(`/api/ticket/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield repository.getTicket(id);
    res.json(result);
}));
app.post(`/api/ticket`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nom } = req.body;
    const { prenom } = req.body;
    const { civiliteId } = req.body;
    const result = yield repository.addTicket(req.body);
    res.json(result);
}));
app.put('/api/ticket/:id/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { prenom } = req.body;
    const { nom } = req.body;
    const { civiliteId } = req.body;
    const put = yield repository.updateTicket(req.body);
    res.json(put);
}));
app.delete(`/api/ticket/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield repository.deleteTicket(id);
    res.json(result);
}));
const server = app.listen(3000, () => console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`));
