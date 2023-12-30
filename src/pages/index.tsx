import { homeActions, HomePage } from "@features/home";

export const getServerSideProps = homeActions.getServerSideState();

export default HomePage;
