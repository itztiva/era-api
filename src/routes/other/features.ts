import app from "../..";

export default function () {
    app.get("/api/launcher/features", async (c) => {
        return c.json({
            data: [
                {
                    enabled: true,
                    flag: "sidebar_banner:donation",
                },
                {
                    enabled: true,
                    flag: "library:ext_platform_launch",
                },
            ],
        });
    });
}