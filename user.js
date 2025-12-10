//
// This file is part of the jc-firefox-settings:
// https://github.com/jamescherti/jc-firefox-settings
//
// Distributed under terms of the MIT license.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

// This preference sets the initial paint delay in milliseconds for Firefox’s
// rendering engine. It means Firefox will wait before starting to render the
// content of a web page after receiving the first data from the server. A very
// low value like 1 ms causes Firefox to begin rendering almost immediately,
// which can make pages appear to load faster visually. However, on slow
// connections, this might increase the total loading time due to more frequent
// reflows. Default: 250
user_pref("nglayout.initialpaint.delay", 50);

// Setting the session save interval reduces the frequency with which Firefox
// writes session data (such as open tabs and windows) to disk. This is
// beneficial for the following reasons: Reduced Disk I/O, Improved Performance,
// and Power Efficiency.
user_pref("browser.sessionstore.interval", 40000);

// Enable automatic tab unloading when system memory is low
user_pref("browser.tabs.unloadOnLowMemory", true);

// Disable prefetching of web pages
user_pref("network.prefetch-next", false);

// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);

// The preference network.http.speculative-parallel-limit controls the number of
// speculative (or preemptive) parallel HTTP connections that Firefox is allowed
// to open to a server when the user hovers over or starts interacting with a
// link (e.g., typing in the address bar, or mousing over suggestions).
//
// Firefox uses speculative connections to reduce perceived latency: it opens
// TCP connections before the user actually clicks a link, under the assumption
// that they will visit that site.
//
// Setting this value to 0 disables speculative connections entirely.
user_pref("network.http.speculative-parallel-limit", 0);

// Disable strict tracking protection. I am using extensions such as uBlock
// Origin as an alternative to these protections.

// Enables tracking protection specifically against email tracking elements
// (such as tracking pixels) when Firefox is in Private Browsing mode.
user_pref("privacy.trackingprotection.emailtracking.pbmode.enabled", false);

// Disable enhanced tracking protection for all websites visited while in
// Private Browsing mode, blocking trackers more aggressively than in normal
// mode.
user_pref("privacy.trackingprotection.pbmode.enabled", false);

user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.cryptomining.enabled", false);

// Disable Accessibility Services if unused to reduce memory and CPU usage,
// improve browser responsiveness, and minimize security risks
//
// An example of accessibility services is a **screen reader**, such as **NVDA**
// (NonVisual Desktop Access) or **JAWS** (Job Access With Speech), which reads
// aloud the content on the screen for users with visual impairments.
user_pref("accessibility.force_disabled", 1);

// Recently visited pages are retained in memory to avoid re-parsing, which
// differs from the standard memory cache. This enhances performance when
// navigating with the Back and Forward buttons.
//
// This preference defines the upper limit on the number of such pages stored in
// memory.
user_pref("browser.sessionhistory.max_total_viewers", 4);

// Disable services
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("identity.fxaccounts.enabled", false);  // Disable Firefox Sync

// Disable automatic page translation to improve performance, enhance privacy,
// reduce resource usage, and prevent unwanted translations
user_pref("browser.translation.enable", false);

// user_pref("browser.sessionstore.resume_session_once", true)

// Disable the shortcut for quitting the browser (e.g., Ctrl+Q)
user_pref("browser.quitShortcut.disabled", true);

// Disabling disk cache reduces disk usage and wear, can improve performance on
// slow or limited storage devices.
user_pref("browser.cache.disk.enable", false);

// Allow caching of SSL pages on disk
// user_pref("browser.cache.disk_cache_ssl", true);

// Enable usage of enterprise-installed root certificates
user_pref("security.enterprise_roots.enabled", true);

// UI: Open container tabs on left-click instead of requiring a menu selection
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

// UI: Disable animation for download notifications
user_pref("browser.download.animateNotifications", false);

// UI: Disable displaying:
// "You must enable DRM to play some audio or video on this page."
user_pref("browser.eme.ui.enabled", false);

// UI: Warn the user when quitting with multiple tabs open
user_pref("browser.sessionstore.warnOnQuit", true);

// Disable the fullscreen warning timeout (default: 3000ms)
user_pref("full-screen-api.warning.timeout", 0);

// Prevent Firefox from recommending addons while browsing
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// Prevent Firefox from recommending features while browsing
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Session: Restore only the selected tab on session restore to reduce memory usage
user_pref("browser.sessionstore.restore_on_demand", true);

// Session: Always restore pinned tabs on session restore
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", false);

// Session: Restore the session only once after the browser restarts
// user_pref("browser.sessionstore.resume_session_once", true)

// UI: Prevent closing the browser when the last tab is closed
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Draw browser tabs inside the title bar for a modern UI
user_pref("browser.tabs.drawInTitlebar", true);

// Enable middle-click auto-scrolling feature
user_pref("general.autoScroll", true);

// Disable autoplay for media elements
// user_pref("media.autoplay.enabled", false);  // Deprecated
// (0 = allow, 1 = block audio, 5 = block all).
user_pref("media.autoplay.default", 5);

