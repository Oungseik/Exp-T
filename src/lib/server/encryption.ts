import bcrypt from "bcrypt";

const hash = (password) => bcrypt.hash(password, 3);
const compare = (password, hash) => bcrypt.compare(password, hash);

export { hash, compare };
