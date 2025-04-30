---
layout: page
permalink: /members/
title: Members
description: 
nav: true
nav_order: 1
---

<h3 class="category">Professor</h3>
{% for member in site.data.members.professor %}
<div class="member-card">
  <div class="member-photo">
    <img src="{{ site.baseurl }}/assets/img/{{ member.photo }}" class="img-fluid z-depth-1 rounded">
  </div>
  <div class="member-info">
    <h4 class="post-title" style="max-width:100%; margin-bottom: 0.5rem">
      {{ member.name }}
    </h4>
    <p><span class="desc"> {{ member.description }}</span></p>
    {% if member.interest %}
      <p>
      {% for interest in member.interest %}
        <span class="tag">{{interest}}</span>
      {% endfor %}
      </p>
    {% endif %}
    <p>
        {% if member.homepage %}
        <a href="{{ member.homepage }}"><i class="tag fas fa-home"></i></a>
        {% endif %}
        {% if member.email %}
        <a href="mailto:{{ member.email }}"><i class="tag fa-solid fa-envelope"></i></a>
        {% endif %}
    </p>
  </div>
</div>
{% endfor %}


<h3 class="category">Students</h3>
{% for member in site.data.members.students %}
<div class="member-card">
  <div class="member-photo">
    <img src="{{ site.baseurl }}/assets/img/{{ member.photo }}" class="img-fluid z-depth-1 rounded">
  </div>
  <div class="member-info">
    <h4 class="post-title" style="max-width:100%; margin-bottom: 0.5rem">
      {{ member.name }}
    </h4>
    <p><span class="desc"> {{ member.description }}</span></p>
    {% if member.interest %}
      <p>
      {% for interest in member.interest %}
        <span class="tag">{{interest}}</span>
      {% endfor %}
      </p>
    {% endif %}
    <div>
        {% if member.email %}
        <a href="mailto:{{ member.email }}"><i class="tag fa-solid fa-envelope"></i></a>
        {% endif %}
        {% if member.homepage %}
        <a href="{{ member.homepage }}"><i class="tag fas fa-home"></i></a>
        {% endif %}
    </div>
  </div>
</div>
{% endfor %}