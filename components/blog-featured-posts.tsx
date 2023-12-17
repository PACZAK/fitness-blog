import gym from "@/public/gym.webp"

import PostCard from "./ui/post-card"
import { Separator } from "./ui/separator"

function BlogFeaturedPosts() {
    return (
        <section className="flex w-full flex-col gap-10">
            <Separator />
            <h1 className="text-5xl font-bold">Top posts</h1>
            <Separator />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <PostCard
                    title={"Benchpress improvemnt!"}
                    slug={"dsfsdfsdf"}
                    date={"12/3/4"}
                    topics={["strngth", "sdfsd"]}
                    img={gym.src}
                    author={{
                        name: "marcin",
                        img: gym.src,
                    }}
                />
                <PostCard
                    title={"Benchpress improvemnt!"}
                    slug={"dsfsdfsdf"}
                    date={"12/3/4"}
                    topics={["strngth", "sdfsd"]}
                    img={gym.src}
                    author={{
                        name: "marcin",
                        img: gym.src,
                    }}
                />
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <PostCard
                    title={"Benchpress improvemnt!"}
                    slug={"dsfsdfsdf"}
                    date={"12/3/4"}
                    topics={["strngth", "sdfsd"]}
                    author={{
                        name: "marcin",
                        img: gym.src,
                    }}
                />{" "}
                <PostCard
                    title={"Benchpress improvemnt!"}
                    slug={"dsfsdfsdf"}
                    date={"12/3/4"}
                    topics={["strngth", "sdfsd"]}
                    author={{
                        name: "marcin",
                        img: gym.src,
                    }}
                />{" "}
                <PostCard
                    title={"Benchpress improvemnt!"}
                    slug={"dsfsdfsdf"}
                    date={"12/3/4"}
                    topics={["strngth", "sdfsd"]}
                    author={{
                        name: "marcin",
                        img: gym.src,
                    }}
                />
            </div>
        </section>
    )
}
export default BlogFeaturedPosts
