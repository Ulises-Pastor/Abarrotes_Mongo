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
exports.categoriasController = void 0;
const categoria_model_1 = __importDefault(require("../models/categoria.model"));
class CategoriasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categorias = yield categoria_model_1.default.find();
            res.json(categorias);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = yield categoria_model_1.default.findById(req.params.id);
            res.json(categoria);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoria } = req.body;
            try {
                const nuevaCategoria = new categoria_model_1.default({
                    categoria
                });
                const categoriaGuardada = yield nuevaCategoria.save();
                res.json({
                    id: categoriaGuardada._id,
                    categoria: categoriaGuardada.categoria,
                    createAt: categoriaGuardada.createdAt,
                    updateAt: categoriaGuardada.updatedAt
                });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaA = yield categoria_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(categoriaA);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaE = yield categoria_model_1.default.findByIdAndDelete(req.params.id);
                res.json(categoriaE);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.categoriasController = new CategoriasController();
