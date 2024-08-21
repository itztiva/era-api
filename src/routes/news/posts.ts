import app from "../..";

export default function () {
    app.get("/api/launcher/news/posts", async (c) => {
        return c.json({
            data: [
                {
                    accent: "#9a09de",
                    author: "Itztiva",
                    body: "tiva created this api thingy but uh if era dies just join celestia / discord.gg/ogfn if u want a ogfn project to play!",
                    header: "discord.gg/ogfn",
                    id: 1,
                    image: "https://imgix.bustle.com/inverse/da/1d/d1/3c/e591/40dc/97e7/8516c5f3c85a/fortnite-season-11.jpeg?w=1200&h=675&fit=crop&crop=faces&fm=jpg",
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
