---
layout: page
title: Curriculum vitae
permalink: /cv/
lede: Education, experience and publications in one document.
---
{% assign cv = site.static_files | where: "path", "/assets/cv.pdf" | first %}

<section class="section" id="cv">
  <h2 class="section__label">Document</h2>
  <div class="section__body">
  {% if cv %}
    <p class="cv-actions">
      <a class="btn btn--solid" href="{{ '/assets/cv.pdf' | relative_url }}" download>Download PDF</a>
      <a class="btn btn--line" href="{{ '/assets/cv.pdf' | relative_url }}" target="_blank" rel="noopener">Open in new tab</a>
    </p>
    <iframe class="cv-frame" src="{{ '/assets/cv.pdf' | relative_url }}#view=FitH" title="Curriculum vitae of {{ site.author }}"></iframe>
  {% else %}
    <p class="cv-note">No CV found yet. Save your PDF as <code>assets/cv.pdf</code> in the repository and push. A viewer and a download button will appear here automatically.</p>
  {% endif %}
  </div>
</section>
