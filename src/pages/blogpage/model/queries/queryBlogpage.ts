export const queryBlogpage = (activeCategory: string, location: string) => `
{
	"metadata": *[_type == 'metaDescription' && !(_id in path("drafts.**")) && location == "${location}"][0]
	{
		description
	},
	"posts": *[_type == 'post' && !(_id in path("drafts.**")) 
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
		"mainImageUrl": mainImage.asset->url,

	}
}
`;
