---
layout: page
title: Research
permalink: /research/
lede: Papers and technical reports, newest first.
---
{% assign all = site.data.publications | sort: "year" | reverse %}
{% assign papers = all | where: "type", "paper" | group_by: "year" %}
{% assign reports = all | where: "type", "report" | group_by: "year" %}
{% capture strong %}<strong>{{ site.author }}</strong>{% endcapture %}

<section class="section" id="publications">
  <h2 class="section__label">Publications</h2>
  <div class="section__body">
    {% for g in papers %}
    <div class="year-group">
      <h3 class="year">{{ g.name }}</h3>
      <ul class="entries">
        {% for pub in g.items %}
        <li class="entry">
          <p class="entry__title">{{ pub.title }}</p>
          <p class="entry__authors">{{ pub.authors | replace: site.author, strong }}</p>
          <p class="entry__venue">{{ pub.venue }}</p>
          {% if pub.links %}<p class="entry__links">{% for l in pub.links %}<a href="{{ l.url }}">{{ l.label }}</a>{% endfor %}</p>{% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

<section class="section" id="reports">
  <h2 class="section__label">Reports</h2>
  <div class="section__body">
    {% for g in reports %}
    <div class="year-group">
      <h3 class="year">{{ g.name }}</h3>
      <ul class="entries">
        {% for pub in g.items %}
        <li class="entry">
          <p class="entry__title">{{ pub.title }}</p>
          <p class="entry__authors">{{ pub.authors | replace: site.author, strong }}</p>
          <p class="entry__venue">{{ pub.venue }}</p>
          {% if pub.links %}<p class="entry__links">{% for l in pub.links %}<a href="{{ l.url }}">{{ l.label }}</a>{% endfor %}</p>{% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>
