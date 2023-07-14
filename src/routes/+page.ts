import client from '$lib/sanity';

export async function load() {
	const query = `*[_type == "homepage"]`;

	const data = await client.fetch(query);

	if (data) {
		return {
			homepageData: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
