import type { IFeaturedImage, IFeaturedImageSizes } from '@/Blog/blog.interface'
import { defaultFeaturedImage } from '@/shared/lib/defaultImage'
import Image from 'next/image'

interface FeaturedImageProps {
	postImage: IFeaturedImage | undefined,
}

/**
 * Функциональный компонент React, отображающий изображение миниатюры для поста блога.
 * Если изображение миниатюры не указано, используется изображение по умолчанию.
 *
 * @param postImage - Объект изображения миниатюры из ответа WordPress API.
 * @returns React-элемент, представляющий изображение миниатюры поста блога.
 */
const BlockListItemFeaturedImage = ({ postImage }: FeaturedImageProps) => {
    let img: IFeaturedImageSizes
    
    const defaultWidth: number = 300
    const defaultHeight: number = 200
    
    if (postImage) {
        let size: IFeaturedImageSizes = postImage.node.mediaDetails.sizes[0]
        
        img = {
            sourceUrl: size.sourceUrl,
            width: size.width,
            height: size.height
        }
    } else {
        // Используем изображение миниатюры по умолчанию, если изображение миниатюры не указано в ответе WordPress API
        img = {
            sourceUrl: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight
        }
    }
    
    return (
            <Image
                src={img.sourceUrl}
                width={img.width}
                height={img.height}
                alt={'no image'}
                style={{
                    height: 'auto',
                    width: 300
                }}
            />
    )
}

export default BlockListItemFeaturedImage