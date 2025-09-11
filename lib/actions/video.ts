'use server';

import { headers } from "next/headers";
import { auth } from "../auth";
import { apiFetch, getEnv, withErrorHandling } from "../utils";
import { BUNNY } from "@/constants";
import { db } from "@/drizzle/db";
import { videos } from "@/drizzle/schema";

// Fetch env and variables from constants
const VIDEO_STREAM_BASE_URL = BUNNY.STREAM_BASE_URL;
const THUMBNAIL_STORAGE_BASE_URL = BUNNY.STORAGE_BASE_URL;
const THUMBNAIL_CDN_URL = BUNNY.CDN_URL;
const BUNNY_LIBRARY_ID = getEnv("BUNNY_LIBRARY_ID");
const ACCCESS_KEYS = {
    streamAccessKey: getEnv("BUNNY_STREAM_ACCESS_KEY"),
    storageAccessKey: getEnv("BUNNY_STORAGE_ACCESS_KEY"),
}

// Helper Functions
const getSessionUserId = async ():Promise<string> => {
    const session = await auth.api.getSession({headers: await headers() });

    if (!session) throw new Error("Not authenticated");

    return session.user.id;
}

// Server Actions

export const getVideoUploadUrl = withErrorHandling(async () => {
    //each user session
    await getSessionUserId();

    const videoResponse = await apiFetch(
        `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos`,
        {
            method: "POST",
            bunnyType: "stream",
            body: {
                title: "Untitled Video",
                coollectionId: ''
            }}
    )

    const uploadUrl = `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoResponse.guid}`;

    return {
        videoId: videoResponse.guid,
        uploadUrl,
        accessKey: ACCCESS_KEYS.streamAccessKey,
    }

})

export const getThumbnailUploadUrl = withErrorHandling(async (videoId: string) => {
    const fileName = `${Date.now()}-${videoId}-thumbnail`;
    const uploadUrl = `${THUMBNAIL_STORAGE_BASE_URL}/${fileName}`;
    const cdnUrl = `${THUMBNAIL_CDN_URL}/thumbnails/${fileName}`;

    return {
        uploadUrl,
        cdnUrl,
        accessKey: ACCCESS_KEYS.storageAccessKey,
    }
})

export const saveVideoMetadata = withErrorHandling(async (videoDetails: VideoDetails) =>{
    const userId = await getSessionUserId();

    await apiFetch(
        `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoDetails.videoId}`,
        {
            method: 'POST',
            bunnyType: 'stream',
            body: {
                title: videoDetails.title,
                description: videoDetails.description,
            }
        }
    )

    await db.insert(videos).values

})