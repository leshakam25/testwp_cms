import type { IFeaturedImage, IFeaturedImageSizes } from '@/Blog/blog.interface'

/**
 * Эта функция извлекает URL высококачественного изображения из указанного объекта `IFeaturedImage`.
 * Если объект `IFeaturedImage` содержит более 4 размеров изображений, она возвращает URL 6-го размера.
 * В противном случае она возвращает URL 2-го размера.
 *
 * @param featuredImage - Объект `IFeaturedImage`, из которого необходимо извлечь URL высококачественного изображения.
 *                      Если `undefined`, функция возвращает пустую строку.
 *
 * @returns URL высококачественного изображения. Если `featuredImage` равен `undefined` или не содержит
 *          достаточного количества размеров изображений, функция возвращает пустую строку.
 */

export const setHiResImg = (featuredImage: IFeaturedImage | undefined): string => {
    const sizes: IFeaturedImageSizes[] | undefined = featuredImage?.node.mediaDetails.sizes
    if (sizes && sizes.length > 4) {
        return sizes[5].sourceUrl
    }
    return sizes ? sizes[1].sourceUrl : ''
}