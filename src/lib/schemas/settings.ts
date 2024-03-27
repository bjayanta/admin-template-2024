import { z } from "zod";


// Basic
export const basicSchema = z.object({
    country: z.string({required_error: "Please select operational country.",}),
    currency: z.string({required_error: "Please select default currency.",}),
    language: z.string({required_error: "Please select default language.",}),
    
    // Notification sender ID 
    defaultSmsApi: z.string({required_error: "Please select default SMS API.",}),
    defaultEmail: z.string({required_error: "Please select default email to send notifications.",}),
});

// Business
export const businessSchema = z.object({
    businessName: z.string().min(3).max(50, { message: 'Business name can not exceed 50 chars.' }),
    ownerName: z.string().min(3).max(100, { message: 'Owner\'s name can not exceed 100 chars.' }),
    tagLine: z.string().max(50, { message: 'Tag line can not exceed 50 chars.' }),
    email: z.string().email({ message: 'Email is required.' }),
    phone: z.string().min(11, { message: 'Phone number should at least 11 chars.' }).max(15),
    address: z.string({required_error: "Please complete your address.",})
        .max(200, { message: 'Address can not exceed 200 chars.' }),
});

// Invoice
export const invoiceSchema = z.object({
    vat: z.number({ required_error: "Required and must be 0 - 100." }).nonnegative().lt(100),
    hasThermalPrinter: z.enum(["1", "0"], {required_error: "You need to select YES or NOT.",}),
    willSmsSendAutomatically: z.enum(["1", "0"], {required_error: "You need to select YES or NOT.",}),
    isDueAcceptable: z.enum(["1", "0"], {required_error: "You need to select YES or NOT.",}),
    note: z.string().max(200, { message: 'Policy note can not exceed 200 chars.' }),
});

// Appearance
export const appearanceSchema = z.object({
    theme: z.enum(["Light", "Dark", "System Default"]),
});

// Privacy policy
export const privacyPolicySchema = z.object({
    role: z.string({ required_error: "Role is required." }),
    permissions: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one permission.",
    }),
});


export type BasicFormSchemaType = z.infer<typeof basicSchema>;
export type BusinessFormSchemaType = z.infer<typeof businessSchema>;
export type InvoiceFormSchemaType = z.infer<typeof invoiceSchema>;
export type AppearanceFormSchemaType = z.infer<typeof appearanceSchema>;
export type PrivacyPolicyFormSchemaType = z.infer<typeof privacyPolicySchema>;