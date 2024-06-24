import { useState, useEffect } from "react";
import { getHeartedPost } from "../api/heart";
import PostBlock from "../components/PostBlock";

const HeartPage = () => {
	const [posts, setPosts] = useState([]);
	const GetHeartedPost = async () => {
		const res = await getHeartedPost();
		console.log("내가 좋아요 누른 게시글 조회 결과", res);
		if (res.status === 200) setPosts(res.data);
		else if (res.response.status === 400) alert("로그인 후 사용 가능합니다.");
	};
	useEffect(() => {
		GetHeartedPost();
	}, []);
	return (
		<>
			<h1>내가 좋아요 누른 게시글</h1>
			{posts.map((post) => (
				<PostBlock {...post} key={post.postId} />
			))}
		</>
	);
};

export default HeartPage;
