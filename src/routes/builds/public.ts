import app from "../..";

export default function () {
    app.get("/api/launcher/builds/public", async (c) => {
        return c.json({
            data: {
                art: "https://cdn.erafn.app/assets/builds/banner-ca855e0f-0f45-4346-9728-3e685de22d96.png",
                build: "8.51.0-CL-6165369",
                cdn_version: 3,
                name: "Fortnite 8.51",
                next: false,
                season: {
                    name: "Season 8",
                    number: 8,
                },
                uuid: "ca855e0f-0f45-4346-9728-3e685de22d96",
            },
        });
    });
}