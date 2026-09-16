---
layout: about
title: About
permalink: /
subtitle: See AI through the lens of Compression
hero_image: logo_animation.gif
hero_image_alt: CAI logo animation with Chung-Ang University mascot Puang
# profile: # TODO: re-enable with a real lab group photo once one is taken
#   align: right
#   image: group_photo.jpg
#   image_circular: False  # crops the image to make it circular
#   more_info: >

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # keep the latest news visible without a nested scroll area
  limit: 7 # leave blank to include all the news in the `_news` folder
---

<style>
.about-eyebrow{font-size:.8rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light);margin-bottom:.25rem}
.about-cta{display:inline-flex;align-items:center;gap:.5rem;min-height:44px;padding:.7rem 1.5rem;border-radius:999px;font-size:1rem;font-weight:700;line-height:1.4;letter-spacing:.01em;text-decoration:none;transition:transform 200ms ease,box-shadow 200ms ease,filter 200ms ease,background-color 200ms ease}
.about-cta:hover,.about-cta:focus-visible{transform:translateY(-2px);text-decoration:none}
.about-cta:active{transform:translateY(0)}
.about-cta:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:4px}
.about-cta--primary{background:var(--global-theme-color);color:var(--global-hover-text-color) !important;box-shadow:0 1px 2px rgba(0,0,0,.08)}
.about-cta--primary:hover,.about-cta--primary:focus-visible{filter:brightness(1.08);box-shadow:0 10px 20px rgba(0,0,0,.15)}
.about-cta--primary:active{filter:brightness(.96)}
.about-cta--primary .about-cta__arrow{color:var(--global-hover-text-color) !important}
.about-cta__arrow{display:inline-block;transition:transform 200ms ease}
.about-cta:hover .about-cta__arrow,.about-cta:focus-visible .about-cta__arrow{transform:translateX(4px)}
@media (prefers-reduced-motion: reduce){.about-cta,.about-cta__arrow{transition:none}}

.about-principles{display:flex;flex-wrap:wrap;gap:1.25rem}
.about-principle-card{flex:1 1 240px;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:12px;padding:1.25rem 1.4rem;box-shadow:0 1px 2px rgba(0,0,0,.08)}
.about-principle-card__index{font-size:.75rem;font-weight:700;letter-spacing:.05em;color:var(--global-theme-color);margin-bottom:.4rem}
.about-principle-card__title{font-size:1rem;font-weight:600;margin:0 0 .4rem;line-height:1.5}
.about-principle-card__desc{margin:0;line-height:1.7}

.about-hero{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);grid-template-areas:"copy photo" "cta photo";column-gap:2rem;row-gap:1rem;align-items:center;margin-bottom:1.5rem}
.about-hero__copy{grid-area:copy;align-self:end}
.about-hero__photo{grid-area:photo;aspect-ratio:16/9;margin:0;overflow:hidden;border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color)}
.about-hero__photo img{display:block;width:100%;height:100%;object-fit:cover}
.about-hero__cta{grid-area:cta;align-self:start;justify-self:start}

