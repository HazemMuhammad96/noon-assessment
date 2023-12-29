import { HomePage } from "@features/home";
import { PostsRepository } from "@features/post";

export const getServerSideProps = async (config: any) => {
    const posts = await PostsRepository.getAll(config);
    return {
        props: {
            posts,
        },
    };
};

export default HomePage;
