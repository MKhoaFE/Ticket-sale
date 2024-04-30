import dotenv from 'dotenv';
dotenv.config();

const config = {
    NODE_ENV: process.env.NODE_ENV,

    PORT: process.env.PORT || 3001,

    DATABASE: {
        server: process.env.DB_SERVER,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
    },

    MONGODB_URL: process.env.MONGODB_URL,
    MONGODB_NAME: process.env.MONGODB_NAME,

    NO_TOKEN_URL: ["/auth", "/location", "/category", "/product"],

    priceRanges: [
        {
            price: "all",
            title: "Tất cả",
        },
        {
            price: "0,150000",
            title: "0 - 150.000 VNĐ",
        },
        {
            price: "150000,300000",
            title: "150.000 - 300.000 VNĐ",
        },
        {
            price: "300000,450000",
            title: "300.000 - 450.000 VNĐ",
        },
        {
            price: "450000,600000",
            title: "450.000 - 600.000 VNĐ",
        },
    ],

    sortList: [
        {
            value: "book_discounted_price",
            title: "Giá bán",
        },
        {
            value: "-avg_rating",
            title: "Rating trung bình",
        },
        {
            value: "-discounted_number",
            title: "Chiết khấu",
        },
    ],

    limitList: [
        {
            value: 12,
        },
        {
            value: 24,
        },
        {
            value: 48,
        },
    ],

    role: {
        USER: 1,
        ADMIN: 2,
    },

    payment: {
        PAYPAL: "PayPal",
        MOMO: "MoMo",
        COD: "COD",
    },

    currency: {
        USD: "usd",
        VND: "vnd",
        ETH: "eth",
    },

    pointChangedType: {
        RECEIVE: 1,
        ACCUMULATE: 2,
        USE: -1,
    },

    tier: {
        MEMBER: 1,
        VIP: 2,
        HVIP: 3,
    },

    orderState: {
        PENDING: 1,
        CANCEL: -1,
        SHIPPING: 2,
        SUCCESS: 3,
        REFUNDING: -2,
        REFUNDED: -3,
    },

    BEST_SELLER_LIMIT: 4,
    PRODUCT_IMAGE_NUMBER_LIMIT: 10,
    RELATED_PRODUCT_LIMIT: 4,
    AVATAR_IMAGE_NUMBER_LIMIT: 1,

    SHOP_LAT: 10.762595373064496,
    SHOP_LONG: 106.6823047396491,
};

export default config;
