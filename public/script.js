"use strict";

function setupIcons() {
  const lightSchemeIcon = document.querySelector("link#light-scheme-icon");
  const darkSchemeIcon = document.querySelector("link#dark-scheme-icon");

  const lightSchemeManifest = document.querySelector(
    "link#light-scheme-manifest"
  );
  const darkSchemeManifest = document.querySelector(
    "link#dark-scheme-manifest"
  );

  function setDark() {
    document.head.append(lightSchemeIcon);
    document.head.append(lightSchemeManifest);
    darkSchemeIcon.remove();
    darkSchemeManifest.remove();
  }

  function setLight() {
    lightSchemeIcon.remove();
    lightSchemeManifest.remove();
    document.head.append(darkSchemeIcon);
    document.head.append(darkSchemeManifest);
  }

  const matcher = window.matchMedia("(prefers-color-scheme:dark)");
  function onUpdate() {
    if (matcher.matches) {
      setDark();
    } else {
      setLight();
    }
  }
  matcher.addListener(onUpdate);
  onUpdate();
}

setupIcons();
