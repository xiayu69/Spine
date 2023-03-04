System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, Drag;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1deehH4W1JQJWFbWpuKrnz", "Drag", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Drag", Drag = (_dec = ccclass('Drag'), _dec(_class = class Drag extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchStartCallback, this, true);
        }

        onTouchStartCallback(event) {
          // let delta = event.getLocation();
          // this.node.x += delta.x;
          // this.node.y += delta.y;
          let location = event.getLocation();
          this.node.position = location; //this.node.convertToNodeSpaceAR(location);

          this.node.x += location.x;
          this.node.y += location.y;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55d7034f426d4dff65925ebf9907aa9f70b9bace.js.map