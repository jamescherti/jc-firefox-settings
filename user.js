//
// This file is part of the jc-firefox-settings:
// URL: https://github.com/jamescherti/jc-firefox-settings
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

// Disabling built-in tracking protection
//
// Relying on uBlock Origin instead of Firefox's built-in protections is an
// effective configuration:
// - Firefox uses list-based blocking provided by Disconnect for its Enhanced
//   Tracking Protection. uBlock Origin uses its own extensive filter lists,
//   such as EasyPrivacy and Peter Lowe's list. Running both features
//   simultaneously forces your browser to evaluate network requests twice
//   against similar rules.
// - uBlock Origin is optimized for performance. Allowing it to handle all
//   content blocking on its own reduces CPU and memory overhead compared to
//   running two overlapping blocking engines.
// - The default filter lists maintained by the uBlock Origin community are
//   generally more comprehensive and updated much more frequently than the
//   lists bundled with Firefox.
//
// Benefit: Disabling built-in tracking protection prevents redundant filtering
// when a dedicated extension like uBlock Origin is used, reducing CPU and
// memory overhead.
//
// Tradeoff: If the extension is disabled or fails, the browser lacks native
// fallback protection against tracking.
user_pref("network.cookie.cookieBehavior", 0);
user_pref("privacy.trackingprotection.emailtracking.enabled", false);
user_pref("privacy.trackingprotection.emailtracking.pbmode.enabled", false);
user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.trackingprotection.socialtracking.enabled", false);

// This preference sets the initial paint delay in milliseconds for Firefox's
// rendering engine. It means Firefox will wait before starting to render the
// content of a web page after receiving the first data from the server. A very
// low value like 1 ms causes Firefox to begin rendering almost immediately,
// which can make pages appear to load faster visually. However, on slow
// connections, this might increase the total loading time due to more frequent
// reflows.
//
// Benefit: Adjusting initial paint delay can make page rendering feel more
// immediate on fast connections.
//
// Tradeoff: Setting a hard limit forces layout thrashing on complex pages,
// increasing CPU usage and potentially extending total load time.
user_pref("nglayout.initialpaint.delay", 5);

// Enable automatic tab unloading when system memory is low.
//
// Benefit: Reduces total RAM consumption and prevents system crashes by
// terminating inactive tab processes when memory is constrained.
//
// Tradeoff: Switching back to an unloaded tab requires a full page reload,
// consuming network bandwidth and delaying access.
user_pref("browser.tabs.unloadOnLowMemory", false);

// Disable the hover picture preview.
//
// Benefit: Reduces memory consumption and prevents unnecessary overhead used to
// generate thumbnail previews for background tabs.
//
// Tradeoff: Users lose the visual context of what a background tab contains
// before clicking on it.
user_pref("browser.tabs.hoverPreview.enabled", false);

// Disable Accessibility Services. An example of accessibility services is a
// screen reader.
//
// Benefit: Frees up memory and CPU cycles that would otherwise be allocated to
// monitoring the browser UI for screen readers and automation tools.
//
// Tradeoff: Completely breaks functionality for users who rely on assistive
// technologies or external UI automation scripts.
user_pref("accessibility.force_disabled", 1);

// Recently visited pages are retained in memory to avoid re-parsing, which
// differs from the standard memory cache. This enhances performance when
// navigating with the Back and Forward buttons.
//
// This preference defines the upper limit on the number of such pages stored in
// memory.
//
// NOTE: Commented out. This controls the Back-Forward Cache (bfcache).
// Hardcoding it to 4 overrides Firefox's ability to dynamically scale this
// value based on your total system RAM, potentially limiting performance when
// navigating back and forth.
//
// Benefit: Hardcoding the Back-Forward Cache limit ensures a predictable amount
// of memory is allocated for fast backward/forward navigation.
//
// Tradeoff: Overrides dynamic scaling, potentially wasting RAM on high-memory
// systems or causing memory exhaustion on low-memory systems.
//
// TODO?
// user_pref("browser.sessionhistory.max_total_viewers", 4);

// Disable services: Pocket and screenshot
//
// Benefit: Disabling unused bundled services like Pocket and Screenshots
// reduces background network requests and UI clutter.
//
// Tradeoff: Users lose native access to read-it-later functionality and
// built-in screenshot tools, requiring third-party extensions for similar
// features.
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);

// Disable Pocket completely via API (Add): You disabled the Pocket extension,
// but you can also stop the internal API from initializing.
//
// Benefit: Completely disables network connections related to Pocket discovery
// features, enhancing privacy and saving bandwidth.
//
// Tradeoff: Prevents the new tab page from displaying curated news or article
// recommendations.
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);

// user_pref("identity.fxaccounts.enabled", true);  // Enable Firefox Sync

// Disable automatic page translation to improve performance, enhance privacy,
// reduce resource usage, and prevent unwanted translations.
//
// Benefit: Prevents the browser from downloading translation models and running
// local translation processes, saving resources.
//
// Tradeoff: Users must manually translate foreign language web pages using
// external tools or extensions.
user_pref("browser.translations.enable", false);

// The memory cache is also fully utilized for the fastest possible asset
// retrieval. Add these lines:
//
// Benefit: Storing web assets in RAM drastically reduces page load times and
// minimizes disk read/write operations.
//
// Tradeoff: Increases the overall memory footprint of the browser, which can
// impact system performance on machines with limited RAM.
user_pref("browser.cache.memory.enable", true);

// A value of -1 lets Firefox dynamically decide the maximum memory cache size
// based on your available system RAM.
//
// Benefit: Allows the browser to automatically scale cache usage based on
// available system resources.
//
// Tradeoff: Can result in high memory consumption if the browser miscalculates
// available RAM on shared systems.
user_pref("browser.cache.memory.capacity", -1);

