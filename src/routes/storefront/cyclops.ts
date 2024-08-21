import app from "../..";

export default function () {
    app.get("/api/launcher/cyclops/catalog", async (c) => {
        return c.json({
            data: {
                current_monthly_pack: {
                    active_from: "2024-08-01T00:00:00Z",
                    items: [
                        {
                            description: "Rare renegade raider outfit.",
                            image:
                                "https://fortnite-api.com/images/cosmetics/br/CID_028_Athena_Commando_F/icon.png",
                            name: "wENEGADE waIdER",
                            rarity: "rare",
                            type: "skin",
                        },
                    ],
                    name: "Erafnbr",
                },
                products: [
                    {
                        description:
                            "<li>2,800 V-Bucks</li>\r\n<li>Infinite name changes</li>\r\n<li>50% XP and 50% V-Buck boost from daily quests</li>\r\n<li>Priority queue</li>\r\n<li>Early access to all of <b>Era</b> services</li>\r\n",
                        external_store_link:
                            "https://erafn.mysellix.io/product/founder-66b933db7f831",
                        id: 1,
                        max_owned_quantity: 1,
                        meta: {
                            cta_color: "#8b5cf6",
                            gradient_from: "#a78bfa",
                            gradient_to: "#7e22ce",
                            icon: "TbDiamondFilled",
                            index: 1,
                            price_color: "#e9d5ff",
                            track: "https://cdn.erafn.app/assets/music/founder-package.mp3",
                        },
                        name: "Founder",
                        price: 80,
                        price_discount: 75,
                        recurring_interval: null,
                    },
                ],
                unique_catalog_id: "A0B7AA1E007644DABBCD1BA5180BC58C",
            },
        });
    });
}