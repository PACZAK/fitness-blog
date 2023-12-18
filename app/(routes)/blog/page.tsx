import dynamic from "next/dynamic"
import { createClient } from "contentful"

import { getListOfTopics } from "@/lib/utils"
import Container from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"
import BlogAllPosts from "@/components/blog-all-posts"
import BlogFeaturedPosts from "@/components/blog-featured-posts"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

async function BlogPage() {
    const topicsResponse = await client.getEntries({
        content_type: "topic",
    })

    const topics = getListOfTopics(topicsResponse.items)

    const postsResponse = await client.getEntries({
        content_type: "post",
        limit: 5,
        "fields.featured": true,
    })

    let posts: Post[] = []

    postsResponse.items.forEach((post) => {
        // @ts-ignore
        posts.push(post.fields)
    })

    console.log(posts[0].author)

    const BlogSearch = dynamic(() => import("@/components/blog-search"), {
        // loading: () => (
        //     <Skeleton className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400">
        //         Show More
        //     </Skeleton>
        // ),
    })

    return (
        <main className="flex w-full justify-center">
            <Container className="space-y-10">
                <BlogSearch topics={topics} />
                <BlogFeaturedPosts featuredPosts={posts} />
                <BlogAllPosts />
            </Container>
        </main>
    )
}
export default BlogPage
