import { z } from "zod";

export const createTeamInputSchema = z.object({
  name: z.string().min(2),
  players: z.array(
    z.object({
      firstName: z.string().min(2),
      lastName: z.string().min(2),
      number: z.coerce.number().min(1).max(99),
    })
  ),
});

export type CreateTeamInput = z.infer<typeof createTeamInputSchema>;
