include('weather_obi')
include('myexport')
function get_sets()
    set_language('japanese')
    
    sets.precast = {}
    sets.precast.ws = {}
    sets.precast.ability = {}
    sets.midcast = {}
    sets.aftercast = {}

    is_sp = false
    is_no_mb = false
    is_diver_statue = false
    is_death = false
    is_vagary = false

    elementally_enfeeble_magic = T{"ショック", "ラスプ", "チョーク", "フロスト", "バーン", "ドラウン",}
    aspir = T{"アスピル", "アスピルII", "アスピルIII"}

    init_elemental_obi()
    set_elemental_obi("闇輪の帯")

    sets.precast.fc = {
	    ammo={ name="ガストリタスラム+1", augments={'Path: A',}},
	    head={ name="マーリンフード", augments={'Mag. Acc.+16','Magic burst dmg.+6%','INT+10','"Mag.Atk.Bns."+7',}},
	    body={ name="マーリンジュバ", augments={'Mag. Acc.+25 "Mag.Atk.Bns."+25','"Fast Cast"+5','MND+2','Mag. Acc.+6','"Mag.Atk.Bns."+5',}},
	    hands="ジャリカフス+2",
	    legs={ name="サイクロスラッパ", augments={'MP+80','Mag. Acc.+15','"Fast Cast"+7',}},
	    feet={ name="マーリンクラッコー", augments={'"Mag.Atk.Bns."+18','Magic burst dmg.+10%',}},
	    neck="ボルトサージトルク",
	    waist="エスカンストーン",
	    left_ear="マリグナスピアス",
	    right_ear="バーカロルピアス",
	    left_ring="マルクィリング",
	    right_ring="ジャリリング",
	    back={ name="ベーンケープ", augments={'Elem. magic skill +5','Dark magic skill +2','"Mag.Atk.Bns."+1','"Fast Cast"+4',}}, 
 }

