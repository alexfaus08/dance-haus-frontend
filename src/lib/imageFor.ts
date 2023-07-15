import client from '$lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export default function imageFor(imgSrc: string) {
	return builder.image(imgSrc);
}
