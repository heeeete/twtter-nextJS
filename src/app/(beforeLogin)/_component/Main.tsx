import Image from "next/image";
import styles from "@/app/page.module.css";
import hLogo from "@/../public/hlogo.png";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className={styles.left}>
				<Image className={styles.logo} src={hLogo} alt="logo" />
			</div>
			<div className={styles.right}>
				<h1>지금 일어나고 있는 일</h1>
				<h2>지금 가입하세요.</h2>
				<Link href={"/i/flow/signup"} className={styles.signup}>
					계정 만들기
				</Link>
				<span className={styles.termsSpan}>
					가입하시려면 <span className={styles.terms}>쿠키 사용</span>을 포함해{" "}
					<span className={styles.terms}>이용약관</span>과{" "}
					<span className={styles.terms}>개인정보 처리방침</span>에 동의해야
					합니다.
				</span>
				<h3>이미 계정이 있으신가요?</h3>
				<Link href={"/login"} className={styles.login}>
					로그인
				</Link>
			</div>
		</>
	);
}
