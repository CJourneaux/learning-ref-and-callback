import React from "react";
import SimpleStateAndRef from "./1-simple-state-and-ref";

type RouteLoaderData = {
  slug: string;
  id: number;
  Component: React.FunctionComponent;
};

export type ExamplesRouteLoaderData = {
  examples: RouteLoaderData[];
};

export default function RouteLoader(): ExamplesRouteLoaderData {
  return {
    examples: [
      { id: 1, slug: "simple-state-and-ref", Component: SimpleStateAndRef }
    ]
  };
}
