# workshop-task-4
the url for my website is: https://ellap4n.github.io/workshop-task-4/

## Initial Idea
I had a idea to create a image/simple piece of art with sections that can be changed, added or removed (similar to those dress up character games)
I originally was going to digitally draw this on proceate and pull the components into p5 as images, but I decided in the end to experiment with the shape drawing functions on p5 to familirise myself with them. 

## User Inputs
We need at least 3 User inputs in this workshop - and my ideas are:
1. A simple on off checkbox toggle to familiarise myself with user input code
2. A more complex selection for the 'season' that affects a few different elements of the art
3. Mouse position input to move the sky to emulate the sun rising and setting. 


## Drawing the sections 
My first step was to create the different sections of the art as simple shapes - sea, mountains, clouds and birds. 
![Screenshot 2025-01-20 195519](https://github.com/user-attachments/assets/0f4c6cf3-6d75-4db3-b7e7-120cc349cbc1)
![Screenshot 2025-01-20 195535](https://github.com/user-attachments/assets/ce617ae6-6d5d-4c07-9d5c-edd450ee2cce)
![Screenshot 2025-01-20 195532](https://github.com/user-attachments/assets/ecba61b1-ba36-4961-a0cb-39189d6d6b80)
![Screenshot 2025-01-20 195528](https://github.com/user-attachments/assets/ccededf8-a06a-4903-85b4-6fe3f9457fb1)
these are my codes for these sections. 

#### Mountains 
The mountains were a bit of a learning curve - I hadn't created complex shapes such as them before, so I initially used Lines - this created some nice lineart but no fill. I tried to use the quad and rectangle functions to fill in the gaps but it was veyr tedious and difficult to change colour if I needed, or if I changed one line I'd have to change all the surrounding shapes too. 

This was not ideal, so I searched the reference page for functions that could be used to easily create irregular shapes. I ended up using beginShape() and vector points to draw the mountain with these reference pages: 
https://p5js.org/reference/p5/beginShape/
https://p5js.org/reference/p5/endShape/
https://p5js.org/reference/p5/vertex/
and this worked like photoshop wherre you can choose vector points to draw (but you have to input co-ordinates instead)
this was much simpler and changing one point automatically just adjusts the lines and fill so I could play around with the mountain shapes to my liking. 

#### Sea
I created the simple wave forms on top of a rectangle background using bezier curves: https://p5js.org/reference/p5/bezier/ 
I added some randomness to the waves as the bezier currve has 4 control point inputs which change the shape of the curve.
Instead of rewriting this code 6 times, I also created a loop with local variables wX and wY which generate a different position for each wave form within the boundaries of the sea.

```
  for(i = 0; i <= 6; i++) {
    wX = random(0,400);
    wY = random(320, 350);
    bezier(wX, wY, wX+(random(8, 15)), wY-(random(10,20)), wX+(random(25, 37)), wY+(random(10,20)), wX+(random(40, 50)), wY);
  }
}
```

#### Birds 
The birds used simple shapes that I had used before:

```
  stroke(0);
  bX = random(200, 350);
  bY = random(100, 200);
  line(bX-2, bY, bX+2, bY);
  for(b = 0; b <= 5; b++) {
    triangle(bX, bY, bX-7, bY-5, bX-2, bY-2);
    triangle(bX, bY, bX+7, bY-5, bX+2, bY-2);
    bX = bX + random(3,15);
    bY = bY + random(3,10);
  }
```
initially the birds were generated everywhere within the sky area, however because of the frame reload, they appeared to jump everywhere - so I limited the random range that they could appear so they looked more animated. 
I also limited the area where the birds would appear in relation to bird 1 - as before, they were scattered in a blob which is quite unusual as birds flock and follow a leader. 
The limit meant the birds always appeared in a rough diagonal line for aesthetic purposes. 

#### Clouds 
I had a pretty clear idea of how to create clouds from the get go - creating a central ellipse then generating extra smaller clouds aound it. 
This idea ran into no problems so was pretty straightforward

```
function clouds() {
  noStroke();
  fill(255);
  for(t = 0; t <=3; t++) {
    tX = random(0,400);
    tY = random(50,230);
    ellipse(tX, tY, 70, 50);
    ellipse(tX + random(10, 50), tY + random(5, 15), random(50, 70), random(30, 65));
    ellipse(tX + random(10, 50), tY - random(5, 15), random(50, 70), random(30, 65));
    ellipse(tX - random(10, 50), tY - random(5, 15), random(50, 70), random(30, 65));
    ellipse(tX - random(10, 50), tY + random(5, 15), random(40, 60), random(20, 30));
    ellipse(tX - random(10, 50), tY, random(60, 80), random(20, 40));
    ellipse(tX + random(10, 50), tY + random(5, 15), random(40, 60), random(20, 30));
    ellipse(tX - random(10, 50), tY, random(60, 80), random(20, 40));
    
  }
  ```
### Coding User inputs 
Now that I had all my image layers ready, I needed to code user inputs to change these components. I followed the workshop video for this step to create a selection dropdown for the season, and a toggle for the birds overhead. 

the season changed both the colours of the sky and reflection of the sea. 

## Sky 
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

### Moving the sky
I had to think about a new way to move the sky now that I had no control over the gradient %, 
and so after much thought, I ended up thinking to move the sky by extending the picture beyond the canvas bounds, and moving the position where the image is generated based on the mouse position.

the position generated must be a variable, so I created a global variable 'ySky' that was determined by the position of the mouse. 
I then replaced the Y cooridinate of the image with this variable. 
```
function sky() {
  let season = select.selected();
  if (mouseY > 0 && mouseY <=400) {
    ySky = mouseY;
  } else {
    ySky = -200;
  }

  if (season === 'Winter') {
      image(winter, 0, ySky, 400, 600);
  } else if (season === 'Summer') {
      image(summer, 0, ySky, 400, 600);
  } else if (season === 'Spring') {
      image(spring, 0, ySky, 400, 600);
  } else if (season === 'Autumn') {
      image(autumn, 0, ySky, 400, 600);
  }
}
```
This code succeeded in moving the image, however revealed the canvas behind when the mouse was near the edges. 
I wanted the mouse to move the image, but if the Y positions were directly correlated then I'd have to elongate the image. I did try this but the resulting gradient was not very dense so the 'setting' effect was lost. 

So the next thing I tried was to change the code so the the image moved in _proportion_ to the mouse position. Using some mathematics to figure out the bounds of the images and canvas this was the resulting code:

```
ySky = mouseY/2 -200;
```
This worked very well and the image moved successfully without revealing the canvas behind in any position. 

## Final Touches
Finally I added some text as the 3rd user input is hidden, and the final result was quite similar to what I originally had in mind. =

## Next Steps
The next steps are of course to add more elements and detail. this workshop is definetly a bit more aesthetic focused than some others, so adding more user inputs could mean that people can use this website to 'create' their own little paradise. 
