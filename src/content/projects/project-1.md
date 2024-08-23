---
title: 'Machine Learning Fish eDNA Analysis'
description: 'Dimensionality reduction of fish eDNA data and modeling against oceanographic data using random forests'
image:
    url: '/pelagic.webp'
    alt: 'pelagic fish wallpaper'
worksImage1:
    url: '/VAE-out.png'
    alt: 'first image of your project.'
worksImage2:
    url: '/image-2.webp'
    alt: 'second image of your project.'
keywords: eDNA, fish biodiversity, dimensionality reduction, random forest, CTD profile, community structure, DOPPIO
advisor: Dr. Josh Kohut, Rutgers University
website: https://github.com/henrysun9074/fishics
---

<div></div>
<div></div>

### Project Overview

<p class="project-description">Summer 2024 NSF REU project conducted over 10 weeks at Rutgers University culminating in poster presentation. Addressing two primary research questions:</p>

<p class="project-description">Q1: Evaluating the effectiveness of various dimensionality reduction techniques for encoding eDNA data, including linear and non-linear methods: principal component analysis (PCA), t-SNE and UMAP, and a custom variational autoencoder (VAE).</p>

<p class="project-description">Q2: Using oceanographic data (namely salinity, temperature, and density/stratification) generated from Rutgers' DOPPIO model and CTD profiles taken during eDNA sampling to predict fish community structure using random forests. This page will be updated with preliminary results at the end of the REU August 9th; for continuous updates or to preview code please visit the GitHub page linked above. For a map of eDNA stations (will also be updated as I accumulate more data), click <a href ="https://www.google.com/maps/d/u/0/edit?mid=1O0FkFMXOdc6LRBarOZB-fRrcTFiQ0r8&usp=sharing">here.</a></p>

<div></div>

### Rationale

Understanding how fish communities change/move with the seasons is important for management, and this project does so in a cost-effective and non-invasive way using environmental DNA (eDNA). eDNA allows scientists to collect genetic material shed by fish into the water using water sampling rather than trawls or nets. By combining this genetic information with oceanographic data like temperature and salinity, we can see how different ocean conditions affect where fish live and how they behave, and whether this relationship is affected by seasonality. Moreover, this research is particularly relevant for New Jersey coastal management as it comes at a time with massive offshore wind deployments planned off the Jersey coast. Understanding how fish communities interact with their environment can help in making informed decisions about where to place these wind farms to minimize their impact on marine life. 

<div class="center">
    <img class="pro-img" width="500px" src="/offshorewind.jpg"/>
</div>

From a more technical perspective, this research also seeks to apply new computing methods like neural networks (autoencoders) and tree-based machine learning models towards analysis of eDNA data, serving as a framework to guide future research.

<div></div>

### Methodology and Principal Results

<p class="project-description">Q1: See the GitHub repo with all code for this question - just finished analysis! Took heavy inspiration from <a href="https://onlinelibrary.wiley.com/doi/10.1111/1755-0998.13861">Lamperti et al. 2023</a> for the design here. I tested 4 different dimensionalty reduction techniques, PCA, tSNE, UMAP and VAE. Then, I ran multiple regression matrices on the Jaccard distance and Euclidean distance of reduced-dimension data to evaluate how well the high-dimensional structure of eDNA abundance data is represented in two dimensions. I also ran k-means clustering with k=3 on each method's 2D encoding to compare various clustering metrics. My results for this question are in the table below!</p>

<div class="center">
    <img class="pro-img" width="500px" src="/figure1.png" alt="first image of your project." />
</div>

<div></div>


<p class="project-description">Q2: I'm using sklearn for training a simple random forest classifier. eDNA data was in the form of a .csv with relative abundance values (ranging from 0 to 1) for several dozen detected species. For classification purposes, read abundance was converted to a binary format where all species detected at a particular site were represented as a 1. The model was then asked to predict the presence/absence of each species using surface and bottom temperature, salinity, and stratification. Then, I used k-means clustering to identify the optimal # of fish communities by season, group eDNA stations into communities, and predict community assignment from the same oceanographic variables. </p>

<div></div>

### Project Outputs and Future Directions

<div class="center">
    <img class="pro-img" width="500px" src="/VAE-out.png" alt="first image of your project."/>
    <h4>Above: Initial VAE clustering of eDNA samples taken across three seasons. VAE outputs did not exhibit strong clustering and performed poorly in terms of capturing variation within the data.<h4>
 </div>

### Links to Project Outputs: 
<a href="https://drive.google.com/file/d/1x8JHUT7h3VcprLczOtX2KPqdUL2vghds/view?usp=sharing">Final Poster</a>, 
<a href ="https://docs.google.com/document/d/1yZCSKR0KeJFRHDyaQCTumU_mIHaK1x27gXaZD4smk2Y/edit?usp=sharing">Initial Proposal</a>

See the final poster for a more concise look at the direct model results, especially for Q2. Models were generally far more accurate in summer stratified than winter mixed seasons, with dominant taxa also differing by season. I'm looking to write up the results for this project and get it published this fall! 
