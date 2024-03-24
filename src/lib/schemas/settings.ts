import { z } from "zod";


// Basic
export const basicSchema = z.object({
    country: z.string({required_error: "Please select a language.",}),
    currency: z.string(),
    language: z.string(),
    
    // Notification sender ID 
    smsURLId: z.number(),
    emailId: z.number(),
});

// Business
export const businessSchema = z.object({
    ownerName: z.string(),
    businessName: z.string().min(3).max(50, { message: 'Business name can not exceed 50 chars.' }),
    tagLine: z.string().max(50, { message: 'Tag line can not exceed 50 chars.' }),
    email: z.string().email({ message: 'Email is required.' }),
    phone: z.string().min(11, { message: 'Phone number should at least 11 chars.' }).max(15),
    address: z.string(),
});

// Invoice
export const invoiceSchema = z.object({
    vat: z.number(),
    hasThermalPrinter: z.boolean(),
    note: z.string().max(100, { message: 'Note can not exceed 100 chars.' }),
});

// Appearance
export const appearanceSchema = z.object({
    theme: z.enum(["Light", "Dark", "System Default"]),
});

// Policy
export const policySchema = z.object({
    role: z.number(),
    policy: z.array(z.number()),
});


export type BasicFormSchemaType = z.infer<typeof basicSchema>;
export type BusinessFormSchemaType = z.infer<typeof businessSchema>;
export type InvoiceFormSchemaType = z.infer<typeof invoiceSchema>;
export type AppearanceFormSchemaType = z.infer<typeof appearanceSchema>;
export type PolicyFormSchemaType = z.infer<typeof policySchema>;