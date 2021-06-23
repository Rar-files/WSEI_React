import { FC } from "react"
import styled from "styled-components";
import IPost from "../../../../../../interfaces/IPost";
import { Colors } from "../../../../../../styledHelpers/Colors";
import { IMenuElement } from "../../../../../Common/MenuElement";
import { Link } from 'react-router-dom';

import Loading from "../../../../../Common/Loading";

export interface IPostElement{
    post: IPost;
    postType: IMenuElement;
    usersCount: number;
    updateDate?: Date;
}

const ElementLink = styled(Link)`
    &:link{
        text-decoration: none;
        color: ${Colors.accent};
    }
    &:visited{
        text-decoration: none;
        color: ${Colors.accent};
    }
    &:hover{
        text-decoration: none;
        color: ${Colors.textAccent};
    }
    &:active{
        text-decoration: none;
        color: ${Colors.accent};
    }
`;

const Content = styled.div`
    height: 100%;
    width: 230px;
    margin: 15px 10px 0px 0px;
    background-color: #aeaee6;
    border-radius: 6px;
`;

const PostBackground = styled.div`
`;

const Picture = styled.img`
    height: 40%;
    width: auto;
    border-radius: 8px;
    object-fit: cover;
`;

const PostContent = styled.div`
    height: 60%;
    width: 100%;
    margin: 10px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 1;
`;

const PostTitle = styled.div`
`;

const PostIcon = styled.div`
`;

const PostInfo = styled.div`
`;

const PostType = styled.div`
`;

const UpdateTime = styled.span`
    font-weight: bold;
`;

const Users = styled.div`
`;

const UsersIcn = styled.img`
`;

const Post : FC<IPostElement> = (props: IPostElement) => {

    const TimeFormater = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

    try{
        return (
            <ElementLink to={`/entities?=${props.post.id}`}>
                <Content>
                    <PostBackground>
                        {/* <Picture src={photosList[props.post.id].url}/> */}
                    </PostBackground>
                    <PostContent>
                        <PostTitle>
                            <PostIcon>

                            </PostIcon>
                            {props.post.title};
                        </PostTitle>
                        <PostInfo>
                            <PostType>

                            </PostType>
                            <Users>
                                <UsersIcn src="./media/icons/people.svg"/>
                                {`${props.usersCount} users`}
                            </Users>
                        </PostInfo>
                        <UpdateTime>
                                { (props.updateDate !== undefined) ? " " +  TimeFormater.format(Math.round((props.updateDate.getTime() - Date.now()) / (1000 * 3600 * 24)), 'days') : ""}
                        </UpdateTime>
                    </PostContent>
                </Content>
            </ElementLink>
        );
    }
    catch{
        return (
            <Loading/>
        );
    }
}

export default Post;