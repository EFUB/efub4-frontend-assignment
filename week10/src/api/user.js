import client from ".";

// 회원가입
export const postRegister = async (username, password, nickname) => {
	try {
		const res = await client.post("/users/register", {
			username,
			password,
			nickname,
		});
		console.log(res);
		return res;
	} catch (err) {
		console.log("회원가입 실패", err);
		return err;
	}
};

// 로그인
export const postLogin = async (username, password) => {
	try {
		const res = await client.post("/users/login", {
			username,
			password,
		});
		console.log(res);
		const token = res.data.accessToken;
		localStorage.setItem("efubtoken", token);
		return res;
	} catch (err) {
		console.log("로그인 실패", err);
		return err;
	}
};

// JWT 테스트
export const getTestJWT = async () => {
	try {
		const res = await client.get("/users/test");
		console.log(res);
		return res;
	} catch (err) {
		console.log("JWT 테스트 실패", err);
		return err;
	}
};
