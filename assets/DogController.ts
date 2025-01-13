import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DogController')
export class DogController extends Component {


    @property(Node)
    leftNode : Node;

    @property(Node)
    rightNode : Node;

    speed : number = 10;

    startIndex : number = 0;

    //播放帧数组
    @property([SpriteFrame])
    sprites : SpriteFrame[] = [];

    start() {

        this.leftNode.on(Node.EventType.TOUCH_START, (event) => {
            this.startIndex = 0;
            this.node.getComponent(Sprite).spriteFrame =  this.sprites[this.startIndex];
            this.schedule(this.leftMove, 1/30);
        });

        this.leftNode.on(Node.EventType.TOUCH_END, (event) => {
            this.startIndex = 0;
            this.node.getComponent(Sprite).spriteFrame =  this.sprites[this.startIndex];
            this.unschedule(this.leftMove);
        });

        this.rightNode.on(Node.EventType.TOUCH_START, (event) => {
            this.startIndex = 4;
            this.node.getComponent(Sprite).spriteFrame =  this.sprites[this.startIndex];
            this.schedule(this.rightMove, 1/30);
        });

        this.rightNode.on(Node.EventType.TOUCH_END, (event) => {
            this.startIndex = 4;
            this.node.getComponent(Sprite).spriteFrame =  this.sprites[this.startIndex];
            this.unschedule(this.rightMove);
        });

    }

    leftMove(dt : number) {
        this.startIndex++;
        if (this.startIndex == 4) {
            this.startIndex = 0;
        }
        this.node.getComponent(Sprite).spriteFrame =  this.sprites[this.startIndex];
        this.node.setPosition(this.node.position.x - this.speed, this.node.position.y);
    }

    rightMove(dt : number) {
        this.startIndex++;
        if (this.startIndex == 8) {
            this.startIndex = 4;
        }
        this.node.getComponent(Sprite).spriteFrame =  this.sprites[this.startIndex];
        this.node.setPosition(this.node.position.x + this.speed, this.node.position.y);
    }

    update(deltaTime: number) {
        
    }

}


