---
layout: page
title: Join Us
nav_title: Join Us
description: Rethink AI through Compression
permalink: /join/
nav: true
nav_order: 4
---

{% assign prof_email_parts = site.data.members.professor[0].email | split: '@' %}

<style>
.join-panel{margin-top:1.75rem;overflow:hidden;background:color-mix(in srgb,var(--global-text-color) 3%,var(--global-bg-color));border-radius:12px}
.join-section{padding:1.6rem 1.7rem}
.join-section + .join-section{border-top:1px solid var(--global-divider-color)}
.join-section__title{font-family:'Avenir Next Rounded';font-size:1.2rem;font-weight:700;line-height:1.4;margin:0 0 1.2rem}
.join-tracks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}
.join-track{min-width:0;padding:0 1.6rem}
.join-track:first-child{padding-left:0;border-right:1px solid var(--global-divider-color)}
.join-track:last-child{padding-right:0}
.join-track h4{font-size:1rem;font-weight:700;line-height:1.45;margin:0 0 .55rem}
.join-track p{color:color-mix(in srgb,var(--global-text-color-light) 78%,var(--global-text-color));line-height:1.65;margin:0}
.join-application{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2rem;align-items:end}
.join-application__content>p{margin:0 0 .65rem}
.join-application-list{margin:0;padding-left:1.25rem}
.join-application-list li{line-height:1.6;margin-bottom:.35rem}
.join-application-list li:last-child{margin-bottom:0}
.join-apply-button{display:inline-flex;align-items:center;gap:.5rem;min-height:44px;padding:.7rem 1.5rem;color:var(--global-hover-text-color) !important;background:var(--global-theme-color);border-radius:999px;box-shadow:0 1px 2px rgba(0,0,0,.08);font-size:1rem;font-weight:700;line-height:1.4;letter-spacing:.01em;text-decoration:none;transition:transform 200ms ease,box-shadow 200ms ease,filter 200ms ease}
.join-apply-button:hover,.join-apply-button:focus-visible{filter:brightness(1.08);box-shadow:0 10px 20px rgba(0,0,0,.15);transform:translateY(-2px);text-decoration:none}
.join-apply-button:active{filter:brightness(.96);transform:translateY(0)}
.join-apply-button:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:4px}
.join-apply-button > span{color:var(--global-hover-text-color) !important}
.join-apply-button__arrow{color:var(--global-hover-text-color) !important;display:inline-block;transition:transform 200ms ease}
.join-apply-button:hover .join-apply-button__arrow,.join-apply-button:focus-visible .join-apply-button__arrow{transform:translateX(4px)}
@media (prefers-reduced-motion:reduce){.join-apply-button,.join-apply-button__arrow{transition:none}}
@media (max-width:575.98px){
  .join-panel{margin-top:1.4rem}
  .join-section{padding:1.35rem 1.25rem}
  .join-section__title{font-size:1.15rem;margin-bottom:1rem}
  .join-tracks{grid-template-columns:1fr}
  .join-track{padding:0}
  .join-track:first-child{padding:0 0 1.05rem;border-right:0;border-bottom:1px solid var(--global-divider-color)}
  .join-track:last-child{padding-top:1.05rem}
  .join-track h4{margin-bottom:.45rem}
  .join-application{grid-template-columns:1fr;gap:1.15rem}
  .join-apply-button{justify-self:start}
}
</style>

<div class="join-panel">
  <section class="join-section" aria-label="Student opportunities">
    <div class="join-tracks">
      <div class="join-track">
        <h4>M.S. & Ph.D. Students</h4>
        <p>Please contact us as early as possible—before submitting a formal application.</p>
      </div>
      <div class="join-track">
        <h4>Undergraduate Interns</h4>
        <p>No prior research experience is needed—curiosity and a willingness to learn matter most.</p>
      </div>
    </div>
  </section>

  <section class="join-section" aria-labelledby="join-application">
    <h3 class="join-section__title" id="join-application">How to Apply</h3>
    <div class="join-application">
      <div class="join-application__content">
        <p>Please include:</p>
        <ul class="join-application-list">
          <li>One-page cover letter with self-introduction and motivation</li>
          <li>Academic transcript (with rank)</li>
        </ul>
      </div>
      <a
        href="#"
        class="join-apply-button join-mailto-link"
        data-user="{{ prof_email_parts[0] }}"
        data-domain="{{ prof_email_parts[1] }}"
        aria-label="Apply to CAI Lab by email"
      >
        <span>Apply by Email</span>
        <span class="join-apply-button__arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </section>
</div>

<script>
  (function () {
    var mailtoLink = document.querySelector('.join-mailto-link');
    if (mailtoLink) {
      mailtoLink.addEventListener('click', function (e) {
        e.preventDefault();
        var user = mailtoLink.getAttribute('data-user');
        var domain = mailtoLink.getAttribute('data-domain');
        window.location.href = 'mailto:' + user + '@' + domain;
      });
    }
  })();
</script>
