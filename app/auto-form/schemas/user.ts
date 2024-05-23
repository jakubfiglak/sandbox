import { z } from "zod";

export const userInputSchema = z.object({
  name: z.string(),
  pronoun: z.enum(["he/him", "she/her", "they/them"]),
});

export type UserInput = z.infer<typeof userInputSchema>;
