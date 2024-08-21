import app from "../..";

export default function () {
    app.get("/api/launcher/updates", async (c) => {
        return c.json(null, 204);
    });
}
