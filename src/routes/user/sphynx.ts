import app from "../..";

export default function () {
    app.get("/api/launcher/user/sphynx", async (c) => {
        return c.json({
            data: {
                current_period_end: null,
                plan: null,
                status: null,
                unique: null,
            },
        });
    });
}