// Set mouse wheel acceleration factor (default: 10)
user_pref("mousewheel.acceleration.factor", 2);

// Disable mouse wheel acceleration start threshold (default: -1)
user_pref("mousewheel.acceleration.start", 0);

// Set the minimum scroll amount per mouse wheel tick (default: 5)
user_pref("mousewheel.min_line_scroll_amount", 1);

// UI: Set a minimal delay before security dialogs appear
user_pref("security.dialog_enable_delay", 1);

// Move the sidebar to the right side of the window
user_pref("sidebar.position_start", false);

// Enable dark theme based on system settings
user_pref("ui.systemUsesDarkTheme", 1);

// Force websites to use the Light color scheme preference
user_pref("layout.css.prefers-color-scheme.content-override", 1)

// Disable tooltips for toolbar buttons
user_pref("browser.chrome.toolbar_tips", false);

// Enable support for userChrome.css and userContent.css customizations
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Set the minimum width of a tab before it gets clipped
user_pref("browser.tabs.tabClipWidth", 300);

// Enable Firefox's password manager to remember logins
user_pref("signon.rememberSignons", true);

// Disable blocking of potentially unwanted software downloads
// user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);

// Disable blocking of uncommon downloads
// user_pref("browser.safebrowsing.downloads.remote.block_uncommon", true);

// Disable malware protection from Google Safe Browsing
// user_pref("browser.safebrowsing.malware.enabled", false);

// Disable phishing protection from Google Safe Browsing
// user_pref("browser.safebrowsing.phishing.enabled", false);

// Disable Safe Browsing for downloads
// user_pref("browser.safebrowsing.downloads.enabled", false);

// Disable blocking of dangerous URLs via Safe Browsing
// user_pref("browser.safebrowsing.blockedURIs.enabled", false);

// Disable blocking of dangerous file downloads
// user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);

// Disable blocking of dangerous hosts for downloads
// user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);

// Set Safe Browsing remote lookup timeout to 1ms
// user_pref("browser.safebrowsing.downloads.remote.timeout_ms", 1);

/* Hardware acceleration */
// user_pref("media.ffmpeg.vaapi.enabled", true);  // true in order to enable the use of VA-API with FFmpeg
// user_pref("media.ffvpx.enabled", true); // tmp enable | Disable the internal decoders for VP8/VP9
// user_pref("media.hardware-video-decoding.enabled", true);
// user_pref("media.hardware-video-decoding.force-enabled", true);
// user_pref("layers.acceleration.force-enabled", true);
// user_pref("webgl.force-enabled", true);
// user_pref("gfx.webrender.all", true);
// user_pref("gfx.webrender.enabled", true);
// user_pref("webgl.disabled", false);
//user_pref("dom.ipc.processCount", 8);

//--------------------------------------------------------------------------------
/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
//--------------------------------------------------------------------------------
/* 0801: disable location bar using search
 * Don't leak URL typos to a search engine, give an error message instead
 * Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com"
 * [NOTE] This does not affect explicit user action such as using search buttons in the
 * dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo)
 * [SETUP-CHROME] If you don't, or rarely, type URLs, or you use a default search
 * engine that respects privacy, then you probably don't need this ***/
user_pref("keyword.enabled", false);
/* 0802: disable location bar domain guessing
 * domain guessing intercepts DNS "hostname not found errors" and resends a
 * request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
 * via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
 * as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
 * intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
 * and is a security risk (e.g. common typos & malicious sites set up to exploit this) ***/
user_pref("browser.fixup.alternate.enabled", false);
/* 0803: display all parts of the url in the location bar ***/
user_pref("browser.urlbar.trimURLs", false);
/* 0804: disable live search suggestions
 * [NOTE] Both must be true for the location bar to work
 * [SETUP-CHROME] Change these if you trust and use a privacy respecting search engine
 * [SETTING] Search>Provide search suggestions | Show search suggestions in address bar results ***/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
/* 0805: disable location bar making speculative connections [FF56+]
 * [1] https://bugzilla.mozilla.org/1348275 ***/
user_pref("browser.urlbar.speculativeConnect.enabled", false);
/* 0806: disable location bar leaking single words to a DNS provider **after searching** [FF78+]
 * 0=never resolve single words, 1=heuristic (default), 2=always resolve
 * [1] https://bugzilla.mozilla.org/1642623 ***/
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
/* 0807: disable location bar contextual suggestions [FF92+]
 * [SETTING] Privacy & Security>Address Bar>Contextual Suggestions
 * [1] https://blog.mozilla.org/data/2021/09/15/data-and-firefox-suggest/ ***/
