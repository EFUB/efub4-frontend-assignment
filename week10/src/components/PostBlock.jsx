import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostBlock = ({ postId, image, title, nickname }) => {
	const navigate = useNavigate();
	return (
		<PostBox onClick={() => navigate(`/detail/${postId}`)} key={postId}>
			<ImgRect>
				<img src={image} alt={title + " 이미지"} />
			</ImgRect>
			<TextRect>
				<h2>{title}</h2>
				<p>{nickname}</p>
			</TextRect>
		</PostBox>
	);
};

export default PostBlock;

const PostBox = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 20px;
	border-radius: 10px;
	margin: 20px 0;
`;

const TextRect = styled.div`
	width: calc(100% - 120px);

	h2 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;
		cursor: pointer;
	}

	p {
		text-decoration: underline;
	}
`;

const ImgRect = styled.div`
	width: 100px;
	height: 100px;
	overflow: hidden;
	border: 1px solid lightgray;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