sets.precast.fc_death = {
	    head="妖蟲の髪飾り+1",
	    body="ＳＰコート+3",
	    hands="ＳＰグローブ+3",
	    legs="ＷＣショウス+2",
	    feet="ＳＰサボ+3",
	    neck="サンクトネックレス",
	    waist={ name="神術帯+1", augments={'Path: A',}},
	    left_ear="マリグナスピアス",
	    right_ear={ name="ウィッケピアス", augments={'System: 1 ID: 1676 Val: 0','Mag. Acc.+7',}},
	    left_ring="メフィタスリング",
	    right_ring={ name="メフィタスリング+1", augments={'Path: A',}},
	    back={ name="ベーンケープ", augments={'Elem. magic skill +5','Dark magic skill +2','"Mag.Atk.Bns."+1','"Fast Cast"+4',}},
    }
    
    sets.precast.fc_elemental = {
	    ammo={ name="ガストリタスラム+1", augments={'Path: A',}},
	    head={ name="マーリンフード", augments={'Mag. Acc.+16','Magic burst dmg.+6%','INT+10','"Mag.Atk.Bns."+7',}},
	    body={ name="マーリンジュバ", augments={'Mag. Acc.+25 "Mag.Atk.Bns."+25','"Fast Cast"+5','MND+2','Mag. Acc.+6','"Mag.Atk.Bns."+5',}},
	    hands="ジャリカフス+2",
	    legs={ name="サイクロスラッパ", augments={'MP+80','Mag. Acc.+15','"Fast Cast"+7',}},
	    feet={ name="マーリンクラッコー", augments={'"Mag.Atk.Bns."+18','Magic burst dmg.+10%',}},
	    neck="ボルトサージトルク",
	    waist="エスカンストーン",
	    left_ear="マリグナスピアス",
	    right_ear="バーカロルピアス",
	    left_ring="マルクィリング",
	    right_ring="ジャリリング",
	    back={ name="ベーンケープ", augments={'Elem. magic skill +5','Dark magic skill +2','"Mag.Atk.Bns."+1','"Fast Cast"+4',}}, 
    }

    sets.precast.fc_impact = {
    }

    sets.precast.ws["ミルキル"] = {
        waist={ name="神術帯+1", mp=85},
        right_ear={ name="胡蝶のイヤリング", augments={'Accuracy+4','TP Bonus +250',}},
        left_ring={name="メフィタスリング+1", mp=110},
        right_ring={name="メフィタスリング", mp=100},
        back={ name="ベーンケープ", augments={'Elem. magic skill +10','Dark magic skill +7',}, mp=90},
    }

    sets.precast.ability["魔力の泉"] = {body={ name="ＡＲコート+2", mp=79},}

    sets.midcast.aspir = {
        head={ name="妖蟲の髪飾り+1", mp=120},
        legs={ name="ＳＰトンバン+3", mp=158},
        feet={ name="ＳＰサボ+3", mp=43},
        waist={ name="風鳥の帯", mp=30},
        right_ear={ name="バーカロルピアス", mp=25},
    }

    sets.midcast.comet = {
        ammo={ name="ガストリタスラム+1", augments={'Path: A',}, mp=35},
        head={ name="妖蟲の髪飾り+1", mp=120},
        body={ name="ＳＰコート+3", mp=98},
        hands={ name="ＡＲグローブ+2", mp=34,},
        neck="ソーサラストール+1",
        right_ear={ name="バーカロルピアス", mp=25},
    }

    sets.midcast.cure = {
        left_ear={ name="メンデカントピアス", mp=30},
    }

    sets.midcast.death_mb = {
        head={ name="妖蟲の髪飾り+1", mp=120},
        legs={ name="ＳＰトンバン+3", mp=158},
        feet={ name="ＳＰサボ+3", mp=43},
        neck="水影の首飾り",
        waist="闇輪の帯",
        right_ear={ name="バーカロルピアス", mp=25},
        left_ring={ name="サンゴマリング", mp=70},
    }
    
    sets.midcast.death = {
    ammo={ name="ガストリタスラム+1", augments={'Path: A',}},
    head="妖蟲の髪飾り+1",
    body="ＳＰコート+3",
    hands="ＳＰグローブ+3",
    legs="ＷＣショウス+2",
    feet="ＳＰサボ+3",
    neck="サンクトネックレス",
    waist={ name="神術帯+1", augments={'Path: A',}},
    left_ear="マリグナスピアス",
    right_ear={ name="ウィッケピアス", augments={'System: 1 ID: 1676 Val: 0','Mag. Acc.+7',}},
    left_ring="メフィタスリング",
    right_ring={ name="メフィタスリング+1", augments={'Path: A',}},
    back={ name="ベーンケープ", augments={'Elem. magic skill +5','Dark magic skill +2','"Mag.Atk.Bns."+1','"Fast Cast"+4',}},
    }

    sets.midcast.elemental = {
        ammo={ name="ガストリタスラム+1", augments={'Path: A',}, mp=35},
        head={ name="ＡＲペタソス+3", mp=52},
        body={ name="ＳＰコート+3", mp=98},
        hands={ name="ＡＭゲージ+1", augments={'INT+12','Mag. Acc.+20','"Mag.Atk.Bns."+20',}, mp=29},
        legs={ name="ＡＭスロップス+1", augments={'MP+80','Mag. Acc.+20','"Mag.Atk.Bns."+20',}, mp=185},
        feet={ name="ＡＲサボ+3", mp=34},
        -- neck={ name="サンクトネックレス", mp=35},
        neck="ソーサラストール+2",
        waist="サクロコード",
        left_ear={ name="王将の耳飾り", mp=20},
        right_ear={ name="バーカロルピアス", mp=25},
        left_ring="フレキリング",
        right_ring="女王の指輪+1",
        back={ name="タラナスケープ", augments={'INT+20','Mag. Acc+20 /Mag. Dmg.+20','INT+10','"Mag.Atk.Bns."+10','Damage taken-5%',}},
    }

    sets.midcast.enhance_duration = {
        ammo={ name="プシロメン", mp=45},
        head={ name="テルキネキャップ", augments={'Mag. Evasion+23','"Cure" potency +8%','Enh. Mag. eff. dur. +10',}, mp=32},
        body={ name="テルキネシャジュブ", augments={'Mag. Evasion+23','"Fast Cast"+5','Enh. Mag. eff. dur. +10',}, mp=56},
        hands={ name="テルキネグローブ", augments={'Mag. Evasion+24','"Fast Cast"+5','Enh. Mag. eff. dur. +10',}, mp=44},
        legs={ name="テルキネブラコーニ", augments={'Mag. Evasion+24','"Fast Cast"+5','Enh. Mag. eff. dur. +10',}, mp=29},
        feet={ name="テルキネピガッシュ", augments={'Mag. Evasion+25','"Fast Cast"+5','Enh. Mag. eff. dur. +10',}, mp=44},
        neck={ name="デュアルカラー+1", mp=60},
        waist="エンブラサッシュ",
        left_ear={ name="エテオレートピアス", mp=50},
        -- left_ring={name="メフィタスリング+1", mp=110},
        -- right_ring={name="メフィタスリング", mp=100},
    }

    sets.midcast.enhance_duration_death = {
        -- body={ name="テルキネシャジュブ", augments={'Mag. Evasion+23','"Fast Cast"+5','Enh. Mag. eff. dur. +10',}, mp=56},
        hands={ name="テルキネグローブ", augments={'Mag. Evasion+24','"Fast Cast"+5','Enh. Mag. eff. dur. +10',}, mp=44},
        feet={ name="テルキネピガッシュ", augments={'Mag. Evasion+25','"Fast Cast"+5','Enh. Mag. eff. dur. +10',}, mp=44},
    }

    sets.midcast.skin = {neck='ストーンゴルゲット', right_ear='アースクライピアス', waist="ジーゲルサッシュ",}
    sets.midcast.aquaveil = {head={ name="ＡＭコイフ+1", augments={'MP+80','Mag. Acc.+20','"Mag.Atk.Bns."+20',}, mp=141}, hands={ name="王将の袖飾り", mp=88},}
    sets.midcast.refresh = {head={ name="ＡＭコイフ+1", augments={'MP+80','Mag. Acc.+20','"Mag.Atk.Bns."+20',}, mp=141}, waist="ギシドゥバサッシュ",}

    sets.midcast.impact = {

    }

    sets.midcast.magic_acc = {
        body={ name="ＳＰコート+3", mp=98},
        legs={ name="ＳＰトンバン+3", mp=158},
        feet={ name="ＳＰサボ+3", mp=43},
        neck="ソーサラストール+1",
        waist="エスカンストーン",
        right_ear={ name="バーカロルピアス", mp=25},
    }

    sets.midcast.elementally_enfeeble = {
        legs={ name="ＡＲトンバン+2",mp=85},
        feet={ name="ＡＲサボ+2", mp=34},
    }

    sets.midcast.mb_sp = {
    sub="ニオビッドストラップ",
    ammo={ name="ガストリタスラム+1", augments={'Path: A',}},
    head="ＷＣペタソス+2",
    body="ＳＰコート+3",
    hands="ＳＰグローブ+3",
    legs="ＷＣショウス+2",
    feet="ＳＰサボ+3",
    neck="サンクトネックレス",
    waist="エスカンストーン",
    left_ear="マリグナスピアス",
    right_ear="バーカロルピアス",
    left_ring="マルクィリング",
    right_ring="女王の指輪",
    back={ name="タラナスケープ", augments={'INT+20','Mag. Acc+20 /Mag. Dmg.+20','INT+10','"Mag.Atk.Bns."+10',}},
    }

    -- mb high acc 250 atk 380
    sets.midcast.mb_high = {
    ammo={ name="ガストリタスラム+1", augments={'Path: A',}},
    head={ name="マーリンフード", augments={'Mag. Acc.+16','Magic burst dmg.+6%','INT+10','"Mag.Atk.Bns."+7',}},
    body="ＷＣコート+2",
    hands="ＳＰグローブ+3",
    legs="ＷＣショウス+2",
    feet="ＳＰサボ+3",
    neck="水影の首飾り",
    waist="エスカンストーン",
    left_ear="マリグナスピアス",
    right_ear={ name="ウィッケピアス", augments={'System: 1 ID: 1676 Val: 0','Mag. Acc.+7',}},
    left_ring="ローカスリング",
    right_ring="ジャリリング",
    back={ name="タラナスケープ", augments={'INT+20','Mag. Acc+20 /Mag. Dmg.+20','INT+10','"Mag.Atk.Bns."+10',}},
    }
    -- mb mid acc 300 atk 360
    sets.midcast.mb_mid = {
    ammo={ name="ガストリタスラム+1", augments={'Path: A',}},
    head={ name="マーリンフード", augments={'Mag. Acc.+16','Magic burst dmg.+6%','INT+10','"Mag.Atk.Bns."+7',}},
    body="ＷＣコート+2",
    hands="ＳＰグローブ+3",
    legs="ＷＣショウス+2",
    feet="ＳＰサボ+3",
    neck="水影の首飾り",
    waist="エスカンストーン",
    left_ear="マリグナスピアス",
    right_ear={ name="ウィッケピアス", augments={'System: 1 ID: 1676 Val: 0','Mag. Acc.+7',}},
    left_ring="ローカスリング",
    right_ring="ジャリリング",
    back={ name="タラナスケープ", augments={'INT+20','Mag. Acc+20 /Mag. Dmg.+20','INT+10','"Mag.Atk.Bns."+10',}},
    }
    -- mb low acc 320 atk 340
    sets.midcast.mb_low = {
    ammo={ name="ガストリタスラム+1", augments={'Path: A',}},
    head={ name="マーリンフード", augments={'Mag. Acc.+16','Magic burst dmg.+6%','INT+10','"Mag.Atk.Bns."+7',}},
    body="ＷＣコート+2",
    hands="ＳＰグローブ+3",
    legs="ＷＣショウス+2",
    feet="ＳＰサボ+3",
    neck="水影の首飾り",
    waist="エスカンストーン",
    left_ear="マリグナスピアス",
    right_ear={ name="ウィッケピアス", augments={'System: 1 ID: 1676 Val: 0','Mag. Acc.+7',}},
    left_ring="ローカスリング",
    right_ring="ジャリリング",
    back={ name="タラナスケープ", augments={'INT+20','Mag. Acc+20 /Mag. Dmg.+20','INT+10','"Mag.Atk.Bns."+10',}},
    }

    -- mb ラシA acc 320 atk 390
    sets.midcast.mb_lathi = {

    }

    sets.midcast.mb = sets.midcast.mb_mid

    -- sets.midcast.mb = sets.midcast.mb_lathi

    sets.midcast.vagary_task = {

    }

    sets.aftercast.idle = {
    sub="ニオビッドストラップ",
    ammo={ name="ガストリタスラム+1", augments={'Path: A',}},
    head="ＷＣペタソス+2",
    body="ＳＰコート+3",
    hands="ＳＰグローブ+3",
    legs="ＷＣショウス+2",
    feet="ＳＰサボ+3",
    neck="サンクトネックレス",
    waist="エスカンストーン",
    left_ear="マリグナスピアス",
    right_ear="バーカロルピアス",
    left_ring="マルクィリング",
    right_ring="女王の指輪",
    back={ name="タラナスケープ", augments={'INT+20','Mag. Acc+20 /Mag. Dmg.+20','INT+10','"Mag.Atk.Bns."+10',}},
    }

    sets.aftercast.idle_death = {
    head="ＷＣペタソス+2",
    body="ＷＣコート+2",
    hands="ＳＰグローブ+3",
    legs="ＷＣショウス+2",
    feet="ＳＰサボ+3",
    neck="サンクトネックレス",
    waist="風鳥の帯",
    left_ear="マリグナスピアス",
    right_ear="バーカロルピアス",
    left_ring={ name="メフィタスリング+1", augments={'Path: A',}},
    right_ring="メフィタスリング",
    back={ name="ベーンケープ", augments={'Elem. magic skill +5','Dark magic skill +2','"Mag.Atk.Bns."+1','"Fast Cast"+4',}},
    }

        -- マクロのブック, セット変更, 装備入れ替え
        send_command('input /macro book 3; wait 0.5; input /macro set 10; wait 0.5; input /si blm;')
