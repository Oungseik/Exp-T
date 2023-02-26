import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

import fs from "fs";
import path from "path";
import process from "process";

export const actions = ({
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData()) as {
      name: string;
      email: string;
      password: string;
      passwordConfirm: string;
      id?: string;
    };
    data.id = crypto.randomUUID();

    if (data.password !== data.passwordConfirm) {
      throw redirect(303, "/signup");
    }

    const fd = path.join(process.cwd(), "src/lib/server/credential.json");
    fs.writeFileSync(fd, JSON.stringify(data));

    throw redirect(303, "/login");
  }
}) satisfies Actions;
