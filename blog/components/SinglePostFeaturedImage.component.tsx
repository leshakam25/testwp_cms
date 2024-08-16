
import type { IFeaturedImage, IFeaturedImageSizes } from '@/blog/blog.interface'
import { defaultFeaturedImage } from '@/shared/lib/defaultImage'
import Image from 'next/image'

interface FeaturedImageProps {
	postImage: IFeaturedImage | undefined,
}

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
		// Use default featured image if no featured image is set in WordPress API response
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