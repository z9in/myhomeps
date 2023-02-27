const data = [
  {
    name: "toilet_search",
    img: "https://z9in.github.io/myhome/images/toilet.jpg",
    title: "공중화장실 검색",
    detales: [
      "공공데이터 활용 : 경기도 공중화장실 위치 데이터",
      "카카오 MAP API활용",
    ],
    future: [
      "추가적인 자료를 수집, 전국 기준으로 진행",
      "지역 확인 시 주소가 아닌 키워드로 검색 가능토록 방법 모색",
    ],
    github: "https://github.com/z9in/toiletSearch_react",
    siteName: "바로가기",
    site: "https://web-toiletsearch-react-422t024lbonwoan.gksl2.cloudtype.app/",
  },
  {
    name: "weather_app",
    img: "https://z9in.github.io/myhome/images/weather.jpg",
    title: "오늘의 날씨",
    detales: [
      "OpenWeatherMap API 활용",
      "접속 시 상단 지도를 통해 현재 위치 표시",
      "하단 정보 창에 현재 온도와 날씨 정보 표시",
      "지도 내 특정 위치 클릭(탭) 시 해당 지역의 날씨 확인",
    ],
    future: [
      "expo를 사용하지 않고 빌드 및 배포할 수 있도록 개발",
      "native의 기능들을 활용할 수 있도록 방향 설계 필요",
      "지도 클릭 외에 지역 선택 혹은 검색할 수 있는 기능 반영",
    ],
    github: "https://github.com/z9in/weather_app_react_native",
    siteName: "다운로드",
    site: " https://expo.dev/artifacts/eas/3RkCsLvsRM8KM6XozWtQEP.apk",
  },
  {
    name: "new_year",
    img: "https://z9in.github.io/myhome/images/newyear.jpg",
    title: "신년 인사",
    detales: [
      "추가적인 자료를 수집, 전국 기준으로 진행",
      "글자 제한 255자, 작성자 명, 비밀번호 입력",
      "글쓰기 및 삭제 시 본인 확인(비밀번호 확인)",
    ],
    future: [
      "비밀번호 암호화 기능 추가 및 DB파일 구성을 통한 보안 정책 향상 필요",
    ],
    github: "https://github.com/z9in/newyear",
    siteName: "바로가기",
    site: "https://port-0-newyear-422t024lbonwoan.gksl2.cloudtype.app/",
  },
  {
    name: "team_project_1",
    img: "https://z9in.github.io/myhome/images/team1.jpg",
    title: "TEAM PROJECT1",
    detales: [
      "연구정보, 제품정보 페이지 작성",
      "HTML, CSS, JAVASCRIPT 활용 제품정보 페이지 내 제품검색 및 정렬 기능 구형",
    ],
    future: [
      "제품 목록 작성 시 HTML 내부에 태그 목록으로 사전 제품 리스트 반영 후 display 속성을 활용하여 제품이 보여지도록 진행",
      "json파일 등을 활용 제품 목록을 외부에 두고 불러오는 형식이 더욱 효율적일 것",
    ],
    github: "https://github.com/z9in/project_DW_home",
    siteName: "바로가기",
    site: "https://z9in.github.io/project_DW_home/",
  },
  {
    name: "team_project_2",
    img: "https://z9in.github.io/myhome/images/team2.jpg",
    title: "TEAM PROJECT2",
    detales: [
      "sqlite를 활용한 데이터베이스 구축",
      "PRODUCT 페이지 작성 및 기능 구현",
      "찜목록, 장바구니 임시 저장 기능 구현",
    ],
    future: [
      "로그인관련 토큰, 웹세션 등을 활용하여 보안성을 강화할 수 있을 것",
      " 데이터베이스 설계 시 회원 개인정보와 회원의 관심 상품 목록을 이원화하여 관리하는 것이 효율성을 높일 수 있을 것",
    ],
    github: "https://github.com/z9in/gilmaro",
    siteName: "바로가기",
    site: "https://port-0-gilmaro-422t024lbonwoan.gksl2.cloudtype.app/index",
  },
];

export default { data };
