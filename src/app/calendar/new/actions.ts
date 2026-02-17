"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getDb } from "@/db";
import { events } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const title = formData.get("title") as string;
  const eventType = formData.get("eventType") as string;
  const clientName = (formData.get("clientName") as string) || null;
  const date = formData.get("date") as string;
  const startTime = (formData.get("startTime") as string) || null;
  const endTime = (formData.get("endTime") as string) || null;
  const location = (formData.get("location") as string) || null;
  const color = (formData.get("color") as string) || "#C9A962";
  const description = (formData.get("description") as string) || null;

  if (!title || !eventType || !date) {
    throw new Error("Title, event type, and date are required.");
  }

  const { env } = await getCloudflareContext();
  const db = getDb(env.DB);

  await db.insert(events).values({
    title,
    eventType,
    clientName,
    date,
    startTime,
    endTime,
    location,
    color,
    description,
  });

  redirect("/calendar");
}
