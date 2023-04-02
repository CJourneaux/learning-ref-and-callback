import { Outlet } from "react-router-dom";
import { HStack, VStack, Divider, Heading } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

export default function Root() {
  return (
    <HStack direction="row" h="100%" p={4}>
      <Sidebar />

      <Divider orientation="vertical" />
      <VStack>
        <Heading>Chakra UI</Heading>
        <Outlet />
      </VStack>
    </HStack>
  );
}
