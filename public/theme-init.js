(function () {
  function getSourceTheme(source) {
    var dataTheme = source.getAttribute("data-theme");
    if (dataTheme) return dataTheme;
    var media =
      source.getAttribute("media") || source.getAttribute("data-media") || "";
    if (/prefers-color-scheme\s*:\s*dark/i.test(media)) return "dark";
    if (/prefers-color-scheme\s*:\s*light/i.test(media)) return "light";
    return null;
  }

  function stripColorScheme(media) {
    if (!media) return "";
    var cleaned = media.replace(
      /\(\s*prefers-color-scheme\s*:\s*(dark|light)\s*\)/gi,
      "",
    );
    cleaned = cleaned.replace(/\s+and\s+/gi, " and ");
    cleaned = cleaned.replace(/\s{2,}/g, " ");
    cleaned = cleaned.replace(/^\s*and\s*|\s*and\s*$/gi, "");
    return cleaned.trim();
  }

  function updateThemePictures(theme, root) {
    var scope = root || document;
    var pictures = scope.querySelectorAll("picture");
    pictures.forEach(function (picture) {
      var sources = picture.querySelectorAll("source");
      var hasThemeSource = false;
      var activeSrcset = null;
      sources.forEach(function (source) {
        var sourceTheme = getSourceTheme(source);
        if (!sourceTheme) return;
        hasThemeSource = true;
        var originalSrcset = source.getAttribute("data-srcset");
        if (!originalSrcset) {
          var currentSrcset = source.getAttribute("srcset");
          if (currentSrcset) {
            source.setAttribute("data-srcset", currentSrcset);
            originalSrcset = currentSrcset;
          }
        }
        var originalMedia = source.getAttribute("data-media");
        if (!originalMedia) {
          var currentMedia = source.getAttribute("media");
          if (currentMedia) {
            source.setAttribute("data-media", currentMedia);
            originalMedia = currentMedia;
          }
        }

        if (sourceTheme === theme) {
          if (originalSrcset) {
            source.setAttribute("srcset", originalSrcset);
            activeSrcset = originalSrcset;
          }
          var baseMedia = stripColorScheme(
            originalMedia || source.getAttribute("media") || "",
          );
          source.setAttribute("media", baseMedia || "all");
        } else {
          source.removeAttribute("srcset");
          source.setAttribute("media", "not all");
        }
      });

      if (!hasThemeSource) return;

      var img = picture.querySelector("img");
      if (img) {
        var themeSrc = null;
        if (
          img.hasAttribute("data-src-dark") ||
          img.hasAttribute("data-src-light")
        ) {
          themeSrc =
            theme === "dark"
              ? img.getAttribute("data-src-dark")
              : img.getAttribute("data-src-light");
        }
        if (!themeSrc && activeSrcset) {
          themeSrc = activeSrcset.split(",")[0].trim().split(/\s+/)[0];
        }
        if (themeSrc) img.setAttribute("src", themeSrc);
      }
    });
  }

  var savedTheme = localStorage.getItem("theme");
  var prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  var currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  window.updateThemePictures = function (theme) {
    currentTheme = theme;
    updateThemePictures(theme);
  };

  document.documentElement.setAttribute("data-theme", currentTheme);
  document.documentElement.classList.toggle("dark", currentTheme === "dark");
  updateThemePictures(currentTheme);
  window.addEventListener("DOMContentLoaded", function () {
    updateThemePictures(currentTheme);
  });

  var observer = new MutationObserver(function (mutations) {
    var shouldUpdate = false;
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        if (node.matches && node.matches("picture")) shouldUpdate = true;
        if (!shouldUpdate && node.querySelector) {
          if (node.querySelector("picture")) shouldUpdate = true;
        }
      });
    });
    if (shouldUpdate) updateThemePictures(currentTheme);
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
