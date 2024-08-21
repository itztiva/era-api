import app from "../..";

export default function () {
    app.get("/api/launcher/banners", async (c) => {
        return c.json({
            data: [
                {
                    background: "generic",
                    body: "Purchase **Founder** now for just **$20** to participate in early access testing! You can find more information in the **Store** tab.",
                    build: {
                        build: "9.10-CL-6165369",
                        name: "Fortnite 9.10",
                        season: {
                            name: "Season 9",
                        },
                        uuid: "ca855e0f-0f45-4346-9728-3e685de22d96",
                    },
                    header: "Season 9",
                    meta: {
                        background:
                            "https://gamespot.com/a/uploads/original/43/434805/3531474-fortnite-season-9-promo-14.jpg",
                        background_styles: {
                            filter: "brightness(0.8)",
                        },
                        body_styles: {
                            color: "#14b8a6",
                            fontWeight: 900,
                        },
                        header_styles: {
                            color: "#f59e0b",
                            opacity: 1,
                        },
                        headline_styles: {
                            color: "#22c55e",
                            fontWeight: 900,
                        },
                        index: 2,
                        tags: [["_message", "warning", "Limited Time!"]],
                    },
                    starts_at: null,
                },
            ],
        });
    });
}