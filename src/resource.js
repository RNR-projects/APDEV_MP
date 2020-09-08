/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var res = {
    pixel_font: {
        type: "font",
        name: "Pixel",
        srcs: ["res/fonts/slkscr.ttf"]
    },
    Button9Slice_png: "res/Button9Slice.png",
    Button9SliceSelected_png: "res/Button9SliceSelected.png",
    Button9SliceLogo_png: "res/Button9SliceLogo.png",
    Block_png: "res/Block.png",
    Star_png: "res/star.png",
    Fish_png: "res/fish.png",
    Gem_png: "res/gem.png",
    Marble_png: "res/marble.png",
    Tree_png: "res/tree.png",
    Mushroom_png: "res/mushroom.png",
    tileSpriteSheet_png: "res/tileSprites.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
