import app from "../..";

export default function () {
    app.get("/api/launcher/friends", async (c) => {
        return c.json({
            data: [
                {
                    avatar:
                        "https://cdn.discordapp.com/avatars/361085896361246725/2bb1f35696478053da7a273c06d51f9c",
                    contributed: false,
                    presence: {
                        activity: null,
                        build: null,
                        platform: null,
                        server: null,
                        status: "offline",
                    },
                    username: "aidasp",
                    uuid: "6cec767e-62ae-402f-bec4-208ef9ac84cc",
                },
            ],
        });
    });

    app.get("/api/launcher/friends/incoming", async (c) => {
        return c.json({
            data: [],
        });
    });
}
