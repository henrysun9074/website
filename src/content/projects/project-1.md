---
title: 'AI-Generated Right Whales'
description: 'Improving rare species detection and conservation using AI-generated training data augmentation'
image:
    url: '/whale.webp'
    alt: 'Whale wallpaper'
worksImage1:
    url: '/image-1.webp'
    alt: 'first image of your project.'
worksImage2:
    url: '/image-2.webp'
    alt: 'second image of your project.'
keywords: North Atlantic Right Whale, synthetic imagery, diffusion models, LoRA, deep learning
advisor: Dr. Dave Johnston, Duke University
website: https://github.com/henrysun9074/smartwhales
---

<div></div>
<div></div>

### Project Overview and Rationale

<p class="project-description">Duke Independent Study project and planned senior thesis. Awarded $8,000 NASA NC Space Grant for 2024-25 school year to conduct research. </p>

<p>Side note: The GitHub page linked above isn't really updated since most of my work thus far was done on HuggingFace WebUI/Colab with purchased GPU hours. However, all information/code for training images will be made completely open-source later on!</p>

I started this project in October 2023 after meeting with my advisor, Dave, and we quickly realized that despite the endless stream of innovations within the field of generative AI flooding the general public, very few researchers were thinking about its applications in ecology and conservation biology. While the creativity of random internet users was seemingly endless (see below), what of using these new tools to generate some helpful scientific images?

<div class = "center">
    <img class="pro-img" width="300px" src="/dallefunny.jpg" alt="second image of your project."/>
</div>

We started this project looking specifically at improving detection of right whales through training dataset augmentation, in collaboration with the Canadian Space Agency on a project called 'Smartwhales'. Their aim is to develop continuous monitoring of North Atlantic right whales (NARWs) using deep-learning detection of animals from satellite imagery. However, detection of these animals is already extremely difficult given their <a href="https://www.neaq.org/about-us/press-room/press-releases/2022-population-estimate-north-atlantic-right-whale/">low numbers</a>, and their infrequent surface times + confounding variables like ships and cloud cover made things even more difficult. 

Last August, researchers at the University of Maryland created the SeaDroneSim2 benchmark suite based on the Blender game engine. They generated 2,000 novel whale images and found this improved whale detection by approximately 15%, using a 10% real data augmentation (preprint <a href="https://arxiv.org/abs/2308.07766">here</a>). We hope to build upon this work and showcase the potential for synthetic imagery developed from generative AI in the field of biology!

<div class = "center">
    <img class="pro-img" width="500px" src="/satellitewhale.png"/>
    <h4>Right whale aerial and satellite image captured by smartWhales initiative.</h4>
</div>

<div></div>

### Current Progress

I spent most of the past semester and a half familiarizing myself with generative AI paradigms. This first involved using text-to-image models such as Midjourney and GPT4 (which use diffusion models under the hood) to create sample training images - similar work has been done using text prompts in GPT4 to <a href="https://chemrxiv.org/engage/api-gateway/chemrxiv/assets/orp/resource/item/647d305dbe16ad5c577b6627/original/prompt-engineering-of-gpt-4-for-chemical-research-what-can-cannot-be-done.pdf">synthesize new classes of organic molecules</a>. Presently, diffusion models are the class of generative AI models that create the highest-quality images, and do so by being trained on extensive amounts of data. Many AI image generation services, such as Adobe Firefly, DALL-E 3, and others use pre-trained diffusion models to allow users to quickly create novel outputs. 

Below are a couple AI-generated whales (I first attempted to replicate drone and underwater images rather than satellite, as those were far easier) I made using Midjourney and Adobe Firefly. Despite my best efforts with prompt engineering and supplying the models with reference images, the strong priors/bias of the base large language models makes generating right whales fairly difficult as most whales turn out to look like humpbacks - unsurprising, given the models have seen far more of those than anything else.

<div class = "center">
    <img class="pro-img" width="400px" src="/narwmidjourney.png"/>
    <h4>Generated in Midjourney using "right whale satellite image birds eye view taken from drone"</h4>
    <img class="pro-img" width="400px" src="/fireflywhale.png"/>
    <h4>Generated in Adobe Firefly using "Humpback whale from above, aerial view, drone image, 8k uhd national geographic award winning photo, photorealistic style perfect sea background." Task failed successfully?</h4>
</div>

<div></div>

As such, our research focus has shifted from prompt engineering to model fine-tuning using low-rank augmentation, or <a href="https://huggingface.co/docs/diffusers/en/training/lora">LoRA</a>. LoRA is a process where the base large language model for image generation has the number of trainable parameters reduced significantly and is then augmented using a small dataset of new images, essentially allowing the model to specialize in generating a certain labeled class of image. Below is an image for a right whale generated by a right whale LoRA I built in Hugging Face, where I provided a Stable Diffusion model with ~15 images from NOAA's Kaggle competition for right whale detection from aerial images. Clearly, it's much more like a right whale! You can find the LoRA and generate your own images <a href ="https://huggingface.co/henrysun9074/north-atlantic-right-whale-lora-mk-1?text=A+drone+photo+of+a+right+whale+swimming+in+the+ocean+near+the+surface">here</a>.

<div></div>

<div class = "center">
    <img class="pro-img" width="500px" src="/whalelora.png"/>
</div>
<div></div>
<div></div>


### Future Plans

While promising (and very insightful), what we've done so far is not good enough. This fall, I'm planning to dive deep into fine-tuning with different parameters to build a dataset of satellite right whale training images. Then, we can test the original Smartwhales deep learning model for detection from satellite images on the new dataset containing real and synthetic images and evaluate its performance. 

Additionally, with support from NC Space Grant and a clearer research focus, I am directing a team of undergraduates starting Fall 2024 to expand our research focus beyond just right whales and dive into applying generative AI imagery across a whole host of biological problems, depending on student interests. For instance, we are planning to determine using prompt engineering what types of natural imagery (such as drone images, which our lab has a ton of) and what study systems/organisms are most faithfully recreated using AI, and the techniques by which that can best be accomplished. 

From an email I sent to interested students: "With a noticeable gap in research seeking to leverage the potential of generative AI in ecology and conservation biology, we aim to address this deficiency. Dave and I are looking to write a short, methods-based publication regarding its applications for training dataset augmentation, and I am also aiming to present this work at >=1 conference over the next year. Beyond this paper, this project will also likely generate publishable results regarding 1- prompt engineering techniques in genAI for endangered species conservation or other biological applications, and 2- the performance of the NARW deep learning detection model after synthetic data augmentation."