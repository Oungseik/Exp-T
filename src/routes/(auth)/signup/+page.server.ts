import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]) as {
			name: string;
			email: string;
			password: string;
			confirmPassword: string;
		};

		try {
			// TODO: there is problem when creating new user.
			// locals.pb.collection("users").create(data);
			locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (e) {
			console.log(e);
			throw e;
		}

		throw redirect(303, '/');
	}
};
