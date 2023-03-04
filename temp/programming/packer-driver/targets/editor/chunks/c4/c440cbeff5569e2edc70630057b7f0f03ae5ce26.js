System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SingletonMgr, EventTarget, EventManager, _crd;

  function _reportPossibleCrUseOfSingletonMgr(extras) {
    _reporterNs.report("SingletonMgr", "./SingletonMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }, function (_unresolved_2) {
      SingletonMgr = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c5bbdDMY1BdJ4WpqLWzUM1", "EventManager", undefined);

      __checkObsolete__(['EventTarget']);

      _export("default", EventManager = class EventManager extends (_crd && SingletonMgr === void 0 ? (_reportPossibleCrUseOfSingletonMgr({
        error: Error()
      }), SingletonMgr) : SingletonMgr) {
        constructor() {
          super();
          this.event = null;
          this.initialize();
        }

        initialize() {
          this.event = new EventTarget();
        }

        emit(key, data) {
          this.event.emit(key, data);
        }

        on(key, callback, target) {
          this.event.on(key, callback, target);
        }

        off(key, callback, target) {
          this.off(key, callback, target);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c440cbeff5569e2edc70630057b7f0f03ae5ce26.js.map