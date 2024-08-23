import type { IFeaturedImage } from '@/Blog/blog.interface'

//Функция которая проверят есть ли в массиве картинки высокого разрешения
export const setHiResImg = (featuredImage: IFeaturedImage | undefined) => {
	const sizes = featuredImage?.node.mediaDetails.sizes
	if (sizes && sizes.length > 4) {
		return sizes[5].sourceUrl
	}
	return sizes ? sizes[1].sourceUrl : ''
}