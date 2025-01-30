import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { AiOutlineInstagram, AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { FaBluesky } from "react-icons/fa6";

function Footer() {
  const t = useTranslations("FooterSection");
  return (
    <footer className="bg-[#121212] text-white py-12 text-center">
      <Link href="/" className="text-3xl font-bold mb-6 inline-block">
        GabLunaDev
      </Link>
      <ul className="flex flex-wrap justify-center gap-6 mb-6">
        <li><Link href="/">{t("home_link")}</Link></li>
        <li><Link href="/#about">{t("about_link")}</Link></li>
        <li><Link href="/#technologies">{t("technologies_link")}</Link></li>
        <li><Link href="/#projects">{t("projects_link")}</Link></li>
        <li><Link href="/#contact">{t("contact_link")}</Link></li>
      </ul>

      <div className="flex justify-center gap-6 mb-10">
        <Link href="https://github.com/GabLunaDev" target='_blank'><AiFillGithub className="footer-icon" /></Link>
        <Link href="https://bsky.app/profile/gabluna.dev" target='_blank'><FaBluesky className="footer-icon" /></Link>
        <Link href="https://www.instagram.com/gablunac/" target='_blank'><AiOutlineInstagram className="footer-icon" /></Link>
        <Link href="https://www.youtube.com/@GabLuna" target='_blank'><AiFillYoutube className="footer-icon" /></Link>
      </div>

      <div className="text-sm">
        <p>&copy; GabLunaDev. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
