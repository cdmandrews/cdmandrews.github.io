# "Handout" for Week 3

[ENGL 5369, Fall 2019](calendar.html)

[Slides if you want such things](https://docs.google.com/presentation/d/e/2PACX-1vRufA94YIvpbFkJ2K591QOVPqCeLM5nAcGgkbJ0uiCuOgYeWh5OUR1FXmLTWgReyHFb8yPoLY4kWyb5/pub?start=false&loop=false&delayms=3000)

[Everyone's github sites so far](fambly)

## Theory: Digital Rhetoric

Among conversations had in digital rhetoric is the whole "figuring out if we should use established (or at least rearticulated/revised) theory in new contexts, or build new theory for new contexts" thing. Eyman maps three general areas in digital rhetoric's theory landscape:

- those who work from classical & contemporary rhetorical theory as a beginning place,
- those who work from classical rhetoric & contemporary rhetorical theory but are interested in renovating those concepts in order to do so, and
- those who argue we need a whole new set of theories, methods, and practices to conceptualize the digital.

## Praxis: Intro to HTML

A "standards-based web page": 1) structured content in HTML, 2) visual design in CSS, 3) enhancements in JS. (Stolley, p. 37)

Six rules for HTML:
  1. Every [valid](https://validator.w3.org/) HTML document's first line must be a DOCTYPE declaration.  
  1. Every tag that opens around text content must close. Void elements are self-closing.
  1. Close tags in the opposite order that they open. (Nest correctly.)
  1. All tag elements and attributes and some values must be lowercase letters.
  1. All attribute values must appear in quotation marks, immediately following the equals sign. (Watch that spacebar.)
  1. All <code>class</code> and <code>id</code> values should begin with a letter, and must not contain spaces. Use lowercase letters and hyphens. (CSS is case sensitive.) Some attributes allow multiple values, which are separated by a space.

Today's goals: **write a basic HTML page from scratch** and **begin marking up content for at least one page of your site, to publish at the end of class**. Got no content? You can fiddle with this raw text of my own CV.

### Terms and things:

1. tag, [element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), [attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
  - **root** element
  - **metadata** elements (head, title, link, meta, style)
  - **sectioning** elements (body, article, aside, footer, header, h1-h6, main, nav, section)
  - **block (content)** elements (p, ol, ul, li, dl, dt, dd, div, pre, figure, figcaption, hr)
  - **inline (text content)** elements (a, abbr, dfn, br, b, i, cite, q, em, strong, code, span, sub, sup)
  - **links**
  - **comments**
  - **media** elements (img, audio, video)
  - **table** elements (let's not go there today unless we get crazy)
  - **embedded** content (let's not go there today unless we get crazy)
  - **form** elements (not in our waters this semester&em;involves database management)
  - **special characters**
  - **deprecated** elements (old elements that don't or shouldn't work any more, depending on your browser)
1. nesting, parent, child (children), sibling, descendants
1. `id=""` for unique pieces of structure, `class=""` for similar, repeated structures  

### The anatomy of an element

![Anatomy of an HTML Element](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)
*Anatomy of an HTML Element*

![HTML Element with an attribute](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)
*An HTML element with a single attribute*

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
The relationship between the W3C and WHATWG is complex. Both organizations collaborated to develop HTML5, but haven't always played nicely since. WHATWG publishes the "living standard" while W3C versioned their standards (up to HTML5.2). In 2019, W3C agreed to work with the WHATWG living standard rather than just forking WHATWG's work. (Lots of politics there, and a great reminder that **technology and its development ain't neutral**; [read if you're curious](https://en.wikipedia.org/wiki/HTML5#W3C_and_WHATWG_conflict)) You can read about some history of development standards and recommendations in Stolley, *How to*, Chapter 4.

- [Mozilla Developer Network Web Docs: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
MDN Web Docs is an excellent reference and resource for all aspects of web development. Look up elements and attributes, get tutorials, and troubelshoot problems.


- [A List Apart](https://alistapart.com/)
A website "for people who make websites." Not helpful if you're stuck on how a partiuclar element works, but great if you want to read up on a variety of topics relevant to web standards and the "design, development, and meaning of web content."

- [W3C Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
The World Wide Web Consortium is an international community that develops Web standards. This intro to accessibility is a solid one, but is more from the working group's developer/standards perspecive.


- [WebAIM Introduction to Web Accessibility](https://webaim.org/intro/)
WebAIM is a nonprofit  organization that focuses on training and analysis of web content. Also of note is their [accessibility analysis of the top million home pages](https://webaim.org/projects/million/)


- [usability.gov](https://www.usability.gov/)
This site is a resource for usability practices and guidelines, managed by the U.S. Department of Health and Human Services (HHS)


- [Nielsen Norman Group](https://www.nngroup.com/articles/)
Jakob Nielsen and Don Norman defined usability and the field of UX. The NN/g website is an excellent resource for user experience. Like, I can't even say how important these two guys are.


## Other sources concerning today’s discussion:

### on markup and computational literacy issues
- Dilger, B., & Rice, J. (Eds.). (2010). <cite>From A to &lt;A&gt;: Keywords of Markup</cite>. Minneapolis; London: University of Minnesota Press.
- Fitzgerald, Andy. (2019, Jan 10). Conversations with robots: Voice, smart agents, and the case for structured content. <cite>A List Apart</cite>. [https://alistapart.com/article/conversations-with-robots/](https://alistapart.com/article/conversations-with-robots/)
- McGrane, Karen. (2013, May 02). WYSIWTF. <cite>A List Apart</cite>. [https://alistapart.com/column/wysiwtf/](https://alistapart.com/column/wysiwtf/)
- McGrath, L. (Ed.). (2011). <cite>Collaborative approaches to the digital in English studies</cite>. Logan, UT: Computers and Composition Digital Press/Utah State University Press.  http://ccdigitalpress.org/cad.
  - Polyphonic Classroom? https://ccdigitalpress.org/cad
- “The role of computational literacy in computers and writing.” (2012). <cite>Enculturation.net</cite> http://enculturation.net/computational-literacy


### on ePortfolios
- Blair, K. L., & Monske, E. A. (2009). Developing digital literacies and professional identities: The benefits of ePortfolios in graduate education. <cite>Journal of Literacy and Technology, 10</cite>(1), 40–68. http://www.literacyandtechnology.org/uploads/1/3/6/8/136889/jlt_v10_1_blair_monske.pdf
- National Council of Teachers of English. (2015, March 31). Principles and practices in electronic portfolios. http://www2.ncte.org/statement/electronicportfolios/
- Tulley, C. (2013). Migration patterns: A status report on the transition from paper to eportfolios and the effect on multimodal composition initiatives. <cite>Computers and Composition, 30</cite>(2), 101–114. https://doi.org/10.1016/j.compcom.2013.03.002
- Zecker, L. B. (2015) Changing landscapes: The impact of ePortfolios on teaching and learning [Special issue of journal]. <cite>Theory into Practice, 54</cite>. https://www.tandfonline.com/toc/htip20/54/4

### on rhetorical situations and ecologies
- Bitzer, L. F. (1968). The rhetorical situation. <cite>Philosophy &amp; Rhetoric 1</cite>. 1-14.
- Grant-Davie, K. (1997). Rhetorical situations and their constituents. <cite>Rhetoric Review, 15</cite>(2), 264-279.
- Krause, S. D. (1996). <cite>The immediacy of rhetoric: Definitions, illustrations, and implications</cite> [Web version of printed dissertation]. Retrieved September 10, 2019, from https://people.emich.edu/skrause/Diss/
- Sheridan, D. M., Ridolfo, J., & Michel, A. J. (2012). <cite>The available means of persuasion: Mapping a theory and pedagogy of multimodal public rhetoric</cite>. Anderson, S.C: Parlor Press.
- Edbauer, J. (2005). Unframing models of public distribution: From rhetorical situation to rhetorical ecologies. <cite>Rhetoric Society Quarterly, 35</cite>(4), 5–24.
- Vatz, R. E. (1973). The myth of the rhetorical situation. <cite>Philosophy &amp; Rhetoric, 6</cite>(3), 154–161.

## What to do for Week 04:

1. Wednesday will be a practical-oriented day:
  - We will workshop and validate your (at least) three HTML pages (home page, cv/resume page, and something else). Semantics and validation in particular, so revisit necessary sections of Stolley in prep for this.
    - **Push drafts of your three pages to your github site before class. Remember, broken is better than nothing!!**
  - We will mess around with distant reading methods in preparation for the [distant reading project](assignments.html)


2. **Read Eyman 3 and Mueller 3 (linked in both BB9 and on the web)**. Mueller's chapter will help flesh out your undestanding of "distant reading", a research method we'll play with for the [Distant reading project](assignments.html). Also check out [VanKooten (2016)](http://enculturation.net/methodologies-and-methods-for-research-in-digital-rhetoric),  

3. Important questions and methods for us to consider next week:
  - what is a research method? a methodology? (I will shoot some recommended readings your way to help with this question.)
  - what methods does the field of digital rhetoric use to take into account the complications of the affordances of digital practices?
  - close reading
  - distant reading
  - genre studies
  - usability studies


4. A thought from James E. Porter:
>“Likewise, digital writing research should not be viewed merely as research about writing with technology. It should be viewed, rather, as changing the fundamental assumptions about methodology, particularly the humanist assumption that divides the human from the technological. Digital writing research takes a cyborgian view and a networked view of human communications.... it represents a new way of looking altogether.” (Foreword to <cite>Digital Writing Research</cite>, p. xv)
