import vine from '@vinejs/vine'

export const createSessionVlalidator = vine.compile(
    vine.object({
        email: vine.string().trim().email().normalizeEmail(),
        password: vine.string().minLength(6)
    })
)

