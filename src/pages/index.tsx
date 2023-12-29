import { HomePage } from "@features/home";
import { PostsRepository } from "@features/post";
import { wrapper } from "@lib/state/store";
import { homeActions } from "@features/home/state/home-slice";

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    // @ts-ignore
    async (config) => {
        await store.dispatch(homeActions.fetchPosts(config));
    }
);

export default HomePage;
