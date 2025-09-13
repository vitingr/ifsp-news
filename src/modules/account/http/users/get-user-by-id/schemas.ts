import z from 'zod'

export const getUserByIdParamsSchema = z.object({
  id: z.string().uuid()
})
