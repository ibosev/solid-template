import { Accessor, Component, createEffect, createSelector, createSignal } from "solid-js";
import { Link, useRoutes, useLocation } from "solid-app-router";

import { routes } from "./routes";

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  const [path, setPath] = createSignal(location.pathname);

  createEffect(() => {
    console.log(location.pathname);
    setPath(location.pathname);
  });

  const isSelected = createSelector(path);

  return (
    <>
      <nav class="bg-gray-200 text-gray-900 px-4">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <Link
              href="/"
              class="no-underline"
              classList={{
                'text-black font-bold rounded border-gray-500 border px-10px py-5px': isSelected('/')
              }}
            >
              Home
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link
              href="/about"
              class="no-underline"
              classList={{
                'text-black font-bold rounded border-gray-500 border px-10px py-5px': isSelected('/about')
              }}
            >
              About
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link
              href="/error"
              class="no-underline"
              classList={{
                'text-black font-bold rounded border-gray-500 border px-10px py-5px': isSelected('/error')
              }}
            >
              Error
            </Link>
          </li>

          <li class="text-sm flex items-center space-x-1 ml-auto">
            <span>URL:</span>
            <input
              class="w-75px p-1 bg-white text-sm rounded-lg"
              type="text"
              readOnly
              value={location.pathname}
            />
          </li>
        </ul>
      </nav>

      <main>
        <Route />
      </main>
    </>
  );
};

export default App;
