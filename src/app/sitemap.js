// import { cateData } from "@/components/dashboard/data/categoryData";
import { URL } from "@/requestMethods";

export default function sitemap() {

    // const quizes = cateData?.map((id)=> {
    //     return {
    //         url: `${URL}/quiz/${id.id}`,
    //         lastModified: new Date()
    //     }
    // })

    return [
        {
            url: URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        
    ]
} 