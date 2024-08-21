import app from "../..";

export default function () {
    app.get("/api/launcher/content/trailer", async (c) => {
        return c.json(
            {
                errors: {
                    detail: "Not Found",
                },
            },
            404
        );
    });
}