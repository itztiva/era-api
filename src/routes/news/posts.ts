import app from "../..";

export default function () {
    app.get("/api/launcher/news/posts", async (c) => {
        return c.json({
            data: [
                {
                    accent: "#2563eb",
                    author: "benjamin_0505",
                    body: "Era’s OG Private Server is finally about to release! While we take care of continuing development, we are giving everyone the chance to partake in Early Access and Testing. \r\n\r\nTo get access to Early Access, purchase any of the packages available at **[store.erafn.app](https://store.erafn.app)**\r\n\r\nThe packages offer a wide variety of exclusive benefits, including monthly in-game currency and starter packs with exclusive cosmetic items. \r\n\r\nEarly Access in-game sessions begin soon.\r\n\r\n# DOWNLOAD\r\n\r\nThe launcher is now available for download in our Discord, but you won’t be able to play unless you purchase a package on our store. \r\n\r\n# FULL RELEASE \r\n\r\nWe do not yet have an exact release date for the public. That will depend on how well testing goes during the next couple of weeks. ",
                    header: "A New Beginning",
                    id: 1,
                    image:
                        "https://cdn.erafn.app/CMS/launcher/news/post-pre_announcement-560x280-4da6a1c492966c8c19b37eaf03117780.png",
                    inserted_at: "2024-08-20T21:02:47",
                    meta: {
                        height: 220,
                        width: 200,
                    },
                    tags: [],
                    views: 600,
                },
            ],
        });
    });
}
