# Tomato Leaf Disease Classification [Web App](http://206.189.38.229:5000)
## Overview
The dataset, which consists of 8 categories of tomato leaves from [PlantVillage](https://github.com/spMohanty/PlantVillage-Dataset) were used as dataset to train the [Keras model](https://github.com/reubenloo/tomato/tree/master/KerasModel). It was then converted to a [TensorflowJS model](https://github.com/reubenloo/tomato/tree/master/public/tfjs-models/PlantVillage) and deployed using a [NodeJS Express server](https://github.com/reubenloo/tomato/blob/master/server.js) on [Digital Ocean](https://www.digitalocean.com/). [Solutions](https://www.planetnatural.com/pest-problem-solver/plant-disease) to remedy the diseases are provided as well.
 
## Setup
1. Clone this repository into your local machine
2. Install [NodeJS](https://nodejs.org)
3. In the local directory (/tomato), open Terminal and run the following:
```
npm install
node server.js
```


## Built With
* [Keras](https://keras.io/) - High level neural network API, running on top of Tensorflow
* [TensorflowJS](https://www.tensorflow.org/js) - Library for machine learning in Javascript
* [ExpressJS](https://expressjs.com/) - Minimalist web framework for NodeJS
* [Digital Ocean](https://www.digitalocean.com/) - Cloud hosting provider

## Acknowledgements
Sincere acknowledgements to Mr Gary Chan (project facilitator), Dr Jimmy Goh (AI expert), Ms Grace Yap ([Temasek Foundation Scale Organizer](https://www.facebook.com/groups/TFSCALE/)), all other lecturers of [Republic Polytechnic](https://www.rp.edu.sg/soi) who helped in any part and my teammates.
* [SP Mohanty](https://github.com/spMohanty/) - PlantVillage Dataset
* [DeepLizard](https://deeplizard.com/learn/video/HEQDRWMK6yY) - TensorflowJS tutorial
* [Traversy Media](https://www.youtube.com/watch?v=_GSOnHRYSS0) - ExpressJS tutorial
* [Plant Natural](https://www.planetnatural.com) - Solutions for tomato leaf diseases


