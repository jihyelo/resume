document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('#teal-toggle');
    const moonIcon = document.querySelectorAll('.toggleIcon')[0];
    const sunIcon = document.querySelectorAll('.toggleIcon')[1];
    const toggleText = document.querySelector('.toggleText');
    const fadeInElement = document.querySelector('.fade-in-element'); // 클래스 선택자 수정

    // Dark mode 추가 및 제거 함수
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.style.backgroundColor = '#222'; // 다크 배경색
            document.body.style.color = 'white'; // 흰색 글자색
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
            toggleText.textContent = 'Dark'; // 텍스트 변경
            localStorage.setItem('theme', 'dark'); // 선택한 테마를 로컬 스토리지에 저장
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.style.backgroundColor = 'white'; // 기본 배경색
            document.body.style.color = '#333'; // 기본 글자색
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
            toggleText.textContent = 'Light'; // 텍스트 변경
            localStorage.setItem('theme', 'light'); // 선택한 테마를 로컬 스토리지에 저장
        }
    }

    // 토글 버튼 클릭 이벤트 리스너
    toggleSwitch.addEventListener('change', switchTheme);

    // 초기 테마 설정 (로컬 스토리지에서 이전 선택한 테마 불러오기)
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        // 토글 버튼도 초기 테마에 맞게 설정
        toggleSwitch.checked = currentTheme === 'dark';
        moonIcon.style.display = currentTheme === 'dark' ? 'none' : 'inline';
        sunIcon.style.display = currentTheme === 'dark' ? 'inline' : 'none';
        toggleText.textContent = currentTheme === 'dark' ? 'Dark' : 'Light';
    } else {
        // 초기 테마가 없는 경우 Light로 설정
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
        toggleText.textContent = 'Light';
    }

    // 스크롤 내릴 때 요소가 부드럽게 나타나는 효과 추가
    function checkVisibility() {
        var position = fadeInElement.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (position.top < windowHeight * 0.75) {
            fadeInElement.classList.add('visible');
        }
    }

    checkVisibility();

    window.addEventListener('scroll', function () {
        checkVisibility();
    });
});


