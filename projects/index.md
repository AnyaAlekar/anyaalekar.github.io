---
layout: page
title: Projects
permalink: /projects/
lede: Software and tools I’ve built, newest first.
---
<section class="section" id="all-projects">
  <h2 class="section__label">Selected projects</h2>
  <ul class="section__body entries entries--projects">
    {% assign items = site.data.projects | sort: "year" | reverse %}
    {% for pr in items %}
    <li class="entry">
      <p class="entry__meta">{{ pr.year }}</p>
      <h3 class="entry__title entry__title--lg">{{ pr.title }}</h3>
      <p class="entry__summary">{{ pr.summary }}</p>
      {% if pr.tags %}<p class="tags">{% for t in pr.tags %}<span>{{ t }}</span>{% endfor %}</p>{% endif %}
      {% if pr.links %}<p class="entry__links">{% for l in pr.links %}<a href="{{ l.url }}">{{ l.label }}</a>{% endfor %}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
</section>
