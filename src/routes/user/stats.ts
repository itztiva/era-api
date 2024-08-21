import app from "../..";

export default function () {
    app.get("/api/launcher/user/stats", async (c) => {
        return c.json(
            {
                data: {
                    kdr: 0.1,
                    matches: 245827348728,
                    time: 0,
                    wins: 1,
                },
            },
            200
        );
    });
}