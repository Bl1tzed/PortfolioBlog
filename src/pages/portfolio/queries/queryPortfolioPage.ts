export const queryPortfolioPage = (location: string) => `
{
	"metadata": *[_type == 'metaDescription' && !(_id in path("drafts.**")) && location == "${location}"][0]
	{
		description
	}
}
`;
