import { graphql, useStaticQuery } from 'gatsby';

export interface WpCategory {
  name: string;
  id: string;
}

export interface AllWpCategories {
  allWpCategory?: {
    nodes?: WpCategory[];
  };
}

export const getAllCategoriesQuery = graphql`
  query {
    allWpCategory {
      nodes {
        name
        id
      }
    }
  }
`;

export const getAllCategories = (): WpCategory[] => {
  const data = useStaticQuery<AllWpCategories>(getAllCategoriesQuery);

  if (!data?.allWpCategory?.nodes) return [];

  // update img and desc and made them required in wordpress
  return data.allWpCategory.nodes.map((category: WpCategory) => {
    return {
      name: category.name,
      id: category.id,
    };
  });
};
