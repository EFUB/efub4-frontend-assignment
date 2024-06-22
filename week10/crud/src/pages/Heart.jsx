import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GetHeartedPosts } from '../api/heart';

const HeartPage = () => {
    const [heartedPosts, setHeartedPosts] = useState([]);

    useEffect(() => {
        const fetchHeartedPosts = async () => {
            const posts = await GetHeartedPosts();
            if (posts) {
                setHeartedPosts(posts);
            }
        };

        fetchHeartedPosts();
    }, []);

    return (
        <Container>
            <Title>내가 좋아요를 누른 글</Title>
            {heartedPosts.length === 0 ? (
                <NoPosts>좋아요를 누른 글이 없습니다.</NoPosts>
            ) : (
                <PostsList>
                    {heartedPosts.map(post => (
                        <PostItem key={post.id}>
                            <PostLink to={`/detail/${post.postId}`}>
                                <PostTitle>{post.title}</PostTitle>
                                <PostContent>{post.content}</PostContent>
                                <PostWriter>Written by: {post.nickname}</PostWriter>
                            </PostLink>
                        </PostItem>
                    ))}
                </PostsList>
            )}
        </Container>
    );
};

export default HeartPage;

const Container = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const PostsList = styled.div`
    display: grid;
    grid-gap: 20px;
`;

const PostItem = styled.div`
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;

const PostLink = styled(Link)`
    text-decoration: none;
    color: #333333;
`;

const PostTitle = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
`;

const PostContent = styled.div`
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
`;

const PostWriter = styled.div`
    font-size: 14px;
    color: #666666;
`;

const NoPosts = styled.div`
    text-align: center;
    font-size: 18px;
    color: #777777;
    margin-top: 20px;
`;
