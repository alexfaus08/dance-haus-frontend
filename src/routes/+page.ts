import client from '$lib/sanity';

export async function load() {
	const pageDataQuery = `*[_type == "homepage"]`;
	const eventsQuery = `*[_type == "danceEvent"]`;

	const pageData = await client.fetch(pageDataQuery);
	const eventsData = await client.fetch(eventsQuery);

	if (pageData) {
		return {
			homepageData: {
				pageData: pageData,
				eventsData: eventsData
			}
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