end

function pretarget(spell)
    local set_equip = nil

    if spell.name == 'インパクト' then
        set_equip = {body="トワイライトプリス",}
    end

    if set_equip then
        equip(set_equip)
        set_priorities_by_mp()
    end
end

function precast(spell)
    local set_equip = nil
    
    if spell.type == 'WhiteMagic' then
        if spell.skill == '強化魔法' then
            if is_death then
                set_equip = sets.precast.fc_death
            else
                set_equip = set_combine(sets.precast.fc, {waist="ジーゲルサッシュ"})
            end
        else
            if is_death then
                set_equip = sets.precast.fc_death
            else
                set_equip = sets.precast.fc
            end
        end
    elseif spell.type == 'BlackMagic' then
        if spell.skill == '精霊魔法' then
            if spell.name == 'インパクト' then
                set_equip = sets.precast.fc_impact
            else
                if player.sub_job == '赤' then
                    set_equip = sets.precast.fc_elemental
                else
                    set_equip = set_combine(sets.precast.fc_elemental,
                    {head={ name="ＡＭコイフ+1", augments={'MP+80','Mag. Acc.+20','"Mag.Atk.Bns."+20',}, mp=141},
                    feet={ name="ＡＭネール+1", augments={'MP+80','Mag. Acc.+20','"Mag.Atk.Bns."+20',}, mp=106},})
                end
            end
        else
            if is_death then
                set_equip = sets.precast.fc_death
            else
                set_equip = sets.precast.fc
            end
        end
    elseif spell.type == 'JobAbility' then
        if sets.precast.ability[spell.name] then
            set_equip = sets.precast.ability[spell.name]
        end
    elseif spell.type == 'WeaponSkill' then
        if sets.precast.ws[spell.name] then
            set_equip = sets.precast.ws[spell.name]
        end
    elseif spell.type == 'Trust' then
        if is_death then
            set_equip = sets.precast.fc_death
        else
            set_equip = sets.precast.fc
        end
    end

    if set_equip then
        equip(set_equip)
        set_priorities_by_mp()
    end
