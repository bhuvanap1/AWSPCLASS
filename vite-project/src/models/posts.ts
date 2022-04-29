import { defineStore } from 'pinia'
import { useSession } from './session';
import { User } from './user';


// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const usePosts = defineStore('posts', {
  
    state: () => ({
        list: [] as Post[],
        session: useSession(),
    }),
    actions: {

        async fetchPosts(handle: string = '') {
            const posts = await this.session.api('posts/wall/' + handle);
            this.list = posts;
        },

        async fetchAllPosts() {
            const posts = await this.session.api('posts');
            this.list = posts;
        },

        async createPost(post: Post) {
            const newPost = await this.session.api('posts', post);
            this.list.push(newPost);
        }

    }
})

export interface Post {
    _id?: string;
    src: string;
    caption: string;
    owner: string;
    user?: User;
    likes: string[];
    comments: any[];
    isPublic: boolean;
}