import { IArticle } from "@/Types";

async function fetchData() {
  const query = `
    query {
      user(username: "Eslam-Ahmed") {
        posts(page: 1, pageSize: 10) {
          totalDocuments
          nodes {
            title
            views
            brief
            coverImage {
              url
            }
            updatedAt
            publishedAt
            url 
            tags {
              name
            }
            
          }
        }
      }
    }
  `;
  try {
    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    return jsonResponse.data;
  } catch (error) {
    console.error(error);
  }
}
export async function prepareData() {
  try {
    const raw_data: any = await fetchData();
    if (!raw_data) return [];
    const neededData: IArticle[] = raw_data.user.posts.nodes.map(
      (post: any) => {
        return {
          title: post.title,
          brief: post.brief.substring(0, 280 - post.title.length * 2),
          views: post.views,
          coverImage: post.coverImage.url,
          date: post.updatedAt || post.publishedAt,
          url: post.url,
          tags: post.tags.map((tag: any) => tag.name),
        };
      }
    );
    const sortedData: IArticle[] = neededData?.sort((a: any, b: any) => {
      return b.views - a.views;
    });
    if (!sortedData) return [];
    return sortedData.slice(0, 4);
  } catch (error) {
    console.error(error);
    return [];
  }
}
