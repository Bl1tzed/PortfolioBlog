export const queryBlogpage = (activeCategory: string) => `
	*[_type == 'post' && !(_id in path("drafts.**")) 
	${activeCategory != "All" ? `&& category -> title == "${activeCategory}"` : ""}]
	{ 
		"slug": slug.current,
		"category": category -> title, 
		title, 
		subtitle, 
		published, 
		author, 
		"mainImageUrl": mainImage.asset->url
	}
`;
