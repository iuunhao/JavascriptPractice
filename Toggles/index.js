var S = (function() {
    var Tabs = function(o) {
        
        this.ops = o || {};
        this.root = this.ops.root || '#sTabBox';
        this.oMenuIndex = 0;
        this.oCurIndex = this.ops.oCurIndex - 1 || 0;

        this.initFn();
        this.handleEvents();
    };
    Tabs.prototype = {
        constructor: Tabs,
        initFn: function() {
            this.oRoot = document.querySelector(this.root);
            this.oMenuLi = this.oRoot.querySelectorAll('.sMenuList li');
            this.oContenLi = this.oRoot.querySelectorAll('.sContentList li');
            this.oCur = this.ops.oCur || 'cur';

            if (this.oMenuLi.length !== this.oContenLi.length) return false;

            this.eachSetFn();

            this.oMenuLi[this.oCurIndex].classList.add(this.oCur);
            this.oContenLi[this.oCurIndex].style.display = 'block';
        },
        handleEvents: function() {
            var _this = this;
            for (var i = 0, len = this.oMenuLi.length; i < len; i++) {
                (function(index) {
                    _this.oMenuLi[index].addEventListener('click', function() {
                        _this.eachSetFn();
                        this.classList.add(_this.oCur);
                        _this.oContenLi[index].style.display = 'block';
                    });
                })(i);

            }
        },
        eachSetFn: function() {
            for (var i = 0, len = this.oMenuLi.length; i < len; i++) {
                this.oMenuLi[i].classList.remove(this.oCur);
                this.oContenLi[i].style.display = 'none';
            }
        }
    };
    return {
        tabs: function(o) {
            return new Tabs(o);
        }
    };
})();

S.tabs({
    root: '#sTabBox',
    oCurIndex: 3
});
