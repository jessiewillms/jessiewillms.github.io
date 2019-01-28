#CJRL_713 data journalism curriculum

###Notes and exercises

This course covers:

1. What and why “data journalism”
2. Where does data come from?
3. Basic statistics and math
4. Spreadsheets: intro
5. Spreadsheets: advanced
6. Cleaning data
7. Truth and lies in data
8. R (bonus)

All course notes and exercises &copy; 2019 [CJRL_713](http://globeandmail.com) Not to be be redistributed without permission.

##To contribute to the curriculum

###Lessons/Notes

All lessons are written in Markdown.

New lessons will be indexed in the order they appear if you tag them with YAML front matter at the top of the Markdown file:

```
---
layout: notes
topic: html
title: Intro to HTML
---
```

Choices for topics are:

`data` for introduction to data journalism content
`spreadsheets` for working with spreadsheets (both in Google Spreadsheets and Excel)
`data_journalism` for data journalism works  
`data_viz` for data visualizations notes

Title is up to you.

###Exercises

Links to exercise files should be catalogued in `topic-list.yml` if you want them to appear on the table of contents.  

We also recommend creating a direct download link within the notes. Use relative link with a class of `exercise`.

```
To practice your CSS skills, open up <a href="exercises/css-selectors.html" class="exercise">**css-selectors.html**</a>
```
This will appear as:

![](http://cl.ly/image/2u2A2F1C2O2Y/Screen%20Shot%202014-04-30%20at%2010.23.17%20AM.png)

Exercises that contain multiple files should be zipped for easy download.

##To preview the curriculum locally

Behind the scenes, the hosted notes are generated with Jekyll (For quick-start instructions, see: https://jekyllrb.com/). To get setup for local preview:

1. make sure you have Ruby v1.9.3 or above installed
2. install Bundler (a Ruby package manager) `gem install bundler`
3. run `bundle install` to install Jekyll and GitHub pages

When you want to preview the build:

1. run `bundle exec jekyll serve --watch` to generate the site (the --watch flag will regenerate whenever you edit a file)
2. You preview awaits you at `http://localhost:4000` !

When you want to run build:

1. run `jekyll build` to perform a one off build to the `./_site` folder
