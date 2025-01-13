import { _decorator, Component, Node } from 'cc';
import { AnimationDemo } from './AnimationDemo';
const { ccclass, property } = _decorator;

@ccclass('PlayerControl')
export class PlayerControl extends Component {
    start() {
        this.getComponent(AnimationDemo).play();
    }

    update(deltaTime: number) {
        
    }
}

