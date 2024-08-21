import app from "../..";

export default function () {
    app.get("/api/launcher/insights", async (c) => {
        return c.json({
            data: {
                average_queue_time: {
                    duration: null,
                    preferred_region: "eu",
                },
                players: -1,
            },
        });
    });
}