import app from "../..";

export default function () {
    app.get("/api/launcher/builds", async (c) => {
        return c.json({
            data: [
                {
                    archive: null,
                    available: true,
                    build: "8.51.0-CL-6165369",
                    cdn_version: 3,
                    icon: "https://cdn.erafn.app/assets/icons/fnch1.png",
                    manifest: null,
                    name: "Fortnite 8.51",
                    next: false,
                    public: true,
                    season_number: 8.51,
                    size: "50 GB",
                    splash:
                        "https://cdn.erafn.app/assets/builds/poster-ca855e0f-0f45-4346-9728-3e685de22d96.png",
                    type: null,
                    uuid: "ca855e0f-0f45-4346-9728-3e685de22d96",
                },
            ],
        });
    });
}