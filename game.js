class FieldScene extends AdventureScene {
    constructor() {
        super("field", "Scenic Field");
    }

    preload() {
        this.load.setPath("assets/")
        this.load.image("field", "field.jpeg");
    }

    onEnter() {

        this.addBackground("field");

        let dog = this.initItem("Pablo", 0.52, 0.4, "My curious baby...", "*woof woof*")

        let toHouse = this.initItem("Return Home", 0.25, 0.5, "Time to Go Home?", "Come on Pablo!")
        toHouse.on('pointerdown', () => {
            this.gotoScene('house');
        })

        let toPath = this.initItem("Follow Path", 0.25, 0.2, "I bet the view's gorgeous!", "Let's go Pablo!")
        toPath.on('pointerdown', () => {
            this.gotoScene('path');
        })

        this.initItem("🐿", 0.65, 0.2, "Hope Pablo doesn't see that...", "Shoo, shoo!")

    }
}

class HouseScene extends AdventureScene {
    constructor() {
        super("house", "A house and a home.");
    }

    preload() {
        this.load.setPath("assets/")
        this.load.image("house", "house.jpeg");
    }

    onEnter() {

        this.addBackground("house");

        let enterHouse = this.initItem("Go Home", 0.34, 0.3, "Pablo seems like he's tired out...")
        enterHouse.on('pointerdown', () => {
            if (this.hasItem("key")) {
                this.loseItem("key");
                this.showMessage("*squeak*");
                this.gotoScene('goodEnding');
            }
            else {
                this.showMessage("Wait, where's my key?");
            }
            })
    
        let toPath = this.initItem("Go Back", 0.03, 0.5, "I never get tired of the view from uphill...", "Let's Go!")
        toPath.on('pointerdown', () => {
            this.gotoScene('field'); 
        })
    }
}

class PathScene extends AdventureScene {
    constructor() {
        super("path", "Dirt Mulholland Trail");
    }
    preload() {
        this.load.setPath("assets/")
        this.load.image("path", "path.jpeg");
    }
    onEnter() {

        this.addBackground("path");

        let toField = this.initItem("Go Back", 0.52, 0.5, "Downhill's always easier.", "Away we go!")
        toField.on('pointerdown', () => {
            this.gotoScene('field'); 
        })

        let toHilltop = this.initItem("Go Up", 0.6, 0.4, "We're almost at the top...", "One last push!")
        toHilltop.on('pointerdown', () => {
            this.gotoScene("hilltop"); 
        })

        let snake = this.initItem("🐍", 0.3, 0.43, "Better be careful around these parts!", "*SSSSSSS*")
        this.tweens.add({
            targets: snake,
            ease: 'linear',
            duration: 1000,
            x: snake.x - Phaser.Math.Between(0, 100),
            y: snake.y + Phaser.Math.Between(-20, 70),
            loop: -1,
            yoyo: true
        })

    }
}

class HilltopScene extends AdventureScene {
    constructor() {
        super("hilltop", "Pablo & the San Fernando Valley");
    }
    preload() {
        this.load.setPath("assets/")
        this.load.image("hilltop", "hilltop.jpeg");
    }
    onEnter() {

        this.addBackground("hilltop");
        this.showMessage("What a beautiful view!");

        let toBadEnding = this.initItem("Take the Fast\nWay Down", 0.01, 0.35, "Time to Go Home?", "WoooaoaoaAHHHhh!!!!")
        toBadEnding.on('pointerdown', () => {
            this.gotoScene('badEnding');
        })

        let toPath = this.initItem("Walk Back\nDown", 0.03, 0.4, "Time to Go Home?", "Let's hit it!")
        toPath.on('pointerdown', () => {
            this.gotoScene('path');
        })
        
        this.initItem("Pablo", 0.35, 0.51, "Look at that happy puppy...", "*excited dog noises*")

        let bird = this.initItem("🦅", 0.72, 0.03, "Woah an eagle!", "*CACAW*");
        this.tweens.add({
            targets: bird,
            ease: 'power0',
            duration: 750,
            x: -15,
            y: bird.y + 170,
            loop: -1
        })
        
        let key = this.initItem("🔑", 0.6, 0.5, "Is that...?!", "I found the key!")
            .on('pointerdown', () => {
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })
    }
}
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Welcome to").setFontSize(50);
        this.add.text(50,100, "Dude, Where's My Key?").setFontSize(75);

        let blink = this.add.text(50,175, "Click anywhere to begin.").setFontSize(25);
        this.tweens.add({
            targets: blink,
            alpha: 0,
            loop: -1,
            yoyo: true,
            duration: 500
        })

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('field'));
        });
    }
}
//TODO
class GoodEnding extends Phaser.Scene {
    constructor() {
        super('goodEnding');
    }
    create() {
        this.add.text(50, 50, "Congrats!\nYou successfully made it home safely!").setFontSize(50);

        let blink = this.add.text(50, 160, "Click anywhere to begin.").setFontSize(25);
        this.tweens.add({
            targets: blink,
            alpha: 0,
            loop: -1,
            yoyo: true,
            duration: 500
        })

        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}
//TODO
class BadEnding extends Phaser.Scene {
    constructor() {
        super('badEnding');
    }
    create() {
        this.add.text(50, 50, "Yikes, you rolled down a cliff!\nPablo watches in dissapointment as you writhe in agony...").setFontSize(50);

        let blink = this.add.text(50, 160, "Click anywhere to try again.").setFontSize(25);
        this.tweens.add({
            targets: blink,
            alpha: 0,
            loop: -1,
            yoyo: true,
            duration: 500
        })

        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [ Intro, FieldScene, PathScene, HilltopScene, HouseScene, GoodEnding, BadEnding ],
    title: "Dude, Where's My Key?",
});

