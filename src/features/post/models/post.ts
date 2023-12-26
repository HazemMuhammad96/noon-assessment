import type User from "./user";

export default class Post {
    constructor(
        public id: number,
        public user: User,
        public title: string,
        public body: string,
        public image: string,
        public imageAlt: string,
        public commentCount: number,
        public isLiked: boolean,
        private likes: number,
        private price: number
    ) {}

    get formattedPrice() {
        return `AED ${this.price.toFixed(2)}`;
    }

    get likeCount() {
        return this.likes + (this.isLiked ? 1 : 0);
    }
}
