import { z } from "zod";

export function verifyPostcode(postcode) {
  const postcodeSchema = z
    .string()
    .regex(
      /^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/,
      "Invalid postcode"
    );
    
  const postcodeSafe = postcodeSchema.safeParse(
    postcode
  );

  return postcodeSafe.success
}

export function verifyEmail(email) {
  const emailSchema = z.object({
    email: z.string().email({
      invalid_type_error: "Invalid Email",
    }),
  });
  const validatedFields = emailSchema.safeParse({
    email,
  });

  return validatedFields.success;
}
