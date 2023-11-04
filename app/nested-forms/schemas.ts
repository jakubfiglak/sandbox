import { z } from "zod";

export const createPlayerInputSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  number: z.coerce.number().min(1).max(99),
});

export type CreatePlayerInput = z.infer<typeof createPlayerInputSchema>;

export const createTeamInputSchema = z.object({
  name: z.string().min(2),
  players: z.array(createPlayerInputSchema),
});

export type CreateTeamInput = z.infer<typeof createTeamInputSchema>;
