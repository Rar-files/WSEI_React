import IPost from "../../../interfaces/IPost";

export const GET_POSTS = 'GET_POSTS';

export interface IPostTypes{
    GET_POSTS: {
        postsList:IPost[];
    }
}