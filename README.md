A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: FieldScene, PathScene, HilltopScene, HouseScene
- **2+ scenes *not* based on `AdventureScene`**: Intro, GoodEnding, BadEnding
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - initItem(item, x, y, onHover, onPickup) : Pass an item name, position, and any messages to be displayed into the function to initialize it as an interactable object in the game. Simplifies the majority of code used in each scene.
    - addBackground(image) : Pass an image name to set that image as the background of a scene. Made to simplify the process since I used it in most scenes.

Experience requirements:
- **4+ locations in the game world**: FieldScene, PathScene, HilltopScene, HouseScene
- **2+ interactive objects in most scenes**: Almost every scene has multiple buttons to switch scenes, some have animals to interact with.
- **Many objects have `pointerover` messages**: Every object has pointerover messages. e.g. in FieldScene: Pablo and the chipmunk
- **Many objects have `pointerdown` effects**: Every object changes messages or switches scenes on pointerdown. e.g. in HilltopScene: Different messages depending on which way player takes back down.
- **Some objects are themselves animated**: Eagle in HilltopScene and snake in PathScene

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

    - field.jpeg - Picture of the bottom of the Dirt Mulholland Trail taken by me--Adam Top
    - hilltop.jpeg - Picture of the top of the Dirt Mulholland Trail taken by Mor Top--my Dad
    - path.jpeg - Picture of the Dirt Mulholland Trail taken by Mor Top--my Dad
    - house.jpeg - Picture of my house taken over FaceTime by Selma Top--my Mom

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.