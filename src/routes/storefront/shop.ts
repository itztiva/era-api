import app from "../..";

export default function () {
    app.get("/api/launcher/shop", async (c) => {
        return c.json({
            data: {
                daily: {
                    content: [
                        [
                            {
                                item: {
                                    category: "Im a wenegade waider",
                                    description: "tiva typed this ",
                                    featured_image:
                                        "https://fortnite-api.com/images/cosmetics/br/CID_028_Athena_Commando_F/featured.png",
                                    image:
                                        "https://fortnite-api.com/images/cosmetics/br/CID_028_Athena_Commando_F/icon.png",
                                    name: "i hackered era",
                                    rarity: "rare",
                                    type: "skin",
                                },
                                price: 0,
                            },
                        ],
                    ],
                    expires_at: "2024-08-21T23:59:59Z",
                },
                featured: {
                    content: [
                        [
                            {
                                item: {
                                    category: "Im a wenegade waider",
                                    description: "tiva typed this ",
                                    featured_image:
                                        "https://fortnite-api.com/images/cosmetics/br/CID_028_Athena_Commando_F/featured.png",
                                    image:
                                        "https://fortnite-api.com/images/cosmetics/br/CID_028_Athena_Commando_F/icon.png",
                                    name: "i hackered era",
                                    rarity: "rare",
                                    type: "skin",
                                },
                                price: 0,
                            },
                        ],
                    ],
                    expires_at: "2024-08-21T23:59:59Z",
                },
                unique:
                    "79f76224417f46a5a28dd174a511386fa6b9e477f8714ea2a899063e1df5803f",
            },
        });
    });
}