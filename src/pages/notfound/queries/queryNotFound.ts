export const queryNotFound = () => `
{
	"metadata": *[_type == 'metaDescription' && !(_id in path("drafts.**")) && location == "/notfound"][0]
	{
		description
	}
}
`;
