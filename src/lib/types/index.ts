export type InputProps = {
	title: string;
	type: "number" | "password" | "text" | "range" | "email";
	name: string;
	value: string;
	id: string;
	required: boolean;
};
