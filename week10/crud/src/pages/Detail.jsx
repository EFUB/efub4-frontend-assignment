import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { GetPostDetail, DeletePost, PatchPost } from '../api/post';
import { PostComment, GetComment, DeleteComment } from '../api/comment';
import { PostHeart, DeleteHeart, GetHowManyHearts } from '../api/heart';

const DetailPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [hearted, setHearted] = useState(false);
    const [heartCount, setHeartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPostDetail = async () => {
            const data = await GetPostDetail(postId);
            if (data) {
                setPost(data);
                setEditedTitle(data.title);
                setEditedContent(data.content);
                setHearted(data.hearted);
                setHeartCount(data.heartCount);
            }
        };

        const fetchComments = async () => {
            const commentData = await GetComment(postId);
            if (commentData) {
                setComments(commentData);
            }
        };

        const fetchHeartCount = async () => {
            const count = await GetHowManyHearts(postId);
            if (count !== null) {
                setHeartCount(count);
            }
        };

        fetchPostDetail();
        fetchComments();
        fetchHeartCount();
    }, [postId]);

    const handleDeletePost = async () => {
        try {
            await DeletePost(postId);
            alert('게시글이 삭제되었습니다.');
            navigate('/');
        } catch (error) {
            console.log('삭제 실패:', error);
        }
    };

    const handleUpdatePost = async () => {
        try {
            const updatedPostData = {
                title: editedTitle,
                content: editedContent
            };

            await PatchPost(postId, updatedPostData);
            setEditMode(false);
            const updatedPost = await GetPostDetail(postId);
            if (updatedPost) {
                setPost(updatedPost);
            }
        } catch (error) {
            console.error('게시글 수정 실패:', error);
        }
    };

    const handlePostComment = async () => {
        try {
            const commentData = {
                content: newComment,
                postId: postId
            };
            const response = await PostComment(commentData);
            if (response) {
                setComments([...comments, response]);
                setNewComment('');
            }
        } catch (error) {
            console.error('댓글 작성 실패:', error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await DeleteComment(commentId);
            window.location.reload();
        } catch (error) {
            console.error('댓글 삭제 실패:', error);
        }
    };

    const handleToggleHeart = async () => {
        try {
            if (hearted) {
                await DeleteHeart(postId); // 좋아요 취소
                setHearted(false);
                setHeartCount(prevCount => prevCount - 1);
            } else {
                await PostHeart(postId); // 좋아요 추가
                setHearted(true);
                setHeartCount(prevCount => prevCount + 1);
            }
        } catch (error) {
            console.error('좋아요 토글 실패:', error);
        }
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            {editMode ? (
                <>
                    <EditTitle
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <EditContent
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    />
                    <EditButtonContainer>
                        <Button onClick={handleUpdatePost}>수정 완료</Button>
                        <Button onClick={() => setEditMode(false)}>취소</Button>
                    </EditButtonContainer>
                </>
            ) : (
                <>
                    <Title>{post.title}</Title>
                    <Content>{post.content}</Content>
                    {post.image && <PostImage src={post.image} alt={post.title} />}
                    <Writer>Written by: {post.nickname}</Writer>
                    <ButtonsContainer>
                        <Button onClick={() => setEditMode(true)}>수정하기</Button>
                        <Button onClick={handleDeletePost}>삭제하기</Button>
                    </ButtonsContainer>
                </>
            )}
            <HeartSection>
                <HeartButton onClick={handleToggleHeart}>
                    {hearted ? '좋아요 취소' : '좋아요'}
                </HeartButton>
                <HeartCount>{heartCount}명이 좋아합니다.</HeartCount>
            </HeartSection>
            <CommentForm>
                    <textarea
                        placeholder="댓글을 입력하세요."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button onClick={handlePostComment}>댓글 작성</button>
                </CommentForm>
            <CommentList>
                {comments.length > 0 ? (
                    comments.map(comment => (
                        <CommentItem key={comment.id}>
                            <CommentContent>{comment.content}</CommentContent>
                                <CommentDeleteButton onClick={() => handleDeleteComment(comment.id)}>
                                    삭제
                                </CommentDeleteButton>
                        </CommentItem>
                    ))
                ) : (
                    <NoComments>댓글이 없습니다.</NoComments>
                )}
            </CommentList>
        </Container>
    );
};

export default DetailPage;

const Container = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Content = styled.div`
    font-size: 16px;
    line-height: 1.5;
`;

const Writer = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: #666666;
`;

const PostImage = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 5px;
    margin-top: 20px;
`;

const ButtonsContainer = styled.div`
    margin-top: 20px;
`;

const Button = styled.button`
    margin-right: 10px;
    padding: 8px 16px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d32f2f;
    }
`;

const EditTitle = styled.input`
    width: 100%;
    font-size: 24px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const EditContent = styled.textarea`
    width: 100%;
    height: 200px;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
    padding: 10px;
`;

const EditButtonContainer = styled.div`
    margin-top: 10px;
`;

const CommentForm = styled.div`
    margin-top: 20px;
    textarea {
        width: 100%;
        height: 100px;
        font-size: 16px;
        margin-bottom: 10px;
        padding: 10px;
    }
    button {
        padding: 8px 16px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: #d32f2f;
        }
    }
`;

const CommentList = styled.div`
    margin-top: 20px;
`;

const CommentItem = styled.div`
    padding: 10px;
    border: 1px solid #cccccc;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
`;

const CommentContent = styled.div`
    font-size: 16px;
    flex: 1;
`;

const CommentDeleteButton = styled.button`
    padding: 5px 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #d32f2f;
    }
`;

const NoComments = styled.div`
    text-align: center;
    color: #777777;
`;

const HeartSection = styled.div`
    margin-top: 20px;
`;

const HeartButton = styled.button`
    padding: 8px 16px;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 10px;

    &:hover {
        background-color: #0d8aed;
    }
`;

const HeartCount = styled.span`
    font-size: 16px;
`;
