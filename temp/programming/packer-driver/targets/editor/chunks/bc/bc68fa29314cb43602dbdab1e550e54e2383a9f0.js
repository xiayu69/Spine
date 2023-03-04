System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SingletonMgr, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd699lVqk1H54q8mG0S3gjd", "SingletonMgr", undefined);

      _export("default", SingletonMgr = class SingletonMgr {
        static getInstance() {
          if (!this.__instance) {
            this.__instance = new this();
          }

          return this.__instance;
        }

        static destroyInstance() {
          if (this.__instance) {
            this.__instance = null;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc68fa29314cb43602dbdab1e550e54e2383a9f0.js.map