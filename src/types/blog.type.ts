export interface BlogPost {
  slug: string;
  title: string;
  coverImage: string;
  dateAdded: string;
}

export interface HashnodeAPIResponse {
  data: {
    user: {
      publication: {
        posts: BlogPost[];
      };
    };
  };
}
