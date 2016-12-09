---
layout: search
title: Search
permalink: /search/
image: /assets/img/about.jpg
---

## Search

<form class="usa-search" action="{{ '/search' | prepend: site.baseurl }}" method="get">
  <div role="search">
    <!--<label class="usa-sr-only" for="search-field">Search</label>-->
    <input id="q2" type="search" name="q" placeholder="Search">
    <button type="submit">
      <span class="usa-search-submit-text">Search</span>
    </button>
  </div>
</form>

<div id="search-results"></div>

<script>
  var baseurl = "{{ site.baseurl }}";
</script>
<!--<script src="{{ '/assets/js/lib/lunr.min.js' | prepend: site.baseurl  }}"></script>-->
<!--<script src="{{ '/assets/js/search.js' | prepend: site.baseurl  }}"></script>-->


<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="{{ '/assets/js/results.js' | prepend: site.baseurl  }}"></script>
