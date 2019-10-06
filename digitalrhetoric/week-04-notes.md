# "Handout" for Week 4

[ENGL 5369, Fall 2019](calendar.html)

[Slides if you want such things](https://docs.google.com/presentation/d/e/2PACX-1vRufA94YIvpbFkJ2K591QOVPqCeLM5nAcGgkbJ0uiCuOgYeWh5OUR1FXmLTWgReyHFb8yPoLY4kWyb5/pub?start=false&loop=false&delayms=3000)

[Everyone's sites so far](fambly)

Remind me to talk about the [Wikipedia Edit-A-Thon](https://www.tamucc.edu/campus-announcements/oct.-10-wikipedia-edit-a-thon.html) for [Hispanic Heritage Month](http://hispanicheritagemonth.tamucc.edu/)


## Method: Digital Rhetoric

>"digital writing research should not be viewed merely as research about writing with technology. It should be viewed, rather, as changing the fundamental assumptions about methodology, particularly the humanist assumption that divides the human from the technological. Digital writing research takes a cyborgian view and a networked view of human communications.... it represents a new way of looking altogether.” (Foreword to <cite>Digital Writing Research</cite>, p. xv)

1. Questions worth our time:
  - what is a research method? a methodology? ([VanKooten 2016](http://enculturation.net/methodologies-and-methods-for-research-in-digital-rhetoric) wrote about "_global operations_" vs. "_local processes_")
  - what methods does the field of digital rhetoric use to take into account the complications of the affordances of digital practices?
  - study of writing-as-action vs writing-as-context


2. Key bits from Mueller:
  - word watcher
  - network sense
  - distant and thin methods
  - paratactically vs syntactically


2. Some distant readings:
  - [Know your meme](https://youtu.be/k6vHHxWWT0Y)
  - [Open Syllabus](https://opensyllabus.org/)
  - [WS Tree](https://www.writingstudiestree.org/live/tagadelic)
  - [Mueller's Turn Spotting viz (requires flash)](http://www.derekmueller.net/turn.html)


3. Mess around with distant reading methods in preparation for the [distant reading project](assignments.html), use [Voyant](https://voyant-tools.org/)

4. Feeling super-codey? [MassMine](http://www.massmine.org/index.html) is a web scraping tool for those not scared of the command line.


## Praxis: Continue with HTML

Last week, we talked basic block and inline elements such as paragraphs, lists, sub/headings, and links. This week, let's try to integrate some sectioning elements:
  - `header` and `footer`
  - `nav`
  - `article` and `section` and `aside`
  - `div`

### Quick reference for two important tags: links and images

Markup for **links**:

```
<p>I'm creating a link to
<a href="https://www.mozilla.org/en-US/"
title="The best place to find more information about Mozilla's mission
and how to contribute"> the Mozilla homepage</a>.
</p>
```

You can make any _text_ or _block level content_ a link by nesting that content between `<a>`tags!

```
<a href="https://www.mozilla.org/en-US/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage" >
</a>
```

Markup for **images**
```
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
```

Also see this [quick primer on URLs and paths](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#A_quick_primer_on_URLs_and_paths)

### Other things

Workshop, [validate](https://validator.w3.org/), and problem solve your (at least three) HTML pages. Do a little show-and-tell.

[Bite, snack, meal](http://www.ewriteonline.com/bite-snack-and-meal-how-to-feed-content-hungry-site-visitors/) as essential approach to web writing.

[Usability 101](https://www.nngroup.com/articles/usability-101-introduction-to-usability/)

## What to do for Week 05:

Read all the things:
- Eyman ch. 4,
- Eyman et al, Access/ibility: Access and Usability for Digital Publishing (webtext),
- Rhetoricity: Multimodality pulling into a station (audio podcast),
- Whipple (2010) (all linked from syllabus page)

Begin working on distant reading project, and be contemplating--or more importantly, drafting--those website pages.
 - Do we include bibliographies? Do we include book reviews?
 - do we work these elements up seperately (separate text files for full text, w/bibs, w/reviews? How modular/scalable do we want to be with this info?)
