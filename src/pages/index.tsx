import { HomePage } from "@features/home";
import { homeActions } from "@features/home/state/home-slice";

export const getServerSideProps = homeActions.getServerSideState();

export default HomePage;
