import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
// import dotenv from "dotenv";

// dotenv.config();
const link = createUploadLink({
  uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link as any,
  credentials: "include",
});

export default client;
