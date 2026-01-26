## (주)더다올디앤씨 웹사이트

### 기술 스택

- **Next.js 16** (App Router)
- React 19
- TypeScript
- **Tailwind CSS v4**
- Vercel (배포)

### 프로젝트 구조

#### 레이아웃

- **app/(home)** - 랜딩 페이지 레이아웃
  - Hero, About, Business, Portfolio, Partners, Contact 섹션

- **app/(detail)** - 상세 페이지 레이아웃
  - `/company/*` - 회사 정보 페이지
  - `/business/*` - 사업 소개 페이지
  - `/projects` - 프로젝트 목록 페이지
  - `/contact` - 문의 페이지

### 주요 기능

#### 1. 네이버 지도 API

- 컴포넌트: `components/utils/NaverMap.tsx`
- 환경변수: `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID`
- 동적 스크립트 로드 방식

#### 2. 문의 메일

- EmailJS
- 환경변수:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### 개발 환경 실행

```bash
pnpm install --frozen-lockfile
pnpm dev
```

### 배포

Vercel 자동 배포

- main 브랜치 푸시 시 프로덕션 배포
- 환경 변수는 Vercel 대시보드에서 설정
