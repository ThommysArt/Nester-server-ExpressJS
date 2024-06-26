"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewsController_1 = __importDefault(require("../controllers/reviewsController"));
const router = express_1.default.Router();
router.get('/all/', reviewsController_1.default.getAllListingReviews);
router.get('/user', reviewsController_1.default.getUserReviews);
router.get('/', reviewsController_1.default.getListingReviewById);
router.post('/', reviewsController_1.default.createListingReview);
router.put('/', reviewsController_1.default.updateListingReview);
router.delete('/', reviewsController_1.default.deleteListingReview);
exports.default = router;