.about-research-areas{margin-top:2rem}
.about-research-grid{background:color-mix(in srgb,var(--global-text-color) 4%,var(--global-bg-color));border-radius:12px;padding:1.3rem 0}
.about-research-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:1.25rem}
.about-research-row + .about-research-row{margin-top:1.35rem}
.about-research-area{padding:0 1.4rem}
.about-research-area__heading{display:flex;align-items:baseline;flex-wrap:wrap;column-gap:.4rem;row-gap:.1rem;margin:0 0 .55rem}
.about-research-area__title{font-size:1rem;font-weight:700;line-height:1.4;margin:0}
.about-research-area__tagline{color:var(--global-text-color-light);font-size:.9rem;font-weight:400;line-height:1.45;margin:0}
.about-research-area__tagline span{opacity:.65}
.about-research-area__topics{color:var(--global-text-color);font-size:.875rem;line-height:1.65;margin:0;opacity:.76}
.about-news-title{font-size:1.15rem;font-weight:700;margin:2.25rem 0 1rem}
@media (max-width:575.98px){
  .about-hero{grid-template-columns:1fr;grid-template-areas:"copy" "photo" "cta";gap:1rem;margin-bottom:1.35rem}
  .about-hero__photo{aspect-ratio:16/9}
  .about-hero__photo img{object-position:center 40%}
  .about-research-grid{padding:1.2rem 0}
  .about-research-row{display:block}
  .about-research-area__heading{display:block}
  .about-research-area__tagline{margin-top:.1rem}
  .about-research-row + .about-research-row{border-top:1px solid var(--global-divider-color);margin-top:1rem;padding-top:1rem}
  .about-research-area + .about-research-area{border-top:1px solid var(--global-divider-color);margin-top:1rem;padding-top:1rem}
  .about-news-title{margin-top:2rem}
}
</style>

<section aria-label="Principles">
  <div class="about-principles">
    <div class="about-principle-card">
      <div class="about-principle-card__index">01</div>
      <h4 class="about-principle-card__title">AI is Compression</h4>
      <p class="about-principle-card__desc">We view intelligence as the ability to compress vast amounts of information into compact representations and, from that compression, recover information and derive new insights.</p>
    </div>
    <div class="about-principle-card">
      <div class="about-principle-card__index">02</div>
      <h4 class="about-principle-card__title">Thinking via Compression</h4>
      <p class="about-principle-card__desc">We apply the same principle to how we think. We compress complex problems by questioning assumptions and keeping only what must be true, then reason from that core to derive new insights.</p>
    </div>
  </div>
</section>

<section class="about-research-areas" aria-label="Research Areas">
  <div class="about-research-grid">
    <div class="about-research-row">
      <div class="about-research-area">
        <div class="about-research-area__heading">
          <h4 class="about-research-area__title">Representation</h4>
          <p class="about-research-area__tagline"><span aria-hidden="true">&mdash;</span> Represent more with less</p>
        </div>
        <p class="about-research-area__topics">Efficient Attention Mechanisms &middot; Model &amp; Token Pruning &middot; Learned Image Compression &amp; Super-Resolution</p>
      </div>
      <div class="about-research-area">
        <div class="about-research-area__heading">
          <h4 class="about-research-area__title">Learning</h4>
          <p class="about-research-area__tagline"><span aria-hidden="true">&mdash;</span> Learn what matters</p>
        </div>
        <p class="about-research-area__topics">Long-Tailed Learning &middot; Vision-Language Alignment &middot; Human-Aligned Perception</p>
      </div>
    </div>
    <div class="about-research-row">
      <div class="about-research-area">
        <div class="about-research-area__heading">
          <h4 class="about-research-area__title">Robustness</h4>
          <p class="about-research-area__tagline"><span aria-hidden="true">&mdash;</span> Remain effective under change</p>
        </div>
        <p class="about-research-area__topics">Distribution Shift &middot; Adversarial Robustness &middot;  Reliable Evaluation</p>
      </div>
      <div class="about-research-area">
        <div class="about-research-area__heading">
          <h4 class="about-research-area__title">Interpretability</h4>
          <p class="about-research-area__tagline"><span aria-hidden="true">&mdash;</span> Understand what drives model decisions</p>
        </div>
        <p class="about-research-area__topics">Visual Attribution &middot; ViT Explainability &middot; VLM Explainability </p>
      </div>
    </div>
  </div>
</section>

<!-- <div class="theme-colored" style="margin-top: 1rem; margin-bottom: 2rem; display: inline-block; font-weight: bold"> <img src="{{ site.baseurl }}/assets/img/favicon.png" style="max-height: 1.5rem; vertical-align: top; padding-right: 0.1rem margin-bottom: 1rem"> <a href="mailto:{{ site.data.members.professor[0].email }}"> Join our mission driven by our principles </a></div> -->
