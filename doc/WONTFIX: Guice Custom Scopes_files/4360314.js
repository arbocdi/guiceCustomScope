document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-40aceec172c5b3cf62f5333920ddab3a7342a1d12dfdd1581f49f0f35fc0de4a.css">')
document.write('<div id=\"gist4360314\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-middleearthmodule-java\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-java\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-middleearthmodule-java-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">public<\/span> <span class=\"pl-k\">class<\/span> <span class=\"pl-en\">MiddleEarthModule<\/span> <span class=\"pl-k\">extends<\/span> <span class=\"pl-e\">AbstractModule<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC2\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC3\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">private<\/span> <span class=\"pl-k\">final<\/span> <span class=\"pl-smi\">EnterableScope<\/span> scope;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC4\" class=\"blob-code blob-code-inner js-file-line\">  <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC5\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">public<\/span> <span class=\"pl-en\">MiddleEarthModule<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC6\" class=\"blob-code blob-code-inner js-file-line\">  {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC7\" class=\"blob-code blob-code-inner js-file-line\">    scope <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">new<\/span> <span class=\"pl-smi\">EnterableScope<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC8\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC10\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">@Override<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC11\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">protected<\/span> <span class=\"pl-k\">void<\/span> <span class=\"pl-en\">configure<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC12\" class=\"blob-code blob-code-inner js-file-line\">  {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC13\" class=\"blob-code blob-code-inner js-file-line\">    bindScope(<span class=\"pl-smi\">BookScoped<\/span><span class=\"pl-k\">.<\/span>class, scope);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC15\" class=\"blob-code blob-code-inner js-file-line\">    bind(<span class=\"pl-smi\">Hero<\/span><span class=\"pl-k\">.<\/span>class)<span class=\"pl-k\">.<\/span>to(<span class=\"pl-smi\">Hobbit<\/span><span class=\"pl-k\">.<\/span>class);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC16\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC18\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">public<\/span> <span class=\"pl-k\">void<\/span> <span class=\"pl-en\">enter<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC19\" class=\"blob-code blob-code-inner js-file-line\">  {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC20\" class=\"blob-code blob-code-inner js-file-line\">    scope<span class=\"pl-k\">.<\/span>enter();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC21\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC22\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC23\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">public<\/span> <span class=\"pl-k\">void<\/span> <span class=\"pl-en\">exit<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC24\" class=\"blob-code blob-code-inner js-file-line\">  {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC25\" class=\"blob-code blob-code-inner js-file-line\">    scope<span class=\"pl-k\">.<\/span>exit();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC26\" class=\"blob-code blob-code-inner js-file-line\">  } <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-middleearthmodule-java-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-middleearthmodule-java-LC27\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/andytill/4360314/raw/9f585a81e1c9f9d145b5c2d7e1a7c90704d8382e/MiddleEarthModule.java\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/andytill/4360314#file-middleearthmodule-java\">MiddleEarthModule.java<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')