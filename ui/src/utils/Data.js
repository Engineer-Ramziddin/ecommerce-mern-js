import React from "react";
import {FaRegCreditCard, FaTruck} from "react-icons/fa";
import {GoGift} from "react-icons/go";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {AiOutlinePercentage} from "react-icons/ai";

export const services = [
    {
        title: "Free shipping",
        tagline: "From all orders over $5",
        image: <FaTruck size={28}/>
    },
    {
        title: "Daily Surprice Offers",
        tagline: "Save up to 25% of",
        image: <GoGift size={28}/>
    },
    {
        title: "Support 24/7",
        tagline: "Shop with an expert",
        image: <TfiHeadphoneAlt size={28}/>
    },
    {
        title: "Affordable Prices",
        tagline: "Get Factory direct price",
        image: <AiOutlinePercentage size={28}/>
    },
    {
        title: "Secure Payments",
        tagline: "100% Protected Payments",
        image: <FaRegCreditCard size={28}/>
    }
]