// Allow larger assets Because the memory cache is enabled (like high-resolution
// images or large scripts) to be stored in RAM rather than falling back to the
// disk. The default limit is often too small for modern web pages.
//
// Benefit: Prevents large modern web assets from overflowing to slower disk
// storage.
//
// Tradeoff: Can cause rapid cache eviction of smaller files if a few large
// assets consume the entire cache capacity.
user_pref("browser.cache.memory.max_entry_size", 7000);

// Disabling the disk cache forces Firefox to re-download static assets (images,
// CSS, scripts) every time you launch the browser. The RAM cache is cleared on
// exit, meaning your initial page loads will always be slower and consume more
// bandwidth.
//
// Benefit: Keeping the disk cache enabled allows static web assets to be reused
// across browsing sessions, saving bandwidth and improving load times.
//
// Tradeoff: Consumes local storage space and can cause disk I/O bottlenecks on
// slower mechanical hard drives.
user_pref("browser.cache.disk.enable", true);

// Allow caching of SSL pages on disk
//
// Benefit: Improves load times for frequently visited HTTPS sites by storing
// their static assets locally.
//
// Tradeoff: Poses a minor security risk if an unauthorized user gains access to
// the local disk cache containing encrypted assets.
user_pref("browser.cache.disk_cache_ssl", true);

// Limit disk cache size. Excessive cache read/write operations can cause lag on
// mechanical hard drives (HDD). Disabling smart sizing and setting a hard limit
// (e.g., 256MB) reduces disk I/O.
//
// Benefit: Hard-limiting the disk cache prevents the browser from using
// excessive storage and minimizes fragmentation on mechanical drives.
//
// Tradeoff: A smaller cache results in more frequent cache evictions, forcing
// the browser to re-download assets more often.
// user_pref("browser.cache.disk.capacity", 256000);

// Enable usage of enterprise-installed root certificates
//
// Benefit: Allows Firefox to function smoothly in corporate environments that
// use custom SSL inspection or internal root certificates without displaying
// security errors.
//
// Tradeoff: Diminishes Firefox's strict certificate pinning by trusting
// external authorities, potentially allowing local software to intercept
// encrypted traffic.
user_pref("security.enterprise_roots.enabled", true);

// UI: Open container tabs on left-click instead of requiring a menu selection
//
// Benefit: Provides faster access to isolated container tabs, improving
// workflow for users managing multiple accounts.
//
// Tradeoff: Alters the default behavior of the new tab button, which may
// confuse users expecting a standard non-containerized tab.
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

// Session: Restore only the selected tab on session restore to reduce memory
// usage
//
// Benefit: Drastically reduces memory consumption and startup time by only
// loading tabs when the user explicitly clicks on them.
//
// Tradeoff: Background tabs will not load or receive notifications until
// manually activated.
user_pref("browser.sessionstore.restore_on_demand", true);

// Session: Always restore pinned tabs on session restore
//
// Benefit: Prevents pinned tabs from consuming resources at startup if
// disabled, adhering to the on-demand loading behavior.
//
// Tradeoff: Pinned web applications (like messaging or email) will not
// automatically connect and sync upon browser launch.
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", false);

// Session: Restore the session only once after the browser restarts
//
// Benefit: Permits a single-use session recovery without altering the
// persistent startup configuration.
//
// Tradeoff: Manual activation is required, and unexpected crashes might not
// correctly toggle the flag for next launch.
// TODO?
// user_pref("browser.sessionstore.resume_session_once", true)

// Draw browser tabs inside the title bar for a modern UI
//
// Benefit: Maximizes vertical screen space for web content by merging the
// window title bar with the tab bar.
//
// Tradeoff: Can cause dragging issues or visual bugs on some Linux window
// managers that do not handle client-side decorations well.
user_pref("browser.tabs.drawInTitlebar", true);

// Enable middle-click auto-scrolling feature
//
// Benefit: Allows users to scroll through long documents by clicking the middle
// mouse button and moving the cursor.
//
// Tradeoff: Accidental middle clicks can trigger unintended scrolling behavior,
// causing disorientation on the page.
user_pref("general.autoScroll", true);

// Disable autoplay for media elements
// user_pref("media.autoplay.enabled", false);  // Deprecated
// (0 = allow, 1 = block audio, 5 = block all).
//
// Benefit: Prevents noisy and bandwidth-heavy videos from playing unexpectedly,
// saving data and providing a quieter browsing experience.
//
// Tradeoff: Breaks expected functionality on media-heavy sites, requiring users
// to manually click to start videos or audio streams.
user_pref("media.autoplay.default", 5);

// UI: Set a minimal delay before security dialogs appear
//
// Benefit: Decreases the waiting time before users can interact with security
// prompts, speeding up navigation.
//
// Tradeoff: Reduces the effectiveness of the anti-clickjacking protection
// designed to prevent users from accidentally clicking malicious prompts.
// TODO? increase to 2 -> 1000?
user_pref("security.dialog_enable_delay", 1);

// Move the sidebar to the right side of the window
//
// Benefit: Shifts the sidebar to the right, aligning it with scrollbars and
// keeping the main reading area closer to the left edge of the screen.
//
// Tradeoff: Violates common UI conventions where navigation and sidebars are
// traditionally located on the left.
user_pref("sidebar.position_start", false);

// Enable dark theme based on system settings
//
// Benefit: Creates a consistent visual experience that matches the host OS and
// reduces eye strain in low-light environments.
//
// Tradeoff: May cause visual inconsistencies if certain browser elements or
// add-ons do not support dark themes properly.
user_pref("ui.systemUsesDarkTheme", 1);

