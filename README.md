Deploy link https://konkaproductions.netlify.app/
Konka Productions (Pty) Ltd - Website Project
Student Name: Halatedzi Netshifhefhe
Module: WEDE5020 - Web Development (Introduction)
Part: 3 - Enhancing Functionality and SEO

Project Overview
This is a 5 page website for Konka Productions, an event production and equipment hire company based in Limpopo. The site shows the equipment available for hire, explains the company, and lets clients send quote requests or general messages.

The site uses HTML5, CSS3, and vanilla JavaScript. It is fully responsive, deployed on Netlify, and built to meet all Part 3 requirements.

Part 2 Feedback Addressed
The Part 2 feedback showed 4 areas that needed improvement. Here is exactly how I fixed them.

Navigation Menu: The old nav only stacked vertically on mobile. I added a hamburger button that appears on screens under 768px. Clicking it opens the menu with an animation. The button changes into an X when open. The aria-expanded attribute updates for screen readers.

Media Queries: I added a third breakpoint at 1024px for small laptops. The layout now goes from 3 columns to 2 columns to 1 column as the screen shrinks.

Layout Adjustment: The grid keeps 2 columns on tablets instead of jumping straight to 1 column. Card heights are now consistent.

Images: The folder was named with a capital I. I changed every path to lowercase images. All images now have srcset and sizes attributes.

README and Changelog: Both are now detailed with specific dates, specific changes, and file locations.

Key Features
Pages: Home, About, Services, Request a Quote, Contact.

HTML: Semantic HTML5, single nav element per page, ul and li structure, proper heading hierarchy, meaningful alt text on all images, meta descriptions and keywords on every page.

CSS: External stylesheet on all pages, CSS reset, typography scale with rem units, CSS Grid for layouts, Flexbox for header, hover and focus and active pseudo-classes, three responsive breakpoints.

JavaScript:

Hamburger menu toggle with animation

Time-based greeting on homepage

Dynamic featured service that changes daily

Search filter on services page

Lightbox gallery on services page

Leaflet interactive map on contact page

Directions button opening Google Maps

Scroll animations using IntersectionObserver

Enquiry form validation and cost estimate

Contact form validation and email compilation

SEO: Unique title tags, meta descriptions, meta keywords on every page, structured alt text, robots.txt, sitemap.xml.

Forms: Enquiry form has full client-side validation and shows a cost estimate after submission. Contact form validates and compiles the message into a mailto link that opens the user's email app.

File Structure
<img width="900" height="338" alt="image" src="https://github.com/user-attachments/assets/4a9ef60e-8ed6-4269-a5c8-ae29bb75b1f2" />

Changelog
[2026-10-28] - Part 3 Complete
Part 2 fixes:

Replaced stacked mobile nav with a hamburger menu that animates open and closed

Added a third breakpoint at 1024px for small laptops

Improved grid behavior at tablet size

Changed all image paths from "Images" to lowercase "images"

Added proper srcset and sizes attributes with width descriptors

Rewrote README with specific dates and detailed descriptions

Expanded changelog with file locations and exact changes

Part 3 new features:

Added js/script.js with all interactive code

Hamburger menu with aria-expanded toggle

Time-based greeting on homepage

Dynamic featured service on services page

Search filter that hides non-matching service cards

Lightbox gallery with keyboard support on services page

Leaflet interactive map with marker on contact page

Directions button opening Google Maps in a new tab

Scroll fade-in animations using IntersectionObserver

Enquiry form validation with inline error messages

Enquiry form cost estimate based on equipment category

Contact form validation with inline error messages

Contact form mailto compilation

Added meta keywords to every page

Created robots.txt

Created sitemap.xml

Deployed to Netlify

[2026-09-17] - Part 2
Created external CSS with reset, base styles, typography scale

Used CSS Grid and Flexbox for layout

Added decorative styling with gradients, shadows, rounded corners

Added hover, focus, and active pseudo-classes

Added two media queries for tablet and mobile

Made images responsive

Added srcset and sizes to all images

[2026-09-10] - Part 1 Corrections
Changed navigation from inline spacing to ul/li structure

Linked logo to homepage on every page

Added descriptive alt text to every image

Added reset button to enquiry form

[2026-08-14] - Part 1 Initial
Created 5 HTML pages

Added single navigation menu

Added 6 images with alt text

Embedded Google Maps iframe

Added working forms

References
Google Search Central, 2026. SEO Starter Guide. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 28 October 2026).

Google, 2026. Core Web Vitals. Available at: https://developers.google.com/search/docs/appearance/core-web-vitals (Accessed: 28 October 2026).

Leaflet, 2026. Leaflet Quick Start Guide. Available at: https://leafletjs.com/examples/quick-start/ (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. Client-side form validation. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. Intersection Observer API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. Responsive images. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Performance/Responsive_images (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. Using media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries (Accessed: 28 October 2026).

W3Schools, 2026. CSS Flexbox. Available at: https://www.w3schools.com/css/css3_flexbox.asp (Accessed: 28 October 2026).

W3Schools, 2026. CSS Pseudo-classes. Available at: https://www.w3schools.com/css/css_pseudo_classes.asp (Accessed: 28 October 2026).

World Wide Web Consortium (W3C), 2024. Web Content Accessibility Guidelines (WCAG) 2.2. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 28 October 2026).

Netlify, 2026. Deploy from Git. Available at: https://docs.netlify.com/ (Accessed: 28 October 2026).

GitHub, 2026. About Git. Available at: https://docs.github.com/en/get-started/using-git/about-git (Accessed: 28 October 2026).
