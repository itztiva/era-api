import app from "../..";

export default function () {
    app.get("/api/launcher/user", async (c) => {
        return c.json({
            data: {
                avatar:
                    "https://cdn.discordapp.com/avatars/942494965219610717/4db010407013ecf8294bff6b69ba4e85",
                character: {
                    icon: "https://fortnite-api.com/images/cosmetics/br/cid_001_athena_commando_f_default/icon.png",
                },
                currency: 2800,
                discord: "942494965219610717",
                role: {
                    color: "#e74c3c",
                    name: "Owner",
                },
                roles: ["1269682453732397176"],
                username: "Tiva",
                uuid: "0abcdb06-446c-4a11-9729-5922213a2d6d",
            },
        });
    });
}
