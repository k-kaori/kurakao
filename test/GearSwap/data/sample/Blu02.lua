mode = 'Normal'
function get_sets()
	set_language('japanese')

	sets = {}
	sets.Default = {
	    ammo="銀銭",
	    head="アデマボンネット",
	    body={ name="アデマジャケット", augments={'DEX+10','AGI+10','Accuracy+15',}},
	    hands={ name="ヘルクリアグローブ", augments={'Accuracy+22','"Triple Atk."+3','DEX+8',}},
	    legs={ name="サムヌータイツ", augments={'STR+10','DEX+10','"Dbl.Atk."+3','"Triple Atk."+3',}},
	    feet={ name="ヘルクリアブーツ", augments={'Accuracy+20','"Triple Atk."+3','AGI+6','Attack+7',}},
	    neck="コンバタントトルク",
	    waist="霊亀腰帯",
	    left_ear="テロスピアス",
	    right_ear="ディグニタリピアス",
	    left_ring="エポナリング",
	    right_ring="ヘタイロイリング",
	    back={ name="ロスメルタケープ", augments={'DEX+20','Accuracy+20 Attack+20','"Dual Wield"+10',}},
	}
	sets.ACC	= set_combine( sets.Default, {
	    feet={ name="ヘルクリアブーツ", augments={'Accuracy+25 Attack+25','Damage taken-3%','AGI+10','Accuracy+15',}},
	} )
	sets.Solo	= set_combine( sets.Default, {	--	ヘイスト２＋二刀流２段階（0.85）＋0.30
		ammo="銀銭",
		head={ name="ダンペニングタム", augments={'DEX+10','Accuracy+15','Mag. Acc.+15','Quadruple Attack +3',}},
		body={ name="アデマジャケット", augments={'DEX+10','AGI+10','Accuracy+15',}},
		hands={ name="ヘルクリアグローブ", augments={'Accuracy+24 Attack+24','Weapon skill damage +4%','AGI+7','Accuracy+13',}},
		legs={ name="サムヌータイツ", augments={'STR+10','DEX+10','"Dbl.Atk."+3','"Triple Atk."+3',}},
		feet="カマイングリーヴ",				--	STP+7
		neck="コンバタントトルク",				--	
		waist="霊亀腰帯",
		left_ear="ダッジョンピアス",
		right_ear="ハートシーカピアス",
		left_ring="エポナリング",
		right_ring="ハーバートンリング",
		back={ name="ロスメルタケープ", augments={'DEX+20','Accuracy+20 Attack+20','"Dual Wield"+10',}},
	} )
	sets.MagicDef = set_combine( sets.Default, {	--	魔法回避/防御装備
		head={ name="ダンペニングタム", augments={'DEX+10','Accuracy+15','Mag. Acc.+15','Quadruple Attack +3',}},
		body={ name="ヘルクリアベスト", augments={'Damage taken-3%','AGI+10','Accuracy+6','Attack+2',}},
		Hands	= "レイライングローブ",			-- 
		Legs	= "ギーヴトラウザ",			-- 
		feet={ name="ヘルクリアブーツ", augments={'Accuracy+25 Attack+25','Damage taken-3%','AGI+10','Accuracy+15',}},

		neck	= "ロリケートトルク+1",
		LRing	= "守りの指輪",
		left_ear="オノワピアス",
		right_ear="オノワピアス+1",
		right_ring="カッヤレスリング",
		back	="ズーカウマント",

	} )
	sets.Learning	= {		--	ラーニング装備
		Ammo	= "マーヴィタスラム",
		Head	= "ルラーザケフィエ",
		Body	= "ＡＳジュバ+1",
		Hands	= "アシムレバズバンド",
		Legs	= "ハシシンタイト",
		Feet	= "ルラーザチャラク",
		Neck	= "グレースカラー+1",
		back	= "コンフラワーケープ",
	}
	sets.Magic={	--	魔攻装備
		ammo="ペムフレドタスラム",

		head="ジャリコロナル+1",
		body="ジャリローブ+1",
		hands="ジャリカフス+1",
		legs="ジャリスロップス+1",
		feet="ジャリピガッシュ+1",

		neck="サンクトネックレス",
		waist="テンパスフジット",
		left_ear="フリオミシピアス",
		right_ear="ディグニタリピアス",
		left_ring="スティキニリング",
		right_ring="スティキニリング",
		back={ name="コンフラワーケープ", augments={'MP+20','DEX+4','Accuracy+4','Blue Magic skill +10',}},
	}
	sets.CUT = set_combine( sets.Default, {		--	カット装備
		head="ライスリムキャップ",
		body="エメットハーネス+1",
		hands={ name="ヘルクリアグローブ", augments={'Accuracy+24 Attack+24','Weapon skill damage +4%','AGI+7','Accuracy+13',}},
		legs="ヘルクリアトラウザ",
		feet={ name="ヘルクリアブーツ", augments={'Accuracy+25 Attack+25','Damage taken-3%','AGI+10','Accuracy+15',}},
		neck	= "ロリケートトルク+1",
		LRing	= "守りの指輪",
		RRing	= "パトリシアスリング",
		back="アゲマケープ",
	} )
	sets.Hate = {		--	敵対心装備(ジョブポ盾)
		body	="エメットハーネス+1",
		hands	= "クーリスグローブ",
		lear	= "無知の耳",
		rear	= "フリオミシピアス",
		rring	= "アイワツリング",
		back	= "アゲマケープ",
	}
	sets.Base = set_combine( sets.Default, {} )
	
	-- Precast Sets
	sets.precast = {}
	sets.precast.JA = sets.Base
	sets.precast.JA['アジュールロー'] 		= set_combine( sets.precast.JA, {} )
	sets.precast.JA['ブルーバースト'] 		= set_combine( sets.precast.JA, {
		Feet	= "ＭＶバシュマク+2",
	} )
	sets.precast.JA['ブルーチェーン'] 		= set_combine( sets.precast.JA, {
		Head	= "ＭＶカヴク+2",
	} )
	sets.precast.JA['コンバージェンス'] 	= set_combine( sets.precast.JA, {} )
	sets.precast.JA['ディフュージョン'] 	= set_combine( sets.precast.JA, {} )
	sets.precast.JA['エフラックス'] 		= set_combine( sets.precast.JA, {
		Legs	= "ハシシンタイト",
	} )
	sets.precast.JA['ノートリアスナレッジ'] = set_combine( sets.precast.JA, {} )
	sets.precast.JA['N.ウィズドム'] 		= set_combine( sets.precast.JA, {} )
	
	sets.precast.FC							= set_combine( sets.Base, {
		head="ヘルクリアヘルム",
		body={ name="ヘリオスジャケット", augments={'Mag. Acc.+13 "Mag.Atk.Bns."+13','"Fast Cast"+4','INT+5',}},
		hands={ name="レイライングローブ", augments={'Accuracy+12','Mag. Acc.+14','"Mag.Atk.Bns."+15','"Fast Cast"+2',}},
		legs={ name="サイクロスラッパ", augments={'MP+80','Mag. Acc.+15','"Fast Cast"+7',}},
		feet="ケロナブーツ",
		neck="オルンミラトルク",
		left_ear="素破の耳",
		right_ear="ロケイシャスピアス",
		left_ring="プロリクスリング",
		right_ring="女王の指輪",
		back="スイスケープ+1",
	} )

	sets.precast.WS = set_combine( sets.Default, {
		ammo="アマークラスター",
		head="ジャリコロナル+1",
		body={ name="アデマジャケット", augments={'DEX+10','AGI+10','Accuracy+15',}},
		hands={ name="ヘルクリアグローブ", augments={'Accuracy+24 Attack+24','Weapon skill damage +3%','STR+4','Accuracy+15',}},
		legs={ name="サムヌータイツ", augments={'STR+10','DEX+10','"Dbl.Atk."+3','"Triple Atk."+3',}},
		feet={ name="ヘルクリアブーツ", augments={'Accuracy+25 Attack+25','Damage taken-3%','AGI+10','Accuracy+15',}},
		neck="フォシャゴルゲット",
		waist="フォシャベルト",
		left_ear={ name="胡蝶のイヤリング", augments={'Accuracy+4','TP Bonus +25',}},
		right_ear="ディグニタリピアス",
		left_ring="エポナリング",
		right_ring="ヘタイロイリング",
		back={ name="ロスメルタケープ", augments={'DEX+20','Accuracy+20 Attack+20','Crit.hit rate+10',}},
	} )
	-- シャンデュシニュ◇3回攻撃。TP:クリティカルヒット確率修正。アルマス使用時:アフターマス発動。<光/湾曲>
	sets.precast.WS['シャンデュシニュ'] = set_combine( sets.precast.WS, {
	} )
	sets.precast.WS.Chant_du_Cygne	= sets.precast.WS['シャンデュシニュ']
	-- レクイエスカット◇使用条件：Lv96～戦赤ナ暗侍青コ 片手剣スキル357～ 能力値1でMND20% <重力/切断>
	sets.precast.WS['レクイエスカット'] = set_combine( sets.precast.WS, {
	} )
	--	サベッジブレード◇片手剣[240/Q]2回攻撃。TP:ダメージ修正 ST補正:STR30% MND50%<分解/切断>
	sets.precast.WS['サベッジブレード'] = set_combine( sets.precast.WS, {
	} )
	
	--	エクスピアシオン◇→TP:ダメージ修正。ST補正:STR30% INT30% <湾曲/切断>
	sets.precast.WS['エクスピアシオン'] = set_combine( sets.precast.WS, {
	} )
	--	サンギンブレード◇片手剣[300/EX]HP吸収。TP：HP吸収量修正。ST補正:STR30% MND50%
	sets.precast.WS['サンギンブレード'] = set_combine( sets.Magic, {
		head	= "妖蟲の髪飾り+1",
		RRing	= "アルコンリング",
	} )

	--	レルムレイザー◇使用条件：Lv96～戦モ白黒ナ召青学 片手棍スキル357～ 能力値1でMND+20% <核熱/衝撃>
	sets.precast.WS['レルムレイザー'] = set_combine( sets.precast.WS, {
	} )

	sets.precast['フラッシュ']	= set_combine( sets.precast.NIN, sets.Hate )

	-- Midcast Sets
	sets.midcast = {}
	sets.midcast.MA = {}
	sets.midcast.MA.ATK = set_combine( sets.Magic, {
	} )
	
	sets.midcast.MA.ACC = set_combine( sets.Magic, {
	} )
	sets.midcast.CURE = set_combine( sets.Base, {
		hands="テルキネグローブ",
		legs="ギーヴトラウザ",
		feet={ name="ミディアムサボ", augments={'MP+50','MND+10','"Conserve MP"+7','"Cure" potency +5%',}},
		neck="ファライナロケット",
		left_ring="守りの指輪",
		right_ring="パトリシアスリング",
		back="ソレムニティケープ",
	} )


	sets.midcast.MA['グルーティナスダート'] = set_combine( sets.Base, {
	} )	
	--	INT80％
	sets.midcast.MA['スペクトラルフロー'] = set_combine( sets.midcast.MA.ATK, {
	} )	
	--	VIT+80％
	sets.midcast.MA['エントゥーム'] = set_combine( sets.midcast.MA.ATK, {
	} )	
	--	DEX+80%
	sets.midcast.MA['アンビルライトニング'] = set_combine( sets.midcast.MA.ATK, {
	} )	
	sets.midcast.MA['テネブラルクラッシュ'] = set_combine( sets.midcast.MA.ATK, {
		head	= "妖蟲の髪飾り+1",
		RRing	= "アルコンリング",
	} )	
	sets.midcast['フラッシュ']	= set_combine( sets.precast.NIN, sets.Hate )

	BlueMagic	= {}
	BlueMagic.MATK	= T{
		"サブダックション",
		"レテナグレア",
		"ネクターデルージュ",
		"R.デルージュ",
		"水風船爆弾",
		"サンダーボルト",
		"チャージドホイスカー",
		"マジックハンマー",
		"アイズオンミー",
		"T.アップヒーヴ",
		"エンバームアース",
		"シアリングテンペスト",
		"B.フルゴア",
		"スペクトラルフロー",
		"スカウリングスペイト",
		"アンビルライトニング",
		"サイレントストーム",
		"エントゥーム",
		"テネブラルクラッシュ",
		"ポーリングサルヴォ",
		"レールキャノン",
	}	
	BlueMagic.MACC	= T{
		'サドンランジ',
		'夢想花',
	}	
	BlueMagic.CURE	= T{
		'ホワイトウィンド',
		'マジックフルーツ',
		'P.エンブレイス',
		'レストラル',
	}	
	
	--Aftercast Sets
	sets.aftercast 			= set_combine( sets.Base, {} )
	
	sets.aftercast.Engaged	= set_combine( sets.aftercast, {} )

	sets.aftercast.Idle		= set_combine( sets.aftercast, {} )

