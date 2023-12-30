import FavoritesPage from "@features/favorites/pages/favorites-page/favorites-page";
import { favoritesActions } from "@features/favorites/pages/state/favorites-slice";

export const getServerSideProps = favoritesActions.getServerSideState();

export default FavoritesPage;
