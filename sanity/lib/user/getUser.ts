

import { sanityFetch } from "../live";
import { defineQuery } from "groq";
import { currentUser } from "@clerk/nextjs/server";

interface UserResult {
  _id: string;
  username: string;
  imageUrl: string;
  email: string;
}

