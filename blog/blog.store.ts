// // Import necessary types and modules
// import type { IPosts } from '@/blog/blog.interface'
// import { getAllPosts } from '@/blog/blog.services'
// import { create } from 'zustand'
//
// // Define the interface for the product store
// interface PostStore {
// 	posts: IPosts;
// 	loading: boolean;
// 	getAllPosts: () => Promise<IPosts | undefined>;
// }
//
// // Create the product store using Zustand
// export const usePostStore = create<PostStore>(
// 	(set) => ({
// 		posts: {
// 			nodes: [],
// 			pageInfo: {
// 				endCursor: '',
// 				hasNextPage: false,
// 				hasPreviousPage: false,
// 				startCursor: ''
// 			},
// 			totalCount: 0,
// 			totalPages: 0
// 		},
// 		loading: false, // Initialize the loading state
//
// 		// Fetch products from the API endpointE
// 		getAllPosts: getAllPosts
// 	})
// )