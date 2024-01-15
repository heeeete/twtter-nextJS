"use client";

import Image from "next/image";
import styles from "./logoutButton.module.css";

export default function LogoutButton() {
	const me: { id: string; nickname: string } = {
		id: "mkoui",
		nickname: "huipark",
	};

	const onLogout = () => {};

	return (
		<button className={styles.logoutBtn} onClick={onLogout}>
			<div className={styles.id}>{me.id}</div>
			<div className={styles.nickname}>{me.nickname}</div>
		</button>
	);
}
