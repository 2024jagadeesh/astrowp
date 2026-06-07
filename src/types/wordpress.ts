export interface RenderedContent {
  rendered: string;
}

export interface FeaturedMedia {
  source_url: string;
}

export interface Embedded {
  "wp:featuredmedia"?: FeaturedMedia[];
}

export interface WordPressPost {
  id: number;

  slug: string;

  title: RenderedContent;

  excerpt: RenderedContent;

  content?: RenderedContent;

  _embedded?: Embedded;
}

export interface Testimonial {
  id: number;

  title: RenderedContent;

  acf: {
    rating: number;
    quote: string;
    company: string;
    name: string;
    role: string;
  };
}
