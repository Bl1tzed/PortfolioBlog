import { NavigateFunction } from "react-router-dom";
import { client } from "@shared/api/client";
import { type DetailedPost } from "@shared/types";

export async function getPosts(
  postSlug: string | undefined,
  setPosts: React.Dispatch<React.SetStateAction<DetailedPost | null>>,
  navigate: NavigateFunction
) {
  const posts = await client.fetch(
    `*[_type == 'post' && !(_id in path("drafts.**")) && slug.current == "${postSlug}"]
		{body[] {
			...,
			_type == 'image' => {
				_key, _type,
				"imageUrl": asset->url
			},
		},
		"headings": body[style == 'h2' || style == 'h3'],
		"samePosts": *[_type=="post" && references(^.category._ref ) && slug.current != "${postSlug}"]
		[0..2] | order(published desc)
		{title, "mainImageUrl": mainImage.asset->url, "category": category -> title, "slug": slug.current},
		"category": category -> title, title, subtitle, published, author, "mainImageUrl": mainImage.asset->url}
		`
  );

  if (posts.length === 0) navigate("/404");

  setPosts(posts[0]);
}
