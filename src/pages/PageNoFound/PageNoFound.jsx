import { NavLink } from "react-router-dom";
export function PageNoFound() {
  return (
    <>
      <div className="bg-white flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-orange-600">404</h1>
          <p className="text-2xl md:text-3xl font-light text-orange-800 mt-4">
            Page Non Trouvée
          </p>
          <p className="mt-10 mb-20 text-orange-700">
            La page que vous cherchez n'existe pas.
          </p>
          <NavLink
            to={"/"}
            className="mt-20 px-4 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Retour à l'accueil
          </NavLink>
        </div>
      </div>
    </>
  );
}
