var S = (function() {

    var Slider = function(o) {
        this.ops = typeof o === 'object' ? o : {};
        this.root = this.ops.root || '#slider';
        this.markCur = this.ops.markCur || 'listCur';
        this.ms = this.ops.ms || 30;
        this.curMs = this.ops.curMs || 3000;
        this.iTarget = 0;
        this.showMarks = this.ops.showMarks || false;
        this.showBtn = this.ops.showBtn || false;
        this.autoPlay = this.ops.autoPlay || false;
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
            this.oList = this.oRoot.querySelector('.sImgList');
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
                    cLis.push('<li>' + i + '<\/li>');
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

            if (this.autoPlay) {
                this.curTimer = setInterval(function() {
                    _this.autoPlayFn();
                }, _this.curMs);

                this.oRoot.addEventListener('mouseout', function() {
                    if (this.autoPlay) {
                        _this.curTimer = setInterval(function() {
                            _this.autoPlayFn();
                        }, _this.curMs);
                    }
                });
            } else {
                this.oRoot.addEventListener('mouseover', function() {
                    clearInterval(_this.curTimer);
                });

            };


            if (this.showBtn) {
                this.addEvent(this.oNext, this.sEvnet, function() {
                    clearInterval(_this.curTimer);
                    _this.pervFn();
                    if (_this.autoPlay) {
                        _this.curTimer = setInterval(function() {
                            _this.autoPlayFn();
                        }, _this.curMs);
                    }
                });
                this.addEvent(this.oPrev, this.sEvnet, function() {
                    clearInterval(_this.curTimer);
                    _this.autoPlayFn();
                    if (_this.autoPlay) {
                        _this.curTimer = setInterval(function() {
                            _this.autoPlayFn();
                        }, _this.curMs);
                    }
                });
            }

            if (this.showMarks) {
                for (var k = 0, len = this.number; k < len; k++) {
                    var elo = this.cLis[k];
                    (function(index) {
                        _this.addEvent(elo, _this.sEvnet, function() {
                            _this.goTimeFn(index);
                            clearInterval(_this.curTimer);
                            if (_this.autoPlay) {
                                _this.curTimer = setInterval(function() {
                                    _this.autoPlayFn();
                                }, _this.curMs);
                            }
                        });
                    })(k);
                }
            }
        },
        resetTime: function(fn) {
            clearInterval(_this.curTimer);
            fn();
            if (_this.autoPlay) {
                _this.curTimer = setInterval(function() {
                    _this.autoPlayFn();
                }, _this.curMs);
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

            if (this.timer) clearInterval(this.timer);

            if (this.showMarks) {
                for (var i = 0, len = this.number; i < len; i++) {
                    if (i === index) {
                        this.index = index;
                        this.cLis[i].classList.add(this.markCur)
                    } else {
                        this.cLis[i].classList.remove(this.markCur);
                    }
                }
            }

            this.iTarget = -(index * this.width);


            this.timer = setInterval(function() {
                _this.doMoveFn(_this.iTarget);
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

S.slider({
    root: '#slider',
    showMarks: true,
    showBtn: true,
    autoPlay: true,
    curMs: 2000,
    markCur: 'listCur',
    sEvnet: 'click'
});
