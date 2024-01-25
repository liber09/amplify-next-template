import styles from './header.module.scss';
import React from "react";
import Image from 'next/image';
import ImageHandler from '@/src/_functions/imageHandler';
import Link from 'next/link';

export default function Header() {
    const medimeLogoUrl = ImageHandler("MEDIME_6_1_nrdlgp").toURL();
    const userIconUrl = ImageHandler("User_ceeohs").toURL();
    const chatIconUrl = ImageHandler("Chat_Bubble_yk1mvt").toURL();
    const hamburgerIconUrl = ImageHandler("Menu_e6umko").toURL();

    return (
        <>
            <header className={styles.container}>
                <div className={styles.iconAndMenuContainer}>
                    <div className={styles.logo}>
                        <Link href={"/"}>
                            <Image
                                src={medimeLogoUrl}
                                alt="MediMe logo"
                                height={110}
                                width={110}
                            />
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <Link href={"/account"}>
                            <Image
                                className={styles.user}
                                src={userIconUrl}
                                alt="User icon"
                                height={41}
                                width={41}
                            />
                        </Link>
                        <Link href={"/chat"}>
                            <Image
                                className={styles.chat}
                                src={chatIconUrl}
                                alt="Chat icon"
                                height={40}
                                width={40}
                            />
                        </Link>
                        <Link href={"/"}>
                            <Image
                                className={styles.hamburger}
                                src={hamburgerIconUrl}
                                alt="hamburger button"
                                height={50}
                                width={50}
                            />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}