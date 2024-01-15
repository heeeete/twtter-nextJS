import styles from "./followRecommend.module.css";

export default function FollowRecommend() {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}></div>
			<div className={styles.infoAndFollowBtn}>
				<div className={styles.userContainer}>
					<div className={styles.nickname}>😉희태다</div>
					<div className={styles.user}>userID</div>
				</div>
				<div className={styles.followButton}>Follow</div>
			</div>
		</div>
	);
}