// Force websites to use the Light color scheme preference
// (1) forces all websites into light mode. If you want websites to match your
// dark browser UI, change the content-override value to 0 (Dark) or 2
// (Auto/System).
//
// Benefit: Ensures maximum readability and consistency across all websites,
// overriding poorly implemented custom dark modes.
//
// Tradeoff: Negates the benefits of dark mode on sites that support it
// natively, leading to bright flashes in dim environments.
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// Disable tooltips for toolbar buttons
//
// Benefit: Removes visual noise by preventing hover text boxes from appearing
// over browser interface elements.
//
// Tradeoff: Makes it difficult for new users to identify the function of
// ambiguous icons or customized extensions.
user_pref("browser.chrome.toolbar_tips", false);

// Enable support for userChrome.css and userContent.css customizations
//
// Benefit: Grants advanced users total control over the browser's user
// interface and webpage rendering via custom CSS files.
//
// Tradeoff: Custom CSS can break browser UI functionality during updates,
// requiring manual maintenance to keep the modifications working.
// This is required for ./userChrome.css that is distributed with
// jc-firefox-settings.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Set the minimum width of a tab before it gets clipped
//
// Benefit: Ensures that tabs remain wide enough to read the page title, even
// when many tabs are open.
//
// Tradeoff: Forces the browser to use a scrollable tab bar sooner, making it
// harder to see all open tabs simultaneously.
user_pref("browser.tabs.tabClipWidth", 300);

// Enable Firefox's password manager to remember logins
//
// Benefit: Integrates credential management directly into the browser, offering
// seamless login autofill without third-party tools.
//
// Tradeoff: Storing passwords within the browser can be a security risk if the
// local profile is compromised or a master password is not set.
user_pref("signon.rememberSignons", false);

// Disable blocking of potentially unwanted software downloads
//
// Benefit: Prevents false positives from blocking legitimate but uncommon
// software downloads.
//
// Tradeoff: Leaves the user exposed to installing bundled adware or potentially
// unwanted programs.
// TODO
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);

// Disable blocking of uncommon downloads
//
// Benefit: Bypasses the warning screen for niche or newly compiled binaries.
//
// Tradeoff: Increases the risk of executing untrusted or experimental files
// that have not established a safe reputation.
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", true);

// Disable malware protection from Google Safe Browsing
//
// Benefit: Prevents Firefox from sending browsing metadata to Google servers
// for URL verification, improving privacy.
//
// Tradeoff: Removes a significant layer of defense against known malicious
// domains and drive-by downloads.
user_pref("browser.safebrowsing.malware.enabled", true);

// Disable phishing protection from Google Safe Browsing
//
// Benefit: Stops network requests to third-party reputation services when
// visiting suspicious sites.
//
// Tradeoff: Leaves the user vulnerable to credential harvesting and deceptive
// websites masquerading as legitimate services.
// TODO
user_pref("browser.safebrowsing.phishing.enabled", true);

// Disable Safe Browsing for downloads
//
// Benefit: Ensures downloaded files are not scanned against remote signature
// databases, preserving file privacy.
//
// Tradeoff: Allows known malicious payloads to be downloaded without any
// browser intervention.
user_pref("browser.safebrowsing.downloads.enabled", true);

// Disable blocking of dangerous URLs via Safe Browsing
//
// Benefit: Reduces network overhead by not checking URLs against the blocked
// list.
//
// Tradeoff: Users will not be stopped from navigating to verified attack
// vectors.
user_pref("browser.safebrowsing.blockedURIs.enabled", true);

// Disable blocking of dangerous file downloads
//
// Benefit: Grants the user complete autonomy over all file downloads regardless
// of safety classification.
//
// Tradeoff: Increases the likelihood of system compromise if the user lacks
// external antivirus protection.
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", true);

// Set Safe Browsing remote lookup timeout to 1ms
//
// Benefit: Effectively neutralizes remote lookups by forcing them to timeout
// immediately, ensuring fast page loads.
//
// Tradeoff: Bypasses security checks entirely, as the network request cannot
// resolve in 1ms.
// user_pref("browser.safebrowsing.downloads.remote.timeout_ms", 1);
user_pref("browser.safebrowsing.downloads.remote.timeout_ms", 15000);

// Adjust Content Notification Interval: This setting tells Firefox how often to
// redraw the page while it is still downloading. Delaying the redraw slightly
// can reduce CPU load and layout recalculations on heavy pages.
//
// NOTE: Commented out. These are obsolete settings from the dial-up era. They
// have no positive effect on modern network stacks or rendering engines.
// Benefit: Adjusting redraw intervals could historically reduce CPU spikes on very slow network connections by batching rendering updates.
// Tradeoff: These settings are obsolete for modern networks and engines; keeping them can interfere with Firefox's current optimized layout pacing.
// TODO
user_pref("content.notify.ontimer", true);
user_pref("content.notify.interval", 100000);  // Time in microseconds.

//--------------------------------------------------------------------------------
/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
//--------------------------------------------------------------------------------
/* 0801: location bar using search
 * Don't leak URL typos to a search engine, give an error message instead
 * Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com"
 * [NOTE] This does not affect explicit user action such as using search buttons in the
 * dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo)
 * [SETUP-CHROME] If you don't, or rarely, type URLs, or you use a default search
 * engine that respects privacy, then you probably don't need this ***/
// Benefit: Prevents typos in the address bar from being sent to a search engine, avoiding unintended data leaks.
// Tradeoff: Disables the convenience of directly searching for terms from the address bar without a specific keyword shortcut.
// user_pref("keyword.enabled", false);

