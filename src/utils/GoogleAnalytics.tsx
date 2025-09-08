"use client";

import Script from "next/script";

const GA_TRACKING_ID = "G-JTDQ5MVVSC";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: 'Hello Berlin 365 | Webdesign, Fotografie & Print in Berlin',
            page_location: window.location.href,
            content_group1: 'Digital Agency',
            content_group2: 'Berlin',
            content_group3: 'Webdesign'
          });

            // Track contact form submissions
            const contactForm = document.querySelector('form[action*="contact"]');
            if (contactForm) {
              contactForm.addEventListener('submit', function() {
                gtag('event', 'contact_form_submission', {
                  event_category: 'Contact',
                  event_label: 'Footer Form',
                  value: 1
                });
              });
            }

            // Track pricing section views
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) {
              const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                    gtag('event', 'pricing_view', {
                      event_category: 'Engagement',
                      event_label: 'Pricing Section',
                      value: 1
                    });
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.5 });
              observer.observe(pricingSection);
            }

            // Track services section views
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                    gtag('event', 'services_view', {
                      event_category: 'Engagement',
                      event_label: 'Services Section',
                      value: 1
                    });
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.5 });
              observer.observe(servicesSection);
            }
          });
        `}
      </Script>
    </>
  );
}
