---
title: 'AI-Generated Cetacean Images'
description: 'Improving automated cetacean detection and conservation using generative AI for training dataset augmentation'
image:
    url: '/whale1.webp'
    alt: 'Whale wallpaper'
worksImage1:
    url: '/image-1.webp'
    alt: 'first image of your project.'
worksImage2:
    url: '/image-2.webp'
    alt: 'second image of your project.'
keywords: object detection, synthetic imagery, diffusion models, LoRA, dataset augmentation, biodiversity monitoring
advisor: Dr. Dave Johnston, Duke University; Holly Houliston, British Antarctic Survey and University of Cambridge
website: https://github.com/henrysun9074/genai-whales
---

### Overview
Training computer models to detect animals like whales in photos or videos requires lots of example images, but large and diverse training datasets are hard to assemble. While existing methods exist for traditional dataset augmentation, generative AI models can create realistic images and potentially serve as a new method for synthetic dataset augmentation. I investigated how new diffusion-based generative AI models could create deepfake humpback whale and right whale images. 

<center><img src="/da.png" width="400" class="center"></center>


Diffusion models work by progressively adding and removing noise from input images, learning to better recover noise during training to generate novel outputs. These methods have emerged as the <a href ="https://proceedings.neurips.cc/paper/2021/hash/49ad23d1ec9fa4bd8d77d02681df5cfa-Abstract.html">eminent class</a> of image generation model. 

<center><img src="/diffusion.png" width="500" class="center"></center>


### Results

<center><img src="/finetune.png" width="500" class="center"></center>

After testing a few other methods, like text-to-image or image-to-image zero-shot generation using generative AI services, I settled on fine-tuning as the best approach. We were able to generate pretty realistic-looking whale images by fine-tuning diffusion models using DreamBooth and LoRA. I quantified effectiveness using Google Lens, where our fake right whales and humpback whales made using fine-tuned LoRA models were able to effectively identified to the species level almost 100% of the time. I also built a pipeline for batch generation of synthetic imagery from fine-tuned diffusion models, resulting in large-scale image synthesis to be incorporated as part of future detection model training.

<center><img src="/batchgen.png" width = "300" class="center"></center>
<h4>Batch generation of 512 synthetic humpback whales made using a fine-tuned Stable Diffusion model</h4>

The code for all this, alongside links to presentations and posters I’ve given, are in the GitHub link at the top of this page. Contact me if interested in a copy of my senior thesis, which is far more comprehensive with regards to the challenges and opportunities of diffusion-based generative AI for dataset augmentation. 

### Future Work
Be on the lookout for a review article summarizing the potential for new diffusion-based generative AI as a tool for dataset augmentation in wildlife remote sensing, alongside work done by undergraduates at Duke continuing this project in the MaRRS Lab. In particular we want to identify ideal ratios for real:synthetic imagery and factors guiding synthetic image generation to maximize base detection model performance. 

<div></div>
<div></div>
