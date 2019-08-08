(function(t){function n(n){for(var a,i,c=n[0],o=n[1],u=n[2],l=0,d=[];l<c.length;l++)i=c[l],s[i]&&d.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);h&&h(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,c=1;c<e.length;c++){var o=e[c];0!==s[o]&&(a=!1)}a&&(r.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},s={app:0},r=[];function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="https://jherr.github.io/vue-poker-calculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var h=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"0b6f":function(t,n,e){"use strict";var a=e("f0cc"),s=e.n(a);s.a},"1b5b":function(t,n,e){},"31a8":function(t,n,e){"use strict";var a=e("640a"),s=e.n(a);s.a},"5c80":function(t,n,e){"use strict";var a=e("79e1"),s=e.n(a);s.a},"640a":function(t,n,e){},"79e1":function(t,n,e){},"7a8c":function(t,n,e){},"819c":function(t,n,e){"use strict";var a=e("1b5b"),s=e.n(a);s.a},cd49:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a,s=e("2b0e"),r=e("2f62"),i=e("a925"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-app-bar",{attrs:{app:"",dark:""}},[e("v-toolbar-title",{staticClass:"headline text-uppercase"},[e("span",{staticClass:"font-weight-light"},[t._v(t._s(t.$t("poker"))+" "),e("strong",[t._v(t._s(t.$t("simulator")))])])])],1),e("v-content",[e("v-container",[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{lg6:""}},[e("div",{staticClass:"controls"},[e("CardSelector",{attrs:{index:0}}),e("CardSelector",{attrs:{index:1}}),e("PlayerCount")],1)]),e("v-flex",{attrs:{lg6:""}},[t.statistics.progress<100?e("v-progress-linear",{attrs:{value:t.statistics.progress}}):t._e(),e("v-tabs",[e("v-tab",{key:"overall"},[t._v("\n              "+t._s(t.$t("overall"))+"\n            ")]),e("v-tab",{key:"wins"},[t._v("\n              "+t._s(t.$t("wins"))+"\n            ")]),e("v-tab",{key:"losses"},[t._v("\n              "+t._s(t.$t("losses"))+"\n            ")]),e("v-tab",{key:"last"},[t._v("\n              "+t._s(t.$t("lastHand"))+"\n            ")]),e("v-tab-item",{key:"overall"},[e("WinStatistics")],1),e("v-tab-item",{key:"wins"},[e("v-subheader",[t._v("\n                "+t._s(t.$t("winsReport",{percent:this.$options.filters.percent(t.statistics.wins/t.statistics.totalCount*100)}))+"\n              ")]),e("HandPerformance",{attrs:{hands:t.statistics.winsWith,total:t.statistics.wins}})],1),e("v-tab-item",{key:"losses"},[e("v-subheader",[t._v("\n                "+t._s(t.$t("lossesReport",{percent:this.$options.filters.percent((t.statistics.totalCount-t.statistics.wins)/t.statistics.totalCount*100)}))+"\n              ")]),e("HandPerformance",{attrs:{hands:t.statistics.losesTo,total:t.statistics.totalCount-t.statistics.wins}})],1),e("v-tab-item",{key:"last"},[e("CurrentTable")],1)],1)],1)],1)],1)],1)],1)},o=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"selector"},[e("v-select",{attrs:{items:[t.Rank.Two,t.Rank.Three,t.Rank.Four,t.Rank.Five,t.Rank.Six,t.Rank.Seven,t.Rank.Eight,t.Rank.Nine,t.Rank.Ten,t.Rank.Jack,t.Rank.Queen,t.Rank.King,t.Rank.Ace],label:t.$t("rankLabel",{index:t.index+1})},model:{value:t.rank,callback:function(n){t.rank=n},expression:"rank"}}),e("v-select",{attrs:{items:[t.Suit.Spades,t.Suit.Hearts,t.Suit.Diamonds,t.Suit.Clubs],label:t.$t("suitLabel",{index:t.index+1})},model:{value:t.suit,callback:function(n){t.suit=n},expression:"suit"}})],1)},h=[],l=e("d225"),d=e("b0b4");e("6b54"),e("ac6a");(function(t){t["Ace"]="Ace",t["Two"]="2",t["Three"]="3",t["Four"]="4",t["Five"]="5",t["Six"]="6",t["Seven"]="7",t["Eight"]="8",t["Nine"]="9",t["Ten"]="10",t["Jack"]="Jack",t["Queen"]="Queen",t["King"]="King",t["AceHigh"]="Ace high"})(a||(a={}));var f,m=[a.Ace,a.Two,a.Three,a.Four,a.Five,a.Six,a.Seven,a.Eight,a.Nine,a.Ten,a.Jack,a.Queen,a.King,a.AceHigh];(function(t){t["Hearts"]="Hearts",t["Spades"]="Spades",t["Clubs"]="Clubs",t["Diamonds"]="Diamonds"})(f||(f={}));var v=[f.Hearts,f.Spades,f.Clubs,f.Diamonds],p={};m.forEach(function(t,n){return p[t.toString()]=n});var k=function(){function t(n,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(l["a"])(this,t),this.suit=n,this.rank=e,this.used=a,this.rankNumber=0,this.rankNumber=p[e.toString()]}return Object(d["a"])(t,[{key:"isSameSuit",value:function(t){return t.suit===this.suit}},{key:"isSameRank",value:function(t){return t.rank===this.rank}},{key:"isSame",value:function(t){return t.rank===this.rank&&t.suit===this.suit}},{key:"toString",value:function(){return"".concat(this.rank," of ").concat(this.suit)}}]),t}(),b=s["a"].extend({name:"CardSelector",props:["index"],data:function(){return{Suit:f,Rank:a}},computed:{suit:{get:function(){return this.$store.state.cards[this.index].suit},set:function(t){this.$store.commit("setCard",{index:this.index,card:new k(t,this.$store.state.cards[this.index].rank)})}},rank:{get:function(){return this.$store.state.cards[this.index].rank},set:function(t){this.$store.commit("setCard",{index:this.index,card:new k(this.$store.state.cards[this.index].suit,t)})}}}}),g=b,y=(e("d00c"),e("2877")),w=e("6544"),C=e.n(w),O=e("b974"),S=Object(y["a"])(g,u,h,!1,null,"1c9e3e62",null),j=S.exports;C()(S,{VSelect:O["a"]});var _,R,A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h3",[t._v(t._s(t.$t("communityCards")))]),e("div",t._l(t.community,function(t,n){return e("SmallCard",{key:n,attrs:{card:t,active:!0}})}),1),e("h3",[t._v(t._s(t.$t("hands")))]),t._l(t.hands,function(t,n){return e("HandRow",{key:n,attrs:{hand:t}})})],2)},x=[],H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:"card "+(t.card.used||t.active?"used":"")},[e("span",{staticClass:"rank"},[t._v(t._s(t.RankMap[t.card.rank]))]),e("v-icon",[t._v("\n    "+t._s(t.SuitMap[t.card.suit])+"\n  ")])],1)},T=[],F=e("bd86"),P=(_={},Object(F["a"])(_,f.Hearts,"mdi-cards-heart"),Object(F["a"])(_,f.Spades,"mdi-cards-spade"),Object(F["a"])(_,f.Clubs,"mdi-cards-club"),Object(F["a"])(_,f.Diamonds,"mdi-cards-diamond"),_),E=(R={},Object(F["a"])(R,a.Ace,"A"),Object(F["a"])(R,a.AceHigh,"A"),Object(F["a"])(R,a.King,"K"),Object(F["a"])(R,a.Queen,"Q"),Object(F["a"])(R,a.Jack,"J"),Object(F["a"])(R,a.Ten,"10"),Object(F["a"])(R,a.Nine,"9"),Object(F["a"])(R,a.Eight,"8"),Object(F["a"])(R,a.Seven,"7"),Object(F["a"])(R,a.Six,"6"),Object(F["a"])(R,a.Five,"5"),Object(F["a"])(R,a.Four,"4"),Object(F["a"])(R,a.Three,"3"),Object(F["a"])(R,a.Two,"2"),R),$=s["a"].extend({name:"SmallCard",props:["card","active"],data:function(){return{SuitMap:P,RankMap:E}}}),N=$,M=(e("819c"),e("132d")),V=Object(y["a"])(N,H,T,!1,null,"4ab6cf1a",null),K=V.exports;C()(V,{VIcon:M["a"]});var D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.hand.playerHand?"player":"cpu"},[t._l(t.cards,function(t,n){return e("SmallCard",{key:n,attrs:{card:t}})}),e("span",{staticClass:"hand"},[t._v("\n    "+t._s(t.hand.match.hand)+"\n  ")])],2)},U=[],L=s["a"].extend({props:["hand"],components:{SmallCard:K},computed:{cards:{get:function(){return this.hand.cards}}}}),B=L,W=(e("ec00"),Object(y["a"])(B,D,U,!1,null,"0a19914f",null)),J=W.exports,Q=s["a"].extend({name:"CurrentTable",components:{SmallCard:K,HandRow:J},computed:{hands:{get:function(){return this.$store.state.table.hands}},community:{get:function(){return this.$store.state.table.communityCards}}}}),I=Q,z=(e("5c80"),Object(y["a"])(I,A,x,!1,null,"137db6a8",null)),Y=z.exports,q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-select",{attrs:{items:[2,3,4,5,6,7,8,9],label:t.$t("numberOfPlayers")},model:{value:t.count,callback:function(n){t.count=n},expression:"count"}})},G=[],X=s["a"].extend({name:"PlayerCount",computed:{count:{get:function(){return this.$store.state.playerCount},set:function(t){this.$store.commit("setPlayerCount",parseInt(t,10))}}}}),Z=X,tt=Object(y["a"])(Z,q,G,!1,null,null,null),nt=tt.exports;C()(tt,{VSelect:O["a"]});var et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{staticClass:"column",attrs:{sm4:""}},[e("div",[t._v("\n          "+t._s(t.$t("winsAfterFlop"))+"\n        ")]),e("div",[e("v-progress-circular",{attrs:{value:t.statistics.winsAfterFlop/t.statistics.totalCount*100,size:100,width:20}},[t._v("\n            "+t._s(t._f("percent")(t.statistics.winsAfterFlop/t.statistics.totalCount*100))+"\n          ")])],1)]),e("v-flex",{staticClass:"column",attrs:{sm4:""}},[e("div",[t._v("\n          "+t._s(t.$t("winsAfterTurn"))+"\n        ")]),e("div",[e("v-progress-circular",{attrs:{value:t.statistics.winsAfterTurn/t.statistics.totalCount*100,size:100,width:20}},[t._v("\n            "+t._s(t._f("percent")(t.statistics.winsAfterTurn/t.statistics.totalCount*100))+"\n          ")])],1)]),e("v-flex",{staticClass:"column",attrs:{sm4:""}},[e("div",[t._v("\n          "+t._s(t.$t("winsAfterRiver"))+"\n        ")]),e("div",[e("v-progress-circular",{attrs:{value:t.statistics.wins/t.statistics.totalCount*100,size:100,width:20}},[t._v("\n            "+t._s(t._f("percent")(t.statistics.wins/t.statistics.totalCount*100))+"\n          ")])],1)])],1)],1)],1)},at=[],st=s["a"].extend({computed:{statistics:{get:function(){return this.$store.state.statistics}}}}),rt=st,it=(e("31a8"),e("a523")),ct=e("0e8f"),ot=e("a722"),ut=e("490a"),ht=Object(y["a"])(rt,et,at,!1,null,null,null),lt=ht.exports;C()(ht,{VContainer:it["a"],VFlex:ct["a"],VLayout:ot["a"],VProgressCircular:ut["a"]});var dt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{"grid-list-md":""}},t._l(Object.keys(t.hands),function(n){return e("v-layout",{key:n,attrs:{row:""}},[e("v-flex",{attrs:{xs6:"",md4:""}},[t._v("\n      "+t._s(n)+"\n    ")]),e("v-flex",{attrs:{xs5:"",md6:""}},[e("v-progress-linear",{attrs:{value:100*t.safePercent(t.hands[n],t.total)}})],1),e("v-flex",{attrs:{xs1:"",md2:""}},[t._v("\n      "+t._s(t._f("percent")(100*t.safePercent(t.hands[n],t.total)))+"\n    ")])],1)}),1)},ft=[],mt=s["a"].extend({props:["hands","total"],methods:{safePercent:function(t,n){return n>0?t/n:0}}}),vt=mt,pt=e("8e36"),kt=Object(y["a"])(vt,dt,ft,!1,null,null,null),bt=kt.exports;C()(kt,{VContainer:it["a"],VFlex:ct["a"],VLayout:ot["a"],VProgressLinear:pt["a"]});var gt=s["a"].extend({name:"App",components:{CardSelector:j,CurrentTable:Y,PlayerCount:nt,WinStatistics:lt,HandPerformance:bt},computed:{statistics:{get:function(){return this.$store.state.statistics}},playing:function(){return this.$store.state.playing}},methods:{onPlay:function(){this.$store.dispatch("startSimulation")},onStop:function(){this.$store.commit("setPlaying",!1)}}}),yt=gt,wt=(e("0b6f"),e("7496")),Ct=e("40dc"),Ot=e("a75b"),St=e("e0c7"),jt=e("71a3"),_t=e("c671"),Rt=e("fe57"),At=e("2a7f"),xt=Object(y["a"])(yt,c,o,!1,null,"4f965c6f",null),Ht=xt.exports;C()(xt,{VApp:wt["a"],VAppBar:Ct["a"],VContainer:it["a"],VContent:Ot["a"],VFlex:ct["a"],VLayout:ot["a"],VProgressLinear:pt["a"],VSubheader:St["a"],VTab:jt["a"],VTabItem:_t["a"],VTabs:Rt["a"],VToolbarTitle:At["a"]});var Tt;e("8e6e"),e("456d"),e("4917");(function(t){t["RoyalStraightFlush"]="Royal straight flush",t["StraightFlush"]="Straight flush",t["FourOfAKind"]="Four of a kind",t["FullHouse"]="Full house",t["Flush"]="Flush",t["Straight"]="Straight",t["ThreeOfAKind"]="Three of a kind",t["TwoPair"]="Two pair",t["Pair"]="Pair",t["HighCard"]="High card"})(Tt||(Tt={}));var Ft,Pt=[Tt.HighCard,Tt.Pair,Tt.TwoPair,Tt.ThreeOfAKind,Tt.Straight,Tt.Flush,Tt.FullHouse,Tt.FourOfAKind,Tt.StraightFlush,Tt.RoyalStraightFlush],Et=(e("55dd"),e("75fc")),$t=function t(n,e){Object(l["a"])(this,t),this.start=n,this.end=e},Nt=function(t){return t.map(function(t){return t===p.Ace?p[a.AceHigh]:t})},Mt=function(t){return Nt(t).sort(function(t,n){return t<n?1:-1})},Vt=function t(n,e){var a=this;Object(l["a"])(this,t),this.hand=n,this.rank=-1,Pt.forEach(function(t,e){n===t&&(a.rank=e)}),this.ranks=Nt(e)},Kt=function(){function t(n){var e=this,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(l["a"])(this,t),this.cards=n,this.playerHand=s,this.match=new Vt(Tt.HighCard,[]),this.high=-1,this.suits=[],this.straightEnd=-1,this.rankCounts={};var r={},i=[],c=this.cards[0].rankNumber,o=this.cards[0].rankNumber,u=this.cards.slice().sort(function(t,n){return t.rankNumber<n.rankNumber?-1:1});this.high=u[this.cards.length-1].rankNumber,u.forEach(function(t){t.rankNumber-o>1?(i.push(new $t(c,o)),c=t.rankNumber,o=t.rankNumber):o=t.rankNumber,void 0===e.rankCounts[t.rankNumber]&&(e.rankCounts[t.rankNumber]=0),e.rankCounts[t.rankNumber]+=1,void 0===r[t.suit.toString()]&&(r[t.suit.toString()]=0),r[t.suit.toString()]+=1}),i.push(new $t(c,o)),i.filter(function(t){return t.end-t.start>=4}).forEach(function(t){e.straightEnd=t.end}),this.matchRankPattern([a.Ten,a.Jack,a.Queen,a.King,a.Ace])&&(this.straightEnd=p[a.AceHigh]),this.suits=Object.keys(r).filter(function(t){return r[t]>4}).map(function(t){return t}),this.cards.forEach(function(t){return t.used=!1}),this.findMatch()}return Object(d["a"])(t,[{key:"compare",value:function(t){if(this.match.rank>t.match.rank)return 1;if(this.match.rank<t.match.rank)return-1;var n=0;return this.match.ranks.forEach(function(e,a){0===n&&(e>t.match.ranks[a]&&(n=1),e<t.match.ranks[a]&&(n=-1))}),n}},{key:"toString",value:function(){return"".concat(this.match.hand.toString(),": ").concat(this.cards.map(function(t){return t.toString()}).join(","))}},{key:"findRankCounts",value:function(t){var n=this;return Object.keys(this.rankCounts).filter(function(e){return n.rankCounts[e]===t}).map(function(t){return parseInt(t,10)})}},{key:"hasRank",value:function(t){return this.cards.filter(function(n){return n.rank===t}).length>0}},{key:"matchRankPattern",value:function(t){var n=this,e=0;return t.forEach(function(t){n.hasRank(t)&&e++}),5===e}},{key:"findMatch",value:function(){this.royalStraightFlushMatcher(),this.straightFlushMatcher(),this.fourOfAKindMatcher(),this.fullHouseMatcher(),this.flushMatcher(),this.straightMatcher(),this.threeOfAKindMatcher(),this.twoPairMatcher(),this.pairMatcher(),this.highCardMatcher()}},{key:"isStraightAlsoFlush",value:function(){for(var t=this,n={},e=this.straightEnd-4;e<this.straightEnd;e+=1)n[e]=!1;this.cards.forEach(function(e){var s=0===e.rankNumber&&t.straightEnd>=p[a.AceHigh]?p[a.AceHigh]:e.rankNumber;s>t.straightEnd-5&&e.suit===t.suits[0]&&(n[s]=!0)});var s=!0;return Object.keys(n).forEach(function(t){!1===n[t]&&(s=!1)}),s}},{key:"royalStraightFlushMatcher",value:function(){this.match.hand===Tt.HighCard&&this.straightEnd===p[a.AceHigh]&&1===this.suits.length&&this.isStraightAlsoFlush()&&(this.match=new Vt(Tt.RoyalStraightFlush,[this.straightEnd]),this.markStraightUsed())}},{key:"straightFlushMatcher",value:function(){this.match.hand===Tt.HighCard&&this.straightEnd>-1&&1===this.suits.length&&this.isStraightAlsoFlush()&&(this.match=new Vt(Tt.StraightFlush,[this.straightEnd]),this.markStraightUsed())}},{key:"straightMatcher",value:function(){this.match.hand===Tt.HighCard&&this.straightEnd>-1&&(this.match=new Vt(Tt.Straight,[this.straightEnd]),this.markStraightUsed())}},{key:"flushMatcher",value:function(){this.match.hand===Tt.HighCard&&1===this.suits.length&&(this.match=new Vt(Tt.Flush,[this.high]),this.markFlush(this.suits[0]))}},{key:"fullHouseMatcher",value:function(){this.match.hand===Tt.HighCard&&1===this.findRankCounts(3).length&&1===this.findRankCounts(2).length&&(this.match=new Vt(Tt.FullHouse,[this.findRankCounts(3)[0],this.findRankCounts(2)[0]]),this.markUsedByRankNumber(this.findRankCounts(3)[0]),this.markUsedByRankNumber(this.findRankCounts(2)[0]))}},{key:"fourOfAKindMatcher",value:function(){this.match.hand===Tt.HighCard&&1===this.findRankCounts(4).length&&(this.match=new Vt(Tt.FourOfAKind,[this.findRankCounts(4)[0]].concat(Object(Et["a"])(Mt(this.findRankCounts(1)).slice(0,1)))),this.markUsedByRankNumber(this.findRankCounts(4)[0]))}},{key:"threeOfAKindMatcher",value:function(){this.match.hand===Tt.HighCard&&1===this.findRankCounts(3).length&&(this.match=new Vt(Tt.ThreeOfAKind,[this.findRankCounts(3)[0]].concat(Object(Et["a"])(Mt(this.findRankCounts(1)).slice(0,2)))),this.markUsedByRankNumber(this.findRankCounts(3)[0]))}},{key:"twoPairMatcher",value:function(){if(this.match.hand===Tt.HighCard&&this.findRankCounts(2).length>=2){var t=Mt(this.findRankCounts(2));this.match=new Vt(Tt.TwoPair,[].concat(Object(Et["a"])(t.slice(0,2)),Object(Et["a"])(this.findRankCounts(1).slice(0,1)))),this.markUsedByRankNumber(t[0]),this.markUsedByRankNumber(t[1])}}},{key:"pairMatcher",value:function(){this.match.hand===Tt.HighCard&&1===this.findRankCounts(2).length&&(this.match=new Vt(Tt.Pair,[].concat(Object(Et["a"])(this.findRankCounts(2)),Object(Et["a"])(Mt(this.findRankCounts(1)).slice(0,3)))),this.markUsedByRankNumber(this.findRankCounts(2)[0]))}},{key:"highCardMatcher",value:function(){this.match.hand===Tt.HighCard&&(this.match=new Vt(Tt.HighCard,Mt(this.findRankCounts(1))),this.markUsedByRankNumber(this.findRankCounts(1)[0]))}},{key:"markFlush",value:function(t){var n=0,e=this.cards.slice().sort(function(t,n){return t.rankNumber<n.rankNumber?1:-1});e.forEach(function(e){e.suit===t&&n<5&&(e.used=!0,n+=1)})}},{key:"markStraightUsed",value:function(){var t=this,n={};this.cards.forEach(function(e){var s=0===e.rankNumber&&t.straightEnd>=p[a.AceHigh]?p[a.AceHigh]:e.rankNumber;s>=t.straightEnd-4&&s<=t.straightEnd&&!n[s]&&(e.used=!0,n[s]=!0)})}},{key:"markUsedByRankNumber",value:function(t){var n=t===p[a.AceHigh]?p[a.Ace]:t;this.cards.forEach(function(t){t.rankNumber===n&&(t.used=!0)})}}]),t}(),Dt=(e("7514"),(Ft=[]).concat.apply(Ft,Object(Et["a"])(v.map(function(t){return m.filter(function(t){return t!==a.AceHigh}).map(function(n){return new k(t,n)})})))),Ut=function(){function t(){Object(l["a"])(this,t),this.cards=Dt.slice()}return Object(d["a"])(t,[{key:"shuffle",value:function(){this.cards=this.cards.map(function(t){return{value:Math.random(),card:t}}).sort(function(t,n){return t.value<n.value?-1:1}).map(function(t){return t.card})}},{key:"remove",value:function(t){this.cards=this.cards.filter(function(n){return!n.isSame(t)})}},{key:"contains",value:function(t){return void 0!==this.cards.find(function(n){return n.isSame(t)})}},{key:"draw",value:function(t){return this.cards.splice(0,t)}}]),t}(),Lt=e("2ef0"),Bt=function t(n){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;Object(l["a"])(this,t),this.hands=[],this.won=!1,this.wonAfterFlop=!1,this.wonAfterTurn=!1,this.communityCards=[];var s=new Ut;s.shuffle(),n.forEach(function(t){return s.remove(t)}),this.communityCards=s.draw(3),this.hands.push(new Kt([].concat(Object(Et["a"])(Object(Lt["cloneDeep"])(n)),Object(Et["a"])(Object(Lt["cloneDeep"])(this.communityCards))),!0));for(var r=0;r<a-1;r++)this.hands.push(new Kt([].concat(Object(Et["a"])(Object(Lt["cloneDeep"])(s.draw(2).slice())),Object(Et["a"])(Object(Lt["cloneDeep"])(this.communityCards)))));this.hands=this.hands.sort(function(t,n){return n.compare(t)}),this.wonAfterFlop=!0===this.hands[0].playerHand;for(var i=function(t){var n=s.draw(1);e.communityCards.push(Object(Lt["cloneDeep"])(n)[0]),e.hands=e.hands.map(function(t){return new Kt([].concat(Object(Et["a"])(t.cards),Object(Et["a"])(Object(Lt["cloneDeep"])(n))),t.playerHand)}),e.hands=e.hands.sort(function(t,n){return n.compare(t)}),0===t?e.wonAfterTurn=!0===e.hands[0].playerHand:e.won=!0===e.hands[0].playerHand},c=0;c<2;c++)i(c)};function Wt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function Jt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Wt(e,!0).forEach(function(n){Object(F["a"])(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Wt(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}s["a"].use(r["a"]);var Qt=2e4,It=[new k(f.Clubs,a.Ace),new k(f.Hearts,a.Ace)],zt=new Bt(It),Yt=function(t,n){n.totalCount+=1,n.progress=Math.round(n.totalCount/Qt*100),n.wins+=t.won?1:0,n.winsAfterFlop+=t.wonAfterFlop?1:0,n.winsAfterTurn+=t.wonAfterTurn?1:0,t.won?n.winsWith[t.hands[0].match.hand]+=1:n.losesTo[t.hands[0].match.hand]+=1},qt=function(t){var n={progress:0,totalCount:1,wins:zt.won?1:0,winsAfterFlop:zt.wonAfterFlop?1:0,winsAfterTurn:zt.wonAfterTurn?1:0,winsWith:{},losesTo:{}};return Pt.forEach(function(t){n.winsWith[t]=0,n.losesTo[t]=0}),n},Gt=new r["a"].Store({state:{cards:It,table:zt,statistics:qt(zt),playerCount:9},mutations:{setCard:function(t,n){var e=n.index,a=n.card;t.cards[e]=a,t.table=new Bt(t.cards,t.playerCount),t.statistics=qt(t.table)},setPlayerCount:function(t,n){t.playerCount=n,t.table=new Bt(t.cards,t.playerCount),t.statistics=qt(t.table)},setupTable:function(t){for(var n=Jt({},t.statistics),e=new Bt(t.cards,t.playerCount),a=0;a<100;a+=1)e=new Bt(t.cards,t.playerCount),Yt(e,n);t.table=e,t.statistics=n}},actions:{runSimulation:function(t){var n=t.state,e=t.commit,a=t.dispatch;n.statistics.totalCount<Qt&&e("setupTable"),window.setTimeout(function(){return a("runSimulation")},100)},startSimulation:function(t){t.commit;var n=t.dispatch;n("runSimulation")}}});Gt.dispatch("startSimulation");var Xt=Gt,Zt=e("f309");s["a"].use(Zt["a"]);var tn=new Zt["a"]({icons:{iconfont:"mdi"}}),nn={en:{poker:"Poker",simulator:"Simulator",overall:"Overall",wins:"Wins",losses:"Losses",lastHand:"Last Hand",winsReport:"You win {percent} of the time and these are the winning hands",lossesReport:"You lose {percent} of the time and these are the hands you lose to",rankLabel:"Rank for card #{index}",suitLabel:"Suit for card #{index}",communityCards:"Community Cards",hands:"Hands",numberOfPlayers:"Number of Players",winsAfterFlop:"Wins After Flop",winsAfterTurn:"Wins After Turn",winsAfterRiver:"Wins After River"}};s["a"].use(i["a"]),s["a"].use(r["a"]),s["a"].config.productionTip=!1,s["a"].filter("percent",function(t){return"".concat(Math.round(t),"%")});var en=new i["a"]({locale:"en",messages:nn});new s["a"]({store:Xt,vuetify:tn,i18n:en,render:function(t){return t(Ht)}}).$mount("#app")},d00c:function(t,n,e){"use strict";var a=e("ebdc"),s=e.n(a);s.a},ebdc:function(t,n,e){},ec00:function(t,n,e){"use strict";var a=e("7a8c"),s=e.n(a);s.a},f0cc:function(t,n,e){}});
//# sourceMappingURL=app.eaffc6a4.js.map