/* 0802: disable location bar domain guessing
 * domain guessing intercepts DNS "hostname not found errors" and resends a
 * request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
 * via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
 * as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
 * intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
 * and is a security risk (e.g. common typos & malicious sites set up to exploit this) ***/
//
// Benefit: Stops Firefox from silently appending extensions to failed DNS
// requests, mitigating privacy leaks and preventing connections to
// typo-squatting domains.
//
// Tradeoff: Users must type the exact Fully Qualified Domain Name for internal
// network resources or incomplete URLs.
user_pref("browser.fixup.alternate.enabled", false);
/* 0803: display all parts of the url in the location bar ***/
//
// Benefit: Ensures users can see the exact and complete URL, including the
// scheme, aiding in verifying site security.
//
// Tradeoff: Adds visual clutter to the address bar by exposing technical
// protocol prefixes that most users ignore.
user_pref("browser.urlbar.trimURLs", false);
/* 0804: disable live search suggestions
 * [NOTE] Both must be true for the location bar to work
 * [SETUP-CHROME] Change these if you trust and use a privacy respecting search engine
 * [SETTING] Search>Provide search suggestions | Show search suggestions in address bar results ***/
//
// Benefit: Prevents keystrokes from being transmitted to a search provider in
// real-time, significantly improving privacy.
//
// Tradeoff: Users lose the ability to see contextual search suggestions or
// autocomplete options while typing queries.
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

/* 0805: disable location bar making speculative connections [FF56+]
 * [1] https://bugzilla.mozilla.org/1348275 ***/
//
// Benefit: Stops the browser from pre-connecting to sites based on address bar
// input, saving bandwidth and preventing accidental information disclosure.
//
// Tradeoff: Increases the perceived load time when a user finally presses
// Enter, as the connection must be established from scratch.
user_pref("browser.urlbar.speculativeConnect.enabled", false);

/* 0806: disable location bar leaking single words to a DNS provider **after searching** [FF78+]
 * 0=never resolve single words, 1=heuristic (default), 2=always resolve
 * [1] https://bugzilla.mozilla.org/1642623 ***/
//
// Benefit: Prevents the browser from sending single-word search queries to
// local DNS resolvers, securing query privacy.
//
// Tradeoff: May break the automatic discovery of local intranet hostnames that
// match single words.
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

/* 0807: disable location bar contextual suggestions [FF92+]
 * [SETTING] Privacy & Security>Address Bar>Contextual Suggestions
 * [1] https://blog.mozilla.org/data/2021/09/15/data-and-firefox-suggest/ ***/
//
// Benefit: Disables Mozilla's contextual and sponsored suggestions, preventing
// local browsing data from triggering targeted ads or external requests.
//
// Tradeoff: Eliminates potentially useful quick links to external reference
// material directly in the address bar.
user_pref("browser.urlbar.suggest.quicksuggest", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

/* 0808: disable tab-to-search [FF85+]
 * Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest>Search engines ***/
//
// Benefit: Prevents the address bar from displaying dedicated search engine
// chips, maintaining a minimal interface.
//
// Tradeoff: Requires users to rely entirely on keyword shortcuts to perform
// searches across different engines.
user_pref("browser.urlbar.suggest.engines", false);

/* 0810: disable search and form history
 * [SETUP-WEB] Be aware that autocomplete form data can be read by third parties [1][2]
 * [NOTE] We also clear formdata on exit (2803)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember search and form history
 * [1] https://blog.mindedsecurity.com/2011/10/autocompleteagain.html
 * [2] https://bugzilla.mozilla.org/381681 ***/
//
// Benefit: Ensures that sensitive data typed into web forms is not stored
// locally and exposed to third-party scripts.
//
// Tradeoff: Users must manually re-enter data into repetitive fields across
// different websites.
user_pref("browser.formfill.enable", false);

/* 0811: disable Form Autofill
 * [NOTE] Stored data is NOT secure (uses a JSON file)
 * [NOTE] Heuristics controls Form Autofill on forms without @autocomplete attributes
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
//
// Benefit: Disables insecure local storage of addresses and credit cards,
// protecting personal information from physical or local exploit access.
//
// Tradeoff: Eliminates the convenience of automatically filling checkout and
// registration forms.
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.available", false); // [FF57+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]

//--------------------------------------------------------------------------------
/*** [SECTION 0100]: STARTUP ***/
//--------------------------------------------------------------------------------
/* 0101: disable default browser check
 * [SETTING] General>Startup>Always check if Firefox is your default browser ***/
//
// Benefit: Prevents annoying prompt dialogs on startup if the user
// intentionally uses multiple browsers without setting Firefox as default.
//
// Tradeoff: If a different application hijacks the default browser setting,
// Firefox will not alert the user.
user_pref("browser.shell.checkDefaultBrowser", false);

/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared with history (2803, 2804), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
//
// Benefit: Restoring the previous session allows users to pick up exactly where
// they left off without losing open tabs.
//
// Tradeoff: Can slow down browser startup if the previous session contained a
// large number of heavy tabs.
user_pref("browser.startup.page", 3);

/* 0103: set HOME+NEWWINDOW page
 * about:home=Activity Stream (default, see 0105), custom URL, about:blank
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows ***/
//
// Benefit: Setting the homepage to blank ensures the browser opens instantly
// without fetching unnecessary network resources.
//
// Tradeoff: Removes quick access to search engines or frequently visited sites
// from the initial window.
user_pref("browser.startup.homepage", "about:blank");

/* 0104: set NEWTAB page
 * true=Activity Stream (default, see 0105), false=blank page
 * [SETTING] Home>New Windows and Tabs>New tabs ***/
//
// Benefit: Disabling the new tab page and its preloading saves CPU cycles and
// memory by displaying a completely blank canvas.
//
// Tradeoff: Eliminates visual shortcuts, recent history, and built-in search
// functionality from newly opened tabs.
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
/* 0201: use Mozilla geolocation service instead of Google if permission is granted [FF74+]
 * Optionally enable logging to the console (defaults to false) ***/
// Benefit: Directs geolocation requests to Mozilla's open service instead of Google's, improving privacy by avoiding Google data collection.
// Tradeoff: Mozilla's location service may be less accurate than Google's in certain rural or less-mapped areas.
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]

