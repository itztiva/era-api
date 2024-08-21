import app from "../..";

export default function () {
    app.post("/api/launcher/builds/query", async (c) => {
        return c.json({
            data: [
                {
                    archive: null,
                    available: true,
                    build: "8.51.0-CL-6165369",
                    cdn_version: 3,
                    has_launch_permission: true,
                    icon: "https://cdn.erafn.app/assets/icons/fnch1.png",
                    manifest: null,
                    name: "Fortnite 8.51",
                    next: false,
                    public: true,
                    season_number: 8.51,
                    splash:
                        "https://cdn.erafn.app/assets/builds/poster-ca855e0f-0f45-4346-9728-3e685de22d96.png",
                    time: 0,
                    type: null,
                    uuid: "ca855e0f-0f45-4346-9728-3e685de22d96",
                },
            ],
        });
    });
}