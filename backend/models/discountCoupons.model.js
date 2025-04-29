import mongoose from 'mongoose';

const discountCouponsSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const DiscountCoupons = mongoose.model('DiscountCoupons', discountCouponsSchema);
export default DiscountCoupons;