export const queryBlogpage = (activeCategory: string) => `
	*[_type == 'post' && !(_id in path("drafts.**")) 
	${activeCategory != "All" ? `&& category -> title == "${activeCategory}"` : ""}]
	| order(published desc)
	{ 
		"slug": slug.current,
		"category": category -> title,
		"categoryRu": category -> ru,
		title, 
		subtitle, 
		published, 
		author, 
		"mainImageUrl": mainImage.asset->url
	}
`;
