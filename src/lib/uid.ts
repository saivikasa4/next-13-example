import { customAlphabet } from "nanoid"

const uid: () => string = customAlphabet(
  "abcdefghijklmnopqrstuvwxyz1234567890",
  12
)

export default uid
