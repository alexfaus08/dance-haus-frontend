import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'rv6gqw3v',
	dataset: 'production',
	apiVersion: '2023-07-14',
	useCdn: false
});

export default client;
