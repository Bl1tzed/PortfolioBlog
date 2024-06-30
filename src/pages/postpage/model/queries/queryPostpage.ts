export const queryPostpage = (postSlug: string) => `
	*[_type == 'post' && !(_id in path("drafts.**")) && slug.current == "${postSlug}"][0] {
		body[] {
			...,
			_type == 'image' => {
				_key, _type,
				"imageUrl": asset->url
			},
		},
		"headings": body[style == 'h2'],
		"samePosts": *[_type=="post" && references(^.category._ref ) && slug.current != "${postSlug}"]
		[0..2] | order(published desc)
		{ 
			title,
			"mainImageUrl": mainImage.asset->url,
			"categoryRu": category -> title,
			"slug": slug.current
		},
		"category": category -> title,
		"categoryRu": category -> ru,
		title,
		subtitle,
		published,
		author,
		"mainImageUrl": mainImage.asset->url,
	}
`;
