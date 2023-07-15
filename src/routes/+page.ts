import client from '$lib/sanity';

export async function load() {
	const pageDataQuery = `*[_type == "homepage"][0]`;
	const eventsQuery = `*[_type == "danceEvent"]`;
	const classesQuery = `*[_type == 'danceClass'] | order(startTime, asc)`;

	const classesData = await client.fetch(classesQuery);

	const pageData = await client.fetch(pageDataQuery);
	const eventsData = await client.fetch(eventsQuery);

	function groupBy(list, keyGetter) {
		const map = new Map();
		list.forEach((item) => {
			const key = keyGetter(item);
			const collection = map.get(key);
			if (!collection) {
				map.set(key, [item]);
			} else {
				collection.push(item);
			}
		});
		return map;
	}

	const classesByWeekday = groupBy(classesData, (classData) => classData.dayOfWeek);

	if (pageData) {
		return {
			homepageData: {
				pageData: pageData,
				eventsData: eventsData,
				classesData: classesByWeekday
			}
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
