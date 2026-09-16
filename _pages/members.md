---
layout: page
permalink: /members/
title: Members
description: 
nav: true
nav_order: 1
---

<div class="members-page">
  {% assign member_groups = "Professor|professor,Ph.D. Students|phd,M.S. Students|ms,Undergraduate Students|undergraduate" | split: "," %}
  {% for group in member_groups %}
    {% assign group_data = group | split: "|" %}
    {% assign group_title = group_data[0] %}
    {% assign group_key = group_data[1] %}
    {% assign group_members = site.data.members[group_key] %}

    {% if group_members and group_members != empty %}
      <section class="member-group" aria-labelledby="members-{{ group_key }}">
        <h3 class="category" id="members-{{ group_key }}">{{ group_title }}</h3>
        <div class="member-list">
          {% for member in group_members %}
            <article class="member-card">
              <div class="member-photo">
                <img
                  src="{{ site.baseurl }}/assets/img/{{ member.photo }}"
                  alt="{{ member.name }}"
                  width="512"
                  height="512"
                  {% unless group_key == 'professor' %}loading="lazy"{% endunless %}
                >
              </div>
              <div class="member-info">
                <div class="member-heading">
                  <h4 class="member-name">{{ member.name }}</h4>
                  {% if member.homepage or member.email %}
                    <div class="member-actions">
                      {% if member.homepage %}
                        <a
                          class="member-action"
                          href="{{ member.homepage }}"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit {{ member.name }}'s website"
                          title="Website"
                        >
                          <i class="fa-solid fa-globe" aria-hidden="true"></i>
                        </a>
                      {% endif %}
                      {% if member.email %}
                        {% assign email_parts = member.email | split: '@' %}
                        <a
                          href="#"
                          class="member-action member-mailto-link"
                          data-user="{{ email_parts[0] }}"
                          data-domain="{{ email_parts[1] }}"
                          aria-label="Email {{ member.name }}"
                          title="Email"
                        >
                          <i class="fa-regular fa-envelope" aria-hidden="true"></i>
                        </a>
                      {% endif %}
                    </div>
                  {% endif %}
                </div>
                {% if member.description %}
                  <p class="member-description">{{ member.description | emojify }}</p>
                {% endif %}
                {% if member.interest %}
                  <ul class="member-interests" aria-label="Research interests">
                    {% for interest in member.interest %}
                      <li>{{ interest }}</li>
                    {% endfor %}
                  </ul>
                {% endif %}
              </div>
            </article>
          {% endfor %}
        </div>
      </section>
    {% endif %}
  {% endfor %}
</div>

<script>
  (function () {
    var links = document.querySelectorAll('.member-mailto-link');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var user = link.getAttribute('data-user');
        var domain = link.getAttribute('data-domain');
        window.location.href = 'mailto:' + user + '@' + domain;
      });
    });
  })();
</script>
