import app from "../..";

export default function () {
    app.get("/api/launcher/user/referral/offer", async (c) => {
        return c.json({ data: { available: true } });
    });
}
