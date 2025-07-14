// 이 함수는 서버에 회원가입 정보를 보내고, 성공 여부를 받아옵니다.
export const signup = async (id, pw, nickname) => {
    try {
        const response = await fetch('http://백엔드_회원가입_API_주소', {
            // 👈 반드시 실제 서버 주소로 변경하세요!
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: id, // 백엔드에서 요구하는 key 이름에 맞춰주세요
                password: pw, // 백엔드에서 요구하는 key 이름에 맞춰주세요
                nickname: nickname, // 백엔드에서 요구하는 key 이름에 맞춰주세요
            }),
        });

        if (!response.ok) {
            console.error('서버 응답 오류:', response.status);
            // 회원가입 실패 시 응답 본문을 확인하여 에러 메시지를 표시할 수도 있습니다.
            const errorData = await response.json();
            alert(errorData.message || '회원가입에 실패했습니다.');
            return null;
        }

        alert('회원가입 성공!');
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('회원가입 API 요청 오류:', error);
        alert('회원가입 중 문제가 발생했습니다.');
        return null;
    }
};