/* 0202: disable using the OS's geolocation service ***/
//
// Benefit: Prevents the browser from bypassing its own privacy controls by
// querying the operating system's native geolocation APIs.
//
// Tradeoff: Reduces location accuracy, relying entirely on network-based IP
// estimation rather than hardware GPS or Wi-Fi scanning.
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]

/* 0203: disable region updates
 * [1] https://firefox-source-docs.mozilla.org/toolkit/modules/toolkit_modules/Region.html ***/
//
// Benefit: Disables automatic region updates, preventing the browser from
// phoning home to check the user's physical location.
//
// Tradeoff: Search engines and localized features may default to incorrect
// geographic settings.
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [[FF79+]

/* 0204: set search region
 * [NOTE] May not be hidden if Firefox has changed your settings due to your region (0203) ***/
// Benefit: Hardcoding the search region ensures consistent search results
// regardless of physical travel.
//
// Tradeoff: Users may receive irrelevant local results if they actually need
// region-specific data.
// TODO?
// user_pref("browser.search.region", "US"); // [HIDDEN PREF]

/* 0210: set preferred language for displaying pages
 * [SETTING] General>Language and Appearance>Language>Choose your preferred language...
 * [TEST] https://addons.mozilla.org/about ***/
//
// Benefit: Standardizing the accept-language header to US English mitigates
// fingerprinting based on unique locale configurations.
//
// Tradeoff: Websites will default to English, requiring bilingual users to
// manually switch languages on foreign sites.
user_pref("intl.accept_languages", "en-US, en");

/* 0211: use US English locale regardless of the system locale
 * [SETUP-WEB] May break some input methods e.g xim/ibus for CJK languages [1]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=867501,1629630 ***/
//
// Benefit: Forces JavaScript APIs to return US English formats, preventing
// scripts from identifying the user's true system locale.
//
// Tradeoff: Can break web applications that rely on local date, time, or
// currency formatting.
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]

//--------------------------------------------------------------------------------
/** TELEMETRY ***/
//--------------------------------------------------------------------------------
/* 0330: disable new data submission [FF41+]
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
// Benefit: Completely disables the policy engine that governs data submission,
// ensuring no telemetry is uploaded.
//
// Tradeoff: Mozilla receives no performance or crash data to help improve the
// browser's stability.
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/* 0331: disable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical... data ***/
// Benefit: Stops the browser from collecting and sending hardware and
// performance health metrics to Mozilla.
//
// Tradeoff: Reduces the diagnostic data available to developers for fixing
// widespread browser performance issues.
user_pref("datareporting.healthreport.uploadEnabled", false);

/* 0332: disable telemetry
 * The "unified" pref affects the behaviour of the "enabled" pref
 * - If "unified" is false then "enabled" controls the telemetry module
 * - If "unified" is true then "enabled" only controls whether to record extended data
 * [NOTE] "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease (true) or release builds (false) [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
//
// Benefit: Disabling all telemetry endpoints prevents the browser from silently
// transmitting usage habits and technical data in the background.
//
// Tradeoff: Contributes to a smaller statistical sample size for Mozilla,
// potentially leading to decisions that do not account for your use case.
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
// Benefit: Opts out of coverage telemetry, closing another avenue where Mozilla
// collects data on feature usage.
//
// Tradeoff: Has no functional tradeoff for the user, but deprives Mozilla of UI
// interaction data.
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");

/* 0334: disable PingCentre telemetry (used in several System Add-ons) [FF57+]
 * Defense-in-depth: currently covered by 0331 ***/
// Benefit: Blocks PingCentre telemetry from system add-ons, ensuring even
// bundled extensions respect privacy settings.
//
// Tradeoff: May cause minor console errors if system add-ons attempt to phone
// home and fail.
user_pref("browser.ping-centre.telemetry", false);

//--------------------------------------------------------------------------------
/** STUDIES ***/
//--------------------------------------------------------------------------------
/* 0340: disable Studies
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies ***/
//
// Benefit: Prevents Mozilla from remotely installing experimental features or
// altering browser settings for A/B testing.
//
// Tradeoff: Users miss out on early access to new performance optimizations or
// UI features.
user_pref("app.shield.optoutstudies.enabled", false);

/* 0341: disable Normandy/Shield [FF60+]
 * Shield is a telemetry system that can push and test "recipes"
 * [1] https://mozilla.github.io/normandy/ ***/
//
// Benefit: Completely disables the Normandy system, protecting against remote
// configuration changes or hotfixes being pushed without consent.
//
// Tradeoff: The browser cannot receive out-of-band security fixes or remote
// mitigation for broken add-ons.
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
/* 0350: disable Crash Reports ***/
//
// Benefit: Ensures that memory dumps and crash reports, which may contain
// sensitive personal data, are never uploaded.
//
// Tradeoff: Makes it harder for developers to identify and patch the specific
// bugs causing browser crashes.
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]

/* 0351: enforce no submission of backlogged Crash Reports [FF58+]
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports  ***/
//
// Benefit: Guarantees old, unsubmitted crash reports are not accidentally sent
// in bulk at a later time.
//
// Tradeoff: Reduces the overall volume of crash telemetry Mozilla uses to
// identify systemic issues.
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]

