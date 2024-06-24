import { useState, useEffect } from "react";
import { getPostList } from "../api/post";
import PostBlock from "../components/PostBlock";

const ListPage = () => {
	const [posts, setPosts] = useState([]);
	const GetPostList = async () => {
		const res = await getPostList();
		console.log("게시글 목록 조회 결과", res);
		setPosts(res.data.reverse()); // 최신순으로 정렬
	};
	useEffect(() => {
		GetPostList();
	}, []);
	return (
		<>
			<h1>게시글 목록 페이지</h1>
			{posts.map((post) => (
				<PostBlock {...post} key={post.postId} />
			))}
		</>
	);
};

export default ListPage;
