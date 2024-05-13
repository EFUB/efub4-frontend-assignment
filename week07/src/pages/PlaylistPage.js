import React, { useState } from "react";
import styled, { css } from "styled-components";
import NavBar from "../components/NavBar";
import { MdArrowCircleRight } from "react-icons/md";

const PlaylistPage = () => {
	const [index, setIndex] = useState(0);
	return (
		<>
			<NavBar />
			<Container>
				<iframe
					width="880"
					height="495"
					src={urlList[index]}
					title="YouTube video player"
					frameborder="0"
					allowfullscreen
				></iframe>
				<MdArrowCircleRight
					size="50"
					fill="#20c997"
					className="prev"
					onClick={() => setIndex(index === 0 ? urlList.length - 1 : index - 1)}
				/>
				<MdArrowCircleRight
					size="50"
					fill="#20c997"
					className="next"
					onClick={() => setIndex(index === urlList.length - 1 ? 0 : index + 1)}
				/>
			</Container>
		</>
	);
};

export default PlaylistPage;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		position: absolute;
		cursor: pointer;
	}
	.prev {
		left: 30px;
		transform: rotate(180deg);
	}
	.next {
		right: 30px;
	}
`;

const urlList = [
	"https://www.youtube.com/embed/tRnJqiS_InY?si=DlcRcW0nCnBT0DjJ",
	"https://www.youtube.com/embed/TNkM5_nf01U?si=vWXqu9oTdfHRexfn",
	"https://www.youtube.com/embed/a_80o2lDYec?si=7AVdbtldpE_sqViI",
	"https://www.youtube.com/embed/ChM7Fw0QMUI?si=fCcsr0xyUyP85554",
	"https://www.youtube.com/embed/PrqwxkBB0DA?si=XFqICoKw83GDdpTz",
	"https://www.youtube.com/embed/g7c0W-8rNmw?si=ABhPHFwN-RopZRjd",
	"https://www.youtube.com/embed/83j3iuGT7Zk?si=jGHSPH5Qv93MFRkh",
	"https://www.youtube.com/embed/cGhGtKnKZbY?si=us6odTgHY8MMxQqa",
];
