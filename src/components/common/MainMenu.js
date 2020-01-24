import React from "react";
import { Link } from "react-router-dom";
import css from "../../css/modules/MainMenu.module.scss";

const MainMenu = ({ settings, menuActive, setMenuActive }) => {
  const setting = settings.find(item => item.key === "main_menu");
  const menuData = setting ? JSON.parse(setting.value) : [];
  const menuItemsDisp = menuData.map((item, idx) => {
    const menuItem = (
      <div>
        {item.link ? (
          <Link
            to={item.link}
            onClick={() => setMenuActive(false)}
            className={`${css.menuItem} ${item.children &&
              css.menuItemHasChildren}`}
            style={{
              transitionDelay: `${idx * 0.1 + 0.25}s`
            }}
          >
            {item.label}
          </Link>
        ) : (
          <div
            className={`${css.menuItem} ${item.children &&
              css.menuItemHasChildren}`}
            style={{
              transitionDelay: `${idx * 0.1 + 0.25}s`
            }}
          >
            {item.label}
          </div>
        )}
      </div>
    );
    const children = item.children
      ? item.children.map((child, idxc) => (
          <div key={idxc}>
            <Link
              className={css.childMenuItem}
              onClick={() => setMenuActive(false)}
              to={child.link}
              style={{ transitionDelay: `${idxc * 0.1 + (idx * 0.1 + 0.25)}s` }}
            >
              {child.label}
            </Link>
          </div>
        ))
      : null;
    return (
      <div key={idx}>
        {menuItem}
        {children}
      </div>
    );
  });
  if (settings.length === 0) return null;
  return (
    <div className={`${css.root} ${menuActive && css.active}`}>
      <div className={css.menuWrap}>{menuItemsDisp}</div>
    </div>
  );
};
export default MainMenu;
