import { useLoaderData, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Text,
  Stack,
  StackDivider
} from "@chakra-ui/react";
import { ExampleRouteLoaderData } from "../app-router-data";

export default function Sidebar() {
  const examples: ExampleRouteLoaderData = useLoaderData() as ExampleRouteLoaderData;
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Client Report</Heading>
      </CardHeader>

      <CardBody>
        <nav>
          <Stack divider={<StackDivider />} spacing="4">
            {examples.length ? (
              <ul>
                {examples.map(({ id, slug }) => (
                  <Box as={Link} to={`example/${slug}`}>
                    <li key={id}>
                      <Heading size="xs" textTransform="uppercase">
                        Summary
                      </Heading>

                      <Text pt="2" fontSize="sm">
                        View a summary of all your clients over the last month.
                      </Text>
                    </li>
                  </Box>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </Stack>
        </nav>
      </CardBody>
    </Card>
  );
}