end

function get_sets_sub()
end

function pretarget(spell)
end

function precast(spell)
	if spell.type == 'WeaponSkill' then
		if sets.precast.WS[ spell.name ] ~= nil then 
			equip( sets.precast.WS[ spell.name ] )
		end
	elseif sets.precast[ spell.name ] then 
		equip( sets.precast[ spell.name ] )
	elseif spell.type == 'BlueMagic' then
		equip( sets.precast.FC )
	elseif spell.type == 'Ninjutsu' then
		equip( sets.precast.FC )
	elseif  player.equipment.right_ring == 'デジョンリング' then
	else
		equip( sets.precast.FC )
	end
end

function midcast(spell)
--	windower.add_to_chat( 8, 'spell.type='..spell.type )
--	windower.add_to_chat( 8, 'spell.target.type='..spell.target.type )
	if sets.midcast[ spell.name ] then 
		equip( sets.midcast[ spell.name ] )
	elseif spell.type == 'BlueMagic' then
		if spell.target.type == "SELF" and buffactive["ディフュージョン"] then
				equip( { feet = "ルラーザチャルク" } )
		elseif BlueMagic.MATK:contains( spell.name ) then
			if mode == "MagicAcc" then
				equip( set_combine( sets.midcast.MA.ACC, select_obi( spell ) ) )
			else
				equip( set_combine( sets.midcast.MA.ATK, select_obi( spell ) ) )
			end
		elseif BlueMagic.CURE:contains( spell.name ) then
				equip( set_combine( sets.midcast.CURE, select_obi( spell ) ) )
		elseif BlueMagic.MACC:contains( spell.name ) then
				equip( set_combine( sets.midcast.MA.ACC, select_obi( spell ) ) )
		end
	elseif spell.type == 'WeaponSkill' then
	end
