# 몽글몽글: 구름 (MBTI 심리테스트 사이트)

## 프로젝트 개요

구름은 다양한 MBTI 심리테스트를 한 곳에 모아놓은 웹사이트입니다. 사용자들이 자신의 성격 유형을 재미있게 알아볼 수 있도록 다양한 테스트를 제공합니다.

## 주요 기능

- **다양한 심리테스트**: MBTI, 퍼스널 컬러, 동물 테스트 등
- **반응형 디자인**: 모바일과 데스크톱에서 최적화된 경험
- **슬라이더 기능**: Swiper.js를 활용한 부드러운 이미지 슬라이더
- **카테고리별 분류**: 성격, 동물, 음식 등 테마별 테스트 구성

## 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript
- **라이브러리**:
  - Swiper.js (이미지 슬라이더)
  - jQuery (DOM 조작)
  - Font Awesome (아이콘)
- **폰트**: IM_Hyemin-Bold (네이버 나눔글꼴)

## 프로젝트 구조

```
구름/
├── index.html              # 메인 페이지
├── about.html              # 소개 페이지
├── css/
│   ├── reset.css           # CSS 리셋
│   └── style.css           # 메인 스타일시트
├── js/
│   └── main_slider.js      # 슬라이더 기능
├── img/                    # 이미지 파일들
│   ├── logo/               # 로고 이미지
│   ├── 1/                  # 카테고리 1 이미지
│   ├── 2/                  # 카테고리 2 이미지
│   └── a/                  # 기타 이미지
└── sub/                    # 테스트 페이지들
    ├── 1/                  # 카테고리 1 테스트
    ├── 2/                  # 카테고리 2 테스트
    └── a/                  # 기타 테스트
```

## 주요 개선사항

### HTML 정리

- 시맨틱 마크업 적용 (`<main>`, `<section>`, `<article>` 등)
- 중복 코드 제거 및 구조 개선
- 접근성 향상 (alt 텍스트 개선)
- 일관된 들여쓰기와 포맷팅

### CSS 정리

- CSS 변수 도입으로 일관성 있는 색상 관리
- 중복 스타일 제거 및 모듈화
- 반응형 디자인 개선
- 성능 최적화 (불필요한 스타일 제거)

### JavaScript 정리

- 중복 코드 제거 및 함수 모듈화
- ES6+ 문법 사용
- 이벤트 리스너 최적화
- 코드 가독성 향상

## 설치 및 실행

### 방법 1: 직접 파일 열기

1. 프로젝트를 다운로드
2. `index.html` 파일을 브라우저에서 직접 열기

### 방법 2: 로컬 서버 사용 (권장)

```bash
# Python이 설치된 경우
python -m http.server 8000

# Node.js가 설치된 경우
npx serve .

# VS Code 사용 시
# Live Server 확장 프로그램 설치 후 우클릭 → "Open with Live Server"
```

3. 브라우저에서 `http://localhost:8000` 접속

## 브라우저 지원

- Chrome (권장)
- Firefox
- Safari
- Edge

## 반응형 디자인

- **데스크톱**: 3.7개 슬라이드 표시
- **모바일**: 1.15개 슬라이드 표시 (420px 이하)
- **태블릿**: 중간 크기 최적화

## 라이선스

Copyright © 2022 몽글몽글: 구름

## 연락처

- 인스타그램: [@goorm_test](https://www.instagram.com/goorm_test)
- 웹사이트: [monglemonglegoorm.netlify.app](https://monglemonglegoorm.netlify.app)

## 기여하기

새로운 테스트나 개선사항이 있으시면 인스타그램으로 연락해 주세요!
