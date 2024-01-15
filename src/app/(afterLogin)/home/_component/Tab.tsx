"use client";

import styles from "./tab.module.css";
import { useState } from "react";

export default function Tab() {
	const [tab, setTab] = useState("rec");

	const onRecommendTab = () => setTab("rec");
	const onFollowingTab = () => setTab("fol");

	return (
		<div className={styles.fixedContainer}>
			<div className={styles.container}>
				<div
					style={tab === "rec" ? { fontWeight: "bold" } : {}}
					onClick={onRecommendTab}
				>
					For you
					<div className={styles.tabIndicator} hidden={tab === "fol"}></div>
				</div>
				<div
					style={tab === "fol" ? { fontWeight: "bold" } : {}}
					onClick={onFollowingTab}
				>
					Following
					<div className={styles.tabIndicator} hidden={tab === "rec"}></div>
				</div>
			</div>
		</div>
	);
}
