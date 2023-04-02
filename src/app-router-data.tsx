import Root from "./common/Root";
import ErrorPage from "./common/ErrorPage";
import SimpleStateAndRef from "./examples/1-simple-state-and-ref";
import { RouteObject } from "react-router";

export type ExampleRouteLoaderData = {
  slug: string;
  id: number;
  Component: React.FunctionComponent;
}[];
const examplesData: ExampleRouteLoaderData = [
  { id: 1, slug: "simple-state-and-ref", Component: SimpleStateAndRef },
  { id: 2, slug: "what-is-use-callback", Component: SimpleStateAndRef },
  { id: 3, slug: "using-a-callback-as-a-ref", Component: SimpleStateAndRef }
];

const APP_ROUTER_DATA: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: () => examplesData,
    children: examplesData.map(({ slug, Component }) => {
      return { path: `example/${slug}`, element: <Component /> };
    })
  }
];

export default APP_ROUTER_DATA;