end

function aftercast(spell)
--	windower.add_to_chat( 8, 'fired aftercast mode='..mode )
	if buffactive['レイヴシンボル'] then
		sets.aftercast 			= set_combine( sets.Base, { Neck ="グレースカラー+1" } )
	else
		sets.aftercast 			= set_combine( sets.Base, {} )
	end
	if mode == 'Learning' then
		sets.aftercast.Engaged	= set_combine( sets.aftercast, sets.Learning )
		sets.aftercast.Idle		= set_combine( sets.aftercast, sets.Learning )
	else
		sets.aftercast.Engaged	= set_combine( sets.aftercast, {} )
		sets.aftercast.Idle		= set_combine( sets.aftercast, { Legs = "カマインクウィス+1" } )
	end
	
	
	if player.status == 'Engaged' then
		equip(sets.aftercast.Engaged)
	else
		equip(sets.aftercast.Idle)
	end
end

function status_change(new,old)
--	windower.add_to_chat( 8, 'world.area='..world.area )
--	windower.add_to_chat( 8, 'world.zone='..world.zone )
--	windower.add_to_chat( 8, 'fired status_change' )
	if new == 'Engaged' then
		equip(sets.aftercast.Engaged)
		disable('main','sub')
	elseif T{'Idle','Resting'}:contains(new) then
		equip(sets.aftercast.Idle)
	end
	aftercast("")
