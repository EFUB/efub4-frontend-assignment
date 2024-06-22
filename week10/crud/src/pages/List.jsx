import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetPosts } from '../api/post';
import { useNavigate } from 'react-router-dom';

const ListPage = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await GetPosts();
            if (data) {
                setPosts(data);
            }
        };

        fetchPosts();
    }, []);

    const handlePostClick = (postId) => {
        navigate(`/detail/${postId}`);
    };

    return (
        <Container>
            <h1>게시글 목록</h1>
            <PostList>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <PostItem key={post.postId} onClick={() => handlePostClick(post.postId)}>
                            <PostContent>
                                <PostTitle>{post.title}</PostTitle>
                                {post.content && <PostText>{post.content}</PostText>}
                            </PostContent>
                            {post.image && <PostImage src={post.image} alt={post.title} />}
                        </PostItem>
                    ))
                ) : (
                    <NoPosts>게시글이 없습니다.</NoPosts>
                )}
            </PostList>
        </Container>
    );
};

export default ListPage;

const Container = styled.div`
    padding: 20px;
`;

const PostList = styled.div`
    margin-top: 20px;
`;

const PostItem = styled.div`
    padding: 10px;
    border: 1px solid #cccccc;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

const PostTitle = styled.h2`
    margin: 0;
    font-size: 18px;
`;

const PostContent = styled.p`
    margin: 10px 0 0;
`;

const PostText = styled.p`
    margin: 10px 0 0;
`;

const PostImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

const NoPosts = styled.div`
    text-align: center;
    color: #777777;
`;