end

function midcast(spell)
    local set_equip = nil

    if string.find(spell.name, 'ケアル') then
        set_equip = sets.midcast.cure
    elseif spell.skill == '強化魔法' then
        if is_death then
            if spell.name == 'ストンスキン' then
                set_equip = sets.midcast.skin
            elseif spell.name == 'アクアベール' then
                set_equip = sets.midcast.aquaveil
            elseif spell.name == 'リフレシュ' then
                set_equip = set_combine(sets.midcast.enhance_duration_death, sets.midcast.refresh)
            else
                set_equip = sets.midcast.enhance_duration_death
            end
        else
            if spell.name == 'ストンスキン' then
                set_equip = set_combine(sets.midcast.enhance_duration, sets.midcast.skin)
            elseif spell.name == 'アクアベール' then
                set_equip = set_combine(sets.midcast.enhance_duration, sets.midcast.aquaveil)
            elseif spell.name == 'リフレシュ' then
                set_equip = set_combine(sets.midcast.enhance_duration, sets.midcast.refresh)
            else
                set_equip = sets.midcast.enhance_duration
            end
        end
    elseif spell.skill == '弱体魔法' then
        set_equip = sets.midcast.magic_acc
    elseif spell.skill == '暗黒魔法' then
        if spell.name == 'デス' then
            if is_diver_statue then
                set_equip = sets.midcast.death
            else
                set_equip = sets.midcast.death_mb
            end
        elseif aspir:contains(spell.name) then
            set_equip = sets.midcast.aspir
        else
            set_equip = sets.midcast.magic_acc
        end
    elseif spell.skill == '精霊魔法' then
        if elementally_enfeeble_magic:contains(spell.name) then
            set_equip = set_combine(sets.midcast.magic_acc, sets.midcast.elementally_enfeeble)
        elseif spell.name == 'インパクト' then
            set_equip = sets.midcast.impact
        elseif spell.name == 'コメット' then
            set_equip = set_combine(sets.midcast.comet, get_hachirin(spell.element))
        else
            if is_sp then
                set_equip = set_combine(sets.midcast.mb_sp, get_hachirin(spell.element))
                is_sp = false
            elseif is_no_mb then
                set_equip = set_combine(sets.midcast.elemental, get_hachirin(spell.element))
                is_no_mb = false
            elseif is_vagary then
                set_equip = sets.midcast.vagary_task
            else
                set_equip = set_combine(sets.midcast.mb, get_hachirin(spell.element))
            end
        end
    end

    if set_equip then
        equip(set_equip)
        set_priorities_by_mp()
    end

