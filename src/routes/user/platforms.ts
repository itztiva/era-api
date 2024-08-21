import app from "../..";

export default function () {
    app.get("/api/launcher/platforms", async (c) => {
        return c.json({
            data: [],
        });
    });

    app.get("/api/launcher/user/platforms/credentials", async (c) => {
        return c.json(null, 204);
    });
}
