import assert from "node:assert/strict";

const baseUrl = process.env.SITE_URL ?? "http://localhost:3000";

async function fetchHtml(path) {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.ok, true, `${path} returned ${response.status}`);
  return response.text();
}

function readAttribute(html, selector, attribute) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedAttribute = attribute.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<[^>]+${escapedSelector}[^>]+${escapedAttribute}="([^"]+)"`,
  );
  return html.match(pattern)?.[1] ?? null;
}

const readingWithTracking = await fetchHtml("/reading?utm_source=test#read");
assert.equal(
  readAttribute(readingWithTracking, 'rel="canonical"', "href"),
  "https://denniskigen.com/reading",
  "canonical URL should ignore query strings and hashes",
);
assert.equal(
  readAttribute(readingWithTracking, 'property="og:url"', "content"),
  "https://denniskigen.com/reading",
  "og:url should ignore query strings and hashes",
);

const bookmarks = await fetchHtml("/bookmarks");
assert.equal(
  bookmarks.includes("https://www.arcana.computer/industry/being-productive"),
  false,
  "bookmarks page should not include the dead Arcana URL",
);
assert.equal(
  bookmarks.includes(
    "https://web.archive.org/web/20240623185547/https://arcana.computer/industry/being-productive",
  ),
  true,
  "bookmarks page should link to the archived Being Productive article",
);

const home = await fetchHtml("/");
assert.equal(
  readAttribute(home, 'name="color-scheme"', "content"),
  "light dark",
  "home page should advertise light and dark color schemes",
);
