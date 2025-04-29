import mongoose from "mongoose"
import Orders from "./orders.model.js";
import DiscountCoupons from "./discountCoupons.model.js";

const transactionsSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orders",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    modeOfPayment: {
        type: String,
        enum: ['credit_card', 'debit_card', 'paypal', 'bank_transfer', 'cash_on_delivery'],
        required: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    discountAvailed: {
        type: Boolean,
        required: true,
        default: false
    },
    discountCouponId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DiscountCoupons",
    }
}, {
    timestamps: true
})

const Transactions = mongoose.model("Transactions", transactionsSchema);

export default Transactions;