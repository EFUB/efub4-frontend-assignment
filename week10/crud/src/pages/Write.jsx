import React, { useState } from 'react';
import { Write } from '../api/post';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function WritePage() {
    const [post, setPost] = useState({ title: '', content: '' });
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const onChangeWrite = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const onUploadImage = (e) => {
        setFile(e.target.files[0]);
    };

    const onUploadImageBtn = async (e) => {
        e.preventDefault();
        const request = {
            title: post.title,
            content: post.content,
        };

        try {
            await Write(request, file);
            alert('게시글이 작성되었습니다.');
            // 작성 후 리스트 페이지로 이동
            navigate('/');
        } catch (err) {
            alert('작성 중 오류가 발생했습니다.');
            console.log(err);
        }
    };

    return (
        <Container>
            <h1>게시글 작성 페이지</h1>
            <Form onSubmit={onUploadImageBtn}>
                <Input
                    placeholder='제목'
                    type="text"
                    value={post.title}
                    name='title'
                    onChange={onChangeWrite}
                />
                <Textarea
                    placeholder='내용'
                    value={post.content}
                    name='content'
                    onChange={onChangeWrite}
                />
                <InputLabel>
                    이미지 첨부
                    <FileInput type="file" accept="image/*" onChange={onUploadImage} />
                </InputLabel>
                <SubmitButton type='submit'>작성 완료</SubmitButton>
            </Form>
        </Container>
    );
}

export default WritePage;

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;

const InputLabel = styled.label`
    margin-bottom: 10px;
    font-size: 16px;
`;

const FileInput = styled.input`
    margin-left: 10px;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d32f2f;
    }
`;
