import { _decorator, Component, Node, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationDemo')
export class AnimationDemo extends Component {
    //每秒播放速度
    @property
    speed : number = 0.1;
    //播放帧数组
    @property([SpriteFrame])
    sprites : SpriteFrame[] = [];
    //是否播放动画
    @property
    isPlay : boolean = false;
    //当前播放帧
    index : number = 0;
    //计时器
    timer : number = 0;

    start() {

    }

    play() {
        this.isPlay = true;
    }

    stop() {
        this.isPlay = false;
    }

    update(dt : number) {
        if(this.isPlay) {
            //播放动画
            //计时器增加
            this.timer += dt;
            if(this.timer > this.speed) {
                this.timer = 0;
                //切换帧 0 1 2 0
                this.index++;
                if(this.index >= this.sprites.length) {
                    this.index = 0;
                }
                //更换帧图片
                this.getComponent(Sprite).spriteFrame = this.sprites[this.index];
            }
        }
    }
}

