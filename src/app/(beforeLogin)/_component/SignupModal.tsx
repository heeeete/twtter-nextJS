"use client";

import styles from "@/app/(beforeLogin)/_component/signup.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupModal() {
	const [id, setId] = useState();
	const [pw, setPw] = useState();
	const [checkPw, setCheckPw] = useState();
	const router = useRouter();

	const onClickClose = () => {
		router.back();
	};

	console.log(id, pw);
	return (
		<div className={styles.modalBackground}>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<button className={styles.closeButton} onClick={onClickClose}>
						<svg
							width={24}
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
						>
							<g>
								<path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
							</g>
						</svg>
					</button>
					<div>계정을 생성하세요</div>
				</div>
				<form>
					<div className={styles.inputDiv}>
						<input
							type="text"
							id="id"
							value={id}
							onChange={(e) => setId(e.target.value)}
							placeholder="아이디"
						/>
						<input
							type="password"
							id="pw"
							value={pw}
							onChange={(e) => setPw(e.target.value)}
							placeholder="비밀번호"
						/>
						<input
							type="password"
							id="checkPw"
							value={checkPw}
							onChange={(e) => setCheckPw(e.target.value)}
							placeholder="비밀번호 확인"
						/>
					</div>
				</form>
				<div className={styles.modalFooter}>
					<button
						className={styles.actionButton}
						disabled={!id || !pw || !checkPw}
					>
						제출
					</button>
				</div>
			</div>
		</div>
	);
}
