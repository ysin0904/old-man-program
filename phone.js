const openBtns = document.querySelectorAll('.modal-opener'); 
const closeBtn = document.getElementById('closeBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const contents = {
    'smartphone': {
        title: '스마트폰 사용법',
        body: '앱 설치, 사진 전송 등 스마트폰의 기본 및 고급 기능을 익힙니다.'
    },
    'kiosk': {
        title: '키오스크 사용법',
        body: '키오스크는 화면을 눌러 주문과 결제를 하는 기계로, 대기 화면에서는 화면을 가볍게 터치하면 시작됩니다.언어 선택 후 매장 식사나 포장을 고르고, 메뉴 사진을 눌러 옵션을 선택해 장바구니에 담습니다.주문 내용을 확인한 뒤 결제 방법을 선택해 결제하면 주문 번호가 표시됩니다.사용이 어렵거나 오류가 나도 다시 시도하거나 직원에게 도움을 요청하면 된답니다.'
    },
    'remote': {
        title: '리모컨 사용법',
        body: '스마트 TV와 셋톱박스의 복잡한 리모컨 버튼 조작법을 알려드립니다.'
    }
};
openBtns.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const data = contents[target];
        if (data) {
            modalTitle.textContent = data.title;
            modalBody.textContent = data.body;
            modalOverlay.style.display = 'flex'; 
        }
    });
});
closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});
