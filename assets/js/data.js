export const products = [
    {
        id: "prod_001",
        title: "Omega Half Leather Recliner",
        price: 45000,
        originalPrice: 55000,
        category: "Single Seater",
        material: "Top Grain Leather",
        colors: ["Black", "Brown", "Silk Grey"],
        images: {
            main: "../assets/images/Premium-Single-Seater-Recliner-Sofa-Set-Half-Leather-Omega-11-600x600.jpg",
            gallery: [
                "../assets/images/Premium-Single-Seater-Recliner-Sofa-Set-Half-Leather-Omega-11-600x600.jpg",
                "../assets/images/Premium-Single-Seater-Recliner-Sofa-Set-Half-Leather-Omega-10-600x600.jpg"
            ]
        },
        features: ["Manual Recline", "Plush Headrest", "Ergonomic Lumbar Support"],
        isBestSeller: true
    },
    {
        id: "prod_002",
        title: "King Motorized Chair",
        price: 85000,
        originalPrice: 95000,
        category: "Motorized",
        material: "Premium Italian Leather",
        colors: ["Black", "Cognac", "Navy"],
        images: {
            main: "../assets/images/Single-Seater-Motorized-Recliner-Chair-King-8-600x600.jpg",
            gallery: [
                "../assets/images/Single-Seater-Motorized-Recliner-Chair-King-8-600x600.jpg",
                "../assets/images/Single-Seater-Motorized-Recliner-Chair-King-7-600x600.jpg"
            ]
        },
        features: ["Motorized Recline", "Adjustable Power Headrest", "USB Charging Port"],
        isBestSeller: true
    },
    {
        id: "prod_003",
        title: "Style 361 Lounge",
        price: 65000,
        originalPrice: 75000,
        category: "Single Seater",
        material: "Full Aniline Leather",
        colors: ["White", "Cream", "Beige"],
        images: {
            main: "../assets/images/Single-Seater-Recliner-Chair-White-Style-361-600x600.jpg",
            gallery: [
                "../assets/images/Single-Seater-Recliner-Chair-White-Style-361-600x600.jpg",
                "../assets/images/Single-Seater-Recliner-Chair-White-Style-361-2-600x600.jpg"
            ]
        },
        features: ["Contemporary Design", "Hidden Recline Mechanism", "High Density Foam"],
        isBestSeller: true
    },
    {
        id: "prod_004",
        title: "Silk Grey Power Headrest",
        price: 125000,
        originalPrice: 145000,
        category: "Three Seater",
        material: "Top Grain Leather",
        colors: ["Silk Grey", "Charcoal"],
        images: {
            main: "../assets/images/Three-Seater-Motorized-Recliner-Sofa-with-Adjustable-Power-Headrest-Silk-Grey-10-600x600.jpg",
            gallery: [
                "../assets/images/Three-Seater-Motorized-Recliner-Sofa-with-Adjustable-Power-Headrest-Silk-Grey-10-600x600.jpg",
                "../assets/images/Three-Seater-Motorized-Recliner-Sofa-with-Adjustable-Power-Headrest-Silk-Grey-2-600x600.jpg"
            ]
        },
        features: ["Motorized Recline", "Drop Down Console", "Cupholders"],
        isBestSeller: true
    },
    {
        id: "prod_005",
        title: "Home Theater Wave Chair",
        price: 155000,
        originalPrice: 175000,
        category: "Home Theatre",
        material: "Premium Leather Match",
        colors: ["Black", "Red", "Brown"],
        images: {
            main: "../assets/images/Home-Theater-Recliner-2-Seater-Wave-Chair-1024x1024.webp",
            gallery: [
                "../assets/images/Home-Theater-Recliner-2-Seater-Wave-Chair-1024x1024.webp",
                "../assets/images/Home-Theater-Recliner-2-Seater-Wave-Chair-2-300x300.webp"
            ]
        },
        features: ["Motorized Headrest", "LED Base Lighting", "Cooling Cupholders"],
        isBestSeller: false
    },
    {
        id: "prod_006",
        title: "Curve Delta Recliner",
        price: 95000,
        originalPrice: 110000,
        category: "Two Seater",
        material: "Fabric",
        colors: ["Grey", "Navy", "Oatmeal"],
        images: {
            main: "../assets/images/Curve-Recliners-Sofa-Delta.webp",
            gallery: [
                "../assets/images/Curve-Recliners-Sofa-Delta.webp",
                "../assets/images/Curve-Recliners-Sofa-Delta-online.webp"
            ]
        },
        features: ["Space Saver", "Stain Resistant Fabric", "Plush Armrests"],
        isBestSeller: false
    }
];

export const getProductById = (id) => {
    return products.find(p => p.id === id);
};

export const getBestSellers = () => {
    return products.filter(p => p.isBestSeller);
};

export const getProductsByCategory = (category) => {
    return products.filter(p => p.category === category);
};
