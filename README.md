# workshop-task-4
the url for my website is: https://ellap4n.github.io/workshop-task-4/

## Initial Idea
I had a idea to create a image/simple piece of art with sections that can be changed, added or removed (similar to those dress up character games)
I originally was going to digitally draw this on proceate and pull the components into p5 as images, but I decided in the end to experiment with the shape drawing functions on p5 to familirise myself with them. 

## Drawing the sections 
My first step was to create the different sections of the art as simple shapes - sea, mountains, clouds and birds. 
![Screenshot 2025-01-20 195519](https://github.com/user-attachments/assets/0f4c6cf3-6d75-4db3-b7e7-120cc349cbc1)
![Screenshot 2025-01-20 195535](https://github.com/user-attachments/assets/ce617ae6-6d5d-4c07-9d5c-edd450ee2cce)
![Screenshot 2025-01-20 195532](https://github.com/user-attachments/assets/ecba61b1-ba36-4961-a0cb-39189d6d6b80)
![Screenshot 2025-01-20 195528](https://github.com/user-attachments/assets/ccededf8-a06a-4903-85b4-6fe3f9457fb1)
these are my codes for these sections - pretty straightforward so didn't require any research.
I added some randomness to the waves and limited the area where the birds would appear in relation to bird 1 - which meant the birds always appeared in a rough diagonal line for aesthetic purposes. 

## Creating the Gradient for the sky
This was extremely difficult - I wanted a gradient fill for the sky, but there was no function for this. 
I assumed that transiton % could be coded for and I had planned to make this simply follow the position of the mouse so the colour would move up and down. 
### Attempt 1 
i downloaded the file library from this webpage https://github.com/alterebro/p5.fillGradient 
![Screenshot 2025-01-21 162635](https://github.com/user-attachments/assets/a655b253-224a-4e00-a479-941d5fdb14eb)
but I couldn't quite figure out how to make it work, and at this point I had spent far too much time on the gradient already. 
### Attempt 2 
So I decided to just create gradient images on https://coolors.co/gradient-maker and pull these in as the sky. 
![Screenshot 2025-01-21 163340](https://github.com/user-attachments/assets/9b0a013e-6711-4394-96ee-2afb88da99f4)
![Screenshot 2025-01-21 163002](https://github.com/user-attachments/assets/431abe01-6801-4604-b733-d4fa54548c57)
![Screenshot 2025-01-21 164528](https://github.com/user-attachments/assets/ccb5ee28-3ebb-4882-8b3b-38b5a1d50df6)
This worked quite well, but then the problem of how to create the moving backgorund based on mouse input position would work. 
## Coding User inputs 
Now that I had all my image layers ready, I needed to code user inputs to change these components. 

## Moving the sky
I ended up moving the sky by extending the picturer beyond the canvas bounds, and moving the position where the image is generated based on the mouse position. it woked very well
