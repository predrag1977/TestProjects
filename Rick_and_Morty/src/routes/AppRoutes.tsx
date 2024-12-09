import CharactersPage from "../pages/CharactersPage";
import EpisodePage from "../pages/EpisodePage";
import LocationPage from "../pages/LocationPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import SingleCharacterPage from "../pages/SingleCharacterPage";
import WelcomePage from "../pages/WelcomePage";

const AppRoutes = [
    {
        index: true,
        element: <WelcomePage />
    },
    {
        path: '/characters',
        element: <CharactersPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/characters/:id?',
        element: <SingleCharacterPage />
    },
    {
        path: '/location',
        element: <LocationPage />
    },
    {
        path: '/episode/:id?',
        element: <EpisodePage />
    },
]

export default AppRoutes;