import dynamic from "next/dynamic"
import { getPosts } from "@/actions/get-posts"
import { getTopics } from "@/actions/get-topics"

import Container from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"
import BlogAllPosts from "@/components/blog-all-posts"
import BlogFeaturedPosts from "@/components/blog-featured-posts"

const BlogSearch = dynamic(() => import("@/components/blog-search"), {
    // loading: () => (
    //     <Skeleton className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400">
    //         Show More
    //     </Skeleton>
    // ),
})

async function BlogPage() {
    const topics = await getTopics()
    const featuredPosts = await getPosts({ limit: 5, isFeatured: true })
    const allPosts = await getPosts({ limit: 10 })

    return (
        <main className="flex w-full justify-center">
            <Container className="space-y-10">
                <BlogSearch topics={topics} />
                <BlogFeaturedPosts featuredPosts={featuredPosts} />
                <BlogAllPosts allPosts={allPosts} />
            </Container>
        </main>
    )
}
export default BlogPage
