# bio.tools & EDAM drop-in hackathon & discussions

### Representative: Jon Ison

## Community

ELIXIR Tools Platform

## Leads
---
Jon Ison
Hans-Ioan Ienasescu
Matúš Kalaš 
Hervé Ménager 
Veit Schwämmle 


## Background information
EDAM and bio.tools developers will attend the whole hackathon (Mon 12 - Fri 16) and will host a running "drop-in" session, with each day focused on a specific theme (see below).  We hope to work with any people and projects who are intersted in using or developing EDAM and bio.tools.

## Focus of each day
Each hackathon day has a focus, which we'll try to stick to, but will adapt depending upon who turns up.

* **Tue Nov 13** [bio.tools](https://github.com/bio-tools/biotoolsRegistry/blob/master/biohackathon.md#biotools-development) (kick-start the community development)
* **Wed Nov 14** [EDAM](https://github.com/bio-tools/biotoolsRegistry/blob/master/biohackathon.md#edam-development) (formats curation, EDAM applications and planning EDAM 2.0)
* **Thu Nov 15** [subject tbd](https://github.com/bio-tools/biotoolsRegistry/blob/master/biohackathon.md#subject-tbd) (we'll decide the focus during the hackathon)
* **Fri Nov 16** [publications](https://github.com/bio-tools/biotoolsRegistry/blob/master/biohackathon.md#publications) (discussion & planning of publications)


## Day 2 (Nov 13): bio.tools
*Expected audience*: anyone with an interest in improving bio.tools

*Expected outcome*: verification of next release, kick-start the community development process

The purpose is to test, evaluate and optimise the development deployment of bio.tools (https://dev.bio.tools/), changes in which are scheduled to be moved into production (https://bio.tools/) during Dec 3-7.  The bio.tools core-dev will be on hand to discuss things in person.

### Task 1: Release testing
Currently 28 issues labelled ["done - staged for release"](https://github.com/bio-tools/biotoolsregistry/issues?q=is%3Aissue+is%3Aopen+label%3A%22done+-+staged+for+release%22) are implemented in https://dev.bio.tools.  Before these can be moved into production, we need independent verification that these features and fixes are satisfactorily implemented.

The task is:
* pick any ["done - staged for release"](https://github.com/bio-tools/biotoolsregistry/issues?q=is%3Aissue+is%3Aopen+label%3A%22done+-+staged+for+release%22) issue which lacks the "fix verified" label
* read the thread and test things are working as advertised
* add a comment to the thread; either reporting things are OK, or describing an outstanding problem
* repeat, until all "done - staged for release" issues are verified

In addition, please have a play with https://dev.bio.tools, critique the interfaces, API and content, and report any bugs or suggestions via [GitHub](https://github.com/bio-tools/biotoolsRegistry/issues/new).

bio.tools core-dev will monitor the tracker, attach the ["fix verified"](https://github.com/bio-tools/biotoolsRegistry/labels/fix%20verified) label and fix issues that crop up.

### Task 2: Development priorities
We label issues to reflect their status and priority:
* ["critical priority"](https://github.com/bio-tools/biotoolsRegistry/labels/critical%20priority) : our top priorities, including most of the reported [bugs](https://github.com/bio-tools/biotoolsRegistry/labels/bug)
* ["high priority"](https://github.com/bio-tools/biotoolsRegistry/issues?q=is%3Aissue+is%3Aopen+label%3A%22high+priority%22) : things which bio.tools core-dev consider high priorities; we get to these once ["critical priority"](https://github.com/bio-tools/biotoolsRegistry/labels/critical%20priority) issues are addressed
* ["in progress"](https://github.com/bio-tools/biotoolsRegistry/labels/in%20progress) : things we're working on currently
* ["Dec 18 release"](https://github.com/bio-tools/biotoolsRegistry/milestone/2) : things we're aiming to put into the next production deployment
* ["wontfixsoon"](https://github.com/bio-tools/biotoolsRegistry/labels/wontfixsoon) : things which, for one reason or another (usually lack of developer capacity), we don't anticipate doing soon (that's doesn't imply they're unimportant or bad ideas!)

We want to be sure our priorities reflect those of the community at large, and engage developers who are willing to help out.  The task is:
* review our priorities (issues in any of the categories above) - providing feedback in the appropriate GitHub thread
* feel free to [request new features](https://github.com/bio-tools/biotoolsRegistry/issues/new), but please first [search our issues](https://github.com/bio-tools/biotoolsRegistry/issues) as it might already be listed
* *developers only* - are you interested to help out, especially on ["critical priority"](https://github.com/bio-tools/biotoolsRegistry/labels/critical%20priority) issues, or anything else?  If so, please disucss this with the bio.tools developers

### Task 3: bio.tools API testing & optimisation
The latest development deployment of the bio.tools API (https://dev.bio.tools/api/tool) is, we hope, a big improvement on the current version.  It supports a comprehensive [set of parameters](https://biotools.readthedocs.io/en/latest/api_reference_dev.html) that enable precise query over tool function and other metadata.  But before we can move these changes into production, the API needs to be thoroughly tested.  There is also an opportunity to optimise the search behaviour, in light of results of real queries, to ensure it works as anticipated.

The task is to
* systematically test the API, particulaly the behaviour of the search parameters as documented in the [API Reference](https://biotools.readthedocs.io/en/latest/api_reference_dev.html) and [API Usage Guide](https://biotools.readthedocs.io/en/latest/api_usage_guide_dev.html).
* provide feedback on the API search behaviour / possible improvement via [GitHub](https://github.com/bio-tools/biotoolsRegistry/issues/new)
* suggest fixes or improvements to the API docs [here](https://github.com/bio-tools/biotoolsdocs/issues).

Hopefully (depending on certain developments being completed in time), we'll be able to tweak the elastic search parameters during the workshop, allowing for immediate iterative improvements. 


### Task 4: Open development process
Now that bio.tools is [open source](https://github.com/bio-tools/biotoolsRegistry/blob/master/LICENSE), there is an opportunity for hackers everywhere to contribute to the project.  But first we must define how the community development process will work in practice.  We have emerging [contributor guidelines]() but we want to revise these in light of feedback from potential contributors.

The task is to review the emerging [contributor guidelines]() and provide feedback on these via [GitHub](https://github.com/bio-tools/biotoolsRegistry/issues/new).



## Day 3 (Nov 14): EDAM
*Expected audience*: anyone with an interest in improving EDAM, people knowledgeable of bioinformatics data formats

*Expected outcome*: improved EDAM Formats subontology, scoping the desired state of EDAM 2.0, developing EDAM applications

### Task 1 Curation of bioinformatics data formats
The [EDAM Format subontology](http://edamontology.org/format_1915) has potential in systems such as [Galaxy](https://f1000research.com/posters/6-1032) and for [workflow composition](https://doi.org/10.1093/bioinformatics/bty646).  EDAM is close to providing a comprehensive catalogue of the prevalent bioinformatics data formats.  To accomplish this, a significant number of [work](https://github.com/edamontology/edamontology/issues/370) must be completed, including [guidelines](https://edamontologydocs.readthedocs.io/en/latest/editors_guide.html#id12) for EDAM Format curation, which have been under [discussion](https://github.com/edamontology/edamontologyDocs/issues/10).

The task is to work on any aspects of the data format curation listed [here](https://github.com/edamontology/edamontology/issues/370) including:

* addition of miscellaneous new data formats, or changes to existing ones ([issue](https://github.com/edamontology/edamontology/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3A%22concept%2Fterm+request%22+format))
* addition of formats ensuring coverage for Galaxy applications ([issue](https://github.com/edamontology/edamontology/issues/85))
* addition of formats to ensure coverage of ([FAIRSharing](https://fairsharing.org/))

### Task 2 Verification of EDAM Formats subontology
We have guidelines for the development of the EDAM formats subontology:
* [editor guidelines](https://edamontologydocs.readthedocs.io/en/latest/editors_guide.html#id12) when modifying EDAM; adding or changing concepts, concept metadata, crosslinking, etc.
* [developer guidelines](https://edamontologydocs.readthedocs.io/en/latest/developers_guide.html#adding-concepts) about the technical process

To develop EDAM Format subontology into a rigorous catalogue, we must ensure the guidelines are followed.

The task is to develop tooling that checks compliance of EDAM to the guidelines above, and generate a human-readable report that can be acted on.
  

### Task 3 Towards EDAM 2.0 (discussion & planning)
It is over 5 years since an [article](https://doi.org/10.1093/bioinformatics/btt113) describing EDAM was published in Bioinformatics.  Since then, there have been 18 new releases (currently EDAM 1.21), with many additions and improvements.  Soon, we hope to release EDAM 2.0 implementing a set of features representing a step forward in value and quality over 1.* releases.

The task (working as a group, or alone) is to enumerate; what are the desirable properties of EDAM 2.0?  We will enumerate these properties in this [issue](https://github.com/edamontology/edamontology/issues/376), creating other issues as needed for finer-grained information.


### Task 4: EDAM applications (discussion & hacking)
EDAM is used (or being considered) in a variety of contexts.  There is an opportunity for developers on projects that are using (or considering) EDAM to discuss their requirements and work with the EDAM developers.




* cleaning up the connection between EDAM Formats and Data subontologies ([issue](https://github.com/edamontology/edamontology/issues/283), see also [issue](https://github.com/edamontology/edamontology/issues/287))
* 

## Day 4 (Nov 15): Subject tbd
The topic of the fourth day will be decided upon during the hackathon, depending upon interest and progress on previous days:

1. things outstanding from previous days
2. something else, *e.g.*
   * evaluation of [EDAM Browser](https://ifb-elixirfr.github.io/edam-browser/) (see [GitHub](https://github.com/IFB-ElixirFr/edam-browser)) ontology browser; issues, features and next steps
   * evaluation of bio.tools content from an end-user perspective: annotation consistency, EDAM coverage, content views *etc*
   * integration of bio.tools and biocontainers.pro
   * integration of bio.tools and Galaxy


## Day 5 (Nov 16): Publications

There are many developments concerning or involving EDAM or bio.tools which - with a little more effort - can be finished off and written up for publication.  The final day will be reserved to discussing next steps, particulary, what is required from the EDAM or bio.tools side, and identify concrete actions to finish off these works and write them up for publication. 



---
## Related works and references
- https://bio.tools/
- https://ifb-elixirfr.github.io/edam-browser/#topic_0091
- https://biit.cs.ut.ee/edammap/

## GitHub or any other public repositories of your FOSS products (if any)

- https://github.com/bio-tools/biotoolsschema
- https://github.com/edamontology/edamontology/
- https://github.com/bio-tools/Tool-Information-Standard
- https://github.com/edamontology/edammap
- https://github.com/IFB-ElixirFr/edam-browser

## Hackers
---