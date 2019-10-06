# "Handout" for Week 5

[ENGL 5369, Fall 2019](calendar.html)

[Slides if you want such things](https://docs.google.com/presentation/d/e/2PACX-1vRufA94YIvpbFkJ2K591QOVPqCeLM5nAcGgkbJ0uiCuOgYeWh5OUR1FXmLTWgReyHFb8yPoLY4kWyb5/pub?start=false&loop=false&delayms=3000)

[Everyone's sites so far](fambly)


## Praxis: Digital Rhetoric

1. **Show and tell (portfolios)**. Show us what you got. What are some problems you solved? What are some problems you're still working on?

2. **Show and tell (word clouds)**. How's it going so far (if it's going?)? What do we need to do with bibliographies? Do we include book reviews? Do we work these elements up separately (separate text files for full text, w/bibs, w/reviews?) How modular/scalable do we want to be with this info?)
  - revisit pages 77-80 in Mueller’s chapter, which discusses the role and value of readymade word clouds and their relationship to more systematic, method-rich approaches to word watching.


3. Praxis & Multimodal authoring: "Multimodality pulling into a station" (podcast)  
  - imposing ways of thinking on other modalities (writing, composing, multimodality)
  - queering technologies, queering the composing process, queering that sense that the audience needs to be catered to in a particular way; the move toward user-centered design, ease and efficiency?

## Praxis: Continue with HTML

### Accessibility:
  - Load up [wave.webaim.org](http://wave.webaim.org/) and run your page throug the accessibility evaluation tool. What'cha get?
  - Ggood markup (which we're theoretically doing already) is accessible
    - Not skipping heading levels
    - nesting properly
    - using elements correctly
    - divs for CSS/JS and sections for semantics
    - main element
    - use headings for content headings, not text formatting to give the visual appearance of headings
    - Don't use headers to achieve visual results
  - Writing good alt attributes for content images
    - accurate & equivalent
    - succinct
    - not redundant
    - don't use "image of..." or "graphic of..." (redundant)
  - Writing accessible links
    - informative link phrases
    - links should look like links
    - long enough and no longer
    - URLs vs human-readable links
    - don't use "link to..." (redundant) or "click here!" or "more" or "click for details" (ambiguous out of context)

Last week, we worked with integrating sectioning elements:
  - `header` and `footer`
  - `nav`
  - `article` and `section` and `aside`
  - `div`

### Metadata

Pretty sure we already set `lang` and `charset` attributes. Now let's add some other `<meta>` elements. We can add `author` and `description` (some content management systems will grab this information, and search engines will look at descriptions and headings for keywords along with the `<title>` element.
- [Metadata in the HTML head](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) from MDN documents.
- [Open Graph protocol](https://ogp.me/) is a metadata protocol invented by Facebook that "enables any web page to become a rich object in a social graph."

Set the following metadata for each page:
  - author and description
  - Open Graph title, type, url, and image

*Note: Since the early version of SEO was "load an epic $^!#ton of keywords in your metadata" search engines today prefer to weigh page text, linking patterns, and headings rather than creator-supplied metadata.*

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

[Bite, snack, meal](http://www.ewriteonline.com/bite-snack-and-meal-how-to-feed-content-hungry-site-visitors/) as essential approach to web writing.

[Usability 101](https://www.nngroup.com/articles/usability-101-introduction-to-usability/)

## Word Cloud things

Mueller, Derek. (2012b). Views from a distance: A nephrological model of the CCCC chairs' addresses, 1977-2011. Kairos: A Journal of Rhetoric, Technology, and Pedagogy, 16(2). Retrieved July 31, 2016, from [http://kairos.technorhetoric.net/16.2/topoi/mueller/](http://kairos.technorhetoric.net/16.2/topoi/mueller/):

> Indeed, like maps, clouds are more than neutral descriptions; they are constructs with properties that deliberately bring forward selected qualities of texts while downplaying others. (p. 2

> Subject to distant reading methods the addresses disappear and are replaced by substitutive, or tropical abstractions: a series of word clouds, in this case. Paradoxically, the addresses resurface in a severely abridged light as they are simultaneously remade, staged again, and resent into circulation (agitated, delivered).

> The visibility of such patterns yields related openings for inquiry and speculation: Can we imagine a primarily light-hued cloud in years to come? Or an address to the field absent such constants as students, writing, composition, college, university, or literacy? I raise these questions cautiously aware that they may appear critical of convention; however, I am foremost interested in pointing out that heuristic openings created by the clouds are as important as the report they offer on the culture of CCCC. That is, I maintain that the model's conceptual counterpart, network sense, functions both as a perspective on the culture of the organization and a catalyst for action concerning the shape of the field to come. (p. 2)

> As a type of distant reading, word clouds turn to data-mining processes to draw the most frequently used terms from full-text versions of the addresses. A radical reduction occurs in this meronymous amalgamation. Selected parts stand out from the thick, ecologically entangled whole. Yet this reduction is only temporary: The clouds elicit wonder or memory encounters without urging permanent annihilation of the full text. These, like all word clouds, yield a heuristic if in looking at them we find provocations to tease and shape further inquiry. (p. 5)

Mehta, Chirag. (2007). US presidential speeches tag cloud. Retrieved from [http://chir.ag/projects/preztags/](http://chir.ag/projects/preztags/)

Palmeri, Jason, & McCorkle, Ben. (2017). A distant view of English Journal, 1912-2012. Kairos: A Journal of Rhetoric, Technology, and Pedagogy 22(2). Retrieved September 25, 2019, from [http:/​/​kairos.technorhetoric.net/​22.2/​topoi/​palmeri-mccorkle/​index.html](http://technorhetoric.net/22.2/topoi/palmeri-mccorkle/index.html)

## What to do for Week 06:

Gonna get all rhetoricish. Read all the things (links on [calendar](calendar.html))
- Brooke chapters 1-3 (Interfaces, Ecologies, Invention)
- Hayles (2004) (on being media-specific)
- Edbauer (2009) (Rhetorical ecologies)

Keep working on distant reading project, and start thinking about design and layout ideas and inspiration for your portfolio sites. CSS is coming soon!