/** OTHER ***/
/* 0360: disable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy ***/
// Note: Disabling captive portal detection prevents the browser from
// automatically routing to login pages on public Wi-Fi networks, requiring
// manual IP navigation to authenticate.
//
// Benefit: Prevents the browser from constantly pinging external servers to
// check for internet connectivity, reducing background network noise.
//
// Tradeoff: The browser will not automatically route to login pages on public
// Wi-Fi networks, requiring manual IP navigation to authenticate.
// user_pref("captivedetect.canonicalURL", "");

// user_pref("network.captive-portal-service.enabled", false); // [FF52+]
/* 0361: disable Network Connectivity checks [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 ***/
// Note: Disabling captive portal detection prevents the browser from
// automatically routing to login pages on public Wi-Fi networks, requiring
// manual IP navigation to authenticate.
//
// Benefit: Stops Firefox from making periodic connections to Mozilla servers to
// verify DNS and network status.
//
// Tradeoff: Firefox may fail to gracefully handle network transitions, such as
// switching from Wi-Fi to a VPN.
// user_pref("network.connectivity-service.enabled", false);

/* 0362: enforce disabling of Web Compatibility Reporter [FF56+]
 * Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla ***/
//
// Benefit: Disables the site issue reporter, eliminating a bundled extension
// and a potential source of accidental data submission.
//
// Tradeoff: Removes the easy UI button for reporting broken websites to Mozilla
// developers.
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]

/* Hardware acceleration */

// I would remove this from a general-purpose optimized configuration.
//
// Current Firefox defines the pref's default as false, because it is a
// forcing/testing-style control rather than a normal user performance setting.
// Firefox's graphics code still evaluates GPU capability, blocklisting, and
// fallback paths. Mozilla's WebRender documentation specifically describes
// gfx.webrender.all as a way to force WebRender, and recommends verifying the
// resulting compositor in about:support.
//
// For an older GPU, forcing WebRender is especially something that should be
// justified by testing rather than placed in a generic optimization file.
//
// Benefit: Forces the activation of WebRender globally, ignoring GPU capability
// checks and blocklists.
//
// Tradeoff: Can cause severe visual artifacts, crashes, or high CPU usage if
// the underlying graphics driver is unsupported or buggy.
//
// NOTE: Disabled. Forcing WebRender globally bypasses Mozilla's hardware
// capability checks and blocklists. On systems with legacy or unsupported GPU
// drivers, this causes high CPU overhead, frame drops, and graphical lag.
// user_pref("gfx.webrender.all", true);

// Recent versions of Firefox require the force flag for VA-API to function
// correctly on NVIDIA hardware.
//
// Benefit: Shifts video decoding workloads from the CPU to the GPU, reducing
// power consumption and improving battery life.
//
// Tradeoff: May result in a black screen or video playback errors if the GPU
// driver lacks proper support for the specific video codec.
user_pref("media.hardware-video-decoding.enabled", true);

// Necessary for efficient buffer sharing on Linux Flatpak environments
//
// This is recommended for Flatpak on Linux. It allows the GPU and the browser
// to share memory buffers directly without copying data back and forth,
// reducing CPU overhead.
//
// TODO: Testing without this on intel. It seems to cause bugs.
//
// Benefit: Enables direct memory sharing between the GPU and browser on Linux,
// eliminating inefficient data copying and reducing CPU overhead.
//
// Tradeoff: Can cause visual corruption or graphical artifacts on certain
// Wayland or X11 configurations.
// user_pref("widget.dmabuf.force-enabled", true);

// -----------------------------------------------------------------------------
// CPU OVERHEAD REDUCTION
// -----------------------------------------------------------------------------
// Disable the built-in spell checker to save CPU cycles and RAM.
//
// Benefit: Disabling the built-in spell checker saves CPU cycles and RAM by not
// parsing text inputs against a dictionary in real-time.
//
// Tradeoff: Users must rely on external tools or careful typing, as misspelled
// words will no longer be highlighted in text boxes.
user_pref("layout.spellcheckDefault", 0);

// -----------------------------------------------------------------------------
// UI
// -----------------------------------------------------------------------------
// Enable TCP Fast Open to reduce latency for repeat connections
//
// NOTE: Commented out. TCP Fast Open (TFO) can theoretically reduce latency,
// but it is notoriously unstable. Many routers, middleboxes, and ISPs drop TFO
// packets, which leads to connection timeouts and broken websites. It is safer
// to remove this.
//
// Benefit: Reduces connection latency by allowing data exchange during the
// initial TCP handshake, speeding up subsequent requests. Tradeoff: Highly
// unstable due to middlebox and ISP interference, frequently leading to dropped
// packets and failed page loads. user_pref("network.tcp.tcp_fastopen_enable",
// true). Makes the browser feel more responsive and snappy by eliminating
// artificial delays for UI element transitions.
//
// Tradeoff: Results in abrupt visual changes that can make the interface feel
// jarring or less polished.
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Disable tab opening and closing animations
//
// Benefit: Decreases the time required to open or close a tab, improving
// workflow speed for power users.
//
// Tradeoff: Removes visual cues that help users track where a tab originated or
// went.
user_pref("browser.tabs.animate", false);

// UI: Disable animation for download notifications
//
// Benefit: Disabling download animations reduces UI rendering spikes and keeps
// the interface strictly functional.
//
// Tradeoff: The user loses the visual cue that a download has successfully
// completed.
user_pref("browser.download.animateNotifications", false);

