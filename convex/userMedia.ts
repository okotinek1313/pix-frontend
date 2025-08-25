import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveMedia = mutation({
  args: {
    fileName: v.string(),
    title: v.string(),
    posterPath: v.optional(v.string()),
    tmdbId: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    
    const userId = identity.subject;

    // Check if this file already exists for this user
    const existing = await ctx.db
      .query("userMedia")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("fileName"), args.fileName))
      .first();

    if (existing) {
      // Update existing record
      await ctx.db.patch(existing._id, {
        title: args.title,
        posterPath: args.posterPath,
        tmdbId: args.tmdbId,
      });
      return existing._id;
    } else {
      // Create new record
      return await ctx.db.insert("userMedia", {
        userId,
        fileName: args.fileName,
        title: args.title,
        posterPath: args.posterPath,
        tmdbId: args.tmdbId,
      });
    }
  },
});

export const getMyMedia = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];
    
    const userId = identity.subject;
    
    return await ctx.db
      .query("userMedia")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect();
  },
});
