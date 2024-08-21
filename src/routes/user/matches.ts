import app from "../..";

export default function () {
    app.get("/api/launcher/user/matches", async (c) => {
        return c.json({
            data: {
                matches: [],
                meta: {},
            },
        });
    });
}