import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";
import credential from "$lib/server/credential.json";

export const actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
		};

		if (data.email !== credential.email || data.password !== credential.password) {
			throw redirect(303, "/login");
		}

		cookies.set("session-id", credential.id, { maxAge: 60 });
		throw redirect(303, "/");
	}
} satisfies Actions;
