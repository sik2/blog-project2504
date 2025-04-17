export default function Home() {
    console.log('FRONT_BASE_URL', process.env.NEXT_PUBLIC_FRONT_BASE_URL)
    console.log('API_BASE_URL', process.env.NEXT_PUBLIC_API_BASE_URL)

    const socialLoginForKakaoUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/oauth2/authorization/kakao`
    const redirectUrlAfterSocialLogin = process.env.NEXT_PUBLIC_FRONT_BASE_URL

    return (
        <main className="flex flex-col min-h-screen">
            {/* 헤더 영역 */}
            <header className="bg-white p-4 shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="text-indigo-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <nav className="flex space-x-6 text-gray-700">
                            <a href="#" className="border-b-2 border-indigo-600 pb-1">
                                홈
                            </a>
                            <a href="#" className="hover:text-indigo-600">
                                카테고리
                            </a>
                            <a href="#" className="hover:text-indigo-600">
                                인기글
                            </a>
                            <a href="#" className="hover:text-indigo-600">
                                태그
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="검색"
                                className="pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition">
                            로그인
                        </button>
                        <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition">
                            회원가입
                        </button>
                    </div>
                </div>
            </header>

            {/* 배너 영역 */}
            <section className="relative">
                <div className="w-full h-96 overflow-hidden">
                    <img src="/images/korean-food.jpg" alt="한국 음식" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
                        <div className="container mx-auto px-6">
                            <div className="text-white">
                                <h1 className="text-4xl font-bold mb-2">전통 맛집 탐방</h1>
                                <p className="text-xl">숨겨진 맛집을 찾아서</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
                    <div className="flex space-x-2">
                        <button className="w-2 h-2 rounded-full bg-white bg-opacity-50"></button>
                        <button className="w-2 h-2 rounded-full bg-white"></button>
                        <button className="w-2 h-2 rounded-full bg-white bg-opacity-50"></button>
                    </div>
                </div>
            </section>

            {/* 최신 게시물 영역 */}
            <section className="container mx-auto py-10 px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">최신 게시물</h2>
                    <div className="flex">
                        <select className="mr-2 px-3 py-2 border rounded-md">
                            <option>최신순</option>
                            <option>전체</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* 게시물 1 */}
                    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <img src="/images/cafe.jpg" alt="서울의 숨은 카페" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">서울의 숨은 카페</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                조용히 호칭만의 시간을 보내기 좋은 카페를 소개합니다...
                            </p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>2024.02.15</span>
                                <span className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                    238
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 게시물 2 */}
                    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <img src="/images/salad.jpg" alt="맛있는 집밥 레시피" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">맛있는 집밥 레시피</h3>
                            <p className="text-sm text-gray-600 mb-3">누구나 쉽게 따라할 수 있는 건강한 한식 레시피</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>2024.02.14</span>
                                <span className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                    156
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 게시물 3 */}
                    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <img src="/images/jeju.jpg" alt="제주도 여행 코스" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">제주도 여행 코스</h3>
                            <p className="text-sm text-gray-600 mb-3">로컬이 추천하는 제주도의 숨은 명소들...</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>2024.02.13</span>
                                <span className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                    412
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 게시물 4 */}
                    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <img src="/images/jeju.jpg" alt="제주도 여행 코스" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">제주도 여행 코스</h3>
                            <p className="text-sm text-gray-600 mb-3">로컬이 추천하는 제주도의 숨은 명소들...</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>2024.02.13</span>
                                <span className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                    412
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 푸터 영역 */}
            <footer className="bg-white mt-auto py-10 border-t">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between mb-8">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center text-indigo-600 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-600 text-sm">
                                당신의 이야기를 공유하고 소통하는 공간입니다. 일상의 특별한 순간들을 기록하고 다른
                                사람들과 나눠보세요.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-gray-800 font-medium mb-4">고객센터</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>
                                        <a href="#" className="hover:text-indigo-600">
                                            자주 묻는 질문
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-indigo-600">
                                            1:1 문의
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-indigo-600">
                                            공지사항
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-medium mb-4">팔로우</h3>
                                <div className="flex space-x-3 text-gray-500">
                                    <a href="#" className="hover:text-indigo-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="hover:text-indigo-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165v-.001z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="hover:text-indigo-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
                        © 2024 블로그. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* 카카오 로그인 (필요한 경우 활성화) */}
            <div className="hidden">
                <a href={`${socialLoginForKakaoUrl}?redirectUrl=${redirectUrlAfterSocialLogin}`}>
                    <span className="font-bold">카카오 로그인</span>
                </a>
            </div>
        </main>
    )
}
