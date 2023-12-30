import { FavoritesPage, favoritesActions } from "@features/favorites";

export const getServerSideProps = favoritesActions.getServerSideState();

export default FavoritesPage;
