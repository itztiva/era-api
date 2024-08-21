import app from "../..";

export default function () {
    app.get("/launcher/websocket", async (c) => {
        return c.json([null, "29", "phoenix", "phx_reply", { response: {}, status: "ok" }])
    })
}