end

function aftercast(spell)
    local set_equip = nil

    if player.status == 'Engaged' then
        set_equip = sets.aftercast.idle
    else
        set_equip = sets.aftercast.idle
    end
    
    if is_death then
        set_equip = sets.aftercast.idle_death
    end

    if set_equip then
        equip(set_equip)
        set_priorities_by_mp()
    end
end

function status_change(new, old)
    local set_equip = nil
    
    if new == 'Idle' then
        set_equip = sets.aftercast.idle
    elseif new == 'Engaged' then
        set_equip = sets.aftercast.idle
    end
    
    if is_death then
        set_equip = sets.aftercast.idle_death
    end

    if set_equip then
        equip(set_equip)
        set_priorities_by_mp()
    end
end

-- todo: manawall
function self_command(command)
    if command == 'sp' then
        is_sp = not is_sp
        windower.add_to_chat(122,'---> ＳＰコート: '..tostring(is_sp))
    elseif command == 'no_mb' then
        is_no_mb = not is_no_mb
        windower.add_to_chat(122,'---> MBなし: '..tostring(is_no_mb))
    elseif command == 'diver_statue' then
        if is_death then
            is_diver_statue = not is_diver_statue
        else
            windower.add_to_chat(122,'---> デス:'..tostring(is_death)..' execute //gs c death before execute //gs c diver_statue')
            return
        end
        windower.add_to_chat(122,'---> ダイバージェンス石造: '..tostring(is_diver_statue))
        equip(sets.aftercast.idle_death)
        set_priorities_by_mp()
    elseif command == 'death' then
        is_death = not is_death
        windower.add_to_chat(122,'---> デス: '..tostring(is_death))
        equip(sets.aftercast.idle_death)
        set_priorities_by_mp()
    elseif command == 'mb_high' then
        sets.midcast.mb = sets.midcast.mb_high
        windower.add_to_chat(122,'---> MB: ATK high, ACC low')
    elseif command == 'mb_mid' then
        sets.midcast.mb = sets.midcast.mb_mid
        windower.add_to_chat(122,'---> MB: ATK mid, ACC mid')
    elseif command == 'mb_low' then
        sets.midcast.mb = sets.midcast.mb_low
        windower.add_to_chat(122,'---> MB: ATK low, ACC high')
    elseif command == 'vagary' then
        is_vagary = not is_vagary
        windower.add_to_chat(122,'---> ベガリーお題: '..tostring(is_vagary))
    elseif command == 'aspir' then
        local recasts = windower.ffxi.get_spell_recasts()
        local recast_time_a3 = recasts[881]/60
        local recast_time_a2 = recasts[248]/60
        local recast_time_a = recasts[247]/60

        if recast_time_a3 == 0 then
            send_command('input /magic '..windower.to_shift_jis('アスピルIII')..' <stnpc>')
        elseif recast_time_a2 == 0 then
            send_command('input /magic '..windower.to_shift_jis('アスピルII')..' <stnpc>')
        elseif recast_time_a == 0 then
            send_command('input /magic '..windower.to_shift_jis('アスピル')..' <stnpc>')
        else
            windower.add_to_chat(30, 'アスピル リキャスト---> III: %.1fs, II: %.1fs, I: %.1fs':format(recast_time_a3, recast_time_a2, recast_time_a))
        end
    end
end

function set_priorities_by_mp()
    local future, current = gearswap.equip_list, gearswap.equip_list_history
    function get_mp(piece)
        if piece and type(piece)=='table' and piece.mp and type(piece.mp)=='number' then
            return piece.mp
        end
        return 0
    end

    for i, v in pairs(future) do
        local priority = get_mp(future[i]) - get_mp(current[i])
        if type(v) == 'table' then
            future[i].priority = priority
        else
            future[i] = {name=v, priority=priority}
        end
        -- windower.add_to_chat(123,future[i].name.." priority="..future[i].priority)
    end
end