end

function self_command(cmd)
	windower.add_to_chat( 8, 'fired self_command '..cmd )
	--	使用例：マクロから /console gs c MagicDef
	if cmd == 'MagicDef' then
		sets.Base = set_combine( sets.Default, sets.MagicDef )
		mode = cmd
	elseif cmd == 'Learning' then
		sets.Base = set_combine( sets.Default, sets.Learning )
		mode = cmd
	elseif cmd == 'MagicAcc' then
			sets.Base = set_combine( sets.Magic, sets.CUT )
		mode = cmd
	elseif cmd == 'Normal' then
		sets.Base = set_combine( sets.Default, {} )
		mode = cmd
	elseif cmd == 'Solo' then
		sets.Base = set_combine( sets.Solo, {} )
		mode = cmd
	elseif cmd == 'Cut' then
		sets.Base = set_combine( sets.CUT, {} )
		mode = cmd
	elseif cmd == 'Acc' then
		sets.Base = set_combine( sets.ACC, {} )
		mode = cmd
	end
	aftercast( "dummy" )

end

function buff_change(name,gain,buff_table)
	if gain then 
--		windower.add_to_chat( 8, 'buff_change buff name '..name )
	else
--		windower.add_to_chat( 8, 'buff_change debuff name '..name )
		if player.status == "Engaged" then
			if world.zone_id == 211 then
				if name == "ブリンク" then
					send_command('input /ma オカルテーション <me>')
				end
			end
		end
	end
end

windower.register_event('zone change',function (...)
end)
