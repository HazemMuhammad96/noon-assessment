import { HomePage, homeActions } from "@features/home";

export const getServerSideProps = homeActions.getServerSideState();

export default HomePage;
