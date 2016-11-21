var Effect = (function() {

    var Slider = function(o) {
        this.ops = typeof o === 'object' ? o : {};
        this.root = this.ops.root || '#slider';
        this.markCur = this.ops.markCur || 'listCur';
        this.ms = this.ops.ms || 30;
        this.curMs = this.ops.curMs || 2000;
        this.iTarget = 0;
        this.showMarks = this.ops.showMarks || false;
        this.showBtn = this.ops.showBtn || false;
        this.autoPlay = this.ops.autoPlay || true;
        this.sEvnet = this.ops.sEvnet || 'click';

        this.timer = null;
        this.curTimer = null;
        this.speed = 0;
        this.index = 0;

        this.initFn();
        this.handleEventsFn();

    };
    Slider.prototype = {
        constructor: Slider,
        initFn: function() {
            this.oRoot = document.querySelector(this.root);
            this.oList = this.oRoot.querySelector('.sLunboContent');
            this.oNext = this.oRoot.querySelector(this.ops.oNext || '.sBtnL');
            this.oPrev = this.oRoot.querySelector(this.ops.oPrev || '.sBtnR');
            this.marksList = this.oRoot.querySelector('.sListBtn');
            this.number = this.oRoot.querySelectorAll('.sImgList li').length;
            this.oneImg = this.oRoot.querySelector('.sImgList img');
            this.width = parseInt(this.ops.width || this.getStyle(this.oneImg, 'width'));

            this.oList.style.width = this.width * this.number + 'px';

            if (this.showMarks) {
                var cLis = [];
                for (var i = 0, len = this.number; i < len; i++) {
                    cLis.push('<li><\/li>');
                }
                this.marksList.innerHTML = cLis.join('');
                this.cLis = this.marksList.querySelectorAll('li');
                this.cLis[0].classList.add(this.markCur);
            }

            if (this.showBtn) {
                this.oNext.style.display = this.oPrev.style.display = 'block';
            }

        },
        handleEventsFn: function() {
            var _this = this;


            this.curTimer = setInterval(function() {
                _this.autoPlayFn();
            }, _this.curMs);


            this.oRoot.addEventListener('mouseover', function(){
                clearInterval(_this.curTimer);
            })

            
            this.oRoot.addEventListener('mouseout', function(){
                _this.curTimer = setInterval(function() {
                    _this.autoPlayFn();
                }, _this.curMs);
            })

            if (this.showBtn) {
                this.addEvent(this.oNext, this.sEvnet, function() {
                    _this.pervFn();
                });
                this.addEvent(this.oPrev, this.sEvnet, function() {
                    _this.autoPlayFn();
                });
            }

            if (this.showMarks) {
                for (var k = 0, len = this.number; k < len; k++) {
                    var elo = this.cLis[k];
                    (function(index) {
                        _this.addEvent(elo, 'mouseover', function() {
                            _this.goTimeFn(index);
                        });
                    })(k);
                }
            }
        },
        pervFn: function() {
            this.index--;
            if (this.index < 0) {
                this.index = this.number - 1;
            }
            this.goTimeFn(this.index);
        },
        autoPlayFn: function() {
            this.index++;
            if (this.index >= this.number) {
                this.index = 0;
            };
            this.goTimeFn(this.index);
        },
        goTimeFn: function(index) {

            var _this = this;
            if (this.showMarks) {
                for (var i = 0, len = this.number; i < len; i++) {
                    i === index ? this.cLis[i].classList.add(this.markCur) : this.cLis[i].classList.remove(this.markCur);
                }
            }

            this.iTarget = -(index * this.width);

            if (this.timer) {
                clearInterval(this.timer);
            }

            this.timer = setInterval(function() {
                _this.doMoveFn(_this.iTarget)
            }, this.ms);
        },
        doMoveFn: function(target) {

            this.oList.style.marginLeft = this.speed + 'px';
            this.speed += (target - this.oList.offsetLeft) / 3;
            if (Math.abs(target - this.oList.offsetLeft) === 0) {
                this.oList.style.marginLeft = target + 'px';
                clearInterval(this.timer);
                this.timer = null;
            };

        },
        getStyle: function(el, attr) {
            if (getComputedStyle && typeof getComputedStyle === 'function') {
                return getComputedStyle(el, null)[attr];
            } else {
                return el.currentstyle([attr]);
            }
        },
        addEvent: function(el, type, fn) {
            if (window.addEventListener) {
                el.addEventListener(this.sEvnet, fn, false);
            } else {
                el.attachEvent('on' + type, fn);
            }
        }
    };

    return {
        slider: function(o) {
            new Slider(o);
        }
    };
}());

Effect.slider({
    showMarks: true,
    showBtn: true
});
