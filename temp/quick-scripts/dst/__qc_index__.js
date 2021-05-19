
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/cloud/cloud');
require('./assets/entrances/javascripts/afterSchoolreview');
require('./assets/entrances/javascripts/courseware');
require('./assets/prefabLibrary/components/feedback/javascripts/feedback-model01-v1');
require('./assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02-studentList');
require('./assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02');
require('./assets/prefabLibrary/components/pageController-model01-v1/javascripts/pageController-model01-v1');
require('./assets/prefabLibrary/controllers/controller-model01/scripts/controller-model01');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-getMessage');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-sendMessage');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02');
require('./assets/prefabLibrary/models/choose/choose-model01-v1');
require('./assets/prefabLibrary/models/choose/choose-model02-v1');
require('./assets/prefabLibrary/models/clickAnswer/clickAnswer-model01-v1');
require('./assets/prefabLibrary/models/dragAnswer/DragAnswerModel03Base');
require('./assets/prefabLibrary/models/dragAnswer/IDragAnswerModel03Base');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v1');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v2');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model02-v1');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model03-v1');
require('./assets/prefabLibrary/models/inputChoose/inputChoose-model01-v1');
require('./assets/prefabLibrary/models/static/static-model01-v1');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();