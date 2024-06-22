# React CRUD 서버 통신 실습

### 1. 회원가입 / 로그인
- 로그인하기 전에는 로그인화면 외 서비스를 이용할 수 없습니다.
- 로그인 후에는 전체 글 목록 화면으로 이동합니다.
![10주차 세미나 로그인창](https://github.com/billy0904/efub4-frontend-assignment-1/assets/95266994/85ddf93b-3303-43b7-975a-96cc882ff0ac)

### 2. 전체 글 목록
- 서버에 저장된 전체 게시글을 확인할 수 있습니다.
- 각 글을 클릭할 경우 세부 게시글 화면으로 이동합니다.
<img width="1268" alt="10주차 세미나 게시글 목록" src="https://github.com/billy0904/efub4-frontend-assignment-1/assets/95266994/3390e47d-f0be-4fea-a196-ee0c194c88aa">

### 3. 세부 화면 (좋아요, 댓글 기능)
- 세부 화면에서 게시글의 제목과 내용, 사진, 작성자를 확인할 수 있습니다.
- 게시글의 제목과 내용을 수정하거나 삭제할 수 있습니다.
- 좋아요 버튼을 누르면 서버에 좋아요 수가 저장되고, 좋아요 버튼이 좋아요 취소 버튼으로 바뀝니다.
- 좋아요 취소 버튼을 누르면 좋아요 수가 감소합니다.
<img width="1267" alt="10주차 세미나 세부 화면" src="https://github.com/billy0904/efub4-frontend-assignment-1/assets/95266994/26bcb96e-aed7-4b58-9695-98aea36b5035">
<img width="1280" alt="10주차 세미나 게시글 수정" src="https://github.com/billy0904/efub4-frontend-assignment-1/assets/95266994/9ff35dfb-81d9-4162-a09d-c5b98f417ccc">

### 4. 게시글 작성
- 게시글을 작성할 수 있습니다.
- 제목, 내용, 사진을 서버에 저장합니다.
<img width="1280" alt="10주차 세미나 게시글 작성 페이지" src="https://github.com/billy0904/efub4-frontend-assignment-1/assets/95266994/cada678d-2e06-410c-8cee-3921f0a05fb3">

### 5. 좋아요 누른 글 목록
- 현재 계정에서 좋아요를 누른 글 목록을 확인할 수 있습니다.
- 전체 글 목록에서와 마찬가지로 각 글을 클릭할 경우 세부 게시글 화면으로 이동합니다.
<img width="1280" alt="10주차 세미나 좋아요 누른 글 리스트" src="https://github.com/billy0904/efub4-frontend-assignment-1/assets/95266994/412e07e4-9ad8-41fe-bfc3-3b7e76edb28b">
+ 이전까지는 기능이 잘 동작하였으나 현재 아래와 같은 에러로 좋아요 누른 글 목록 기능이 제대로 동작하지 않습니다. 프론트 단에서 해결할 수 있는 문제인지 알려주시면 감사하겠습니다...!
<img width="540" alt="10주차 세미나 에러 내용" src="https://github.com/billy0904/efub4-frontend-assignment-1/assets/95266994/746196e8-bfca-4f99-ade6-001ee5748417">

### 배포 링크 
https://efub4-frontend-assignment-1-psi.vercel.app/

