"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./navMenu.module.css";
import homeImg from "@/../public/home.svg";
import Image from "next/image";
import internal from "stream";

export default function NavMenu() {
	const segmnet = useSelectedLayoutSegment();
	const me: { id: string } = {
		id: "mkoui",
	};

	return (
		<div className={styles.container}>
			<Link href={"/home"} className={styles.link}>
				<div className={styles.linkContainer}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="22"
						width="24"
						viewBox="0 0 576 512"
						className={styles.icon}
					>
						<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
					</svg>
					<span
						className={styles.navName}
						style={segmnet === "home" ? { fontWeight: "bold" } : {}}
					>
						Home
					</span>
				</div>
			</Link>

			<Link href={"/search"} className={styles.link}>
				<div className={styles.linkContainer}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="20"
						viewBox="0 0 512 512"
						className={styles.icon}
					>
						<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
					</svg>
					<span
						className={styles.navName}
						style={segmnet === "search" ? { fontWeight: "bold" } : {}}
					>
						Explore
					</span>
				</div>
			</Link>

			<Link href={"/messages"} className={styles.link}>
				<div className={styles.linkContainer}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="20"
						viewBox="0 0 512 512"
						className={styles.icon}
					>
						<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
					</svg>
					<span
						className={styles.navName}
						style={segmnet === "messages" ? { fontWeight: "bold" } : {}}
					>
						Messages
					</span>
				</div>
			</Link>

			<Link href={`${me.id}`} className={styles.link}>
				<div className={styles.linkContainer}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="18"
						viewBox="0 0 448 512"
						className={styles.icon}
					>
						<path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
					</svg>
					<span
						className={styles.navName}
						style={segmnet === `${me.id}` ? { fontWeight: "bold" } : {}}
					>
						Profile
					</span>
				</div>
			</Link>
		</div>
	);
}
