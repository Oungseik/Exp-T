import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();

		try {
		} catch (e) {
			console.log(e);
			throw e;
		}

		throw redirect(303, "/");
	}
};
