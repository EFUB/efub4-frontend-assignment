import { useState } from 'react';
import client from '../api';
import { Write } from '../api/post';

function WritePage() {
    const [write, setWrite] = useState({ title: "", body: ""});
    const [file, setFile] = useState(null);

    const onChangeWrite = (e) => {
        const { name, value } = e.target;
        setWrite({ ...write, [name] : value });
    };

    const onUploadImage = (e) => {
        setFile(e.target.files[0]);
    };

    const onUploadImageBtn = (e) => {
        e.preventDefault();
        const request = {
            title: write.title,
            body: write.body
        };

        Write(request, file);
    };


    return (
        <>
            <h1>게시글 작성 페이지</h1>
            <form onSubmit={onUploadImageBtn}>
                <button type='submit'>작성 완료</button> <br />
                <input
                    placeholder='제목'
                    type="text"
                    value={write.title}
                    name='title'
                    onChange={onChangeWrite}
                /><br />
                <textarea
                placeholder='내용'
                type="text"
                value={write.body}
                name='body'
                onChange={onChangeWrite}/><br />
                이미지 첨부
                <input type="file" accept="image/*" onChange={(onUploadImage)} />
                <button onClick={onUploadImageBtn}>파일 선택</button>
            </form>
        </>
    );
}

export default WritePage;