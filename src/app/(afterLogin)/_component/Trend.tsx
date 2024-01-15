import Link from "next/link";
import styles from "./trend.module.css";

export default function Trend() {
	return (
		<Link href={`/search?q=trend`} className={styles.container}>
			<div className={styles.count}>Trending in South Korea</div>
			<div className={styles.title}>Thrend~~~~</div>
			<div className={styles.count}>2172</div>
		</Link>
	);
}