// UI: Disable displaying:
// "You must enable DRM to play some audio or video on this page."
//
// Benefit: Prevents annoying DRM warning banners from cluttering the top of the
// screen when visiting media sites without DRM enabled.
//
// Tradeoff: Users may be confused as to why premium video content silently
// fails to play.
user_pref("browser.eme.ui.enabled", true);

// Disable the fullscreen warning timeout (default: 3000ms)
//
// Benefit: Eliminates the delayed warning overlay when a video goes full
// screen, providing an uninterrupted viewing experience.
//
// Tradeoff: Removes a security feature designed to prevent malicious sites from
// trapping users in a fake full-screen environment.
user_pref("full-screen-api.warning.timeout", 0);

// This prevents Firefox from spending rendering resources calculating and
// drawing temporary boxes while waiting for images to download.
// Note: Disabling placeholders stops the rendering engine from reserving
// physical space for images before they download. This causes severe layout
// shifts as the page continuously redraws around newly loaded media.
//
// Benefit: Prevents the browser from spending rendering resources calculating
// and drawing temporary boxes while waiting for images to download.
//
// Tradeoff: Disabling placeholders stops the rendering engine from reserving
// physical space, causing severe layout shifts as the page continuously
// redraws.
// user_pref("browser.display.show_image_placeholders", false);

// Disable Firefox recommendation pane in settings.
// Prevents the browser from fetching and rendering dynamic feature recommendations
// within the preferences menu.
//
// Benefit: Stops the browser from fetching and rendering dynamic feature
// recommendations in the preferences menu, reducing network noise.
//
// Tradeoff: Users will not see new Mozilla products or services that might
// integrate well with their workflow.
user_pref("browser.preferences.moreFromMozilla", false);

// Disable fullscreen animations.
// Fullscreen transitions can cause legacy GPUs to drop frames.
//
// Benefit: Disables the transition animation when entering full screen, making
// the switch instantaneous and preventing frame drops on older GPUs.
//
// Tradeoff: The abrupt transition can feel jarring compared to a smooth visual
// expansion.
user_pref("browser.fullscreen.animate", false);

// -----------------------------------------------------------------------------
// Mouse
// -----------------------------------------------------------------------------
// Set mouse wheel acceleration factor (default: 10)
//
// Benefit: Customizing mouse wheel acceleration allows for faster and more
// precise navigation through long documents.
//
// Tradeoff: Non-standard scroll behavior can feel unnatural and make precise
// targeting difficult for users accustomed to default settings.
user_pref("mousewheel.acceleration.factor", 2);

// Disable mouse wheel acceleration start threshold (default: -1)
//
// Benefit: Modifying the acceleration threshold allows the custom acceleration
// factor to trigger immediately upon scrolling.
//
// Tradeoff: Removes the buffer period before acceleration kicks in, potentially
// making slow scrolling difficult to control.
user_pref("mousewheel.acceleration.start", 0);

// Set the minimum scroll amount per mouse wheel tick (default: 5)
//
// Benefit: Reduces the minimum jump per scroll tick, allowing for finer control
// when reading dense text.
//
// Tradeoff: Requires more physical scroll wheel movement to cover the same
// distance on a web page.
user_pref("mousewheel.min_line_scroll_amount", 1);

// Disable smooth scrolling to reduce GPU and CPU rendering loads. Older GPUs
// often drop frames during smooth scrolling, making the browser feel sluggish.
//
// Benefit: Disabling smooth scrolling reduces GPU and CPU rendering loads,
// eliminating frame drops and making scrolling feel instantaneous.
//
// Tradeoff: The lack of transition makes scrolling appear choppy, which can be
// visually fatiguing when reading long articles.
user_pref("general.smoothScroll", false);

// -----------------------------------------------------------------------------
// Prefetch
// -----------------------------------------------------------------------------
// This allows Firefox to resolve domain names in advance, reducing latency when
// you click a link
//
// Benefit: Leaving DNS prefetch enabled reduces latency when clicking links by
// resolving domain names in the background beforehand.
//
// Tradeoff: Generates background DNS traffic for links the user may never
// click, slightly impacting privacy and bandwidth.
user_pref("network.dns.disablePrefetch", false);

// Disable link prefetching.
// Downloading and rendering unvisited pages in the background consumes limited
// CPU and network resources.
//
// Benefit: Disabling link prefetching stops the browser from downloading
// unvisited pages in the background, saving CPU and network resources.
//
// Tradeoff: Pages that the author anticipated the user visiting will take
// longer to load when clicked.
user_pref("network.prefetch-next", false);

// Disable the network predictor.
// The predictor algorithm consumes CPU cycles and disk I/O when attempting to
// guess future link clicks based on browsing history.
//
// Benefit: Disabling the network predictor saves CPU cycles and disk I/O by not
// attempting to guess and preemptively load future link clicks.
//
// Tradeoff: Eliminates algorithmic page load optimizations, meaning predictable
// browsing paths will not load as quickly.
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

// -----------------------------------------------------------------------------
// Reduce mistakes
// -----------------------------------------------------------------------------
// Disable the shortcut for quitting the browser (e.g., Ctrl+Q).
//
// Benefit: Prevents accidental browser closure when attempting to use similar
// keyboard shortcuts.
//
// Tradeoff: Requires users to exit the browser via the application menu or
// window manager controls.
user_pref("browser.quitShortcut.disabled", true);

// UI: Warn before closing the window or quitting with multiple tabs open
//
// Benefit: Prevents data loss and frustration from accidentally closing a
// browser window containing multiple active tabs.
//
// Tradeoff: Adds an extra confirmation step that interrupts the user's workflow
// when intentionally trying to exit the application quickly.
user_pref("browser.warnOnQuit", true);
user_pref("browser.warnOnQuitShortcut", true);
user_pref("browser.tabs.warnOnClose", true);

