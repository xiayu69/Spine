System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Texture2D, ImageAsset, SpriteFrame, Html5, _crd, mime, createObjectURL, SelectFile;

  _export("Html5", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Texture2D = _cc.Texture2D;
      ImageAsset = _cc.ImageAsset;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1c44NJG8BNAYuZrqD/fcjV", "Html5", undefined);

      __checkObsolete__(['Texture2D', 'ImageAsset', 'SpriteFrame']);

      mime = {
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'bmp': 'image/bmp'
      };

      createObjectURL = function createObjectURL(blob) {
        if (window.URL != undefined) return window['URL']['createObjectURL'](blob);else return window['webkitURL']['createObjectURL'](blob);
      };

      SelectFile = function SelectFile(file) {
        if (!file) {
          console.log('SelectFile error!');
          return;
        }

        var fileType = file.type;

        if (!fileType) {
          fileType = mime[file.name.match(/\.([^\.]+)$/i)[1]];
        }

        var url = createObjectURL(file);
        return url;
      }; ///html 接口


      _export("Html5", Html5 = class Html5 {
        static HtmlFileInput(_cb) {
          var inputel = document.getElementById('file_input');

          if (!inputel) {
            inputel = document.createElement('input');
            inputel.id = 'file_input';
            inputel.setAttribute('id', 'file');
            inputel.setAttribute('type', 'file');
            inputel.setAttribute('class', 'fileToUpload');
            inputel.style.opacity = '0';
            inputel.style.position = 'absolute';
            inputel.setAttribute('left', '-999px');
            document.body.appendChild(inputel);
          }

          inputel.setAttribute('accept', '*');

          inputel.onchange = function (event) {
            var files = inputel.files;

            if (files && files.length > 0) {
              var filedata = files[0];
              _cb && _cb(filedata);
            }
          };

          inputel.click();
        } //


        static LoadImage(file, sprite, _onComplete) {
          var url = SelectFile(file);
          var div = document.getElementById("divCreator");

          if (!div) {
            div = document.createElement("div");
            document.body.appendChild(div);
            div.style.position = "absolute";
            div.id = "divCreator"; //div.style.width = 100;
            //div.style.height = 100;

            div.style.backgroundColor = "#ffffcc";
          }

          div.innerHTML = '<img id=imghead>';
          var image = document.getElementById('imghead');
          image.src = url;

          image.onload = function () {
            console.log('=========LoadImage.image.onload'); //sprite.width = this.width;
            //sprite.height = this.height;

            console.log('width:', this.width);
            console.log('width:', this.height);
            console.log(image);
            var imas = new ImageAsset();
            imas._nativeAsset = image;
            var texture = new Texture2D();
            texture.image = imas;
            console.log(texture); // texture.initWithElement(image);
            // texture.handleLoadedTexture();

            sprite.spriteFrame = new SpriteFrame();
            sprite.spriteFrame.setTexture(texture);
          };

          div.style.display = 'none';
          div.style.visibility = "hidden";
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e087f66083ddf9c3d280e4159c4bc95464c8af1.js.map