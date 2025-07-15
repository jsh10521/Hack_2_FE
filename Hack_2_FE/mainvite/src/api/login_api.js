// 이 함수는 서버에 id와 pw를 보내고, 응답(성공 시 토큰)을 받아옵니다.
export const login = async (id, pw) => {
    try {
        const response = await fetch('http://백엔드_로그인_API_주소', {
            // 👈 반드시 실제 서버 주소로 변경하세요!
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: id, // 백엔드에서 요구하는 key 이름에 맞춰주세요 (예: id, email 등)
                password: pw, // 백엔드에서 요구하는 key 이름에 맞춰주세요
            }),
        });

        if (!response.ok) {
            // 서버 응답이 200-299 범위를 벗어날 경우
            console.error('서버 응답 오류:', response.status);
            return null;
        }

        const result = await response.json();
        return result; // 성공 시 result 객체 (예: { access: 'token...' }) 반환
    } catch (error) {
        // 네트워크 오류 등 fetch 과정에서 문제 발생 시
        console.error('로그인 API 요청 오류:', error);
        return null;
    }
};
