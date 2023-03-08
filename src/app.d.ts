// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}

  interface MdsvexFile {
    default: import('svelte/internal').SvelteComponent;
    metadata: Record<string, string>;
  }

  type MdsvexResolver = () => Promise<MdsvexFile>;

  interface BlogPost {
    slug: string;
    title: string;
    preview: { html: string; text: string };
    date: string;
    metaDate: string;
    isIndex: boolean;
    published: boolean;
    tags: string[];
  }

  interface BlogPostWithNextAndPrevious extends BlogPost {
    next: BlogPost;
    previous: BlogPost;
  }
  interface APIResponse {
    posts: BlogPostWithNextAndPrevious[];
  }
}
