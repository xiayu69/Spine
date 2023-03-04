System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MenuType, Menu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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

      _cclegacy._RF.push({}, "88d4fTaC9pOSLwHQGdxrl1o", "Menu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (MenuType) {
        MenuType[MenuType["FILE"] = 0] = "FILE";
        MenuType[MenuType["SKEL"] = 1] = "SKEL";
        MenuType[MenuType["ANIMATION"] = 2] = "ANIMATION";
        MenuType[MenuType["SKIN"] = 3] = "SKIN";
      })(MenuType || (MenuType = {}));

      _export("Menu", Menu = (_dec = ccclass('Menu'), _dec2 = property(Node), _dec(_class = (_class2 = class Menu extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fileOperPanel", _descriptor, this);
        }

        start() {}

        updateOperPanle(operType) {
          this.fileOperPanel.active = operType == MenuType.FILE;
        }

        onFileMenu() {
          var active = this.fileOperPanel.active;
          this.fileOperPanel.active = !active;
        }

        onSkeleron() {
          this.updateOperPanle(MenuType.SKEL);
        }

        onAnimation() {
          this.updateOperPanle(MenuType.ANIMATION);
        }

        onSkin() {
          this.updateOperPanle(MenuType.SKIN);
        }

        onToggleDebug() {}

        onToggleLoop() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fileOperPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac04fcdc0355838eade72016183b63142f132bdf.js.map