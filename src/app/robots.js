import { URL } from "@/requestMethods";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: [],
        },
        sitemap: `${URL}/sitemap.xml`
    }
} 