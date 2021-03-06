import React, { useState, useEffect } from "react";
import { Link as NavLink } from "react-router-dom";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import { IconContext } from "react-icons";
import { FaHome, FaDollyFlatbed, FaShoppingCart } from "react-icons/fa";
import { IoMdSettings, IoMdMenu } from "react-icons/io";

const Link = styled(NavLink)`
  flex: 1;
  text-align: center;
  margin-top: 0.8rem;
`;


const NameLink = styled.span`
  display: block;
  font-weight: bold;
  margin-top: 0.5rem;
  line-height: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 65px;
  background: ${({ theme }) => theme.nav.background};
  & * {
    text-decoration: none;
    color: ${({ theme }) => theme.nav.fontColor};
  }
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius}rem;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.nav.shadow};

  @supports (
    (-webkit-backdrop-filter: blur(1rem)) or (backdrop-filter: blur(1rem))
  ) {
    background: ${({ theme }) => theme.nav.background}80;
    backdrop-filter: blur(1rem);
  }
`;

const AnimatedNav = animated(Nav);

const Navigation = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState({ width: true, height: false });

  const [{ height, width }, setSize] = useSpring(() => ({
    height: 0,
    width: 100,
    config: { mass: 1, tension: 300, friction: 25 },
  }));

  const bind = useDrag(({ swipe: [swipeX, swipeY] }) => {
    if (swipeY === -1) {
      setSize({ height: 100 });
      setIsOpen({ ...isOpen, height: true });
      document.body.style.overflow = "hidden";
    }
    if (swipeX === -1) {
      setSize({ width: 100 });
      setIsOpen({ ...isOpen, width: true });
    }
    if (swipeX === 1) {
      setSize({ width: 0 });
      setIsOpen({ ...isOpen, width: false });
    }
    // console.log(isOpen, swipeX, swipeY);
  });

  const toPixel = (windowInner) => (value) => {
    const MARGIN = 6 / 0.0625,
      REM = 100 / 0.0625;

    return `${((windowInner - MARGIN) * value) / REM + 4}rem`;
  };

  const vwToPixel = toPixel(window.innerWidth),
    vhToPixel = toPixel(window.innerHeight);

  return (
    <AnimatedNav
      {...bind()}
      style={{
        width: width.interpolate(vwToPixel),
        height: height.interpolate(vhToPixel),
      }}
    >
      <IconContext.Provider value={{ color: "blue", size: "2.3rem" }}>
        {!isOpen.width && !isOpen.height && (
          <IoMdMenu
            style={{ marginTop: `0.8rem` }}
            onClick={() => {
              setSize({ height: 100, width: 100 });
              setIsOpen({ height: true, width: true });
            }}
          />
        )}
        {isOpen.width && !isOpen.height && (
          <>
            <NavigationLink to="/" name={t("Home")}>
              <FaHome />
            </NavigationLink>
            <NavigationLink to="/products" name={t("Products")}>
              <FaDollyFlatbed />
            </NavigationLink>
            <NavigationLink to="/cart" name={t("Cart")}>
              <FaShoppingCart/>
            </NavigationLink>
            <NavigationLink to="/settings" name={t("Settings")}>
              <IoMdSettings />
            </NavigationLink>
          </>
        )}
      </IconContext.Provider>
    </AnimatedNav>
  );
};

export default Navigation;

const AnimatedNameLink = animated(NameLink);

const NavigationLink = ({ children, to, name }) => {
  const [{ ys, opacity }, setYS] = useSpring(() => ({
    ys: [0, 1],
    opacity: 0,
    config: { mass: 1, tension: 400, friction: 20 },
  }));

  return (
    <Link
      to={to}
      exact
      onMouseOver={() => setYS({ ys: [-10, 0.8], opacity: 1 })}
      onMouseOut={() => setYS({ ys: [0, 1], opacity: 0 })}
    >
      <animated.div
        style={{
          transform: ys.interpolate((y, s) => `translateY(${y}px) scale(${s})`),
        }}
      >
        {children}
      </animated.div>
      <AnimatedNameLink
        style={{
          transform: ys.interpolate((y) => `translateY(${y * 3}px)`),
          opacity: opacity.interpolate((o) => o),
        }}
      >
        {name}
      </AnimatedNameLink>
    </Link>
  );
};
