> 注意: 没有说明替换原始值，说明不修改原始值，只是返回一个新的值。

* ### String
    * #### `charAt()` ---- 返回指定位置的字符

        ```javascript
            var str = 'iuunhao';
            str.charAt(1) // "u"

            //输入的索引位置大于字符串长度返回空字符 ""
        ```

    * #### `charCodeAt()` ---- 返回指定位置字符的Unicode值

        ```javascript
            var str = 'iuunhao';
            str.charCodeAt(1); // 117

            //输入的索引位置大于字符串长度返回NaN
        ```

    * #### `concat()` ---- 字符串链接

        ```javascript
            var str1 = 'hello ',
                str2 = 'iuunhao';
            str1.concat(str2); // "hello iuunhao"
        ```

    * #### `indexOf()` ---- 查找字符串所在的位置

        ```javascript
            var str = 'iuunhao';
            str.indexOf('u'); // 1

            //没有找到返回 -1,如果存在重复字符返回第一个匹配出现的位置
        ```

    * #### `lastIndexOf()` ---- 从后向前搜索字符所在位置

        ```javascript
            var str = 'hello iuunhao 2016';
            str.search('2016'); // 14

            //没有找到返回 -1
            //永远只会返回第一个匹配的位置
            //支持正则匹配，但忽略全局匹配
            //默认对大小写敏感,可以通过`i`来忽略大小敏感匹配
            //需要注意的是虽然是从后向前查找，但是返回的索引依然是前到后来排列的
        ```

    * #### `search()` ---- 检索字符串所在的位置
        ```javascript
            var str1 = 'iuunhao',
                str2 = '2016';
                str1.replace('iuun', str2); // "2016hao"

            //如果没有匹配到字符串，则返回原始字符符串
        ```

    * #### `match()` ---- 在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

        ```javascript
            var str = '2016iuunhao1991';
            str.match(/\d+/g); //["2016", "1991"]
            str.match(/\d+/); //["2016"]
            str.match("hello"); //null

            //需要注意的返回的是一个数组，如果不带`g`（全局匹配）只会返回`第一次匹配`到的内容
            //如果没有匹配到内容返回`null`
        ```    

    * #### `replace()` ---- 查找匹配(固定字符 || 正则)到的字符串并且通新的字符串替换
    
        ```javascript
            var str1 = 'iuunhao',
                str2 = '2016';
                str1.replace('iuun', str2); // "2016hao"

            //如果没有匹配到字符串，则返回原始字符符串
        ```

    * #### `slice()` ---- 提取字符串某个部分

        ```javascript
            var str = 'hello iuunhao';
            str.slice(0, 4); // "hello"
            str.slice(6, str.length); // "iuunhao"
            str.slice(-3); // "hao"
            str.slice(0, -4); // "hello iuu"
            str.slice(0); // "hello iuunhao"

            //第一个参数起始位置，第二个参数结束位置
            //如果只传一个参数表示从当前位置截取到字符串结束的位置
            //如果第一个参数为负数，表示从后截取
        ```

    * #### `split()` ---- 将字符串通过指定方式分割成数组
    
        ```javascript
            var str1 = 'iuunhao',
                str2 = 'hello    iuunhao             2016';
            str1.split(''); //["i", "u", "u", "n", "h", "a", "o"];
            str2.split(/\s+/) //["hello", "iuunhao", "2016"]

            //支持正则分割
        ```
    * #### `substr()` ---- 在字符串中抽取从参数一下标开始的指定数目的字符

        ```javascript
            var str = 'iuunhao';
            str.substr(2, 3); // "unh"

            //-1代表最后一个字符, -2代表倒数第二个字符的位置
        ```

    * #### `substring()` ---- 用于提取字符串中介于两个指定下标之间的字符

        ```javascript
            var str = 'iuunhao';
            str.substring(0, 3); //"iuu"
            str.substring(3); //"nhao"

            //参数不能为负数
        ```

    * #### `toLocaleLowerCase()` ---- 把字符串转换为小写

        ```javascript
            var str = 'IUUNHAO';
            str.toLocaleLowerCase(); // "iuunhao"

            //和toLowerCase()一样,除了特殊语言基本用不到所以用哪个都可以
        ```

    * #### `toLocaleUpperCase() ` ---- 把字符串转换为小写

        ```javascript
            var str = 'iuunhao';
            str.toLocaleUpperCase(); // "IUUNHAO"

            //和toUpperCase()一样,除了特殊语言基本用不到所以用哪个都可以
        ```
    

* Array 
* Date 
* Math
* Global
* Number
* Boolean
* RegExp