// UI: Prevent closing the browser when the last tab is closed
//
// Benefit: Keeps the browser running in the background, allowing users to
// quickly open a new page without having to relaunch the entire application.
//
// Tradeoff: The browser continues to consume system resources even when no web
// pages are active.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// -----------------------------------------------------------------------------
// Disable recommendations
// -----------------------------------------------------------------------------
// Prevent Firefox from recommending addons while browsing
//
// Benefit: Removes unwanted contextual suggestions from Mozilla, reducing
// visual clutter and background data fetching.
//
// Tradeoff: Users might miss out on discovering useful extensions that could
// improve their workflow.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// Prevent Firefox from recommending features while browsing
//
// Benefit: Eliminates distracting pop-ups regarding built-in browser features.
//
// Tradeoff: Users may remain unaware of new or underutilized browser
// capabilities.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

/* 0105: disable some Activity Stream items
 * Activity Stream is the default homepage/newtab based on metadata and browsing behavior
 * [SETTING] Home>Firefox Home Content>...  to show/hide what you want ***/
//
// Benefit: Disabling telemetry, snippets, and sponsored content on the new tab
// page reduces network noise and protects user privacy.
//
// Tradeoff: Prevents users from seeing Mozilla updates, news highlights, or
// personalized content recommendations.
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
//
// Benefit: Clears out pre-populated partner links, providing a clean slate for
// the user's own bookmarks.
//
// Tradeoff: Requires manual configuration if the user wants quick-access tiles
// on their new tab page.
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// -----------------------------------------------------------------------------
// Recently commented out
// -----------------------------------------------------------------------------
// Setting the session save interval reduces the frequency with which Firefox
// writes session data (such as open tabs and windows) to disk. This is
// beneficial for the following reasons: Reduced Disk I/O, Improved Performance,
// and Power Efficiency.
// Benefit: Increasing the session save interval reduces disk write frequency, improving performance and extending SSD lifespan.
// Tradeoff: If the browser crashes, the user is more likely to lose recent tab history or window state changes made within that extended interval.
user_pref("browser.sessionstore.interval", 30000);

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
//
// Firefox currently defaults it to 20. A lower value is not an optimization; it
// restricts speculative connections and can increase perceived latency.
//
// Benefit: Restricting speculative connections prevents the browser from
// opening unnecessary TCP sockets for links the user only hovered over.
///
// Tradeoff: Increases perceived latency when a user clicks a link, as the
// browser must perform the TCP handshake from scratch.
// TODO
user_pref("network.http.speculative-parallel-limit", 10);

// Increase the cache size for accelerated canvas items
// These override current defaults of 8192 and 256 MiB respectively. Increasing
// them is not a general optimization and unnecessarily increases the amount of
// GPU/cache memory Firefox can use.
//
// Benefit: Increasing canvas cache size could theoretically benefit specialized
// applications that heavily reuse 2D canvas elements.
//
// Tradeoff: Unnecessarily increases the amount of GPU memory Firefox uses,
// starving other applications of resources.
// TODO
// user_pref("gfx.canvas.accelerated.cache-items", 16384);
// user_pref("gfx.canvas.accelerated.cache-size", 512);

// Reduce maximum concurrent HTTP connections.
// The default allows up to 900 concurrent connections. Lowering this prevents
// legacy network interfaces and basic routers from dropping packets due to
// connection saturation.
//
// TODO: Network Bottlenecks: Cap concurrent HTTP connections
// (network.http.max-connections) restricts the browser from fetching multiple
// assets simultaneously on heavy web pages. Modern network interfaces and
// routers handle the default limit of 900 without issue.
//
// Note: Remove this. Current Firefox uses 900 as the non-Android default.
// Reducing it to 450 does not solve a typical modern networking problem and can
// restrict concurrent connections unnecessarily.
//
// Benefit: Lowering maximum concurrent connections prevents legacy network
// interfaces or basic routers from dropping packets due to saturation.
//
// Tradeoff: Restricts the browser from fetching multiple assets simultaneously
// on modern networks, slowing down page loads on asset-heavy sites.
// user_pref("network.http.max-connections", 450);

// Reduce the number of closed tabs and windows retained in memory.
// The default is to remember 25 closed tabs and 3 closed windows. Lowering
// these values reduces continuous memory allocation.
//
// Note: Remove both. Current defaults are 25 tabs and 5 windows. These limits
// do not provide a worthwhile memory optimization for most systems.
//
// Benefit: Reducing the number of retained closed tabs and windows lowers
// continuous memory allocation.
//
// Tradeoff: Limits the user's ability to recover accidentally closed tabs from
// earlier in the browsing session.
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("browser.sessionstore.max_windows_undo", 2);

// Disable web beacons. Note: beacon.enabled and dom.gamepad.enabled disable web
// APIs. The CPU savings are unlikely to justify the compatibility cost.
//
// Benefit: Disabling web beacons prevents sites from silently sending tracking
// data when navigating away from a page.
//
// Tradeoff: Breaks legitimate analytics and session management on certain web
// applications, causing state tracking errors.
// TODO
// user_pref("beacon.enabled", false);

// Disable Gamepad API.
// Prevents the browser from continuously polling USB ports and system buses for
// connected game controllers.
// Note: beacon.enabled and dom.gamepad.enabled disable web APIs. The CPU
// savings are unlikely to justify the compatibility cost.
//
// Benefit: Prevents the browser from continuously polling USB ports and system
// buses for connected game controllers.
//
// Tradeoff: Completely breaks compatibility with web-based games or
// applications that require controller input.
// TODO
// user_pref("dom.gamepad.enabled", false);
