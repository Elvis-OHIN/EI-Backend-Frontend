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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTicket = exports.updateTicket = exports.addTicket = exports.getTicket = exports.getTickets = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getTickets() {
    return __awaiter(this, void 0, void 0, function* () {
        const tickets = yield prisma.ticket.findMany();
        return tickets;
    });
}
exports.getTickets = getTickets;
function getTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.ticket.findUnique({
            where: {
                id: Number(id),
            },
        });
        return result;
    });
}
exports.getTicket = getTicket;
function addTicket(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.ticket.create({
            data: Object.assign({}, body),
        });
        return result;
    });
}
exports.addTicket = addTicket;
function updateTicket(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const put = yield prisma.ticket.update({
            where: { id: Number(id) },
            data: Object.assign({}, body),
        });
        return put;
    });
}
exports.updateTicket = updateTicket;
function deleteTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.ticket.delete({
            where: {
                id: Number(id),
            },
        });
        return result;
    });
}
exports.deleteTicket = deleteTicket;
module.exports = {
    getTickets,
    getTicket,
    addTicket,
    updateTicket,
    deleteTicket,
};
