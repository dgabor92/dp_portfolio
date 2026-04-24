import { useEffect, useMemo, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { HeroSection } from "./components/HeroSection";
import { LicencesSection } from "./components/LicencesSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BackToTopButton } from "./components/BackToTopButton";
import { HomeIcon, StarIcon, TasksIcon, MailIcon } from "./components/Icons";
import { getContent, getLocale, sectionIds } from "./data/content";
import { portraits } from "./data/assets";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useRevealSections } from "./hooks/useRevealSections";

export default function App() {
  const locale = useMemo(() => getLocale(), []);
  const content = useMemo(() => getContent(locale), [locale]);
  const activeId = useScrollSpy(sectionIds);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useRevealSections(["header", "about", ...sectionIds.slice(1)]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.headTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content.headDescription);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", content.headTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", content.headDescription);
  }, [content.headTitle, content.headDescription, locale]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = [
    {
      id: "header",
      label: content.aboutMe.title,
      icon: <HomeIcon className="sidebar__nav-icon" />,
    },
    {
      id: "experience",
      label: content.licence.title,
      icon: <StarIcon className="sidebar__nav-icon" />,
    },
    {
      id: "service",
      label: content.service.title,
      icon: <TasksIcon className="sidebar__nav-icon" />,
    },
    {
      id: "contact",
      label: content.contact.title,
      icon: <MailIcon className="sidebar__nav-icon" />,
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <Sidebar
        navItems={navItems}
        activeId={activeId}
        onNavigate={scrollToSection}
        email="deutschpal67@gmail.com"
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((value) => !value)}
      />

      <main className="page">
        <HeroSection content={content} portrait={portraits.hero} />
        <LicencesSection content={content} />
        <ServicesSection content={content} />
        <ContactSection content={content} />
        <Footer footerText={content.footer.text.replace("{year}", currentYear)} />
      </main>

      <BackToTopButton visible={showBackToTop} onClick={() => scrollToSection("header")} />
    </div>
  );
}
