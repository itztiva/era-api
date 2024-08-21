import app from "../..";

export default function () {
    app.get("/api/launcher/cyclops/user", async (c) => {
        return c.json({
            data: {
                owned_products: [
                    {
                        inserted_at: "9999-12-31T00:00:00Z",
                        perks_processed_at: "9999-12-31T00:00:00Z",
                        product_id: 1,
                    },
                ],
                perks: {
                    currency: 2800,
                    "ephemeral:daily_quest_currency_boost": 50,
                    "ephemeral:early_access": 1,
                    "ephemeral:extra_ui_launcher_themes": 1,
                    "ephemeral:name_changes_infinite": 1,
                    "ephemeral:priority_queue": 1,
                    "ephemeral:xp_boost": 50,
                    "role:1269682453732397176": 1,
                },
            },
        });
    });
}