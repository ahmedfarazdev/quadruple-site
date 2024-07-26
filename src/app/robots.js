import { MetadataRoute } from "next";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disalow: "/private/",
        },
        sitemap: "https://www.quadsol.co/sitemap.xml"
    }
}