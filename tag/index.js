;
(function(log) {

    function $(str, par, isComplex) {
        if (!isComplex)
            return par ? par.querySelector(str) : document.querySelector(str);
        else
            return par ? par.querySelectorAll(str) : document.querySelectorAll(str);
    }

    var S = function(o) {
        // 无new调用
        if (!(this instanceof S)) {
            return new S(o);
        } else {
            this.o = o || {};
        }
        this.init();

    };

    S.prototype = {
        construct: S,
        els: function() {
            this.id = $(this.o.id || '#labelRoot');
            this.eubmitBtn = $((this.o.submitBtn || '.sSubmitBtn'), this.id);
            this.eInput = $((this.o.eInput || '.sInput'), this.id);
            this.eCurNub = $((this.o.eCurNub || '.sCurNub'), this.id);
            this.eSpan = $((this.o.eSpan || '.sSpan'), this.id, true);
            this.eSpanTxt = $((this.o.sSpanTxt || '.sSpanTxt'), this.id, true);
            this.eClose = $((this.o.eClose || '.sClose'), this.id, true);
            this.eLabelMain = $((this.o.eLabelMain || '.sLabelMain'), this.id);
            this.eTxt = $((this.o.eTxt || '.sTxt'), this.id);
        },
        init: function() {
            this.els();
            this.handleFn();
            this.sNumberFn();

            this.labelStr = '';
            this.maxLen = 10;
            this.isMaxLen = false;
            this.labelArr = [];


            this.eCurNub.innerHTML = 0;

        },
        handleFn: function() {
            var _this = this;

            this.id.addEventListener('click', function(e) {
                if (e.target.classList.contains('sClose')) {
                    _this.eCloseFn(e);
                }
                if (e.target.classList.contains('sSubmitBtn')) {
                    _this.submitFn();
                }
            });

            this.eLabelMain.addEventListener('click', _this.eLabelMainFn.bind(_this));

            document.addEventListener('keydown', this.enterFn.bind(_this));
        },
        htmlJsonFn: function(e) {
            this.labelArr.push(this.labelStr);
            var _json = `<span class="sSpan"><em class="sSpanTxt">${this.labelStr}</em><a class="sClose" href="javascript:;"></a></span>`;
            log('添加后的标签：', this.labelArr);
            this.eInput.insertAdjacentHTML('beforebegin', _json);
        },
        sNumberFn: function() {
            var _len = $((this.o.eSpan || '.sSpan'), this.id, true).length - 1;
            if (_len === 9) {
                this.eTxt.classList.remove('none')
                this.isMaxLen = true;
            } else {
                this.eTxt.classList.add('none');
                this.isMaxLen = false;
            }
            if (_len < this.maxLen) {
                this.eCurNub.innerHTML = $((this.o.eSpan || '.sSpan'), this.id, true).length;
            } else {
                return;
            }
        },
        eLabelMainFn: function() {
            this.eInput.focus();
        },
        enterFn: function(e) {
            if ((e.keyCode === 13) && (this.eInput.value !== '') && !this.isMaxLen) {
                this.addLabelFn();
            } else {
                return;
            }
        },
        addLabelFn: function() {
            this.labelStr = this.eInput.value;
            this.eInput.value = '';
            this.htmlJsonFn();
            this.sNumberFn();
        },
        eCloseFn: function(e) {
            var _delLabel = e.target.parentNode.querySelector('em').innerHTML,
                _index = this.labelArr.indexOf(_delLabel);
            e.target.parentNode.remove()
            this.eTxt.classList.add('none');
            var _len = $((this.o.eSpan || '.sSpan'), this.id, true).length;
            this.eCurNub.innerHTML = _len;
            if (_index !== -1) {
                this.labelArr.splice(_index, 1);
            }
            this.isMaxLen = false;
            log('删除后的标签：', this.labelArr);
            e.stopPropagation();
        },
        countFn: function() {},
        submitFn: function() {
            log(this.labelArr);
        }
    };

    S();

}(window.console.log));
