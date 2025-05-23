import React from "react";

function Footer() {
  return (
    <footer className="px-36 py-12 mt-56 bg-slate-100 max-sm:px-5 max-sm:py-10">
      <div className="flex gap-20 max-md:flex-col max-md:gap-10">
        <section className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold leading-6 text-slate-400">
            고객 문의센터
          </h3>
          <p className="text-sm leading-6 text-slate-400">
            전화번호: 02-000-000
          </p>
          <p className="text-sm leading-6 text-slate-400">
            운영시간: 평일 08:00 - 19:00 (주말, 공휴일 휴무)
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold leading-6 text-slate-400">
            서비스 기본약관
          </h3>
          <a href="#" className="text-sm leading-6 text-slate-400">
            서비스 이용약관
          </a>
          <a href="#" className="text-sm leading-6 text-slate-400">
            개인정보 처리방침
          </a>
        </section>
        <section className="flex flex-col gap-2">
          <p className="text-sm font-semibold leading-6 text-slate-400">
            Copyright © AIOrtho. All Rights Reserved.
          </p>
          <p className="text-sm leading-6 text-slate-400">
            사업자등록번호 120-00-00000 | 대표 홍길동
          </p>
          <p className="text-sm leading-6 text-slate-400">
            서울시 서초구 효령로 30
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;