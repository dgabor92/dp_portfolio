import { MailIcon } from "./Icons";

export function Sidebar({ navItems, activeId, onNavigate, email, menuOpen, onToggleMenu }) {
  return (
    <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
      <div className="sidebar__topbar">
        <button
          type="button"
          className="sidebar__menu-button"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-controls="sidebar-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sidebar__menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="sidebar-panel" className="sidebar__body">
        <nav className="sidebar__nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`sidebar__link ${activeId === item.id ? "is-active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="sidebar__link-label">{item.label}</span>
              <span className="sidebar__link-icon" aria-hidden="true">
                {item.icon}
              </span>
            </button>
          ))}
        </nav>

        <a className="sidebar__mail" href={`mailto:${email}`} aria-label={email}>
          <MailIcon className="sidebar__mail-icon" />
          <span className="sidebar__mail-text">Email</span>
        </a>
      </div>
    </aside>
  );
}
