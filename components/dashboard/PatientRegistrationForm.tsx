"use client";

import React, { useState, useEffect } from "react";
import FormField from "./FormField";

const PatientRegistrationForm: React.FC = () => {
    const [firstPart, setFirstPart] = useState("");
    const [secondPart, setSecondPart] = useState("");

    const [errors, setErrors] = useState({
        firstPart: "",
        patientName: "",
    });

    const [patientName, setPatientName] = useState("");

    // Auto-calculate count of digits from 1–6 in firstPart
    useEffect(() => {
        const count = firstPart
            .split("")
            .filter((char) => ["1", "2", "3", "4", "5", "6"].includes(char)).length;
        setSecondPart(count.toString());
    }, [firstPart]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: any = {};

        if (!patientName.trim()) {
            newErrors.patientName = "필수 입력 항목이에요";
        }

        if (!/^\d{6}$/.test(firstPart)) {
            newErrors.firstPart = "올바른 생년월일 형식이 아니에요.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
            // handle form submission logic here
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full"
        >
            {/* 환자명 */}
            <div className="w-full max-md:max-w-full">
                <div className="text-sm leading-none text-slate-400 max-md:max-w-full">
                    환자명 <span style={{ color: "rgba(0,84,166,1)" }}>*</span>
                </div>
                <div className="mt-3 w-full max-md:max-w-full">
                    <input
                        type="text"
                        value={patientName}
                        onChange={(e) => {
                            setPatientName(e.target.value);
                            if (e.target.value.trim()) {
                                setErrors((prev) => ({ ...prev, patientName: "" }));
                            }
                        }}
                        className="flex-1 shrink gap-2.5 self-stretch px-4 py-4 w-full text-base rounded-xl border border-solid border-zinc-200 min-h-12 text-slate-600 max-md:max-w-full"
                        placeholder="환자명을 입력해주세요"
                    />
                    {errors.patientName && (
                        <div className="mt-2 text-sm leading-none text-rose-600">
                            {errors.patientName}
                        </div>
                    )}
                </div>
            </div>

            {/* 주민등록번호 */}
            <FormField
                label="주민등록번호"
                placeholder=""
                required={true}
                errorMessage={errors.firstPart}
            >
                <div className="flex relative gap-5 items-center h-12 max-sm:flex-col max-sm:gap-3 max-sm:h-auto">
                    <input
                        type="text"
                        placeholder="생년월일 6자리"
                        value={firstPart}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d{0,6}$/.test(val)) {
                                setFirstPart(val);
                                if (/^\d{6}$/.test(val)) {
                                    setErrors((prev) => ({ ...prev, firstPart: "" }));
                                }
                            }
                        }}
                        maxLength={6}
                        className="flex gap-2.5 px-4 py-3.5 h-12 text-base rounded-xl border border-solid border-zinc-200 text-slate-600 w-[260px] max-sm:w-full max-sm:text-sm"
                    />

                    <div className="flex absolute top-5 gap-1 items-center h-2 left-[332px] w-[68px] max-sm:static max-sm:mx-auto max-sm:my-0">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-600 rounded-full" />
                        ))}
                    </div>

                    <input
                        type="text"
                        value={secondPart}
                        readOnly
                        className="flex gap-2.5 items-center px-4 py-3.5 w-11 h-12 rounded-xl border border-solid border-zinc-200 bg-gray-100 text-center"
                    />
                </div>
                {errors.firstPart && (
                    <div className="mt-2 text-sm leading-none text-rose-600">
                        {errors.firstPart}
                    </div>
                )}
            </FormField>

            {/* 병원 환자 번호 */}
            <FormField
                label="병원 환자 번호"
                placeholder="병원 환자 번호을 입력해주세요"
                errorMessage=""
            />

            {/* 보호자명 */}
            <FormField
                label="보호자명"
                placeholder="보호자명을 입력해주세요"
                required={true}
                errorMessage=""
            />

            {/* 보호자 휴대폰 번호 */}
            <FormField
                label="보호자 휴대폰 번호"
                placeholder="휴대폰 번호을 입력해주세요"
                required={true}
                errorMessage=""
            />

            {/* 등록 버튼 */}
            <div className="flex gap-4 items-start self-stretch mt-12 text-sm font-bold leading-6 text-white whitespace-nowrap max-md:mt-10">
                <button
                    type="submit"
                    className="gap-2.5 self-stretch px-5 py-3 bg-blue-500 min-h-12 min-w-60 rounded-[999px] w-[540px]"
                >
                    등록하기
                </button>
            </div>
        </form>
    );
};

export default PatientRegistrationForm;
