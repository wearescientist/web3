const HARDCORE_GLOBAL_DECISIONS = [
  // ========== MARKET (甯傚満瓒嬪娍) 21涓?==========
  {
    id: 'global_001',
    category: 'market',
    title: '馃搱 BTC绐佺牬鍘嗗彶鏂伴珮',
    desc: '姣旂壒甯佺獊鐮村墠楂橈紝甯傚満FOMO鎯呯华楂樻定锛屼綘璇ュ浣曞簲瀵癸紵',
    choices: [
      { emoji: '馃殌', text: '杩介珮涔板叆', hint: 'FOMO椋庨櫓', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '绋冲仴鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搳', text: '瑙傛湜涓嶅姩', hint: '閿欏け鏈轰細', isCorrect: false, effect: { wealthPct: 0.1 } },
      { emoji: '馃攧', text: '鎹粨ETH', hint: '杞姩绛栫暐', isCorrect: true, effect: { wealthPct: 1.2 } }
    ],
    explanation: '鍒涙柊楂樺悗寰€寰€鏈夊洖璋冿紝鍒嗘壒姝㈢泩鎴栨崲浠撲紭璐ㄨ祫浜ф槸鏄庢櫤閫夋嫨'
  },
  {
    id: 'global_002',
    category: 'market',
    title: '馃惢 灞卞甯侀泦浣撴毚璺?,
    desc: 'Altseason绐佺劧缁撴潫锛屽北瀵ㄥ竵鏅亶涓嬭穼30%浠ヤ笂',
    choices: [
      { emoji: '馃敧', text: '鍓茶倝姝㈡崯', hint: '鍙婃椂姝㈡崯', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃拵', text: '姝绘嬁涓嶅姩', hint: '鍙兘娣卞', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃搲', text: '鍔犱粨鎶勫簳', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃攧', text: '鎹粨BTC', hint: '閬块櫓绛栫暐', isCorrect: true, effect: { wealthPct: 2.0 } }
    ],
    explanation: '灞卞甯佹毚璺屾椂搴斿強鏃舵鎹熸垨鎹粨BTC閬块櫓锛屼笉瑕佺洸鐩鎵?
  },
  {
    id: 'global_003',
    category: 'market',
    title: '馃寵 鐙楃嫍甯佹媺鐩樻毚娑?,
    desc: 'DOGE鍥犲悕浜烘帹鐗瑰枈鍗曪紝24灏忔椂鍐呮毚娑?0%',
    choices: [
      { emoji: '馃殌', text: '杩介珮姊搱', hint: '绔欏矖椋庨櫓', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃挵', text: '鍒嗘壒鍗栧嚭', hint: '閿佸畾鍒╂鼎', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃檯', text: '鍧氬喅涓嶇', hint: '閿欒繃琛屾儏', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '馃幆', text: '灏忎粨鍋氱┖', hint: '楂橀闄?, isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: 'Meme甯佹媺鐩樺線寰€蹇€熷洖钀斤紝鍙婃椂姝㈢泩鏄渶浣崇瓥鐣?
  },
  {
    id: 'global_004',
    category: 'market',
    title: '馃搳 甯傚満鏋佸害鎭愭儳',
    desc: '鎭愭厡璐┆鎸囨暟璺岃嚦10锛屽競鍦轰竴鐗囧搥鍤?,
    choices: [
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '搴曢儴鍓茶倝', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃洅', text: '澶ц儐鎶勫簳', hint: '閫嗗悜鎶曡祫', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '鈴?, text: '缁х画瑙傛湜', hint: '鍙兘閿欒繃', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃挼', text: '瀹氭姇涔板叆', hint: '绋冲仴绛栫暐', isCorrect: true, effect: { wealthPct: 2.0 } }
    ],
    explanation: '鏋佸害鎭愭儳寰€寰€鏄拱鍏ヨ壇鏈猴紝閫嗗悜鎬濈淮鏄耽瀹剁瓥鐣?
  },
  {
    id: 'global_005',
    category: 'market',
    title: '馃敟 DeFi鏉垮潡鐖嗗彂',
    desc: 'DeFi浠ｅ竵闆嗕綋涓婃定锛岄緳澶撮」鐩定骞呰秴杩?00%',
    choices: [
      { emoji: '馃憫', text: '涔板叆榫欏ご', hint: '寮鸿€呮亽寮?, isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃幉', text: '涔板皬甯傚€?, hint: '楂橀闄?, isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '閿佸畾鍒╂鼎', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃毇', text: '涓嶇帺DeFi', hint: '閿欒繃琛屾儏', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '鏉垮潡鐖嗗彂鏃朵拱鍏ラ緳澶村苟鍒嗘壒姝㈢泩鏄渶浣崇瓥鐣?
  },
  {
    id: 'global_006',
    category: 'market',
    title: '馃拃 姝讳骸铻烘棆寮€濮?,
    desc: '鏌愮畻娉曠ǔ瀹氬竵鑴遍敋锛屽競鍦烘亹鎱屾儏缁敁寤?,
    choices: [
      { emoji: '馃弮', text: '绔嬪嵆鎾ょ', hint: '淇濆懡瑕佺揣', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃幇', text: '鎶勫簳绠楁硶甯?, hint: '鍙兘褰掗浂', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃敀', text: '鎾ゅ嚭绋冲畾甯?, hint: '閬块櫓鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃槓', text: '瑙傛湜绛夊緟', hint: '鍙兘琚', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '姝讳骸铻烘棆浜嬩欢涓強鏃舵挙绂绘槸棣栬浠诲姟锛屼笉瑕佽瘯鍥炬妱搴?
  },
  {
    id: 'global_007',
    category: 'market',
    title: '馃幆 灞卞瀛ｆ潵涓?,
    desc: 'BTC涓诲鍦颁綅涓嬮檷锛岃祫閲戝紑濮嬫祦鍏ュ北瀵ㄥ竵',
    choices: [
      { emoji: '馃攧', text: '鎹粨灞卞', hint: '鎶撲綇鏈轰細', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃拵', text: '鎸佹湁BTC', hint: '淇濆畧绛栫暐', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '馃搱', text: '涔板叆ETH', hint: '绋冲仴閫夋嫨', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃彟', text: '鍏ㄩ儴濂楃幇', hint: '閿欏け琛屾儏', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '灞卞瀛ｆ槸鑾峰彇瓒呴鏀剁泭鐨勬満浼氾紝搴旈€傚害閰嶇疆浼樿川灞卞甯?
  },
  {
    id: 'global_008',
    category: 'market',
    title: '馃搲 BTC杩炵画闃磋穼',
    desc: '姣旂壒甯佽繛缁?澶╀笅璺岋紝绱璺屽箙15%',
    choices: [
      { emoji: '馃敧', text: '姝㈡崯绂诲満', hint: '鎺у埗鍥炴挙', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃洅', text: '姣忚穼鍔犱粨', hint: '鎽婁綆鎴愭湰', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃拵', text: '缁х画鎸佷粨', hint: '淇′话鎸佹湁', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '馃搳', text: '鍑忎粨瑙傛湜', hint: '鐏垫椿搴斿', isCorrect: true, effect: { wealthPct: 1.3 } }
    ],
    explanation: '杩炵画涓嬭穼鏃跺簲鍏堟帶鍒朵粨浣嶏紝绛夊緟浼佺ǔ淇″彿鍐嶈€冭檻鍔犱粨'
  },
  {
    id: 'global_009',
    category: 'market',
    title: '馃殌 鏂板叕閾剧垎鍙?,
    desc: '鏌愭柊鍏摼TVL蹇€熷闀匡紝浠ｅ竵浠锋牸缈诲€?,
    choices: [
      { emoji: '馃幆', text: '灏忎粨浣嶈拷', hint: '鎺у埗浠撲綅', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃挵', text: '閲嶄粨姊搱', hint: '椋庨櫓宸ㄥぇ', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃憖', text: '瑙傛湜鐮旂┒', hint: '鍙兘閿欒繃', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃毇', text: '涓嶅弬涓?, hint: '淇濆畧绛栫暐', isCorrect: false, effect: { wealthPct: -0.1 } }
    ],
    explanation: '鏂板叕閾炬満浼氫笌椋庨櫓骞跺瓨锛屽皬浠撲綅鍙備笌鏄悎鐞嗙瓥鐣?
  },
  {
    id: 'global_010',
    category: 'market',
    title: '馃幇 鍚堢害鐖嗕粨娼?,
    desc: '澶氱┖鍙岀垎锛屽叏缃戝悎绾︾垎浠撻噾棰濊秴10浜跨編鍏?,
    choices: [
      { emoji: '馃毇', text: '鍏抽棴鍚堢害', hint: '杩滅椋庨櫓', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃幉', text: '缁х画楂樺€?, hint: '鍙兘褰掗浂', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '鈿栵笍', text: '闄嶄綆鏉犳潌', hint: '闄嶄綆椋庨櫓', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃敟', text: '鍙嶅悜寮€鍗?, hint: '璧屽崥琛屼负', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '鐖嗕粨娼鏄庡競鍦烘瀬绔紝搴旈檷浣庢潬鏉嗘垨杩滅鍚堢害浜ゆ槗'
  },
  {
    id: 'global_011',
    category: 'market',
    title: '馃挧 鐎戝竷寮忎笅璺?,
    desc: 'BTC涓€灏忔椂鏆磋穼10%锛屽競鍦哄嚭鐜版亹鎱屾€ф姏鍞?,
    choices: [
      { emoji: '馃槺', text: '璺熼鎶涘敭', hint: '搴曢儴鍓茶倝', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃洅', text: '鎸備綆浠峰崟', hint: '鎹′究瀹?, isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴革笍', text: '鏆傚仠浜ゆ槗', hint: '绛夊緟浼佺ǔ', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃挵', text: '鍏ㄤ粨鎶勫簳', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '鐎戝竷涓嬭穼鍚庡線寰€鏈夊弽寮癸紝浣嗛渶鎺у埗浠撲綅锛屼笉瀹滃叏浠撴妱搴?
  },
  {
    id: 'global_012',
    category: 'market',
    title: '馃寠 闇囪崱娲楃洏琛屾儏',
    desc: 'BTC鍦ㄧ嫮绐勫尯闂村唴鍙嶅闇囪崱锛屽绌哄弻鏉€',
    choices: [
      { emoji: '馃搳', text: '楂樻姏浣庡惛', hint: '鎶€鏈姹傞珮', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '馃拵', text: '鎸佸竵涓嶅姩', hint: '绛夊緟鏂瑰悜', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃毇', text: '瑙傛湜绂诲満', hint: '閬垮厤纾ㄦ崯', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃幇', text: '鍔犲ぇ鏉犳潌', hint: '鑷潃琛屼负', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '闇囪崱琛屾儏涓嶅疁棰戠箒鎿嶄綔锛岃€愬績鎸佸竵鎴栬鏈涙槸涓婄瓥'
  },
  {
    id: 'global_013',
    category: 'market',
    title: '馃敭 甯傚満鏋佸害璐┆',
    desc: '鎭愭厡璐┆鎸囨暟杈惧埌95锛屼汉浜洪兘鍦ㄨ皥璁烘毚瀵?,
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '钀借涓哄畨', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '灞遍《绔欏矖', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃搲', text: '鍋氱┖瀵瑰啿', hint: '涓撲笟鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃拵', text: '闀挎湡鎸佹湁', hint: '鍙兘鍥炴挙', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '鏋佸害璐┆寰€寰€鏄樁娈垫€ч《閮ㄤ俊鍙凤紝搴旈€愭鍑忎粨姝㈢泩'
  },
  {
    id: 'global_014',
    category: 'market',
    title: '馃彌锔?鏈烘瀯澶ч涔板叆',
    desc: '鏌愪笂甯傚叕鍙稿甯冭喘涔?浜跨編鍏冩瘮鐗瑰竵',
    choices: [
      { emoji: '馃搱', text: '璺熷簞涔板叆', hint: '椤哄娍鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃挵', text: '绛夊緟鍥炶皟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃幆', text: '涔板叆ETH', hint: '杞姩棰勬湡', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '鏈烘瀯鍏ュ満鏄埄濂戒俊鍙凤紝椤哄娍鎿嶄綔鎴栧竷灞€鐩稿叧鏍囩殑'
  },
  {
    id: 'global_015',
    category: 'market',
    title: '馃捀 绋冲畾甯丗UD',
    desc: '鏌愬ぇ鍨嬬ǔ瀹氬竵琚紶鍌ㄥ涓嶈冻锛屽紑濮嬭劚閿?,
    choices: [
      { emoji: '馃弮', text: '绔嬪嵆鍏戞崲', hint: '閬块櫓鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃幇', text: '鎶勫簳濂楀埄', hint: '楂橀闄?, isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃敀', text: '鎹SDC', hint: '鍒嗘暎椋庨櫓', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃槓', text: '涓嶄簣鐞嗕細', hint: '鍙兘鎹熷け', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '绋冲畾甯佽劚閿氶闄╁法澶э紝鍙婃椂鍏戞崲鎴栧垎鏁ｅ埌鍏朵粬绋冲畾甯?
  },
  {
    id: 'global_016',
    category: 'market',
    title: '馃摪 閲嶅ぇ鍒╁ソ鍏憡',
    desc: '鏌愬ご閮ㄤ氦鏄撴墍瀹ｅ竷灏嗕笂绾夸綘鐨勬寔浠撲唬甯?,
    choices: [
      { emoji: '馃挵', text: '鍒╁ソ鍑鸿揣', hint: '閿佸畾鍒╂鼎', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃殌', text: '缁х画鎸佹湁', hint: '鏈熷緟鏇撮珮', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '馃搱', text: '娑堟伅鍓嶄拱', hint: '鍐呭箷瀚岀枒', isCorrect: false, effect: { wealthPct: -0.2 } },
      { emoji: '鈴?, text: '璁炬鐩堝崟', hint: '鑷姩鍖?, isCorrect: true, effect: { wealthPct: 1.8 } }
    ],
    explanation: '鍒╁ソ鍑哄敖鏄埄绌猴紝涓婄嚎浜ゆ槗鎵€寰€寰€鏄渶浣冲崠鍑烘椂鏈?
  },
  {
    id: 'global_017',
    category: 'market',
    title: '馃攧 NFT甯傚満鍥炴殩',
    desc: '钃濈NFT鍦版澘浠峰紑濮嬩笂娑紝浜ゆ槗閲忔斁澶?,
    choices: [
      { emoji: '馃憫', text: '涔板叆钃濈', hint: '浼樿川璧勪骇', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃幉', text: '鍐插湡鐙桸FT', hint: '楂橀闄?, isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃挵', text: '鍗栧嚭濂楃幇', hint: '鎻愬墠绂诲満', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃搳', text: '灏忛鍙備笌', hint: '鎺у埗浠撲綅', isCorrect: true, effect: { wealthPct: 1.2 } }
    ],
    explanation: 'NFT鍥炴殩鏃朵拱鍏ヨ摑绛规槸鐩稿绋冲仴鐨勯€夋嫨'
  },
  {
    id: 'global_018',
    category: 'market',
    title: '鈿?闂穿鍚庡揩閫熷弽寮?,
    desc: 'BTC闂穿5%鍚庡崐灏忔椂鍐呮敹澶嶅け鍦?,
    choices: [
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '鍓插湪鍦版澘', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃拵', text: '鍧氬畾鎸佹湁', hint: '缁忓彈鑰冮獙', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃洅', text: '闂穿鎶勫簳', hint: '楂樻墜鎿嶄綔', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃敧', text: '姝㈡崯绂诲満', hint: '琚礂鍑哄幓', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '闂穿鍙嶅脊鏄礂鐩樹俊鍙凤紝鍧氬畾鎸佹湁鎴栨灉鏂妱搴曢兘鏄ソ绛栫暐'
  },
  {
    id: 'global_019',
    category: 'market',
    title: '馃搳 鎴愪氦閲忓紓甯歌悗缂?,
    desc: '甯傚満鎴愪氦閲忓垱杩戞湡鏂颁綆锛屾尝鍔ㄧ巼涓嬮檷',
    choices: [
      { emoji: '鈴?, text: '绛夊緟鏂瑰悜', hint: '鑰愬績瑙傛湜', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃幇', text: '鎻愬墠鍩嬩紡', hint: '璧屽崥琛屼负', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '馃挵', text: '鍑忎粨瑙傛湜', hint: '闄嶄綆椋庨櫓', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃殌', text: '婊′粨绛夊緟', hint: '璧勯噾鏁堢巼浣?, isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '鎴愪氦閲忚悗缂╁線寰€棰勭ず鍙樼洏锛屽噺浠撹鏈涚瓑寰呮柟鍚戞槑纭?
  },
  {
    id: 'global_020',
    category: 'market',
    title: '馃敟 Meme甯佸寮€鍚?,
    desc: '鍚勭鍔ㄧ墿甯併€佸悕浜哄竵寮€濮嬬柉鐙傛媺鐩?,
    choices: [
      { emoji: '馃幆', text: '灏忎粨鍙備笌', hint: '鎺у埗浠撲綅', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃挵', text: '閲嶄粨姊搱', hint: '鍙兘褰掗浂', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃毇', text: '鍧氬喅涓嶇', hint: '杩滅椋庨櫓', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '馃幉', text: '鍏ㄦ娂涓€涓?, hint: '璧屽崥琛屼负', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: 'Meme甯佹槸楂橀闄╂姇鏈猴紝灏忎粨浣嶅弬涓庢垨涓嶅弬涓庨兘鏄悎鐞嗛€夋嫨'
  },
  {
    id: 'global_021',
    category: 'market',
    title: '馃搲 鐔婂競鏈€鍚庝竴璺?,
    desc: '甯傚満宸茬粡涓嬭穼90%锛屼絾浠嶅湪鍒涙柊浣?,
    choices: [
      { emoji: '馃洅', text: '鍒嗘壒鎶勫簳', hint: '闀挎湡甯冨眬', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '搴曢儴鍓茶倝', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '鈴?, text: '绛夊緟纭', hint: '鍙兘閿欒繃', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃拵', text: '瀹氭姇绛栫暐', hint: '绋冲仴鏂规', isCorrect: true, effect: { wealthPct: 2.5 } }
    ],
    explanation: '涓嬭穼90%鍚庨闄╂敹鐩婃瘮鏋佷匠锛屽垎鎵规妱搴曟垨瀹氭姇鏄渶浣崇瓥鐣?
  },

  // ========== MACRO (瀹忚缁忔祹) 21涓?==========
  {
    id: 'global_022',
    category: 'macro',
    title: '馃彟 缇庤仈鍌ㄥ姞鎭?5鍩虹偣',
    desc: '缇庤仈鍌ㄥ甯冨ぇ骞呭姞鎭紝椋庨櫓璧勪骇鎵垮帇',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '淇濇姢鏈噾', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃殌', text: '閫嗗娍鍔犱粨', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃搲', text: '鍋氱┖瀵瑰啿', hint: '涓撲笟绛栫暐', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃拵', text: '姝绘墰涓嶅姩', hint: '鍙兘娣卞', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '澶у箙鍔犳伅鍒╃┖椋庨櫓璧勪骇锛屽噺浠撴垨瀵瑰啿鏄槑鏅洪€夋嫨'
  },
  {
    id: 'global_023',
    category: 'macro',
    title: '馃搲 闄嶆伅棰勬湡鍗囨俯',
    desc: '閫氳儉鏁版嵁濂借浆锛屽競鍦洪鏈熺編鑱斿偍灏嗛檷鎭?,
    choices: [
      { emoji: '馃搱', text: '鍔犱粨椋庨櫓', hint: '鍒╁ソ璧勪骇', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃挵', text: '涔板叆BTC', hint: '鍙楃泭鏍囩殑', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '绛夊緟钀藉湴', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '闄嶆伅棰勬湡鍒╁ソ椋庨櫓璧勪骇锛屾彁鍓嶅竷灞€BTC绛夊彈鐩婃爣鐨?
  },
  {
    id: 'global_024',
    category: 'macro',
    title: '馃挼 缇庡厓寮哄娍涓婃定',
    desc: '缇庡厓鎸囨暟DXY绐佺牬110锛屽垱20骞存柊楂?,
    choices: [
      { emoji: '馃挵', text: '鍑忎粨瑙傛湜', hint: '閬块櫓鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '鍋氱┖椋庨櫓', hint: '瀵瑰啿绛栫暐', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃殌', text: '缁х画閲嶄粨', hint: '閫嗗娍鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃挼', text: '鎹㈡寔USDT', hint: '缇庡厓绛変环', isCorrect: false, effect: { wealthPct: -0.1 } }
    ],
    explanation: '缇庡厓璧板己鍘嬪埗椋庨櫓璧勪骇锛屽噺浠撴垨瀵瑰啿鏄悎鐞嗗簲瀵?
  },
  {
    id: 'global_025',
    category: 'macro',
    title: '馃搳 閫氳儉鏁版嵁鐖嗚〃',
    desc: 'CPI鏁版嵁瓒呴鏈燂紝閫氳儉鎷呭咖鍔犲墽',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '瑙勯伩椋庨櫓', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '棰勬湡鍋氱┖', hint: '鐭湡绛栫暐', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '涔板叆BTC', hint: '閬块櫓璧勪骇', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '馃拵', text: '姝绘墰涓嶅姩', hint: '鍙兘浜忔崯', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '楂橀€氳儉鏁版嵁鐭湡鍒╃┖甯傚満锛屽簲鍏堥伩闄╃瓑寰呮槑鏈?
  },
  {
    id: 'global_026',
    category: 'macro',
    title: '馃實 鍦扮紭鍐茬獊鍗囩骇',
    desc: '鍥介檯灞€鍔跨揣寮狅紝閬块櫓鎯呯华鍗囨俯',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨瑙傛湜', hint: '闄嶄綆椋庨櫓', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '瀵瑰啿淇濇姢', hint: '涓撲笟鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '馃殌', text: '鎶勫簳涔板叆', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃幇', text: '鍔犲ぇ鏉犳潌', hint: '楂橀闄?, isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '鍦扮紭鍐茬獊寮曞彂甯傚満鎭愭厡锛屽厛淇濇姢鏈噾鍐嶈€冭檻鏈轰細'
  },
  {
    id: 'global_027',
    category: 'macro',
    title: '馃彟 鏃ユ湰澶杞悜',
    desc: '鏃ユ湰澶缁撴潫璐熷埄鐜囨斂绛栵紝鏃ュ厓澶у箙鍗囧€?,
    choices: [
      { emoji: '馃搳', text: '鍏虫敞褰卞搷', hint: '杩為攣鍙嶅簲', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '闄嶄綆鏁炲彛', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '馃殌', text: '涓嶅彈褰卞搷', hint: '璇垽椋庨櫓', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '馃幉', text: '鍙嶅悜鎿嶄綔', hint: '璧屽崥琛屼负', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '鏃ユ湰澶鏀跨瓥杞悜鍙兘寮曞彂鍏ㄧ悆甯傚満娉㈠姩锛屽簲闄嶄綆椋庨櫓鏁炲彛'
  },
  {
    id: 'global_028',
    category: 'macro',
    title: '馃搱 闈炲啘鏁版嵁寮哄姴',
    desc: '缇庡浗闈炲啘灏变笟鏁版嵁杩滆秴棰勬湡锛岀粡娴庨煣鎬ф樉鐜?,
    choices: [
      { emoji: '馃搲', text: '鍒╃┖椋庨櫓', hint: '鍔犳伅棰勬湡', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '鍑忎粨瑙傛湜', hint: '璋ㄦ厧搴斿', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '涔板叆鍔犱粨', hint: '杩囨棭涔愯', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃幆', text: '涔板叆缇庡厓', hint: '鑴辩涓婚', isCorrect: false, effect: { wealthPct: -0.1 } }
    ],
    explanation: '寮哄姴闈炲啘鏁版嵁鍙兘寤剁紦闄嶆伅锛岀煭鏈熷埄绌洪闄╄祫浜?
  },
  {
    id: 'global_029',
    category: 'macro',
    title: '馃彔 鎴垮湴浜ф暟鎹伓鍖?,
    desc: '缇庡浗鎴愬眿閿€鍞暟鎹ぇ骞呬笅婊戯紝琛伴€€鎷呭咖鍐嶈捣',
    choices: [
      { emoji: '馃搲', text: '缁忔祹鏀剧紦', hint: '闄嶆伅棰勬湡', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '涔板叆BTC', hint: '閬块櫓闇€姹?, isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃弮', text: '鍏ㄩ儴绂诲満', hint: '杩囧害淇濆畧', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '鎴垮湴浜ф暟鎹伓鍖栭绀虹粡娴庢斁缂擄紝鍙兘鍔犻€熼檷鎭埄濂紹TC'
  },
  {
    id: 'global_030',
    category: 'macro',
    title: '馃洟锔?娌逛环澶у箙娉㈠姩',
    desc: '鍘熸补浠锋牸鏆存定30%锛岄€氳儉棰勬湡鍐嶈捣',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨搴斿', hint: '閫氳儉鍘嬪姏', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '馃搳', text: '瑙傚療鍚庣画', hint: '绛夊緟鏄庢湕', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃殌', text: '鏃犺娉㈠姩', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃拵', text: '缁х画鍔犱粨', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '娌逛环涓婃定鎺ㄩ珮閫氳儉棰勬湡锛屽簲鍏堝噺浠撳簲瀵逛笉纭畾鎬?
  },
  {
    id: 'global_031',
    category: 'macro',
    title: '馃搲 娆ф床缁忔祹琛伴€€',
    desc: '娆у厓鍖篏DP杩炵画涓ゅ璐熷闀匡紝闄峰叆鎶€鏈€ц“閫€',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '鍏ㄧ悆褰卞搷', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '闄嶄綆鏁炲彛', hint: '璋ㄦ厧绛栫暐', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '涓嶅彈褰卞搷', hint: '璇垽椋庨櫓', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃洅', text: '澶ц儐鎶勫簳', hint: '鏃舵満鏈埌', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '娆ф床琛伴€€褰卞搷鍏ㄧ悆甯傚満锛岄檷浣庝粨浣嶉伩闄╂槸鏄庢櫤閫夋嫨'
  },
  {
    id: 'global_032',
    category: 'macro',
    title: '馃彟 閾惰涓氬嵄鏈?,
    desc: '鏌愬ぇ鍨嬮摱琛屾毚闆凤紝閲戣瀺浣撶郴椋庨櫓涓婂崌',
    choices: [
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '鎯呯华鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃挵', text: '涔板叆BTC', hint: '鍘讳腑蹇冨寲', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃搲', text: '鍋氱┖鑲″競', hint: '瀵瑰啿绛栫暐', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃弮', text: '鍏ㄩ儴濂楃幇', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '閾惰鍗辨満鍑告樉BTC鍘讳腑蹇冨寲浠峰€硷紝鏄拱鍏ヨ壇鏈?
  },
  {
    id: 'global_033',
    category: 'macro',
    title: '馃挶 浜烘皯甯佸ぇ骞呰船鍊?,
    desc: '缇庡厓鍏戜汉姘戝竵姹囩巼绐佺牬7.3锛屽垱澶氬勾鏂伴珮',
    choices: [
      { emoji: '馃挵', text: '涔板叆BTC', hint: '閬块櫓閫夋嫨', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃搱', text: '璧勯噾娴佸叆', hint: '闇€姹傚鍔?, isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '鍙兘閿欒繃', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '馃弮', text: '鍗栧嚭绂诲満', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '鏈竵璐€兼帹鍔ㄨ祫閲戞祦鍏ュ姞瀵嗚揣甯侊紝鍒╁ソBTC绛夎祫浜?
  },
  {
    id: 'global_034',
    category: 'macro',
    title: '馃搳 灏变笟鏁版嵁鐤茶蒋',
    desc: '鍒濊澶变笟閲戜汉鏁拌秴棰勬湡锛屽姵鍔ㄥ姏甯傚満闄嶆俯',
    choices: [
      { emoji: '馃搱', text: '闄嶆伅棰勬湡', hint: '鍒╁ソ椋庨櫓', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鍔犱粨涔板叆', hint: '鎻愬墠甯冨眬', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃槺', text: '琛伴€€鎭愭厡', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '鈴?, text: '绛夊緟纭', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } }
    ],
    explanation: '灏变笟鏁版嵁鐤茶蒋鏀寔闄嶆伅棰勬湡锛屽埄濂介闄╄祫浜?
  },
  {
    id: 'global_035',
    category: 'macro',
    title: '馃彌锔?鍊哄姟涓婇檺鍗辨満',
    desc: '缇庡浗鏀垮簻闈复鍊哄姟杩濈害椋庨櫓锛屽競鍦烘媴蹇?,
    choices: [
      { emoji: '馃挵', text: '涔板叆BTC', hint: '閬块櫓璧勪骇', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃搲', text: '瀵瑰啿椋庨櫓', hint: '涓撲笟鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '鎯呯华鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘閿欒繃', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '鍊哄姟鍗辨満鍑告樉娉曞竵椋庨櫓锛孊TC浣滀负鏇夸唬璧勪骇鍙楃泭'
  },
  {
    id: 'global_036',
    category: 'macro',
    title: '馃搱 榛勯噾绐佺牬鏂伴珮',
    desc: '閲戜环鍒涘巻鍙叉柊楂橈紝閬块櫓璧勪骇鍙楄拷鎹?,
    choices: [
      { emoji: '馃挵', text: '鍏虫敞BTC', hint: '鑱斿姩鏁堝簲', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搱', text: '涔板叆鍔犲瘑', hint: '鍚屾涓婃定', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '閿欏け鏈轰細', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '馃弮', text: '杩芥定榛勯噾', hint: '鍋忕涓婚', isCorrect: false, effect: { wealthPct: -0.1 } }
    ],
    explanation: '榛勯噾涓婃定棰勭ず閬块櫓闇€姹傚鍔狅紝BTC寰€寰€璺熼殢涓婃定'
  },
  {
    id: 'global_037',
    category: 'macro',
    title: '馃實 鏂板叴甯傚満鍗辨満',
    desc: '鏌愭柊鍏村競鍦哄浗瀹惰揣甯佸穿鐩橈紝璧勬湰澶栭€?,
    choices: [
      { emoji: '馃挵', text: '涔板叆BTC', hint: '璧勯噾娴佸叆', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃搱', text: '鍔犲瘑闇€姹?, hint: '鏇夸唬閫夋嫨', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '閿欒鍒ゆ柇', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '鏂板叴甯傚満鍗辨満寰€寰€鎺ㄥ姩璧勯噾娴佸叆BTC绛夊幓涓績鍖栬祫浜?
  },
  {
    id: 'global_038',
    category: 'macro',
    title: '馃彟 閲忓寲瀹芥澗閲嶅惎',
    desc: '澶鏆楃ず鍙兘閲嶅惎QE锛屾祦鍔ㄦ€ч鏈熸敼鍠?,
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '娴佸姩鎬х墰', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '馃挵', text: '涔板叆BTC', hint: '鏈€鍙楃泭', isCorrect: true, effect: { wealthPct: 3.0 } },
      { emoji: '鈴?, text: '绛夊緟钀藉湴', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '馃搲', text: '鍋氱┖甯傚満', hint: '鏂瑰悜閿欒', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: 'QE閲嶅惎鎰忓懗鐫€娴佸姩鎬ф硾婊ワ紝瀵笲TC鏄噸澶у埄濂?
  },
  {
    id: 'global_039',
    category: 'macro',
    title: '馃搳 鍒堕€犱笟PMI涓嬫粦',
    desc: '鍒堕€犱笟PMI璺岀牬50鑽ｆ灟绾匡紝缁忔祹鏀剧紦淇″彿',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨搴斿', hint: '璋ㄦ厧绛栫暐', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃搲', text: '闄嶄綆鏁炲彛', hint: '椋庨櫓鎺у埗', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃殌', text: '鏃犺鏁版嵁', hint: '鐩茬洰涔愯', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃拵', text: '缁х画閲嶄粨', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '鍒堕€犱笟涓嬫粦棰勭ず缁忔祹鏀剧紦锛屽簲闄嶄綆浠撲綅搴斿椋庨櫓'
  },
  {
    id: 'global_040',
    category: 'macro',
    title: '馃挼 缇庡€烘敹鐩婄巼椋欏崌',
    desc: '10骞存湡缇庡€烘敹鐩婄巼绐佺牬5%锛屽垱澶氬勾鏂伴珮',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '璧勯噾鎴愭湰', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '闄嶄綆鏉犳潌', hint: '椋庨櫓鎺у埗', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '閫嗗娍鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '姝绘墰涓嶅姩', hint: '鍙兘娣卞', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '缇庡€烘敹鐩婄巼椋欏崌鎻愰珮鏃犻闄╂敹鐩婏紝鍘嬪埗椋庨櫓璧勪骇浼板€?
  },
  {
    id: 'global_041',
    category: 'macro',
    title: '馃搱 鑲″競鍒涙柊楂?,
    desc: '鏍囨櫘500绐佺牬鍘嗗彶楂樼偣锛岄闄╄祫浜ф櫘娑?,
    choices: [
      { emoji: '馃挵', text: '涔板叆BTC', hint: '璺熼殢涓婃定', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃搱', text: '鍔犱粨椋庨櫓', hint: '璧勯噾婧㈠嚭', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃搲', text: '鍋氱┖鑲″競', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '鑲″競鍒涙柊楂樻樉绀洪闄╁亸濂藉洖鍗囷紝BTC寰€寰€璺熼殢涓婃定'
  },
  {
    id: 'global_042',
    category: 'macro',
    title: '馃寪 鍏ㄧ悆澶璐噾',
    desc: '澶氬浗澶鎸佺画澧炴寔榛勯噾鍌ㄥ锛屽幓缇庡厓鍖栬秼鍔?,
    choices: [
      { emoji: '馃挵', text: '涔板叆BTC', hint: '鏁板瓧榛勯噾', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃搱', text: '闀挎湡鎸佹湁', hint: '浠峰€煎瓨鍌?, isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃弮', text: '杩芥定榛勯噾', hint: '鍋忕涓婚', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '澶璐噾瓒嬪娍鍒╁ソ鎵€鏈変环鍊煎瓨鍌ㄨ祫浜э紝BTC浣滀负鏁板瓧榛勯噾鍙楃泭'
  },

  // ========== REGULATION (鐩戠鏀跨瓥) 21涓?==========
  {
    id: 'global_043',
    category: 'regulation',
    title: '馃摐 ETF鑾锋壒閫氳繃',
    desc: 'SEC鎵瑰噯鐜拌揣姣旂壒甯丒TF涓婂競浜ゆ槗',
    choices: [
      { emoji: '馃殌', text: '涔板叆BTC', hint: '閲嶅ぇ鍒╁ソ', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '馃挵', text: '鍔犱粨鎸佹湁', hint: '闀挎湡鐪嬪ソ', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃搲', text: '鍒╁ソ鍑鸿揣', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '閿欏け琛屾儏', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: 'ETF鑾锋壒鏄巻鍙叉€у埄濂斤紝甯︽潵鏈烘瀯璧勯噾娴佸叆'
  },
  {
    id: 'global_044',
    category: 'regulation',
    title: '馃毇 鏌愬浗绂佹浜ゆ槗',
    desc: '鏌愬ぇ鍥藉甯冪姝㈠姞瀵嗚揣甯佷氦鏄撳拰鎸栫熆',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨搴斿', hint: '瑙勯伩椋庨櫓', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '鏆傛椂鍥為伩', hint: '绛夊緟鏄庢湕', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '搴曢儴鍓茶倝', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃殌', text: '閫嗗娍鎶勫簳', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '绂佷护鐭湡鍒╃┖甯傚満锛屽簲鍑忎粨搴斿鑰岄潪鎭愭厡鎶涘敭'
  },
  {
    id: 'global_045',
    category: 'regulation',
    title: '鉁?鍚堣妗嗘灦钀藉湴',
    desc: '鏌愬浗鍑哄彴娓呮櫚鐨勫姞瀵嗚揣甯佺洃绠℃鏋?,
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '娑堥櫎涓嶇‘瀹氭€?, isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃挵', text: '闀挎湡鎸佹湁', hint: '鍒跺害淇濋殰', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.1 } }
    ],
    explanation: '鏄庣‘鐨勭洃绠℃鏋舵秷闄や笉纭畾鎬э紝鍒╁ソ琛屼笟鍙戝睍'
  },
  {
    id: 'global_046',
    category: 'regulation',
    title: '馃彌锔?SEC璧疯瘔浜ゆ槗鎵€',
    desc: 'SEC瀵规煇澶у瀷浜ゆ槗鎵€鎻愯捣璇佸埜璇夎',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '瑙勯伩涓嶇‘瀹氭€?, isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '鎾ゅ嚭璧勯噾', hint: '瀹夊叏绗竴', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '鎯呯华鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃殌', text: '鎶勫簳涔板叆', hint: '鏃舵満鏈埌', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '閲嶅ぇ鐩戠璇夎甯︽潵涓嶇‘瀹氭€э紝搴斿厛淇濇姢璧勯噾'
  },
  {
    id: 'global_047',
    category: 'regulation',
    title: '馃搵 绋庡姟鏂拌鍑哄彴',
    desc: '绋庡姟閮ㄩ棬瑕佹眰浜ゆ槗鎵€涓婃姤鐢ㄦ埛浜ゆ槗鏁版嵁',
    choices: [
      { emoji: '馃挵', text: '鍚堣鐢虫姤', hint: '閬垮厤椋庨櫓', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃搳', text: '鏁寸悊璁板綍', hint: '鍋氬ソ鍑嗗', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃毇', text: '鎷掔粷閰嶅悎', hint: '娉曞緥椋庨櫓', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃弮', text: '杞Щ璧勪骇', hint: '瑙勯伩椋庨櫓', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '绋庡姟鍚堣鏄暱鏈熸姇璧勮€呯殑蹇呬慨璇撅紝搴斾富鍔ㄩ厤鍚?
  },
  {
    id: 'global_048',
    category: 'regulation',
    title: '馃彟 閾惰鍑嗗叆寮€鏀?,
    desc: '鐩戠鏈烘瀯鍏佽閾惰涓哄姞瀵嗚揣甯佷紒涓氭彁渚涙湇鍔＄殑',
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '鏈烘瀯鍏ュ満', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃挵', text: '闀挎湡鐪嬪ソ', hint: '鍩虹璁炬柦', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '閾惰鍑嗗叆鏄姞瀵嗚揣甯佷富娴佸寲鐨勯噸瑕佷竴姝ワ紝鍒╁ソ闀挎湡鍙戝睍'
  },
  {
    id: 'global_049',
    category: 'regulation',
    title: '馃摐 绋冲畾甯佹硶妗?,
    desc: '鍥戒細閫氳繃绋冲畾甯佺洃绠℃硶妗堬紝瑕佹眰100%鍌ㄥ',
    choices: [
      { emoji: '馃挵', text: '鎹㈠悎瑙勭ǔ瀹氬竵', hint: '瀹夊叏淇濋殰', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '鉁?, text: '鏀寔鐩戠', hint: '闀挎湡鍒╁ソ', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃毇', text: '鎶靛埗娉曟', hint: '鏃犳祹浜庝簨', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '绋冲畾甯佺洃绠℃彁鍗囪涓氬畨鍏ㄦ€э紝搴旀嫢鎶卞悎瑙?
  },
  {
    id: 'global_050',
    category: 'regulation',
    title: '馃毇 娣峰竵鍣ㄨ鍒惰',
    desc: 'OFAC鍒惰鏌愮煡鍚嶆贩甯佸崗璁紝寮曞彂闅愮鎷呭咖',
    choices: [
      { emoji: '馃挵', text: '閬垮厤浣跨敤', hint: '娉曞緥椋庨櫓', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃搳', text: '鍏虫敞褰卞搷', hint: '琛屼笟鍙樺寲', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃毇', text: '缁х画浣跨敤', hint: '杩濇硶椋庨櫓', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '鍒惰鍚庡簲閬垮厤浣跨敤琚埗瑁佸崗璁紝閬靛畧鐩稿叧娉曞緥娉曡'
  },
  {
    id: 'global_051',
    category: 'regulation',
    title: '馃搵 KYC瑕佹眰鏀剁揣',
    desc: '浜ゆ槗鎵€鍔犲己KYC瀹℃牳锛岄檺鍒舵湭瀹屾垚璁よ瘉鐢ㄦ埛',
    choices: [
      { emoji: '鉁?, text: '瀹屾垚璁よ瘉', hint: '鍚堣鎿嶄綔', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '鎻愬墠鍑嗗', hint: '閬垮厤褰卞搷', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃毇', text: '鎷掔粷璁よ瘉', hint: '鏃犳硶浜ゆ槗', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃弮', text: '杞Щ骞冲彴', hint: '閫冮伩鐩戠', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: 'KYC鏄悎瑙勮姹傦紝搴斾富鍔ㄥ畬鎴愯璇佷互淇濋殰璐︽埛瀹夊叏'
  },
  {
    id: 'global_052',
    category: 'regulation',
    title: '馃彌锔?璇佸埜灞炴€ц瀹?,
    desc: '娉曢櫌瑁佸畾鏌愪唬甯佸睘浜庤瘉鍒革紝鍙桽EC鐩戠',
    choices: [
      { emoji: '馃挵', text: '閬垮厤鎸佷粨', hint: '瑙勯伩椋庨櫓', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '鍗栧嚭姝㈡崯', hint: '鍙婃椂绂诲満', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃拵', text: '缁х画鎸佹湁', hint: '娉曞緥椋庨櫓', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃殌', text: '鎶勫簳涔板叆', hint: '鏃舵満鏈埌', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '璇佸埜璁ゅ畾鍚庤浠ｅ竵闈复涓ユ牸鐩戠锛屽簲鍙婃椂瑙勯伩'
  },
  {
    id: 'global_053',
    category: 'regulation',
    title: '鉁?钀ㄥ皵鐡﹀鏁堝簲',
    desc: '鏇村鍥藉鑰冭檻灏嗘瘮鐗瑰竵浣滀负娉曞竵',
    choices: [
      { emoji: '馃殌', text: '鍔犱粨BTC', hint: '涓绘潈閲囩敤', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '馃挵', text: '闀挎湡鎸佹湁', hint: '閲岀▼纰?, isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '閿欏け琛屾儏', isCorrect: false, effect: { wealthPct: 0.2 } },
      { emoji: '馃搲', text: '鍙嶅悜鍋氱┖', hint: '鏂瑰悜閿欒', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '涓绘潈鍥藉閲囩敤姣旂壒甯佹槸鍘嗗彶鎬у埄濂斤紝搴旂Н鏋佸竷灞€'
  },
  {
    id: 'global_054',
    category: 'regulation',
    title: '馃摐 鎸栫熆绂佷护瑙ｉ櫎',
    desc: '鏌愬浗瑙ｉ櫎鍔犲瘑璐у竵鎸栫熆绂佷护锛屾杩庣熆浼佸洖娴?,
    choices: [
      { emoji: '馃殌', text: '涔板叆BTC', hint: '绠楀姏鎭㈠', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鍏虫敞鐭夸笟', hint: '鐩稿叧鏈轰細', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃搲', text: '鍋氱┖甯傚満', hint: '鏂瑰悜閿欒', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '鎸栫熆绂佷护瑙ｉ櫎鎭㈠甯傚満淇″績锛屽埄濂紹TC浠锋牸'
  },
  {
    id: 'global_055',
    category: 'regulation',
    title: '馃彌锔?DeFi鐩戠鏉ヨ',
    desc: '鐩戠鏈烘瀯灏咲eFi鍗忚绾冲叆鐩戠鑼冨洿',
    choices: [
      { emoji: '馃挵', text: '闄嶄綆鏁炲彛', hint: '瑙勯伩涓嶇‘瀹氭€?, isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '鏆傛椂鍥為伩', hint: '绛夊緟鏄庢湕', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '鏃犺鐩戠', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'DeFi鐩戠甯︽潵涓嶇‘瀹氭€э紝搴旈檷浣庢暈鍙ｇ瓑寰呮槑鏈?
  },
  {
    id: 'global_056',
    category: 'regulation',
    title: '馃搵 浜ゆ槗鎵€鐗岀収鍙戞斁',
    desc: '鐩戠鏈烘瀯寮€濮嬪彂鏀惧姞瀵嗚揣甯佷氦鏄撴墍鐗岀収',
    choices: [
      { emoji: '鉁?, text: '閫夋嫨鍚堣鎵€', hint: '瀹夊叏淇濋殰', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '琛屼笟姝ｈ鍖?, isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃毇', text: '鎶靛埗鐩戠', hint: '鏃犳祹浜庝簨', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '鐗岀収鍙戞斁鏍囧織琛屼笟姝ｈ鍖栵紝鍒╁ソ闀挎湡鍙戝睍'
  },
  {
    id: 'global_057',
    category: 'regulation',
    title: '馃毇 闅愮甯佷笅鏋?,
    desc: '澶氬浜ゆ槗鎵€鍥犵洃绠″帇鍔涗笅鏋堕殣绉佸竵',
    choices: [
      { emoji: '馃挵', text: '閬垮厤闅愮甯?, hint: '瑙勯伩椋庨櫓', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃搲', text: '鎻愬墠鍗栧嚭', hint: '鍙婃椂姝㈡崯', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃拵', text: '缁х画鎸佹湁', hint: '娴佸姩鎬ч闄?, isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃殌', text: '鎶勫簳涔板叆', hint: '椋庨櫓鏋佸ぇ', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '闅愮甯侀潰涓寸洃绠″帇鍔涳紝搴旀彁鍓嶈閬胯€岄潪鎶勫簳'
  },
  {
    id: 'global_058',
    category: 'regulation',
    title: '馃彌锔?鏈熻揣ETF琚嫆',
    desc: 'SEC鍐嶆鎷掔粷浠ュお鍧婃湡璐TF鐢宠',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨搴斿', hint: '鐭湡鍒╃┖', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '馃搲', text: '鏆傛椂鍥為伩', hint: '绛夊緟鏈轰細', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '姝绘墰涓嶅姩', hint: '鍙兘娣卞', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'ETF琚嫆鏄煭鏈熷埄绌猴紝浣嗕笉搴旇繃搴︽亹鎱?
  },
  {
    id: 'global_059',
    category: 'regulation',
    title: '馃摐 璺ㄥ鏀粯鍚堣',
    desc: '鐩戠鏈烘瀯鍏佽浣跨敤鍔犲瘑璐у竵杩涜璺ㄥ鏀粯',
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '瀹炵敤鍦烘櫙', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃挵', text: '闀挎湡鎸佹湁', hint: '搴旂敤钀藉湴', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '璺ㄥ鏀粯鍚堣鏄姞瀵嗚揣甯佸疄鐢ㄥ寲鐨勯噸瑕佽繘灞?
  },
  {
    id: 'global_060',
    category: 'regulation',
    title: '馃彌锔?澶鏁板瓧璐у竵',
    desc: '澶氬浗鍔犻€熸帹杩汣BDC鐮斿彂鍜岃瘯鐐?,
    choices: [
      { emoji: '馃搳', text: '鍏虫敞褰卞搷', hint: '绔炰簤涓庡悎浣?, isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '闀挎湡鐪嬪ソ', hint: '琛屼笟璁ゅ彲', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '杩囧害鍙嶅簲', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃毇', text: '鎶靛埗CBDC', hint: '鏃犳祹浜庝簨', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: 'CBDC鎺ㄨ繘鍙嶆槧鏁板瓧璐у竵琚富娴佽鍙紝闀挎湡鍒╁ソ琛屼笟'
  },
  {
    id: 'global_061',
    category: 'regulation',
    title: '馃搵 鍙嶆礂閽卞崌绾?,
    desc: 'FATF鏃呰瑙勫垯鍏ㄩ潰瀹炴柦锛屼氦鏄撴墍蹇呴』鍏变韩淇℃伅',
    choices: [
      { emoji: '鉁?, text: '閰嶅悎鍚堣', hint: '閬垮厤椋庨櫓', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '浣跨敤鍚堣鎵€', hint: '瀹夊叏淇濋殰', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃毇', text: '閫冮伩鐩戠', hint: '杩濇硶椋庨櫓', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃弮', text: '杞Щ骞冲彴', hint: '椋庨櫓杈冮珮', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '鍙嶆礂閽辫鍒欐槸鍥介檯鏍囧噯锛屽簲涓诲姩閰嶅悎鍚堣'
  },
  {
    id: 'global_062',
    category: 'regulation',
    title: '馃彌锔?璇佸埜浠ｅ竵鍖?,
    desc: '鐩戠鏈烘瀯鎵瑰噯璇佸埜浠ｅ竵鍖栬瘯鐐归」鐩?,
    choices: [
      { emoji: '馃殌', text: '鍏虫敞RWA', hint: '鏂版満浼?, isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃挵', text: '甯冨眬鐩稿叧', hint: '鎻愬墠鍑嗗', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘閿欒繃', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃毇', text: '鎷掔粷鍙備笌', hint: '閿欏け鏈轰細', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '璇佸埜浠ｅ竵鍖栨槸RWA璧涢亾鐨勯噸瑕佽繘灞曪紝搴旀彁鍓嶅竷灞€'
  },
  {
    id: 'global_063',
    category: 'regulation',
    title: '馃摐 閬椾骇缁ф壙鏂拌',
    desc: '娉曞緥鏄庣‘鍔犲瘑璐у竵鍙綔涓洪仐浜х户鎵?,
    choices: [
      { emoji: '鉁?, text: '鍋氬ソ瑙勫垝', hint: '闀挎湡鑰冭檻', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '鏇存柊閬楀槺', hint: '淇濇姢璧勪骇', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '鈴?, text: '鏆傛椂涓嶇', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '馃毇', text: '涓嶆効鑰冭檻', hint: '涓嶈礋璐ｄ换', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '閬椾骇鏂拌淇濇姢鍔犲瘑璧勪骇浼犳壙锛屽簲鍋氬ソ鐩稿簲瑙勫垝'
  },

  // ========== ONCHAIN (閾句笂鏁版嵁) 22涓?==========
  {
    id: 'global_064',
    category: 'onchain',
    title: '馃悑 宸ㄩ哺澶ч杞处',
    desc: '鏌愬法椴稿湴鍧€鍚戜氦鏄撴墍杞叆10涓囨灇BTC',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨搴斿', hint: '鎶涘帇棰勮', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '鏆傛椂鍥為伩', hint: '绛夊緟鏄庢湕', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '鏃犺淇″彿', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '缁х画鍔犱粨', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '宸ㄩ哺鍚戜氦鏄撴墍杞处寰€寰€鏄崠鍑轰俊鍙凤紝搴旀彁鍓嶅噺浠撳簲瀵?
  },
  {
    id: 'global_065',
    category: 'onchain',
    title: '馃拵 宸ㄩ哺鎸佺画鍚哥',
    desc: '闀挎湡鎸佹湁鑰呭湴鍧€鎸佺画澧炲姞锛屼氦鏄撴墍浣欓涓嬮檷',
    choices: [
      { emoji: '馃殌', text: '璺熼殢涔板叆', hint: '渚涘簲鍑忓皯', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃挵', text: '鍔犱粨鎸佹湁', hint: '鐗涘競淇″彿', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '宸ㄩ哺鍚哥琛ㄦ槑渚涘簲鏀剁揣锛屾槸鐪嬫定淇″彿'
  },
  {
    id: 'global_066',
    category: 'onchain',
    title: '馃摛 浜ゆ槗鎵€鍑€娴佸嚭',
    desc: '涓绘祦浜ゆ槗鎵€BTC鎸佺画澶ч鍑€娴佸嚭',
    choices: [
      { emoji: '馃拵', text: '鍧氬畾鎸佹湁', hint: '鎶涘帇鍑忚交', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '渚涘簲鍑忓皯', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '璇垽淇″彿', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } }
    ],
    explanation: '浜ゆ槗鎵€鍑€娴佸嚭璇存槑鎶曡祫鑰呭€惧悜浜庨暱鏈熸寔鏈夛紝鍒╁ソ浠锋牸'
  },
  {
    id: 'global_067',
    category: 'onchain',
    title: '馃摜 浜ゆ槗鎵€鍑€娴佸叆',
    desc: '澶ч噺BTC浠庨挶鍖呮祦鍏ヤ氦鏄撴墍锛屾姏鍘嬪鍔?,
    choices: [
      { emoji: '馃挵', text: '鍑忎粨搴斿', hint: '鎶涘帇棰勮', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '鏆傛椂瑙傛湜', hint: '绛夊緟浼佺ǔ', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '閫嗗娍鎶勫簳', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃拵', text: '鏃犺鏁版嵁', hint: '鐩茬洰鎸佹湁', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '浜ゆ槗鎵€鍑€娴佸叆寰€寰€鏄崠鍑哄墠鍏嗭紝搴旈檷浣庝粨浣嶅簲瀵?
  },
  {
    id: 'global_068',
    category: 'onchain',
    title: '鉀忥笍 鐭垮伐澶ч噺鎶涘敭',
    desc: '鐭垮伐閽卞寘鍚戜氦鏄撴墍杞叆澶ч噺BTC锛屾姏鍞帇鍔涘鍔?,
    choices: [
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '鎶涘帇澧炲姞', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '绛夊緟鍥炶皟', hint: '鏇村ソ鐨勪环', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃拵', text: '姝绘墰涓嶅姩', hint: '鍙兘娣卞', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '鐭垮伐鎶涘敭澧炲姞甯傚満渚涚粰鍘嬪姏锛屽簲鏆傛椂鍥為伩'
  },
  {
    id: 'global_069',
    category: 'onchain',
    title: '馃挵 鐭垮伐鎸佸竵涓嶅崠',
    desc: '鐭垮伐鍦板潃浣欓鍒涙柊楂橈紝閫夋嫨鎸佹湁鑰岄潪鍑哄敭',
    choices: [
      { emoji: '馃殌', text: '璺熼殢涔板叆', hint: '鐭垮伐鐪嬫定', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃拵', text: '鍧氬畾鎸佹湁', hint: '渚涘簲鍑忓皯', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃弮', text: '鎻愬墠绂诲満', hint: '杩囨棭姝㈢泩', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '鐭垮伐鎸佸竵涓嶅崠琛ㄦ槑鐪嬫定鎯呯华锛屼緵搴斿噺灏戝埄濂戒环鏍?
  },
  {
    id: 'global_070',
    category: 'onchain',
    title: '馃搳 TVL蹇€熷闀?,
    desc: '鏌怐eFi鍗忚TVL涓€鍛ㄥ唴澧為暱300%锛岃祫閲戝ぇ閲忔秾鍏?,
    choices: [
      { emoji: '馃憫', text: '灏忎粨鍙備笌', hint: '鎺у埗浠撲綅', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搱', text: '鍏虫敞鐢熸€?, hint: '鏈轰細鍑虹幇', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃挵', text: '閲嶄粨姊搱', hint: '椋庨櫓宸ㄥぇ', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃毇', text: '涓嶅弬涓?, hint: '鍙兘閿欒繃', isCorrect: false, effect: { wealthPct: -0.1 } }
    ],
    explanation: 'TVL蹇€熷闀垮弽鏄犵儹搴︼紝浣嗗簲閬垮厤閲嶄粨杩介珮'
  },
  {
    id: 'global_071',
    category: 'onchain',
    title: '馃捀 TVL鎸佺画娴佸嚭',
    desc: '涓绘祦DeFi鍗忚TVL鎸佺画涓嬮檷锛岃祫閲戞挙绂?,
    choices: [
      { emoji: '馃挵', text: '鎾ゅ嚭璧勯噾', hint: '瑙勯伩椋庨櫓', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '闄嶄綆鏁炲彛', hint: '璋ㄦ厧搴斿', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃幇', text: '鎶勫簳TVL', hint: '鏃舵満鏈埌', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃拵', text: '鏃犺娴佸嚭', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'TVL娴佸嚭琛ㄦ槑淇″績涓嬮檷锛屽簲鍙婃椂鎾ゅ嚭璧勯噾'
  },
  {
    id: 'global_072',
    category: 'onchain',
    title: '馃敟 gas璐规毚娑?,
    desc: '浠ュお鍧婄綉缁滄嫢鍫碉紝gas璐归鍗囪嚦500gwei',
    choices: [
      { emoji: '鈴革笍', text: '鏆傚仠鎿嶄綔', hint: '绛夊緟鍥炶惤', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '浣跨敤L2', hint: '闄嶄綆鎴愭湰', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃拵', text: '纭墰gas', hint: '鎴愭湰杩囬珮', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃殌', text: '缃戠粶娲昏穬', hint: '鍔犱粨ETH', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '楂榞as璐规椂鏆傚仠鎿嶄綔鎴栦娇鐢↙2鏄槑鏅洪€夋嫨'
  },
  {
    id: 'global_073',
    category: 'onchain',
    title: '馃搲 娲昏穬鍦板潃涓嬮檷',
    desc: '閾句笂娲昏穬鍦板潃鏁板垱杩戞湡鏂颁綆锛岀綉缁滄椿璺冨害闄嶄綆',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨瑙傛湜', hint: '鐑害涓嬮檷', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃搳', text: '鍏虫敞瓒嬪娍', hint: '绛夊緟鍙嶈浆', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃殌', text: '鎶勫簳涔板叆', hint: '鏃舵満鏈埌', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃拵', text: '缁х画閲嶄粨', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '娲昏穬鍦板潃涓嬮檷琛ㄦ槑鐢ㄦ埛娴佸け锛屽簲闄嶄綆浠撲綅'
  },
  {
    id: 'global_074',
    category: 'onchain',
    title: '馃搱 鏂板湴鍧€婵€澧?,
    desc: '閾句笂鏂板鍦板潃鏁板垱鍘嗗彶鏂伴珮锛屽ぇ閲忔柊鐢ㄦ埛鍏ュ満',
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '澧為噺璧勯噾', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃挵', text: '璺熼殢瓒嬪娍', hint: '鐗涘競淇″彿', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃弮', text: '鎻愬墠绂诲満', hint: '杩囨棭姝㈢泩', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '鏂板湴鍧€澧為暱琛ㄦ槑鏂拌祫閲戝叆鍦猴紝鏄湅娑ㄤ俊鍙?
  },
  {
    id: 'global_075',
    category: 'onchain',
    title: '馃拵 闀挎湡鎸佹湁鑰呭鍔?,
    desc: '鎸佹湁瓒呰繃1骞寸殑鍦板潃姣斾緥鍒涙柊楂橈紝鍥ゅ竵鎯呯华娴撳帤',
    choices: [
      { emoji: '馃拵', text: '璺熼殢鎸佹湁', hint: '闀挎湡鐪嬫定', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '渚涘簲鍑忓皯', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '闀挎湡鎸佹湁鑰呭鍔犺〃鏄庡競鍦烘垚鐔燂紝渚涘簲鍑忓皯鍒╁ソ浠锋牸'
  },
  {
    id: 'global_076',
    category: 'onchain',
    title: '馃捀 鐭湡鎸佹湁鑰呮縺澧?,
    desc: '鎸佹湁灏忎簬1涓湀鐨勫湴鍧€姣斾緥蹇€熶笂鍗囷紝鎶曟満姘涘洿娴撳帤',
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '钀借涓哄畨', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '闄嶄綆浠撲綅', hint: '璋ㄦ厧搴斿', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '灞遍《绔欏矖', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃拵', text: '鏃犺鏁版嵁', hint: '鐩茬洰涔愯', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '鐭湡鎸佹湁鑰呮縺澧炲線寰€鏄樁娈垫€ч《閮ㄤ俊鍙凤紝搴旀鐩?
  },
  {
    id: 'global_077',
    category: 'onchain',
    title: '馃寠 澶ч娓呯畻鍙戠敓',
    desc: 'DeFi鍗忚鍙戠敓澶ч娓呯畻锛岄摼涓婃竻绠楅噺婵€澧?,
    choices: [
      { emoji: '馃洅', text: '鎶勫簳涔板叆', hint: '鎹′究瀹?, isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈴?, text: '绛夊緟浼佺ǔ', hint: '閬垮厤鎺ュ垁', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '搴曢儴鍓茶倝', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '鏃犺娓呯畻', hint: '鍙兘缁х画璺?, isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '澶ч娓呯畻鍚庡線寰€鏄煭鏈熷簳閮紝鍙皬浠撲綅鎶勫簳'
  },
  {
    id: 'global_078',
    category: 'onchain',
    title: '馃敟 閿€姣侀噺鍒涙柊楂?,
    desc: '浠ｅ竵閿€姣侀噺鍒涘巻鍙叉柊楂橈紝閫氱缉鍔犻€?,
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '渚涘簲鍑忓皯', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃挵', text: '闀挎湡鎸佹湁', hint: '閫氱缉鍒╁ソ', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '閿€姣佸姞閫熸剰鍛崇潃渚涘簲鍑忓皯锛屽浠锋牸褰㈡垚鏀拺'
  },
  {
    id: 'global_079',
    category: 'onchain',
    title: '馃拵 璐ㄦ娂鐜囧垱鏂伴珮',
    desc: '澶ч噺浠ｅ竵琚川鎶硷紝娴侀€氶噺澶у箙鍑忓皯',
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '渚涘簲绱у紶', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鍙備笌璐ㄦ娂', hint: '璧氬彇鏀剁泭', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '閿欏け鏈轰細', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃弮', text: '鎻愬墠鍗栧嚭', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '楂樿川鎶肩巼鍑忓皯娴侀€氫緵搴旓紝鍒╁ソ浠锋牸涓斿彲璧氬彇璐ㄦ娂鏀剁泭'
  },
  {
    id: 'global_080',
    category: 'onchain',
    title: '馃搲 璐ㄦ娂瑙ｉ攣娼?,
    desc: '澶ч噺璐ㄦ娂浠ｅ竵鍗冲皢瑙ｉ攣锛屾姏鍘嬮鏈熷鍔?,
    choices: [
      { emoji: '馃挵', text: '鎻愬墠鍑忎粨', hint: '瑙勯伩鎶涘帇', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '鏆傛椂鍥為伩', hint: '绛夊緟娑堝寲', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '閫嗗娍鎶勫簳', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃拵', text: '鏃犺瑙ｉ攣', hint: '鍙兘琚', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '瑙ｉ攣娼鍔犳姏鍘嬶紝搴旀彁鍓嶅噺浠撹閬?
  },
  {
    id: 'global_081',
    category: 'onchain',
    title: '馃悑 鑱槑閽辨祦鍏?,
    desc: '鏍囪涓鸿仾鏄庨挶鐨勫湴鍧€澶ч噺涔板叆鏌愪唬甯?,
    choices: [
      { emoji: '馃殌', text: '璺熼殢涔板叆', hint: '璺熷簞绛栫暐', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃憖', text: '鍏虫敞鐮旂┒', hint: '瀛︿範鏈轰細', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃毇', text: '涓嶈窡鑱槑閽?, hint: '閿欏け鏈轰細', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '鑱槑閽卞姩鍚戝€煎緱鍏虫敞锛屽彲浣滀负鍙傝€冧絾闇€鐙珛鍒ゆ柇'
  },
  {
    id: 'global_082',
    category: 'onchain',
    title: '馃捀 鑱槑閽卞嚭閫?,
    desc: '鏍囪涓鸿仾鏄庨挶鐨勫湴鍧€澶ч噺鍗栧嚭鎸佷粨',
    choices: [
      { emoji: '馃挵', text: '璺熼殢鍑忎粨', hint: '瑙勯伩璋冩暣', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '闄嶄綆鏁炲彛', hint: '璋ㄦ厧搴斿', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '閫嗗娍鍔犱粨', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '鏃犺淇″彿', hint: '鐩茬洰鎸佹湁', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '鑱槑閽卞嚭閫冨線寰€鏄皟鏁翠俊鍙凤紝搴旈檷浣庝粨浣?
  },
  {
    id: 'global_083',
    category: 'onchain',
    title: '馃搳 绛圭爜鍒嗗竷闆嗕腑',
    desc: '閾句笂鏁版嵁鏄剧ず绛圭爜鍦ㄤ綆浠峰尯闂撮珮搴﹂泦涓?,
    choices: [
      { emoji: '馃拵', text: '鍧氬畾鎸佹湁', hint: '鏀拺寮哄姴', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '鎴愭湰浼樺娍', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃弮', text: '鎻愬墠绂诲満', hint: '杩囨棭姝㈢泩', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '绛圭爜闆嗕腑琛ㄦ槑涓嬫柟鏀拺寮哄姴锛岀户缁寔鏈夋垨鍔犱粨'
  },
  {
    id: 'global_084',
    category: 'onchain',
    title: '馃幇 绛圭爜鍒嗗竷鍒嗘暎',
    desc: '閾句笂鏁版嵁鏄剧ず绛圭爜鍦ㄩ珮浣嶅垎鏁ｏ紝鎹㈡墜鐜囬珮',
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '娲惧彂淇″彿', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '闄嶄綆浠撲綅', hint: '璋ㄦ厧搴斿', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '灞遍《绔欏矖', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃拵', text: '鏃犺鏁版嵁', hint: '鐩茬洰鎸佹湁', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '绛圭爜楂樹綅鍒嗘暎寰€寰€鏄淳鍙戜俊鍙凤紝搴旈€愭姝㈢泩'
  },
  {
    id: 'global_085',
    category: 'onchain',
    title: '鉀忥笍 绠楀姏鍒涙柊楂?,
    desc: '姣旂壒甯佸叏缃戠畻鍔涘垱鍘嗗彶鏂伴珮锛岀綉缁滃畨鍏ㄥ寮?,
    choices: [
      { emoji: '馃拵', text: '鍧氬畾鎸佹湁', hint: '缃戠粶鏇村畨鍏?, isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃殌', text: '鍔犱粨BTC', hint: '淇″績鎸囨爣', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴?, text: '瑙傛湜涓嶅姩', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '绠楀姏鍒涙柊楂樿〃鏄庣熆宸ョ湅濂界綉缁滈暱鏈熶环鍊硷紝鍒╁ソBTC'
  },

  // ========== TECHNICAL (鎶€鏈寚鏍? 21涓?==========
  {
    id: 'global_086',
    category: 'technical',
    title: '馃搱 榛勯噾浜ゅ弶褰㈡垚',
    desc: '50鏃ュ潎绾垮悜涓婄獊鐮?00鏃ュ潎绾匡紝褰㈡垚閲戝弶',
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '瓒嬪娍杞', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃挵', text: '璺熼殢瓒嬪娍', hint: '澶氬ご淇″彿', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃搲', text: '鍙嶅悜鍋氱┖', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '閲戝弶鏄粡鍏哥湅娑ㄤ俊鍙凤紝琛ㄦ槑鐭湡瓒嬪娍寮轰簬闀挎湡瓒嬪娍'
  },
  {
    id: 'global_087',
    category: 'technical',
    title: '馃搲 姝讳骸浜ゅ弶褰㈡垚',
    desc: '50鏃ュ潎绾垮悜涓嬬獊鐮?00鏃ュ潎绾匡紝褰㈡垚姝诲弶',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '瓒嬪娍杞┖', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '闄嶄綆浠撲綅', hint: '绌哄ご淇″彿', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '閫嗗娍鎶勫簳', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '鏃犺淇″彿', hint: '鐩茬洰鎸佹湁', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '姝诲弶鏄粡鍏哥湅璺屼俊鍙凤紝搴斿強鏃跺噺浠撹閬块闄?
  },
  {
    id: 'global_088',
    category: 'technical',
    title: '馃敽 绐佺牬鍏抽敭闃诲姏',
    desc: 'BTC鏀鹃噺绐佺牬閲嶈闃诲姏浣嶏紝鎴愪氦閲忛厤鍚?,
    choices: [
      { emoji: '馃殌', text: '杩芥定涔板叆', hint: '绐佺牬鏈夋晥', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鍔犱粨鎸佹湁', hint: '瓒嬪娍鍚戜笂', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '绛夊緟鍥炶皟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃幆', text: '鍙嶅悜鍋氱┖', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '鏀鹃噺绐佺牬闃诲姏浣嶆槸寮哄娍淇″彿锛屽彲椤哄娍鍔犱粨'
  },
  {
    id: 'global_089',
    category: 'technical',
    title: '馃敾 璺岀牬鍏抽敭鏀拺',
    desc: 'BTC鏀鹃噺璺岀牬閲嶈鏀拺浣嶏紝绌哄ご鍗犱紭',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨姝㈡崯', hint: '鏀拺澶辨晥', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃搲', text: '鏆傛椂鍥為伩', hint: '瓒嬪娍鍚戜笅', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '鎶勫簳涔板叆', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '姝绘墰涓嶅姩', hint: '鍙兘娣卞', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '璺岀牬鍏抽敭鏀拺鏄急鍔夸俊鍙凤紝搴斿噺浠撴鎹?
  },
  {
    id: 'global_090',
    category: 'technical',
    title: '馃搳 MACD閲戝弶',
    desc: 'MACD鏌辩姸绾跨敱璐熻浆姝ｏ紝蹇嚎涓婄┛鎱㈢嚎',
    choices: [
      { emoji: '馃殌', text: '涔板叆鍔犱粨', hint: '鍔ㄨ兘杞己', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃挵', text: '璺熼殢瓒嬪娍', hint: '澶氬ご淇″彿', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃搲', text: '鍙嶅悜鍋氱┖', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: 'MACD閲戝弶琛ㄦ槑涓婃定鍔ㄨ兘澧炲己锛屾槸涔板叆淇″彿'
  },
  {
    id: 'global_091',
    category: 'technical',
    title: '馃搲 MACD姝诲弶',
    desc: 'MACD鏌辩姸绾跨敱姝ｈ浆璐燂紝蹇嚎涓嬬┛鎱㈢嚎',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨閬块櫓', hint: '鍔ㄨ兘杞急', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '闄嶄綆浠撲綅', hint: '绌哄ご淇″彿', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃拵', text: '鏃犺淇″彿', hint: '鐩茬洰鎸佹湁', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'MACD姝诲弶琛ㄦ槑涓嬭穼鍔ㄨ兘澧炲己锛屽簲鍑忎粨閬块櫓'
  },
  {
    id: 'global_092',
    category: 'technical',
    title: '鈿?RSI瓒呬拱',
    desc: 'RSI鎸囨爣瓒呰繃80锛岃繘鍏ヤ弗閲嶈秴涔板尯鍩?,
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '瓒呬拱鍥炶皟', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃搲', text: '闄嶄綆浠撲綅', hint: '璀︽儠鍥炶皟', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃殌', text: '缁х画杩芥定', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃拵', text: '鏃犺鎸囨爣', hint: '鐩茬洰涔愯', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: 'RSI瓒呬拱琛ㄦ槑涓婃定杩囧揩锛屽簲鍒嗘壒姝㈢泩璀︽儠鍥炶皟'
  },
  {
    id: 'global_093',
    category: 'technical',
    title: '馃挧 RSI瓒呭崠',
    desc: 'RSI鎸囨爣浣庝簬20锛岃繘鍏ヤ弗閲嶈秴鍗栧尯鍩?,
    choices: [
      { emoji: '馃洅', text: '鎶勫簳涔板叆', hint: '瓒呭崠鍙嶅脊', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃挵', text: '鍔犱粨甯冨眬', hint: '鏈轰細鍑虹幇', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴?, text: '绛夊緟纭', hint: '鍙兘閿欒繃', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '搴曢儴鍓茶倝', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: 'RSI瓒呭崠琛ㄦ槑涓嬭穼杩囧害锛屾槸鎶勫簳甯冨眬鏈轰細'
  },
  {
    id: 'global_094',
    category: 'technical',
    title: '馃搳 甯冩灄甯︽敹绐?,
    desc: '甯冩灄甯︽敹鍙ｏ紝娉㈠姩鐜囬檷鑷充綆浣?,
    choices: [
      { emoji: '鈴?, text: '绛夊緟绐佺牬', hint: '鍙樼洏鍓嶅厗', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '鍑忎粨瑙傛湜', hint: '鏂瑰悜涓嶆槑', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃幇', text: '鎻愬墠鍩嬩紡', hint: '璧屽崥琛屼负', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '馃殌', text: '婊′粨绛夊緟', hint: '璧勯噾鏁堢巼浣?, isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '甯冩灄甯︽敹绐勯绀哄嵆灏嗗彉鐩橈紝搴旂瓑寰呮柟鍚戞槑纭?
  },
  {
    id: 'global_095',
    category: 'technical',
    title: '馃搱 甯冩灄甯︾獊鐮翠笂杞?,
    desc: '浠锋牸绐佺牬甯冩灄甯︿笂杞紝寮哄娍涓婃定',
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '璀︽儠鍥炶惤', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈴?, text: '瑙傚療璧板娍', hint: '閬垮厤杩介珮', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '杩芥定涔板叆', hint: '绔欏矖椋庨櫓', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃搲', text: '绔嬪嵆鍋氱┖', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '绐佺牬涓婅建琛ㄦ槑寮哄娍锛屼絾涔熷彲鑳介殢鏃跺洖钀斤紝搴斿垎鎵规鐩?
  },
  {
    id: 'global_096',
    category: 'technical',
    title: '馃搲 甯冩灄甯﹁穼鐮翠笅杞?,
    desc: '浠锋牸璺岀牬甯冩灄甯︿笅杞紝寮卞娍涓嬭穼',
    choices: [
      { emoji: '馃洅', text: '灏忎粨鎶勫簳', hint: '瓒呰穼鍙嶅脊', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '鈴?, text: '绛夊緟浼佺ǔ', hint: '閬垮厤鎺ュ垁', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃敧', text: '鎭愭厡鍓茶倝', hint: '搴曢儴鍗栧嚭', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃搲', text: '杩界┖鍋氱┖', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '璺岀牬涓嬭建琛ㄦ槑瓒呭崠锛屽彲鑳藉弽寮逛絾闇€璋ㄦ厧鎶勫簳'
  },
  {
    id: 'global_097',
    category: 'technical',
    title: '馃攧 鍙屽簳褰㈡€佸舰鎴?,
    desc: '浠锋牸褰㈡垚W鍨嬪弻搴曪紝棰堢嚎浣嶈绐佺牬',
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '搴曢儴纭', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃挵', text: '璺熼殢绐佺牬', hint: '瓒嬪娍鍙嶈浆', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '绛夊緟鍥炶皟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃搲', text: '缁х画鐪嬬┖', hint: '璇垽瓒嬪娍', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '鍙屽簳绐佺牬鏄粡鍏稿弽杞舰鎬侊紝鍙Н鏋佸姞浠?
  },
  {
    id: 'global_098',
    category: 'technical',
    title: '馃搳 澶磋偐椤跺舰鎴?,
    desc: '浠锋牸褰㈡垚澶磋偐椤跺舰鎬侊紝棰堢嚎琚穼鐮?,
    choices: [
      { emoji: '馃挵', text: '鍑忎粨姝㈡崯', hint: '椤堕儴纭', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃搲', text: '鏆傛椂鍥為伩', hint: '瓒嬪娍杞┖', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃殌', text: '鎶勫簳涔板叆', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃拵', text: '姝绘墰涓嶅姩', hint: '鍙兘娣卞', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '澶磋偐椤舵槸缁忓吀椤堕儴褰㈡€侊紝璺岀牬棰堢嚎搴斿強鏃舵鎹?
  },
  {
    id: 'global_099',
    category: 'technical',
    title: '馃搱 閲忎环榻愬崌',
    desc: '浠锋牸涓婃定浼撮殢鎴愪氦閲忔斁澶э紝閲忎环閰嶅悎鑹ソ',
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '娑ㄥ娍鍋ュ悍', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃挵', text: '鍧氬畾鎸佹湁', hint: '瓒嬪娍鍚戝ソ', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃弮', text: '鎻愬墠绂诲満', hint: '杩囨棭姝㈢泩', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '閲忎环榻愬崌鏄仴搴蜂笂娑ㄤ俊鍙凤紝鍙户缁寔鑲℃垨鍔犱粨'
  },
  {
    id: 'global_100',
    category: 'technical',
    title: '馃搲 閲忎环鑳岀',
    desc: '浠锋牸鏂伴珮浣嗘垚浜ら噺钀庣缉锛岄噺浠疯儗绂?,
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '鑳岀璀︾ず', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈿狅笍', text: '璀︽儠鍥炶皟', hint: '涓婃定涔忓姏', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '鏃犺鑳岀', hint: '鐩茬洰涔愯', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '閲忎环鑳岀鏄绀轰俊鍙凤紝搴斿垎鎵规鐩堣鎯曞洖璋?
  },
  {
    id: 'global_101',
    category: 'technical',
    title: '馃搳 妯洏鏁寸悊绐佺牬',
    desc: '闀挎湡妯洏鍚庢斁閲忓悜涓婄獊鐮存暣鐞嗗尯闂?,
    choices: [
      { emoji: '馃殌', text: '杩芥定涔板叆', hint: '鍚姩淇″彿', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃挵', text: '鍔犱粨鎸佹湁', hint: '瓒嬪娍鍚姩', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '鈴?, text: '绛夊緟鍥炶皟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.4 } },
      { emoji: '馃搲', text: '鍙嶅悜鍋氱┖', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '妯洏绐佺牬鏄惎鍔ㄤ俊鍙凤紝鏀鹃噺纭鍚庡彲绉瀬璺熻繘'
  },
  {
    id: 'global_102',
    category: 'technical',
    title: '馃挧 鏀鹃噺涓嬭穼',
    desc: '浠锋牸澶ц穼浼撮殢鎴愪氦閲忔毚澧烇紝鎭愭厡鐩樻秾鍑?,
    choices: [
      { emoji: '鈴?, text: '绛夊緟浼佺ǔ', hint: '閬垮厤鎺ュ垁', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃挵', text: '鍑忎粨瑙傛湜', hint: '鎺у埗椋庨櫓', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃殌', text: '绔嬪嵆鎶勫簳', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃敧', text: '鎭愭厡鍓茶倝', hint: '搴曢儴鍗栧嚭', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '鏀鹃噺涓嬭穼琛ㄦ槑鎭愭厡鐩樻秾鍑猴紝搴旂瓑寰呬紒绋冲啀鑰冭檻鍏ュ満'
  },
  {
    id: 'global_103',
    category: 'technical',
    title: '馃搱 涓婂崌瓒嬪娍绾挎敮鎾?,
    desc: '浠锋牸鍦ㄤ笂鍗囪秼鍔跨嚎鑾峰緱鏀拺骞跺弽寮?,
    choices: [
      { emoji: '馃殌', text: '鍔犱粨涔板叆', hint: '鏀拺鏈夋晥', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鍧氬畾鎸佹湁', hint: '瓒嬪娍瀹屽ソ', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈴?, text: '瑙傛湜绛夊緟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.3 } },
      { emoji: '馃敧', text: '姝㈡崯绂诲満', hint: '琚礂鍑哄幓', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '瓒嬪娍绾挎敮鎾戞湁鏁堣〃鏄庝笂鍗囪秼鍔垮畬濂斤紝鍙姞浠撴垨鎸佹湁'
  },
  {
    id: 'global_104',
    category: 'technical',
    title: '馃敾 涓嬮檷瓒嬪娍绾垮帇鍒?,
    desc: '浠锋牸鍦ㄤ笅闄嶈秼鍔跨嚎鍙楅樆鍥炶惤',
    choices: [
      { emoji: '馃挵', text: '鍑忎粨瑙傛湜', hint: '鍘嬪姏鏈夋晥', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '鏆傛椂鍥為伩', hint: '瓒嬪娍鍚戜笅', isCorrect: true, effect: { wealthPct: 1.3 } },
      { emoji: '馃殌', text: '纭棷绐佺牬', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃拵', text: '鏃犺鍘嬪姏', hint: '鐩茬洰鎸佹湁', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: '涓嬮檷瓒嬪娍绾垮帇鍒舵湁鏁堬紝搴斿噺浠撶瓑寰呯獊鐮寸‘璁?
  },
  {
    id: 'global_105',
    category: 'technical',
    title: '馃搳 澶氭椂闂村懆鏈熷叡鎸?,
    desc: '鏃ョ嚎銆佸懆绾裤€佹湀绾垮潎鏄剧ず澶氬ご鎺掑垪',
    choices: [
      { emoji: '馃殌', text: '閲嶄粨涔板叆', hint: '鍏辨尟寮哄娍', isCorrect: true, effect: { wealthPct: 2.8 } },
      { emoji: '馃挵', text: '鍧氬畾鎸佹湁', hint: '澶ц秼鍔垮ソ', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '鈴?, text: '绛夊緟鍥炶皟', hint: '鍙兘韪忕┖', isCorrect: false, effect: { wealthPct: 0.5 } },
      { emoji: '馃弮', text: '鑾峰埄浜嗙粨', hint: '杩囨棭绂诲満', isCorrect: false, effect: { wealthPct: -0.4 } }
    ],
    explanation: '澶氬懆鏈熷叡鎸槸鏈€寮鸿秼鍔夸俊鍙凤紝鍙噸浠撳弬涓?
  },
  {
    id: 'global_106',
    category: 'technical',
    title: '鈿狅笍 澶氭椂闂村懆鏈熻儗绂?,
    desc: '鏃ョ嚎涓婃定浣嗗懆绾挎樉绀洪《鑳岀',
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '璀︽儠鍥炶皟', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈿狅笍', text: '闄嶄綆浠撲綅', hint: '澶у懆鏈熼闄?, isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃拵', text: '鏃犺鑳岀', hint: '鐩茬洰涔愯', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '澶у懆鏈熻儗绂昏绀轰腑闀挎湡椋庨櫓锛屽簲鍒嗘壒姝㈢泩'
  },

  // ========== SECURITY (瀹夊叏浜嬩欢) 22涓?==========
  {
    id: 'global_107',
    category: 'security',
    title: '馃敁 浜ゆ槗鎵€琚粦',
    desc: '鏌愬ぇ鍨嬩氦鏄撴墍閬粦瀹㈡敾鍑伙紝澶ч噺璧勪骇琚洍',
    choices: [
      { emoji: '馃弮', text: '绔嬪嵆鎻愬竵', hint: '淇濇姢璧勪骇', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鎾ゅ嚭璧勯噾', hint: '瀹夊叏绗竴', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃槓', text: '瑙傛湜绛夊緟', hint: '鍙兘鎹熷け', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃搲', text: '鎶勫簳骞冲彴甯?, hint: '楂橀闄?, isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '浜ゆ槗鎵€琚粦搴旂珛鍗虫彁甯佽嚜淇濓紝鍒囧嬁璇曞浘鎶勫簳'
  },
  {
    id: 'global_108',
    category: 'security',
    title: '馃悰 鍚堢害婕忔礊鏇濆厜',
    desc: '鏌怐eFi鍗忚鍙戠幇閲嶅ぇ瀹夊叏婕忔礊锛岃祫閲戦潰涓撮闄?,
    choices: [
      { emoji: '馃弮', text: '绱ф€ユ挙绂?, hint: '淇濆懡瑕佺揣', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鎾ゅ嚭璧勯噾', hint: '閬垮厤鎹熷け', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃槓', text: '瑙傛湜绛夊緟', hint: '鍙兘褰掗浂', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃拵', text: '鐩镐俊鍥㈤槦', hint: '璧屽崥琛屼负', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '鍚堢害婕忔礊鍙兘瀵艰嚧璧勯噾鎹熷け锛屽簲绔嬪嵆鎾ょ'
  },
  {
    id: 'global_109',
    category: 'security',
    title: '馃帲 閽撻奔缃戠珯娉涙互',
    desc: '鍑虹幇澶ч噺浠垮啋浜ゆ槗鎵€鐨勯挀楸肩綉绔欙紝鐢ㄦ埛璧勪骇鍙楀▉鑳?,
    choices: [
      { emoji: '馃敀', text: '鏍稿缃戝潃', hint: '闃茶寖閽撻奔', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '鉁?, text: '鍚敤2FA', hint: '澧炲己瀹夊叏', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃槓', text: '鏃犻渶鍦ㄦ剰', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃摟', text: '鐐瑰嚮閾炬帴', hint: '鍙兘琚洍', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '閽撻奔鏀诲嚮棰戝彂锛屽簲浠旂粏鏍稿缃戝潃骞跺惎鐢ㄥ弻閲嶉獙璇?
  },
  {
    id: 'global_110',
    category: 'security',
    title: '馃摫 閽卞寘绉侀挜娉勯湶',
    desc: '鏌愮儹閽卞寘杞欢琚彂鐜板瓨鍦ㄧ閽ユ硠闇查闄?,
    choices: [
      { emoji: '馃攽', text: '绔嬪嵆杞Щ', hint: '淇濇姢璧勪骇', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鎹㈢敤纭欢', hint: '鍐峰瓨鍌?, isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃槓', text: '缁х画浣跨敤', hint: '鍐掗櫓琛屼负', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '鈴?, text: '绛夊緟鏇存柊', hint: '鍙兘琚洍', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '绉侀挜娉勯湶椋庨櫓搴旂珛鍗宠浆绉昏祫浜у埌瀹夊叏閽卞寘'
  },
  {
    id: 'global_111',
    category: 'security',
    title: '馃攼 绉侀挜澶囦唤鎻愰啋',
    desc: '浣犵殑纭欢閽卞寘闀挎湡浣跨敤锛屾槸鍚﹀浠藉姪璁拌瘝',
    choices: [
      { emoji: '鉁?, text: '妫€鏌ュ浠?, hint: '瀹夊叏涔犳儻', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃敀', text: '澶氶噸澶囦唤', hint: '鍒嗘暎椋庨櫓', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃槓', text: '娌℃湁澶囦唤', hint: '鏋佸ぇ椋庨櫓', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃捇', text: '瀛樼數鑴戜笂', hint: '瀹规槗琚洍', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '鍔╄璇嶅浠芥槸璧勪骇瀹夊叏鐨勫熀纭€锛屽簲澶氶噸澶囦唤'
  },
  {
    id: 'global_112',
    category: 'security',
    title: '馃毃 妗ユ帴鍗忚琚粦',
    desc: '鏌愯法閾炬ˉ鍗忚琚粦瀹㈡敾鍑伙紝鏁颁嚎缇庡厓琚洍',
    choices: [
      { emoji: '馃弮', text: '閬垮厤浣跨敤', hint: '杩滅椋庨櫓', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃挵', text: '鎾ゅ嚭璧勯噾', hint: '瀹夊叏绗竴', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃槓', text: '缁х画浣跨敤', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃搲', text: '鎶勫簳浠ｅ竵', hint: '楂橀闄?, isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '璺ㄩ摼妗ユ槸鏀诲嚮閲嶇伨鍖猴紝琚粦鍚庡簲閬垮厤浣跨敤'
  },
  {
    id: 'global_113',
    category: 'security',
    title: '馃幁 绀句氦宸ョ▼鏀诲嚮',
    desc: '鏀跺埌鍐掑厖瀹㈡湇鐨勭淇★紝瑕佹眰鎻愪緵璐︽埛淇℃伅',
    choices: [
      { emoji: '馃毇', text: '涓嶄簣鐞嗙潿', hint: '闃茶寖璇堥獥', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃敀', text: '瀹樻柟楠岃瘉', hint: '纭韬唤', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挰', text: '鍥炲绉佷俊', hint: '鍙兘琚獥', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃摟', text: '鎻愪緵淇℃伅', hint: '璧勪骇鍗遍櫓', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '瀹樻柟涓嶄細绉佷俊绱㈣璐︽埛淇℃伅锛屽簲鐩存帴蹇界暐'
  },
  {
    id: 'global_114',
    category: 'security',
    title: '馃摫 SIM鍗′氦鎹㈡敾鍑?,
    desc: '鎵嬫満鍙风獊鐒惰鍋滄満锛屽彲鑳介伃閬嘢IM鍗′氦鎹㈡敾鍑?,
    choices: [
      { emoji: '馃弮', text: '鑱旂郴杩愯惀鍟?, hint: '绱ф€ュ喕缁?, isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃敀', text: '杞Щ璧勪骇', hint: '淇濇姢璧勯噾', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '鈴?, text: '绛夊緟鎭㈠', hint: '鍙兘琚洍', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃槓', text: '涓嶄互涓烘剰', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: 'SIM鍗′氦鎹㈡敾鍑诲彲缁曡繃鐭俊楠岃瘉锛屽簲绔嬪嵆杞Щ璧勪骇'
  },
  {
    id: 'global_115',
    category: 'security',
    title: '馃敁 闂數璐锋敾鍑?,
    desc: '鏌愬崗璁伃鍙楅棯鐢佃捶鏀诲嚮锛屽竵浠锋毚璺?,
    choices: [
      { emoji: '馃挵', text: '閬垮厤璇ュ崗璁?, hint: '杩滅椋庨櫓', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '瑙傛湜绛夊緟', hint: '绛夊緟淇', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃殌', text: '鎶勫簳涔板叆', hint: '椋庨櫓鏋佸ぇ', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃槓', text: '缁х画鎸栫熆', hint: '鍙兘鎹熷け', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '闂數璐锋敾鍑绘毚闇插崗璁紡娲烇紝搴旈伩鍏嶄娇鐢ㄨ鏀诲嚮鍗忚'
  },
  {
    id: 'global_116',
    category: 'security',
    title: '馃摐 鍚堢害鏈紑婧?,
    desc: '鏌愰」鐩悎绾︿唬鐮佹湭寮€婧愶紝鏃犳硶瀹¤',
    choices: [
      { emoji: '馃毇', text: '閬垮厤鍙備笌', hint: '闄嶄綆椋庨櫓', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '鈿狅笍', text: '璋ㄦ厧璇勪及', hint: '楂橀闄?, isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '馃挵', text: '閲嶄粨鎶曞叆', hint: '椋庨櫓鏋佸ぇ', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃槓', text: '鐩镐俊椤圭洰', hint: '鐩茬洰鎶曡祫', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '鍚堢害鏈紑婧愭棤娉曞璁★紝瀛樺湪閲嶅ぇ椋庨櫓锛屽簲閬垮厤鍙備笌'
  },
  {
    id: 'global_117',
    category: 'security',
    title: '鉁?鍚堢害瀹¤閫氳繃',
    desc: '鏌怐eFi鍗忚閫氳繃鐭ュ悕瀹夊叏鍏徃瀹¤',
    choices: [
      { emoji: '鉁?, text: '鏌ョ湅鎶ュ憡', hint: '浜嗚В椋庨櫓', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '灏忎粨鍙備笌', hint: '鐩稿瀹夊叏', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃拵', text: '閲嶄粨姊搱', hint: '浠嶆湁椋庨櫓', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃毇', text: '鏃犺瀹¤', hint: '涓嶄笓涓?, isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '瀹¤閫氳繃鐩稿瀹夊叏锛屼絾浠嶉渶闃呰鎶ュ憡浜嗚В鍓╀綑椋庨櫓'
  },
  {
    id: 'global_118',
    category: 'security',
    title: '馃帲 铏氬亣绌烘姇璇堥獥',
    desc: '鏀跺埌鏈煡浠ｅ竵绌烘姇锛岀綉绔欒姹傝繛鎺ラ挶鍖呴鍙?,
    choices: [
      { emoji: '馃毇', text: '鎷掔粷棰嗗彇', hint: '闃茶寖璇堥獥', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃敀', text: '鍕胯繛閽卞寘', hint: '淇濇姢璧勪骇', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃挵', text: '绔嬪嵆棰嗗彇', hint: '鍙兘琚洍', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃摫', text: '鎺堟潈缃戠珯', hint: '璧勪骇鍗遍櫓', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '铏氬亣绌烘姇鏄父瑙佽瘓楠楁墜娈碉紝鍒囧嬁杩炴帴閽卞寘鎺堟潈'
  },
  {
    id: 'global_119',
    category: 'security',
    title: '馃摟 閭欢閽撻奔鏀诲嚮',
    desc: '鏀跺埌浼鎴愪氦鏄撴墍鐨勯偖浠讹紝瑕佹眰鐐瑰嚮閾炬帴閲嶇疆瀵嗙爜',
    choices: [
      { emoji: '馃毇', text: '涓嶇偣閾炬帴', hint: '闃茶寖閽撻奔', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃敀', text: '鎵嬪姩杈撳叆', hint: '瀹樻柟楠岃瘉', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃捇', text: '鐐瑰嚮閾炬帴', hint: '鍙兘琚洍', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃摫', text: '杈撳叆瀵嗙爜', hint: '璧勪骇鍗遍櫓', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '閽撻奔閭欢搴旂洿鎺ュ垹闄わ紝搴旈€氳繃瀹樻柟娓犻亾璁块棶缃戠珯'
  },
  {
    id: 'global_120',
    category: 'security',
    title: '馃 鏈哄櫒浜烘姠璺戦闄?,
    desc: '鍙戠幇鏌怐EX浜ゆ槗瀛樺湪澶ч噺MEV鏈哄櫒浜烘姠璺?,
    choices: [
      { emoji: '鈴革笍', text: '鏆傚仠浜ゆ槗', hint: '閬垮厤鎹熷け', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '浣跨敤绉佹睜', hint: 'MEV淇濇姢', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃殌', text: '缁х画浜ゆ槗', hint: '琚姠椋庨櫓', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃幇', text: '鍔犲ぇ婊戠偣', hint: '鎹熷け鏇村', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: 'MEV鎶㈣窇浼氶€犳垚鎹熷け锛屽簲浣跨敤MEV淇濇姢鎴栨殏鍋滀氦鏄?
  },
  {
    id: 'global_121',
    category: 'security',
    title: '馃彌锔?澶氱閽卞寘鏇村畨鍏?,
    desc: '鑰冭檻濡備綍瀛樺偍澶ч鍔犲瘑璧勪骇',
    choices: [
      { emoji: '馃敀', text: '浣跨敤澶氱', hint: '鍒嗘暎椋庨櫓', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃挵', text: '纭欢閽卞寘', hint: '鍐峰瓨鍌?, isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃捇', text: '浜ゆ槗鎵€瀛樻斁', hint: '椋庨櫓杈冮珮', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃摫', text: '鐑挶鍖呭瓨鍌?, hint: '涓嶅瀹夊叏', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '澶ч璧勪骇搴斾娇鐢ㄥ绛炬垨纭欢閽卞寘锛岄伩鍏嶆斁鍦ㄤ氦鏄撴墍'
  },
  {
    id: 'global_122',
    category: 'security',
    title: '馃攽 鍔╄璇嶅畨鍏?,
    desc: '濡備綍瀹夊叏瀛樺偍閽卞寘鍔╄璇?,
    choices: [
      { emoji: '馃敀', text: '閽㈡澘澶囦唤', hint: '闃茬伀闃叉按', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃摝', text: '鍒嗘暎瀛樻斁', hint: '澶氬湴澶囦唤', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃捇', text: '浜戠淇濆瓨', hint: '琚洍椋庨櫓', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃摫', text: '鎵嬫満鎴浘', hint: '鏋佷笉瀹夊叏', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '鍔╄璇嶅簲绂荤嚎澶囦唤锛岄挗鏉挎垨绾歌川鍒嗘暎瀛樻斁鏈€瀹夊叏'
  },
  {
    id: 'global_123',
    category: 'security',
    title: '馃摫 鎵嬫満閽卞寘琚洍',
    desc: '鎵嬫満涓㈠け锛岃鏈夌儹閽卞寘鐨勬墜鏈哄彲鑳借鐮磋В',
    choices: [
      { emoji: '馃弮', text: '绔嬪嵆杞Щ', hint: '淇濇姢璧勪骇', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃敀', text: '杩滅▼鎿﹂櫎', hint: '娓呴櫎鏁版嵁', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '鈴?, text: '绛夊緟鎵惧洖', hint: '鍙兘琚洍', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃槓', text: '璁炬湁瀵嗙爜', hint: '浠嶄笉瀹夊叏', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '鎵嬫満涓㈠け搴旂珛鍗充粠鍏朵粬璁惧杞Щ璧勪骇'
  },
  {
    id: 'global_124',
    category: 'security',
    title: '馃幁 鍋囧竵娉涙互',
    desc: '甯傚満涓婂嚭鐜板ぇ閲忓亣鍐掔煡鍚嶄唬甯佺殑楠楀眬',
    choices: [
      { emoji: '鉁?, text: '鏍稿鍚堢害', hint: '纭鐪熶吉', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃攳', text: '瀹樼綉楠岃瘉', hint: '瀹樻柟娓犻亾', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '鐪嬪埌灏变拱', hint: '鍙兘琚獥', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃殌', text: '鎶㈠厛涔板叆', hint: '涔板埌鍋囧竵', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '鍋囧竵娉涙互锛屽簲閫氳繃瀹樼綉鏍稿鍚堢害鍦板潃鍚庡啀浜ゆ槗'
  },
  {
    id: 'global_125',
    category: 'security',
    title: '馃捇 鐢佃剳涓瘨椋庨櫓',
    desc: '鐢佃剳鍙兘鎰熸煋鐥呮瘨锛屽瓨鏈夐挶鍖呮枃浠?,
    choices: [
      { emoji: '馃敀', text: '鏂綉杞Щ', hint: '淇濇姢璧勪骇', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃挵', text: '閲嶈绯荤粺', hint: '娓呴櫎鐥呮瘨', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃槓', text: '缁х画浣跨敤', hint: '鍙兘琚洍', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃捇', text: '杈撳叆瀵嗙爜', hint: '璧勪骇鍗遍櫓', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '鐢佃剳涓瘨搴旂珛鍗虫柇缃戣浆绉昏祫浜э紝閬垮厤绉侀挜琚洍'
  },
  {
    id: 'global_126',
    category: 'security',
    title: '馃摙 铏氬亣瀹樻柟鍏憡',
    desc: '绀句氦濯掍綋涓婂嚭鐜颁吉閫犵殑瀹樻柟绱ф€ュ叕鍛?,
    choices: [
      { emoji: '鉁?, text: '瀹樼綉楠岃瘉', hint: '纭鐪熶吉', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃攳', text: '澶氭笭閬撴牳', hint: '浜ゅ弶楠岃瘉', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '馃殌', text: '绔嬪嵆鎿嶄綔', hint: '鍙兘琚獥', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃挵', text: '鎸夊叕鍛婂仛', hint: '璧勪骇鍗遍櫓', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '绱ф€ュ叕鍛婂簲閫氳繃瀹樼綉鍜屽涓畼鏂规笭閬撲氦鍙夐獙璇?
  },
  {
    id: 'global_127',
    category: 'security',
    title: '馃攼 瀵嗙爜閲嶅浣跨敤',
    desc: '澶氫釜浜ゆ槗鎵€浣跨敤鐩稿悓瀵嗙爜锛屽叾涓竴涓娉勯湶',
    choices: [
      { emoji: '馃敀', text: '绔嬪嵆淇敼', hint: '鎵€鏈夊钩鍙?, isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '鉁?, text: '鍚敤2FA', hint: '棰濆淇濇姢', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃槓', text: '涓嶆敼瀵嗙爜', hint: '琚洍椋庨櫓', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃挵', text: '杞Щ璧勪骇', hint: '铏藉浣嗚鍔?, isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '瀵嗙爜娉勯湶搴旂珛鍗充慨鏀规墍鏈夊钩鍙板瘑鐮佸苟鍚敤2FA'
  },
  {
    id: 'global_128',
    category: 'security',
    title: '鈴?瀹氭湡瀹夊叏妫€鏌?,
    desc: '寰堜箙娌℃湁妫€鏌ヨ处鎴峰畨鍏ㄨ缃?,
    choices: [
      { emoji: '鉁?, text: '鍏ㄩ潰妫€鏌?, hint: '瀹夊叏涔犳儻', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃敀', text: '鏇存柊瀵嗙爜', hint: '瀹氭湡鏇存崲', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '馃槓', text: '鏃犻渶妫€鏌?, hint: '蹇借瀹夊叏', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '鈴?, text: '鏈夌┖鍐嶈', hint: '鎷栧欢椋庨櫓', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '瀹氭湡瀹夊叏妫€鏌ユ槸鑹ソ涔犳儻锛屽彲鍙婃椂鍙戠幇椋庨櫓'
  },

  // ========== SOCIAL (绀句氦濯掍綋) 22涓?==========
  {
    id: 'global_129',
    category: 'social',
    title: '馃摙 椹柉鍏嬪枈鍗?,
    desc: '椹柉鍏嬪彂鎺ㄦ彁鍙婃煇鍔犲瘑璐у竵锛岀ぞ鍖烘哺鑵?,
    choices: [
      { emoji: '馃挵', text: '鍒╁ソ鍑鸿揣', hint: '閿佸畾鍒╂鼎', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃搲', text: '涓嶈拷楂?, hint: '閬垮厤绔欏矖', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '杩介珮姊搱', hint: '灞遍《绔欏矖', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃幆', text: '杩介珮鍋氱┖', hint: '楂橀闄?, isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '鍚嶄汉鍠婂崟寰€寰€鐭殏锛岃拷楂樺鏄撹濂楋紝鍒╁ソ鍑鸿揣鏄槑鏅洪€夋嫨'
  },
  {
    id: 'global_130',
    category: 'social',
    title: '馃敟 Twitter鐑悳闇告',
    desc: '姣旂壒甯佽繛缁暟鏃ュ崰鎹甌witter鐑悳绗竴',
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '钀借涓哄畨', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈿狅笍', text: '璀︽儠瑙侀《', hint: '杩囩儹淇″彿', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '鍔犱粨杩芥定', hint: 'FOMO椋庨櫓', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃拵', text: '鏃犺鐑害', hint: '涓嶇悊鎬?, isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '绀句氦濯掍綋鐑害杈惧埌椤跺嘲寰€寰€鏄樁娈垫€ч《閮ㄤ俊鍙?
  },
  {
    id: 'global_131',
    category: 'social',
    title: '馃搲 绀句氦濯掍綋闈欓粯',
    desc: '鍔犲瘑璐у竵鐩稿叧璁ㄨ閲忓垱鍘嗗彶鏂颁綆锛屾棤浜洪棶娲?,
    choices: [
      { emoji: '馃洅', text: '寮€濮嬪畾鎶?, hint: '閫嗗悜甯冨眬', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃拵', text: '鍧氬畾鎸佹湁', hint: '搴曢儴鍖哄煙', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃敧', text: '鍓茶倝绂诲満', hint: '搴曢儴鍗栧嚭', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '鎯呯华鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '绀句氦濯掍綋鏃犱汉闂触寰€寰€鏄競鍦哄簳閮紝鏄€嗗悜甯冨眬鏈轰細'
  },
  {
    id: 'global_132',
    category: 'social',
    title: '馃幁 KOL闆嗕綋鍞卞',
    desc: '澶氫綅澶鍚屾椂鍞卞鏌愪唬甯侊紝鎺ㄨ崘绮変笣涔板叆',
    choices: [
      { emoji: '馃挵', text: '璀︽儠鍑鸿揣', hint: '鍙兘鏄墭', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃搲', text: '涓嶈拷鐑偣', hint: '閬垮厤鎺ョ洏', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '璺熼殢涔板叆', hint: '楂樹綅绔欏矖', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃拵', text: '閲嶄粨姊搱', hint: '椋庨櫓鏋佸ぇ', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: 'KOL闆嗕綋鍞卞鍙兘鏄嚭璐т俊鍙凤紝搴斾繚鎸佽鎯?
  },
  {
    id: 'global_133',
    category: 'social',
    title: '馃挰 绀剧兢鎯呯华楂樻定',
    desc: 'Telegram缇ょ粍浜烘暟婵€澧烇紝绀惧尯鏋佸害涔愯',
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '钀借涓哄畨', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈿狅笍', text: '璀︽儠鐙傜儹', hint: '杩囩儹淇″彿', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '缁х画鍔犱粨', hint: '灞遍《绔欏矖', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃幇', text: '婊′粨姊搱', hint: '椋庨櫓鏋佸ぇ', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '绀剧兢鎯呯华鏋佺涔愯寰€寰€鏄椤朵俊鍙凤紝搴斿垎鎵规鐩?
  },
  {
    id: 'global_134',
    category: 'social',
    title: '馃槩 绀剧兢鎭愭厡钄撳欢',
    desc: '绀剧兢鍏呮弧鎭愭厡鎯呯华锛屼汉浜哄枈鐔?,
    choices: [
      { emoji: '馃洅', text: '寮€濮嬫妱搴?, hint: '閫嗗悜鎶曡祫', isCorrect: true, effect: { wealthPct: 2.5 } },
      { emoji: '馃拵', text: '鍧氬畾鎸佹湁', hint: '搴曢儴鍖哄煙', isCorrect: true, effect: { wealthPct: 2.2 } },
      { emoji: '馃敧', text: '鍓茶倝姝㈡崯', hint: '搴曢儴鍗栧嚭', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃槺', text: '鎭愭厡鎶涘敭', hint: '鎯呯华鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '绀剧兢鎭愭厡寰€寰€鏄競鍦哄簳閮紝搴斾繚鎸佺悊鎬ч€嗗悜鎿嶄綔'
  },
  {
    id: 'global_135',
    category: 'social',
    title: '馃摪 鍋囨秷鎭紶鎾?,
    desc: '绀句氦濯掍綋娴佷紶鏌愰」鐩噸澶у埄绌哄亣娑堟伅',
    choices: [
      { emoji: '鉁?, text: '瀹樻柟鏍稿疄', hint: '纭鐪熶吉', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '鈴?, text: '绛夊緟婢勬竻', hint: '閬垮厤鍐插姩', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃敧', text: '鎭愭厡鎶涘敭', hint: '涓鍓茶倝', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃槺', text: '绔嬪嵆姝㈡崯', hint: '鎯呯华鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '鍋囨秷鎭鍙戯紝搴旈€氳繃瀹樻柟娓犻亾鏍稿疄鍚庡啀鍋氬喅绛?
  },
  {
    id: 'global_136',
    category: 'social',
    title: '馃専 鍚嶄汉涔板叆鏇濆厜',
    desc: '鏌愮煡鍚嶆姇璧勪汉鍏紑鍏跺姞瀵嗚揣甯佹寔浠?,
    choices: [
      { emoji: '馃搳', text: '鍙傝€冪爺绌?, hint: '瀛︿範鎬濊矾', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '灏忎粨璺熼殢', hint: '鎺у埗浠撲綅', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃殌', text: '閲嶄粨姊搱', hint: '鐩茬洰璺熼', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃拵', text: '瀹屽叏澶嶅埗', hint: '蹇借宸紓', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '鍚嶄汉鎸佷粨鍙弬鑰冧絾涓嶅簲鐩茬洰璺熼锛岄渶鐙珛鍒ゆ柇'
  },
  {
    id: 'global_137',
    category: 'social',
    title: '馃挰 Reddit鐑笘',
    desc: 'WallStreetBets璁ㄨ鍔犲瘑璐у竵锛岀儹搴﹂鍗?,
    choices: [
      { emoji: '鈿狅笍', text: '璀︽儠璺熼', hint: '鏁ｆ埛鑱氶泦', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '璋ㄦ厧鍙備笌', hint: '鎺у埗浠撲綅', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃殌', text: '閲嶄粨姊搱', hint: '鏁ｆ埛闄烽槺', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃幇', text: '杩介珮涔板叆', hint: '鎺ョ洏椋庨櫓', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '鏁ｆ埛鑱氶泦鍖哄鏄撳舰鎴愭场娌紝搴斾繚鎸佽鎯曟帶鍒朵粨浣?
  },
  {
    id: 'global_138',
    category: 'social',
    title: '馃摵 涓绘祦濯掍綋鎶ラ亾',
    desc: '涓绘祦璐㈢粡濯掍綋姝ｉ潰鎶ラ亾鍔犲瘑璐у竵',
    choices: [
      { emoji: '馃搱', text: '鍏虫敞澧為噺', hint: '鏂拌祫閲戝叆鍦?, isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃挵', text: '鎸佹湁寰呮定', hint: '鍒╁ソ闀挎湡', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃弮', text: '绔嬪嵆鍗栧嚭', hint: '鍒╁ソ鍑哄敖', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '鈴?, text: '鏃犺鎶ラ亾', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: 0.2 } }
    ],
    explanation: '涓绘祦濯掍綋鎶ラ亾鏈夊姪浜庡惛寮曟柊璧勯噾锛屽埄濂介暱鏈熷彂灞?
  },
  {
    id: 'global_139',
    category: 'social',
    title: '鈿?鐥呮瘨寮忎紶鎾?,
    desc: '鏌愬姞瀵嗛」鐩棰戝湪TikTok鐥呮瘨寮忎紶鎾?,
    choices: [
      { emoji: '鈿狅笍', text: '璀︽儠娉℃搏', hint: '鍙兘鏄眬', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '瑙傛湜鐮旂┒', hint: '閬垮厤鍐插姩', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃殌', text: '杩介珮涔板叆', hint: '灞遍《绔欏矖', isCorrect: false, effect: { wealthPct: -0.9 } },
      { emoji: '馃拵', text: '閲嶄粨姊搱', hint: '椋庨櫓鏋佸ぇ', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '鐥呮瘨寮忎紶鎾彲鑳芥槸钀ラ攢楠楀眬锛屽簲淇濇寔璀︽儠'
  },
  {
    id: 'global_140',
    category: 'social',
    title: '馃帳 鍒涘浜篈MA',
    desc: '椤圭洰鍒涘浜轰妇琛孉MA锛岀ぞ鍖哄弽鍝嶇儹鐑?,
    choices: [
      { emoji: '馃憖', text: '鍏虫敞鍐呭', hint: '浜嗚В椤圭洰', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '缁х画瑙傚療', hint: '鐞嗘€у垽鏂?, isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '馃殌', text: '绔嬪嵆鍔犱粨', hint: '鐩茬洰涔愯', isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃拵', text: 'All in', hint: '涓嶇悊鎬?, isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: 'AMA搴斿叧娉ㄥ唴瀹硅川閲忚€岄潪鎯呯华锛岀悊鎬у垽鏂?
  },
  {
    id: 'global_141',
    category: 'social',
    title: '馃搲 璐熼潰鑸嗚鍙戦叺',
    desc: '鏌愰」鐩礋闈㈡柊闂诲湪绀句氦濯掍綋鎸佺画鍙戦叺',
    choices: [
      { emoji: '鉁?, text: '鏍稿疄鐪熺浉', hint: '杈ㄥ埆鐪熶吉', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '闄嶄綆鏁炲彛', hint: '瑙勯伩椋庨櫓', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃敧', text: '鎭愭厡鎶涘敭', hint: '鍙兘鍐ゆ瀴', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃槺', text: '绔嬪嵆娓呬粨', hint: '鎯呯华鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: '璐熼潰鑸嗚搴旀牳瀹炵湡鐩稿悗鍐嶅仛鍐崇瓥锛岄伩鍏嶈甯﹁妭濂?
  },
  {
    id: 'global_142',
    category: 'social',
    title: '馃弳 绀惧尯娌荤悊鎶曠エ',
    desc: '鏌怐AO椤圭洰閲嶈娌荤悊鎻愭鍗冲皢鎶曠エ',
    choices: [
      { emoji: '馃憖', text: '鍏虫敞缁撴灉', hint: '褰卞搷鍙戝睍', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '鍙備笌鎶曠エ', hint: '琛屼娇鏉冨埄', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '鈴?, text: '婕犱笉鍏冲績', hint: '蹇借娌荤悊', isCorrect: false, effect: { wealthPct: -0.3 } },
      { emoji: '馃槓', text: '鏃犺鎻愭', hint: '涓嶈礋璐ｄ换', isCorrect: false, effect: { wealthPct: -0.2 } }
    ],
    explanation: '娌荤悊鎶曠エ褰卞搷椤圭洰鍙戝睍锛屽簲鍏虫敞骞跺弬涓?
  },
  {
    id: 'global_143',
    category: 'social',
    title: '馃拵 閽荤煶鎵嬫枃鍖?,
    desc: '绀惧尯鎻愬€℃棤璁烘定璺岄兘鍧氬喅鎸佹湁涓嶅崠鍑?,
    choices: [
      { emoji: '鈿栵笍', text: '鐞嗘€ф寔鏈?, hint: '鐪嬫儏鍐?, isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '鍚堢悊鑾峰埄', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃拵', text: '姝绘墰鍒板簳', hint: '鍙兘娣卞', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃殌', text: '姘歌繙涓嶅崠', hint: '涓嶅垏瀹為檯', isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '鐞嗘€ф寔鏈夎€岄潪鐩茬洰姝绘墰锛屽簲閫傛椂姝㈢泩'
  },
  {
    id: 'global_144',
    category: 'social',
    title: '馃摙 FUD鎯呯华钄撳欢',
    desc: '鏌愰」鐩湪绀句氦濯掍綋涓婅澶ч噺FUD鏀诲嚮',
    choices: [
      { emoji: '鉁?, text: '鐙珛鐮旂┒', hint: '杈ㄥ埆鐪熶吉', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '馃憖', text: '鍏虫敞浜嬪疄', hint: '涓嶈窡鎯呯华', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃敧', text: '璺熼鎶涘敭', hint: '鍙兘涓', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃槺', text: '鎭愭厡绂诲満', hint: '鎯呯华鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.7 } }
    ],
    explanation: 'FUD鍙兘鏄伓鎰忔搷绾碉紝搴旂嫭绔嬬爺绌朵笉璺熼'
  },
  {
    id: 'global_145',
    category: 'social',
    title: '馃殌 绌哄ご琚涧绌?,
    desc: '绀句氦濯掍綋涓婄┖澶磋澶ч噺娓呯畻锛屽澶存鍛?,
    choices: [
      { emoji: '馃挵', text: '鍒嗘壒姝㈢泩', hint: '钀借涓哄畨', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '鈿狅笍', text: '璀︽儠鍙嶈浆', hint: '杞х┖缁撴潫', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃殌', text: '缁х画杩芥定', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.7 } },
      { emoji: '馃幇', text: '楂樺€嶅仛澶?, hint: '鍗遍櫓鎿嶄綔', isCorrect: false, effect: { wealthPct: -0.9 } }
    ],
    explanation: '杞х┖琛屾儏寰€寰€蹇€熺粨鏉燂紝搴斿垎鎵规鐩?
  },
  {
    id: 'global_146',
    category: 'social',
    title: '馃搳 绀剧兢鎶曠エ缁撴灉',
    desc: '绀惧尯鎶曠エ閫氳繃閲嶅ぇ浠ｅ竵缁忔祹瀛︽敼鍙?,
    choices: [
      { emoji: '馃憖', text: '鍒嗘瀽褰卞搷', hint: '璇勪及鍙樺寲', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '璋冩暣浠撲綅', hint: '鏍规嵁缁撴灉', isCorrect: true, effect: { wealthPct: 1.0 } },
      { emoji: '鈴?, text: '鏃犺鍙樺寲', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: -0.4 } },
      { emoji: '馃槓', text: '涓嶅彈褰卞搷', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '浠ｅ竵缁忔祹瀛︽敼鍙樺奖鍝嶉暱鏈熶环鍊硷紝搴斿垎鏋愬悗璋冩暣浠撲綅'
  },
  {
    id: 'global_147',
    category: 'social',
    title: '馃巵 绌烘姇棰勬湡鐐掍綔',
    desc: '绀惧尯鐑鏌愰」鐩嵆灏嗚繘琛屽ぇ棰濈┖鎶?,
    choices: [
      { emoji: '馃憖', text: '鍏虫敞浜や簰', hint: '鍑嗗璧勬牸', isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '鈿狅笍', text: '璀︽儠鍋囨秷鎭?, hint: '楠岃瘉鐪熶吉', isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '涔板叆浠ｅ竵', hint: '鍗氱┖鎶?, isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃殌', text: '閲嶄粨浠嬪叆', hint: '椋庨櫓杈冨ぇ', isCorrect: false, effect: { wealthPct: -0.8 } }
    ],
    explanation: '绌烘姇棰勬湡搴旈獙璇佺湡浼紝涓嶅疁涓哄崥绌烘姇涔板叆浠ｅ竵'
  },
  {
    id: 'global_148',
    category: 'social',
    title: '馃幁 鎰忚棰嗚浜掓挄',
    desc: '涓や綅鍔犲瘑澶灏辨煇椤圭洰鍏紑浜夎',
    choices: [
      { emoji: '馃憖', text: '鍏虫敞璁烘嵁', hint: '瀛︿範鍒嗘瀽', isCorrect: true, effect: { wealthPct: 0.5 } },
      { emoji: '鈴?, text: '涓嶅彈褰卞搷', hint: '淇濇寔鐞嗘€?, isCorrect: true, effect: { wealthPct: 0.8 } },
      { emoji: '馃挵', text: '閫夎竟绔欓槦', hint: '鐩茬洰璺熶粠', isCorrect: false, effect: { wealthPct: -0.5 } },
      { emoji: '馃殌', text: '鎹鎿嶄綔', hint: '涓嶇悊鎬?, isCorrect: false, effect: { wealthPct: -0.6 } }
    ],
    explanation: '澶浜夎搴斾繚鎸佺悊鎬э紝涓嶅簲鐩茬洰閫夎竟绔欓槦'
  },
  {
    id: 'global_149',
    category: 'social',
    title: '馃拵 HODL鏂囧寲鐩涜',
    desc: '绀惧尯鐩涜闀挎湡鎸佹湁涓嶅崠鍑虹殑HODL鏂囧寲',
    choices: [
      { emoji: '鈿栵笍', text: '闀挎湡鎸佹湁', hint: '鍒嗘壒姝㈢泩', isCorrect: true, effect: { wealthPct: 1.5 } },
      { emoji: '馃挵', text: '浠峰€兼姇璧?, hint: '鐞嗘€ф寔鏈?, isCorrect: true, effect: { wealthPct: 1.2 } },
      { emoji: '馃拵', text: '姘镐笉鍗栧嚭', hint: '涓嶇幇瀹?, isCorrect: false, effect: { wealthPct: -0.6 } },
      { emoji: '馃殌', text: '鏃犺娉㈠姩', hint: '蹇借椋庨櫓', isCorrect: false, effect: { wealthPct: -0.5 } }
    ],
    explanation: 'HODL鐞嗗康鍙涔狅紝浣嗕粛闇€鍒嗘壒姝㈢泩绠＄悊椋庨櫓'
  },
  {
    id: 'global_150',
    category: 'social',
    title: '馃實 鍏ㄧ悆绀惧尯鍏辫瘑',
    desc: '鍏ㄧ悆鍔犲瘑绀惧尯瀵规煇瓒嬪娍褰㈡垚寮虹儓鍏辫瘑',
    choices: [
      { emoji: '馃搱', text: '椤哄娍鑰屼负', hint: '璺熼殢瓒嬪娍', isCorrect: true, effect: { wealthPct: 2.0 } },
      { emoji: '馃挵', text: '鍏虫敞鏈轰細', hint: '瓒嬪娍鎶曡祫', isCorrect: true, effect: { wealthPct: 1.8 } },
      { emoji: '馃毇', text: '鍙嶅悜鎿嶄綔', hint: '閫嗗娍鑰屼负', isCorrect: false, effect: { wealthPct: -0.8 } },
      { emoji: '馃槓', text: '瀹屽叏鏃犺', hint: '鍙嶅簲杩熺紦', isCorrect: false, effect: { wealthPct: -0.3 } }
    ],
    explanation: '鍏ㄧ悆鍏辫瘑寰€寰€褰㈡垚寮哄ぇ瓒嬪娍锛屽簲椤哄娍鑰屼负'
  }
];

// 娴忚鍣ㄥ鍑?
if (typeof window !== 'undefined') {
  window.HARDCORE_GLOBAL_DECISIONS = HARDCORE_GLOBAL_DECISIONS;
}

