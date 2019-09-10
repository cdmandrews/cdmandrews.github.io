# "Handout" for Week 3

[ENGL 5369, Fall 2019](calendar.html)

[Slides if you want such things](https://docs.google.com/presentation/d/e/2PACX-1vRufA94YIvpbFkJ2K591QOVPqCeLM5nAcGgkbJ0uiCuOgYeWh5OUR1FXmLTWgReyHFb8yPoLY4kWyb5/pub?start=false&loop=false&delayms=3000)

## Theory: Digital Rhetoric

Established theory in new contexts, or new (or rearticulated or revised) theory for new contexts?

Eyman notes three general tracks in digital rhetoric:

- those who work from classical & contemporary rhetorical theory as a beginning place,
- those who think we can use classical rhetoric & contemporary rhetorical theory but have to renovate or rehabilitate those concepts in order to do so, and
- those who argue we need a whole new set of theories, methods, and practices to conceptualize the digital.


## Praxis: HTML notes, images, etc

![Anatomy of an HTML Element](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)
*Anatomy of an HTML Element*

![HTML Element with an attribute](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)
*An HTML element with a single attribute*

### Keyterms:

1. element, attribute, nesting, tag,
2. semantic, presentational
3. document elements, metadata elements, sectioning elements, content elements, block vs inline elements, embedded content, media elements, links, comments, special characters
4. parent, child (children), sibling
5. `id=""` for unique pieces of structure, `class=""` for similar, repeated structures  
6. A "standards-based web page": 1) structured content in HTML, 2) visual design in CSS, 3) enhancements in JS. (Stolley, p. 37)

### Codeblock: Basic HTML document
```
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8">
  <title>Sample page</title>
 </head>
 <body>
  <h1>Sample page</h1>
  <p>This is a <a href="demo.html">simple</a> sample.</p>
  <!-- this is a comment -->
 </body>
</html>

```

### Links and resources

<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" style="float: right; height: 100px;" />

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/)
The relationship between the W3C and WHATWG is complex. Both organizations collaborated to develop HTML5, but haven't always played nicely since. WHATWG publishes the "living standard" while W3C versioned their standards (up to HTML5.2). In 2019, W3C agreed to work with the WHATWG living standard rather than just forking WHATWG's work. (Lots of politics there, and a great reminder that **technology and its development ain't neutral**; [read if you're curious](https://en.wikipedia.org/wiki/HTML5#W3C_and_WHATWG_conflict)) You can read about some history of development standards and recommendations in Stolley, *How to*, Chapter 4 .


- [Mozilla Developer Network Web Docs: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
MDN Web Docs is an excellent reference and resource for all aspects of web development. Look up elements and attributes, get tutorials, and troubelshoot problems.


- [A List Apart](https://alistapart.com/)
A website "for people who make websites." Not helpful if you're stuck on how a partiuclar element works, but great if you want to read up on a variety of topics relevant to web standards and the "design, development, and meaning of web content."

## Links for accessibility and usability

- [W3C Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
The World Wide Web Consortium is an international community that develops Web standards. This intro to accessibility is a solid one, but is more from the working group's developer/standards perspecive.


- [WebAIM Introduction to Web Accessibility](https://webaim.org/intro/)
WebAIM is a nonprofit  organization that focuses on training and analysis of web content. Also of note is their [accessibility analysis of the top million home pages](https://webaim.org/projects/million/)


- [usability.gov](https://www.usability.gov/)
This site is a resource for usability practices and guidelines, managed by the U.S. Department of Health and Human Services (HHS)

- [Nielsen Norman Group](https://www.nngroup.com/articles/)
Jakob Nielsen and Don Norman defined usability and the field of UX. The NN/g website is an excellent resource for user experience. Like, I can't even say how important these two guys are.


## Other sources concerning today’s discussion:

- stuff about portfolios

- stuff about markup languages

- McGrane, Karen. (2013, May 02). WYSIWTF. <cite>A List Apart</cite>. [https://alistapart.com/column/wysiwtf/](https://alistapart.com/column/wysiwtf/)
- Fitzgerald, Andy. (2019, Jan 10). Conversations with robots: Voice, smart agents, and the case for structured content. <cite>A List Apart</cite>. [https://alistapart.com/article/conversations-with-robots/](https://alistapart.com/article/conversations-with-robots/)
- Dilger, B., & Rice, J. (Eds.). (2010). From A to : Keywords of Markup. Minneapolis; London: University of Minnesota Press. doi:10.5749/j.ctttv58b
- “The Role of Computational Literacy in Computers and Writing.” (2012). Enculturation.net http://enculturation.net/computational-literacy
- Polyphonic Classroom? https://ccdigitalpress.org/cad
- Krause, S. D. (1996). The Immediacy of Rhetoric: Definitions, Illustrations, and Implications [Web version of printed Dissertation]. Retrieved September 10, 2019, from https://people.emich.edu/skrause/Diss/
- Sheridan, D. M., Ridolfo, J., & Michel, A. J. (2012). The Available Means of Persuasion: Mapping a Theory and Pedagogy of Multimodal Public Rhetoric. Anderson, S.C: Parlor Press.
- Bitzer, L. F. (1992). The Rhetorical Situation. Philosophy & Rhetoric, 1.
- Edbauer, J. (2005). Unframing Models of Public Distribution: From Rhetorical Situation to Rhetorical Ecologies. Rhetoric Society Quarterly, 35(4), 5–24.
- Grant-Davie, K. (1968). Rhetorical Situations and Their Constituents. Rhetoric Review, (2), 264.
- Vatz, R. E. (1973). The myth of the rhetorical situation. Philosophy & Rhetoric, 6(3), 154–161.


## What to do for Week 04:

1. Wednesday will be a practical-oriented day:
  - workshopping and validating your three HTML pages (home page, cv/resume page, and something else), we'll talk semantics and validation in particular (revisit necessary sections of Stolley in prep for this)
    - **push drafts of your three pages to the web before class**
  - play with distant reading methods in preparation for distant reading project.

2. Read Eyman 3 and Mueller 3 (linked in both BB9 and on the web). Mueller's chapter will help flesh out your undestanding of "distant reading", a research method we'll play with for the [Distant reading project](assignments.html). Important questions and methods for us to consider tomorrow:
  - what is a research method? a methodology? (I'll shoot some recommended readings your way to help with this question.)
  - what methods does the field of digital rhetoric use to take into account the complications of the affordances of digital practices?
  - close reading
  - distant reading
  - genre studies
  - usability studies
