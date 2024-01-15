import styles from "./trendSection.module.css";
import Trend from "./Trend";

export default function TrendSection() {
	return (
		<div className={styles.trendContainer}>
			<h3
				style={{
					fontWeight: "bold",
					fontSize: 25,
					paddingBlock: 12,
					paddingInline: 16,
				}}
			>
				Trends for you
			</h3>
			<Trend />
			<Trend />
			<Trend />
			<Trend />
			<Trend />
			<Trend />
			<Trend />
			<Trend />
			<Trend />
			<Trend />
		</div>
	);
}
