import { z } from "zod";

const FILE_SIZE_MB = 5; // 5MB
const MAX_FILE_SIZE = 1024 * 1024 * FILE_SIZE_MB;

const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg", 
    "image/jpg", 
    "image/png", 
    "image/webp"
];

// Image
export const imageUploadSchemaType = z.object({
    picture: z
        .any()
        .refine((files) => files?.length == 1, "Picture is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is ${FILE_SIZE_MB}MB.`)
        .refine((files) => 
            ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type), 
            "Only .jpg, .jpeg, .png and .webp formats are accepted."
        ),
});

export type ImageUploadSchemaType = z.infer<typeof imageUploadSchemaType>;