// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  userMedia: defineTable({
    userId: v.string(),
    fileName: v.string(),
    title: v.string(),
    posterPath: v.optional(v.string()),
    tmdbId: v.optional(v.number()),
  })
  .index("by_userId", ["userId"])
});
