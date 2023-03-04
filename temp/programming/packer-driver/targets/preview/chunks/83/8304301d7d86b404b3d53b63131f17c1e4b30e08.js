System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, UITransform, _dec, _class, _crd, ccclass, property, Drag;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1deehH4W1JQJWFbWpuKrnz", "Drag", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'Vec3', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Drag", Drag = (_dec = ccclass('Drag'), _dec(_class = class Drag extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchStartCallback, this);
        }

        onTouchStartCallback(touch, event) {
          // let delta = event.getLocation();
          // this.node.x += delta.x;
          // this.node.y += delta.y;
          // this.node.position = pos;
          var touchWPos = event.getUILocation();
          var location = touch.getLocation();
          var myNodePos = this.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(touchWPos.x, touchWPos.y, 1));
          this.node.position = myNodePos;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8304301d7d86b404b3d53b63131f17c1e4b30e08.js.map