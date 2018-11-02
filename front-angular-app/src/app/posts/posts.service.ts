import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private posts: Post[] = [];
    private postUpdated = new Subject<Post[]>();

    getPosts() {
        return [...this.posts];
    }

    getPostUpdateListener() {
        return this.postUpdated.asObservable(); // returns it as listener, but cannot emit
    }

    addPost(title: string, content: string) {
        const post: Post = { title, content };
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
    }
}