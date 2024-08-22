import app from "../..";

export default function () {
    app.post("/api/launcher/version/request/client/*", async (c) => {
        return c.json(null, 204)
    })
}