user_pref("browser.urlbar.suggest.quicksuggest", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
/* 0808: disable tab-to-search [FF85+]
 * Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest>Search engines ***/
   // user_pref("browser.urlbar.suggest.engines", false);
/* 0810: disable search and form history
 * [SETUP-WEB] Be aware that autocomplete form data can be read by third parties [1][2]
 * [NOTE] We also clear formdata on exit (2803)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember search and form history
 * [1] https://blog.mindedsecurity.com/2011/10/autocompleteagain.html
 * [2] https://bugzilla.mozilla.org/381681 ***/
user_pref("browser.formfill.enable", false);
/* 0811: disable Form Autofill
 * [NOTE] Stored data is NOT secure (uses a JSON file)
 * [NOTE] Heuristics controls Form Autofill on forms without @autocomplete attributes
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.available", false); // [FF57+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
/* 0820: disable coloring of visited links
 * [SETUP-HARDEN] Bulk rapid history sniffing was mitigated in 2010 [1][2]. Slower and more expensive
 * redraw timing attacks were largely mitigated in FF77+ [3]. Using RFP (4501) further hampers timing
 * attacks. Don't forget clearing history on close (2803). However, social engineering [2#limits][4][5]
 * and advanced targeted timing attacks could still produce usable results
 * [1] https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector
 * [2] https://dbaron.org/mozilla/visited-privacy
 * [3] https://bugzilla.mozilla.org/1632765
 * [4] https://earthlng.github.io/testpages/visited_links.html (see github wiki APPENDIX A on how to use)
 * [5] https://lcamtuf.blogspot.com/2016/08/css-mix-blend-mode-is-bad-for-keeping.html ***/
   // user_pref("layout.css.visited_links_enabled", false);

//--------------------------------------------------------------------------------
/*** [SECTION 0100]: STARTUP ***/
//--------------------------------------------------------------------------------
/* 0101: disable default browser check
 * [SETTING] General>Startup>Always check if Firefox is your default browser ***/
user_pref("browser.shell.checkDefaultBrowser", false);
/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared with history (2803, 2804), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 3);
/* 0103: set HOME+NEWWINDOW page
 * about:home=Activity Stream (default, see 0105), custom URL, about:blank
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows ***/
user_pref("browser.startup.homepage", "about:blank");
/* 0104: set NEWTAB page
 * true=Activity Stream (default, see 0105), false=blank page
 * [SETTING] Home>New Windows and Tabs>New tabs ***/
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
/* 0105: disable some Activity Stream items
 * Activity Stream is the default homepage/newtab based on metadata and browsing behavior
 * [SETTING] Home>Firefox Home Content>...  to show/hide what you want ***/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT: false FF89+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]
/* 0106: clear default topsites
 * [NOTE] This does not block you from adding your own ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");

/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
/* 0201: use Mozilla geolocation service instead of Google if permission is granted [FF74+]
 * Optionally enable logging to the console (defaults to false) ***/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
   // user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
/* 0202: disable using the OS's geolocation service ***/
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
/* 0203: disable region updates
 * [1] https://firefox-source-docs.mozilla.org/toolkit/modules/toolkit_modules/Region.html ***/
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [[FF79+]
/* 0204: set search region
 * [NOTE] May not be hidden if Firefox has changed your settings due to your region (0203) ***/
   // user_pref("browser.search.region", "US"); // [HIDDEN PREF]
/* 0210: set preferred language for displaying pages
 * [SETTING] General>Language and Appearance>Language>Choose your preferred language...
 * [TEST] https://addons.mozilla.org/about ***/
user_pref("intl.accept_languages", "en-US, en");
/* 0211: use US English locale regardless of the system locale
 * [SETUP-WEB] May break some input methods e.g xim/ibus for CJK languages [1]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=867501,1629630 ***/
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]

//--------------------------------------------------------------------------------
/** TELEMETRY ***/
//--------------------------------------------------------------------------------
/* 0330: disable new data submission [FF41+]
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0331: disable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical... data ***/
user_pref("datareporting.healthreport.uploadEnabled", false);
/* 0332: disable telemetry
 * The "unified" pref affects the behaviour of the "enabled" pref
 * - If "unified" is false then "enabled" controls the telemetry module
 * - If "unified" is true then "enabled" only controls whether to record extended data
 * [NOTE] "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease (true) or release builds (false) [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
/* 0333: disable Telemetry Coverage
 * [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/ ***/
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
/* 0334: disable PingCentre telemetry (used in several System Add-ons) [FF57+]
 * Defense-in-depth: currently covered by 0331 ***/
user_pref("browser.ping-centre.telemetry", false);

//--------------------------------------------------------------------------------
/** STUDIES ***/
//--------------------------------------------------------------------------------
/* 0340: disable Studies
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies ***/
user_pref("app.shield.optoutstudies.enabled", false);
/* 0341: disable Normandy/Shield [FF60+]
 * Shield is a telemetry system that can push and test "recipes"
 * [1] https://mozilla.github.io/normandy/ ***/
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
/* 0350: disable Crash Reports ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
   // user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
/* 0351: enforce no submission of backlogged Crash Reports [FF58+]
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports  ***/
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]

/** OTHER ***/
/* 0360: disable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
/* 0361: disable Network Connectivity checks [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 ***/
user_pref("network.connectivity-service.enabled", false);
/* 0362: enforce disabling of Web Compatibility Reporter [FF56+]
 * Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla ***/
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
