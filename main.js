const STORAGE_KEY = "twinCatsIdleRpg.stage2";
const ROOKIE_JOB_ID = "rookie";

const gameData = {
    jobs: [
        { id: "rookie", name: "ひよっこ", tier: "初期職", bonusStat: "全能力", note: "全能力平均。Lv5で基本職へ転職可能。" },
        { id: "fighter", name: "戦士", tier: "基本職", bonusStat: "攻撃", note: "前衛で攻撃を担う。" },
        { id: "guardian", name: "守護者", tier: "基本職", bonusStat: "防御", note: "味方を守る耐久型。" },
        { id: "scout", name: "斥候", tier: "基本職", bonusStat: "探索", note: "探索と先制に優れる。" },
        { id: "mage", name: "魔術師", tier: "基本職", bonusStat: "魔力", note: "魔法攻撃を扱う後衛職。" },
        { id: "shaman", name: "祈祷師", tier: "基本職", bonusStat: "回復", note: "回復と支援を担当する。" },
        { id: "hunter", name: "狩人", tier: "基本職", bonusStat: "命中", note: "命中と種族対策に長ける。" }
    ],
    skills: [
        { id: "attack", name: "たたかう", type: "active", jobId: "rookie", learnLevel: 1, note: "基本攻撃。" },
        { id: "brace", name: "身構える", type: "active", jobId: "rookie", learnLevel: 1, note: "守りを固める。" },
        { id: "first-aid", name: "応急手当", type: "active", jobId: "rookie", learnLevel: 1, note: "軽い傷を手当てする。" },
        { id: "power-strike", name: "強打", type: "active", jobId: "fighter", learnLevel: 5, note: "力を込めた一撃。" },
        { id: "shield-bash", name: "盾打ち", type: "active", jobId: "guardian", learnLevel: 5, note: "盾で押し返す。" },
        { id: "quick-step", name: "早駆け", type: "active", jobId: "scout", learnLevel: 5, note: "素早く踏み込む。" },
        { id: "spark", name: "火花", type: "active", jobId: "mage", learnLevel: 5, note: "小さな魔法攻撃。" },
        { id: "emergency-prayer", name: "応急祈祷", type: "active", jobId: "shaman", learnLevel: 5, note: "祈りで立て直す。" },
        { id: "aimed-shot", name: "狙い撃ち", type: "active", jobId: "hunter", learnLevel: 5, note: "狙いを定めた射撃。" },
        { id: "steady-breath", name: "深呼吸", type: "passive", jobId: "rookie", learnLevel: 1, note: "落ち着いて行動する。" },
        { id: "tough-body", name: "鍛えた体", type: "passive", jobId: "fighter", learnLevel: 5, note: "攻撃役として踏みとどまる。" },
        { id: "iron-stance", name: "鉄の構え", type: "passive", jobId: "guardian", learnLevel: 5, note: "防御姿勢を崩しにくい。" },
        { id: "trail-sense", name: "痕跡読み", type: "passive", jobId: "scout", learnLevel: 5, note: "探索の勘を働かせる。" },
        { id: "mana-focus", name: "魔力集中", type: "passive", jobId: "mage", learnLevel: 5, note: "魔力の流れを整える。" },
        { id: "gentle-prayer", name: "静かな祈り", type: "passive", jobId: "shaman", learnLevel: 5, note: "支援の祈りを保つ。" },
        { id: "beast-eye", name: "獣の目", type: "passive", jobId: "hunter", learnLevel: 5, note: "獲物の動きを読む。" }
    ],
    skillBooks: [
        { id: "book-power-strike", name: "強打の書", skillId: "power-strike", implemented: false },
        { id: "book-emergency-prayer", name: "応急祈祷の書", skillId: "emergency-prayer", implemented: false }
    ],
    personalities: [
        { id: "diligent", name: "努力家", tendency: "修行" },
        { id: "careful", name: "慎重", tendency: "安全" },
        { id: "curious", name: "好奇心旺盛", tendency: "探索" },
        { id: "bold", name: "大胆", tendency: "ボス攻略" },
        { id: "kind", name: "世話焼き", tendency: "支援" }
    ],
    characters: [
        { id: "chara-01", name: "ミナ", level: 1, experience: 0, totalExperience: 0, jobId: "rookie", jobMastery: {}, personalities: ["diligent", "kind"], position: "前衛" },
        { id: "chara-02", name: "トウマ", level: 1, experience: 0, totalExperience: 0, jobId: "rookie", jobMastery: {}, personalities: ["bold", "curious"], position: "前衛" },
        { id: "chara-03", name: "セリカ", level: 1, experience: 0, totalExperience: 0, jobId: "rookie", jobMastery: {}, personalities: ["careful", "diligent"], position: "後衛" },
        { id: "chara-04", name: "レン", level: 1, experience: 0, totalExperience: 0, jobId: "rookie", jobMastery: {}, personalities: ["curious", "careful"], position: "前衛" },
        { id: "chara-05", name: "ユイ", level: 1, experience: 0, totalExperience: 0, jobId: "rookie", jobMastery: {}, personalities: ["kind", "careful"], position: "後衛" },
        { id: "chara-06", name: "カイ", level: 1, experience: 0, totalExperience: 0, jobId: "rookie", jobMastery: {}, personalities: ["bold", "diligent"], position: "後衛" }
    ],
    parties: [
        {
            id: "party-01",
            name: "若枝隊",
            leaderId: "chara-01",
            memberIds: ["chara-01", "chara-02", "chara-03"],
            formation: { front: ["chara-01", "chara-02"], back: ["chara-03"] },
            artifact: "世界樹の若枝"
        },
        {
            id: "party-02",
            name: "羅針盤隊",
            leaderId: "chara-04",
            memberIds: ["chara-04", "chara-05", "chara-06"],
            formation: { front: ["chara-04"], back: ["chara-05", "chara-06"] },
            artifact: "黄金の羅針盤"
        }
    ],
    dungeons: [
        {
            id: "forest",
            name: "薄明の森",
            knowledge: 20,
            recommendedLevel: 1,
            durationSeconds: 30,
            reward: { experience: 35, mastery: 4, gold: 18 },
            monsterIds: ["slime", "wild-rat"]
        },
        {
            id: "ruins",
            name: "古い水路",
            knowledge: 5,
            recommendedLevel: 2,
            durationSeconds: 60,
            reward: { experience: 55, mastery: 6, gold: 32 },
            monsterIds: ["cave-bat", "slime"]
        }
    ],
    monsters: [
        { id: "slime", name: "スライム", race: "不明", codexLevel: 1, habitat: "薄明の森", hp: 18, attack: 5, defense: 2, score: 18, equipmentDrops: ["training-sword", "cloth-vest"], materialDrops: ["ぷるぷる粘液"] },
        { id: "wild-rat", name: "森ねずみ", race: "動物", codexLevel: 1, habitat: "薄明の森", hp: 22, attack: 7, defense: 2, score: 24, equipmentDrops: ["short-bow", "leather-guard"], materialDrops: ["小さな毛皮"] },
        { id: "cave-bat", name: "洞窟コウモリ", race: "動物", codexLevel: 0, habitat: "古い水路", hp: 28, attack: 9, defense: 3, score: 34, equipmentDrops: ["iron-blade", "focus-charm"], materialDrops: ["薄い翼膜"] }
    ],
    equipmentTemplates: [
        { id: "training-sword", name: "訓練剣", type: "武器", rank: "N", attack: 5, defense: 0, magic: 0, accuracy: 2, attacks: 1, element: "物理", sellValue: 12 },
        { id: "iron-blade", name: "鉄の刃", type: "武器", rank: "R", attack: 8, defense: 0, magic: 0, accuracy: 1, attacks: 1, element: "物理", sellValue: 28 },
        { id: "short-bow", name: "短弓", type: "武器", rank: "N", attack: 4, defense: 0, magic: 0, accuracy: 6, attacks: 1, element: "物理", sellValue: 16 },
        { id: "cloth-vest", name: "布のベスト", type: "防具", rank: "N", attack: 0, defense: 4, magic: 0, accuracy: 0, attacks: 0, element: "無", sellValue: 10 },
        { id: "leather-guard", name: "革の守り", type: "防具", rank: "N", attack: 0, defense: 6, magic: 0, accuracy: 1, attacks: 0, element: "無", sellValue: 18 },
        { id: "focus-charm", name: "集中のお守り", type: "サブ装備", rank: "R", attack: 0, defense: 1, magic: 5, accuracy: 3, attacks: 0, element: "光", sellValue: 30 }
    ],
    affixes: [
        { id: "sharp", prefix: "鋭い", note: "攻撃+10%", apply: { attackMultiplier: 1.1 } },
        { id: "precise", prefix: "精密な", note: "命中+10%", apply: { accuracyMultiplier: 1.1 } },
        { id: "dual", prefix: "双撃の", note: "攻撃回数+1、攻撃-20%", apply: { attacksAdd: 1, attackMultiplier: 0.8 } },
        { id: "beast-hunter", prefix: "獣狩りの", note: "動物特効+20%", apply: { special: "動物特効+20%" } },
        { id: "lucky", prefix: "幸運の", note: "ドロップ率+10%", apply: { special: "ドロップ率+10%" } }
    ]
};

const app = document.getElementById("app");
const navButtons = document.querySelectorAll(".nav-button");

let currentView = "home";
let selectedCharacterId = "chara-01";
let selectedPartyId = "party-01";
let homeDungeonSelections = {};
let lastAdventureReport = null;
let adventureReportsByParty = {};
let activeAdventureReportPartyId = null;
let sellConfirmOpen = false;
let isCharacterDetailPanelOpen = false;
let gameState = createInitialState();

const byId = (collection, id) => collection.find((item) => item.id === id);
const namesFromIds = (collection, ids) => {
    const names = ids.map((id) => byId(collection, id)?.name).filter(Boolean);
    return names.length > 0 ? names.join("、") : "空き";
};

function uniqueIds(ids) {
    return [...new Set(ids.filter((id) => byId(gameData.characters, id)))];
}

function sanitizeFormationSlot(ids, limit, usedIds = []) {
    const used = new Set(usedIds);
    const sanitized = [];

    ids.forEach((id) => {
        if (!id || used.has(id) || sanitized.includes(id) || !byId(gameData.characters, id)) {
            return;
        }

        sanitized.push(id);
        used.add(id);
    });

    return sanitized.slice(0, limit);
}

function createEmptyMastery() {
    return gameData.jobs.reduce((result, job) => {
        result[job.id] = 0;
        return result;
    }, {});
}

function normalizeMastery(savedMastery = {}) {
    const mastery = createEmptyMastery();

    Object.entries(savedMastery).forEach(([jobId, value]) => {
        if (jobId in mastery) {
            mastery[jobId] = Math.max(0, Number(value) || 0);
        }
    });

    return mastery;
}

function skillById(skillId) {
    return gameData.skills.find((skill) => skill.id === skillId);
}

function defaultLearnedSkillIds() {
    return gameData.skills
        .filter((skill) => skill.jobId === ROOKIE_JOB_ID && skill.learnLevel <= 1)
        .map((skill) => skill.id);
}

function uniqueSkillIds(skillIds) {
    return [...new Set((skillIds ?? []).filter((skillId) => skillById(skillId)))];
}

function normalizeEquippedSkills(equippedSkills = {}, learnedSkillIds = defaultLearnedSkillIds()) {
    const learned = new Set(learnedSkillIds);
    const active = uniqueSkillIds(equippedSkills.active ?? [])
        .filter((skillId) => learned.has(skillId) && skillById(skillId)?.type === "active")
        .slice(0, 3);
    const passive = uniqueSkillIds(equippedSkills.passive ?? [])
        .filter((skillId) => learned.has(skillId) && skillById(skillId)?.type === "passive")
        .slice(0, 3);

    return { active, passive };
}

function autoEquipAvailableSkills(character) {
    ["active", "passive"].forEach((type) => {
        const equipped = [...(character.equippedSkills[type] ?? [])];
        const learned = learnedSkills(character, type).map((skill) => skill.id);

        learned.forEach((skillId) => {
            if (equipped.length >= 3 || equipped.includes(skillId)) {
                return;
            }

            equipped.push(skillId);
        });

        character.equippedSkills[type] = equipped.slice(0, 3);
    });
}

function normalizeSkillState(character, savedCharacter = {}) {
    const learnedSkillIds = uniqueSkillIds([
        ...defaultLearnedSkillIds(),
        ...(savedCharacter.learnedSkillIds ?? character.learnedSkillIds ?? [])
    ]);

    character.learnedSkillIds = learnedSkillIds;
    character.equippedSkills = normalizeEquippedSkills(savedCharacter.equippedSkills ?? character.equippedSkills, learnedSkillIds);
    autoEquipAvailableSkills(character);
}

function normalizeEquipmentState(character, savedCharacter = {}) {
    const equipment = savedCharacter.equipment ?? character.equipment ?? {};
    character.equipment = {
        weapon: equipment.weapon ?? "",
        armor: equipment.armor ?? "",
        sub: equipment.sub ?? ""
    };
}

function equipmentSlotDefinitions() {
    return [
        { id: "weapon", label: "武器", type: "武器" },
        { id: "armor", label: "防具", type: "防具" },
        { id: "sub", label: "サブ", type: "サブ装備" }
    ];
}

function createInitialState() {
    gameData.characters.forEach((character) => {
        character.jobMastery = normalizeMastery(character.jobMastery);
        normalizeSkillState(character);
        normalizeEquipmentState(character);
    });

    return {
        gold: 0,
        adventures: [],
        inventory: { equipment: [], materials: [] },
        logs: ["冒険者たちが街に集まりました。"]
    };
}

function loadState() {
    const saved = readSavedState();

    if (!saved) {
        return;
    }

    gameState = {
        gold: Number(saved.gold) || 0,
        adventures: Array.isArray(saved.adventures) ? saved.adventures : [],
        inventory: {
            equipment: Array.isArray(saved.inventory?.equipment) ? saved.inventory.equipment : [],
            materials: Array.isArray(saved.inventory?.materials) ? saved.inventory.materials : []
        },
        logs: Array.isArray(saved.logs) && saved.logs.length > 0 ? saved.logs : gameState.logs
    };

    if (Array.isArray(saved.characters)) {
        saved.characters.forEach((savedCharacter) => {
            const character = byId(gameData.characters, savedCharacter.id);

            if (!character) {
                return;
            }

            character.level = Number(savedCharacter.level) || character.level;
            character.experience = Number(savedCharacter.experience) || 0;
            character.totalExperience = Number(savedCharacter.totalExperience) || 0;
            character.jobId = byId(gameData.jobs, savedCharacter.jobId) ? savedCharacter.jobId : character.jobId;
            character.jobMastery = normalizeMastery(savedCharacter.jobMastery);
            normalizeSkillState(character, savedCharacter);
            normalizeEquipmentState(character, savedCharacter);
        });
    }

    if (Array.isArray(saved.parties)) {
        saved.parties.forEach((savedParty) => {
            const party = byId(gameData.parties, savedParty.id);

            if (!party) {
                return;
            }

            const front = sanitizeFormationSlot(savedParty.formation?.front ?? [], 3);
            const back = sanitizeFormationSlot(savedParty.formation?.back ?? [], 3, front);
            const memberIds = uniqueIds([...front, ...back]);
            party.formation = { front, back };
            party.memberIds = memberIds;
            party.leaderId = memberIds.includes(savedParty.leaderId) ? savedParty.leaderId : memberIds[0] ?? party.leaderId;
        });
    }
}

function readSavedState() {
    try {
        const rawState = localStorage.getItem(STORAGE_KEY);
        return rawState ? JSON.parse(rawState) : null;
    } catch (error) {
        console.warn("保存データを読み込めませんでした。", error);
        return null;
    }
}

function saveState() {
    try {
        const stateToSave = {
            gold: gameState.gold,
            adventures: gameState.adventures,
            inventory: gameState.inventory,
            logs: gameState.logs,
            characters: gameData.characters.map((character) => ({
                id: character.id,
                level: character.level,
                experience: character.experience,
                totalExperience: character.totalExperience,
                jobId: character.jobId,
                jobMastery: character.jobMastery,
                learnedSkillIds: character.learnedSkillIds,
                equippedSkills: character.equippedSkills,
                equipment: character.equipment
            })),
            parties: gameData.parties.map((party) => ({
                id: party.id,
                leaderId: party.leaderId,
                memberIds: party.memberIds,
                formation: party.formation
            }))
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (error) {
        console.warn("保存に失敗しました。", error);
    }
}

function jobName(id) {
    return byId(gameData.jobs, id)?.name ?? "不明";
}

function basicJobs() {
    return gameData.jobs.filter((job) => job.tier === "基本職");
}

function canChangeToBasicJob(character) {
    return character.jobId === ROOKIE_JOB_ID && character.level >= 5;
}

function masteryBonusText(jobId, masteryValue) {
    const job = byId(gameData.jobs, jobId);
    const bonusPercent = Math.floor((Number(masteryValue) || 0) / 10);

    if (!job) {
        return "未設定";
    }

    return bonusPercent > 0 ? `${job.bonusStat}+${bonusPercent}%` : `${job.bonusStat}+0%`;
}

function masteryValue(character, jobId) {
    return character.jobMastery?.[jobId] ?? 0;
}

function skillName(skillId) {
    return skillById(skillId)?.name ?? "未設定";
}

function learnedSkills(character, type) {
    return (character.learnedSkillIds ?? [])
        .map((skillId) => skillById(skillId))
        .filter((skill) => skill && (!type || skill.type === type));
}

function equippedSkillNames(character, type) {
    const skillIds = character.equippedSkills?.[type] ?? [];
    return skillIds.length > 0 ? skillIds.map(skillName).join("、") : "未設定";
}

function learnEligibleSkills(character) {
    normalizeSkillState(character);
    const learned = new Set(character.learnedSkillIds);
    const newlyLearned = gameData.skills.filter((skill) => {
        return skill.jobId === character.jobId && skill.learnLevel <= character.level && !learned.has(skill.id);
    });

    newlyLearned.forEach((skill) => character.learnedSkillIds.push(skill.id));
    autoEquipAvailableSkills(character);

    return newlyLearned;
}

function personalityNames(ids) {
    return ids.map((id) => byId(gameData.personalities, id)?.name ?? "不明").join(" / ");
}

function personalityTendency(id) {
    return byId(gameData.personalities, id)?.tendency ?? "安全";
}

function partyForCharacter(characterId) {
    return gameData.parties.find((party) => party.memberIds.includes(characterId));
}

function equipmentSlots() {
    return [
        ["武器", "未装備"],
        ["防具", "未装備"],
        ["装飾", "未装備"]
    ];
}

function partyPolicy(party) {
    const leader = byId(gameData.characters, party.leaderId);

    if (!leader) {
        return "未設定";
    }

    const scores = leader.personalities.reduce((result, personalityId) => {
        const tendency = personalityTendency(personalityId);
        result[tendency] = (result[tendency] ?? 0) + 1;
        return result;
    }, {});

    const topTendency = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "安全";
    const labelMap = {
        探索: "探索寄り",
        安全: "安全寄り",
        修行: "修行寄り",
        ボス攻略: "攻略寄り",
        支援: "安全寄り"
    };

    return labelMap[topTendency] ?? `${topTendency}寄り`;
}

function isPartyBusy(partyId) {
    return Boolean(partyAdventure(partyId));
}

function expToNextLevel(level) {
    return level * 100;
}

function partyAdventure(partyId) {
    return gameState.adventures.find((adventure) => adventure.partyId === partyId);
}

function adventureStatus(adventure) {
    if (!adventure) {
        return "待機中";
    }

    return Date.now() >= adventure.returnAt ? "帰還済み" : "冒険中";
}

function remainingTimeText(returnAt) {
    const remainingSeconds = Math.max(0, Math.ceil((returnAt - Date.now()) / 1000));
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    if (remainingSeconds === 0) {
        return "帰還済み";
    }

    if (minutes === 0) {
        return `${seconds}秒`;
    }

    return `${minutes}分${seconds.toString().padStart(2, "0")}秒`;
}

function formatDuration(seconds) {
    return seconds >= 60 ? `${Math.floor(seconds / 60)}分${seconds % 60 === 0 ? "" : `${seconds % 60}秒`}` : `${seconds}秒`;
}

function addLog(message) {
    const timestamp = new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    gameState.logs = [`${timestamp} ${message}`, ...gameState.logs].slice(0, 12);
}

function partyLogName(party) {
    const index = gameData.parties.findIndex((item) => item.id === party.id);
    return `第${index + 1}パーティ・${party.name}`;
}

function randomFrom(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function partyPower(party) {
    return party.memberIds.reduce((total, characterId) => {
        const character = byId(gameData.characters, characterId);
        if (!character) {
            return total;
        }

        const mastery = masteryValue(character, character.jobId);
        return total + character.level * 12 + Math.floor(mastery / 3) + (character.learnedSkillIds?.length ?? 0);
    }, 0);
}

function createEquipmentDrop(templateId) {
    const template = byId(gameData.equipmentTemplates, templateId);

    if (!template) {
        return null;
    }

    const affix = Math.random() < 0.25 ? randomFrom(gameData.affixes) : null;
    const equipment = {
        id: `eq-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        templateId: template.id,
        name: affix ? `${affix.prefix}${template.name}` : template.name,
        baseName: template.name,
        type: template.type,
        rank: template.rank,
        attack: template.attack,
        defense: template.defense,
        magic: template.magic,
        accuracy: template.accuracy,
        attacks: template.attacks,
        element: template.element,
        protected: false,
        sellValue: template.sellValue,
        affix: affix ? { id: affix.id, name: affix.prefix, note: affix.note, special: affix.apply.special ?? "" } : null
    };

    if (affix?.apply.attackMultiplier) {
        equipment.attack = Math.max(0, Math.round(equipment.attack * affix.apply.attackMultiplier));
    }

    if (affix?.apply.accuracyMultiplier) {
        equipment.accuracy = Math.max(0, Math.round(equipment.accuracy * affix.apply.accuracyMultiplier));
    }

    if (affix?.apply.attacksAdd) {
        equipment.attacks += affix.apply.attacksAdd;
    }

    return equipment;
}

function addMaterial(name, quantity = 1) {
    const existing = gameState.inventory.materials.find((material) => material.name === name);

    if (existing) {
        existing.quantity += quantity;
        return;
    }

    gameState.inventory.materials.push({ name, quantity });
}

function createBattleResult(party, dungeon) {
    const power = partyPower(party);
    const steps = [];
    const equipmentDrops = [];
    const materialDrops = [];
    let victories = 0;

    dungeon.monsterIds.forEach((monsterId, index) => {
        const monster = byId(gameData.monsters, monsterId);

        if (!monster) {
            return;
        }

        const roomName = `${index + 1}部屋目`;
        const requiredScore = Math.round(monster.score * (0.85 + Math.random() * 0.35));
        const victory = power >= requiredScore;
        steps.push({ badge: roomName, text: `${roomName}: ${monster.name}と遭遇。${victory ? "勝利" : "苦戦しながら撤退判断"}` });

        if (!victory) {
            return;
        }

        victories += 1;
        const dropBonus = party.memberIds.some((characterId) => {
            const character = byId(gameData.characters, characterId);
            return character?.equippedSkills?.passive?.includes("beast-eye");
        }) ? 0.05 : 0;

        if (Math.random() < 0.65 + dropBonus) {
            const equipment = createEquipmentDrop(randomFrom(monster.equipmentDrops));
            if (equipment) {
                equipmentDrops.push(equipment);
                steps.push({ badge: "装備", text: `${equipment.name}を入手。` });
            }
        }

        if (Math.random() < 0.8 + dropBonus) {
            const materialName = randomFrom(monster.materialDrops);
            materialDrops.push(materialName);
            steps.push({ badge: "素材", text: `${materialName}を入手。` });
        }
    });

    return {
        power,
        victories,
        totalBattles: dungeon.monsterIds.length,
        outcome: victories === dungeon.monsterIds.length ? "踏破" : victories > 0 ? "一部勝利" : "撤退",
        steps,
        equipmentDrops,
        materialDrops
    };
}

function equipmentSummary(equipment) {
    return `${equipment.name} / ${equipment.type} / ${equipment.rank} / 攻${equipment.attack} 防${equipment.defense} 魔${equipment.magic} 命${equipment.accuracy} 回${equipment.attacks} / ${equipment.element}${equipment.affix?.special ? ` / ${equipment.affix.special}` : ""}`;
}

function equippedBy(equipmentId) {
    return gameData.characters.find((character) => {
        normalizeEquipmentState(character);
        return Object.values(character.equipment).includes(equipmentId);
    });
}

function isEquipmentEquipped(equipmentId) {
    return Boolean(equippedBy(equipmentId));
}

function sellableEquipment() {
    return gameState.inventory.equipment.filter((equipment) => !equipment.protected && !isEquipmentEquipped(equipment.id));
}

function sellUnprotectedEquipment() {
    const selling = sellableEquipment();

    if (selling.length === 0) {
        sellConfirmOpen = false;
        return;
    }

    const gold = selling.reduce((total, equipment) => total + equipment.sellValue, 0);
    gameState.inventory.equipment = gameState.inventory.equipment.filter((equipment) => equipment.protected || isEquipmentEquipped(equipment.id));
    gameState.gold += gold;
    sellConfirmOpen = false;
    addLog(`倉庫で未保護装備${selling.length}個を売却し、${gold}Gを得ました。`);
    saveState();
    renderCurrentView();
}

function toggleEquipmentProtection(equipmentId) {
    const equipment = gameState.inventory.equipment.find((item) => item.id === equipmentId);

    if (!equipment) {
        return;
    }

    equipment.protected = !equipment.protected;
    saveState();
    renderCurrentView();
}

function changeEquipment(characterId, slotId, equipmentId) {
    const character = byId(gameData.characters, characterId);
    const slot = equipmentSlotDefinitions().find((definition) => definition.id === slotId);
    const equipment = equipmentId ? gameState.inventory.equipment.find((item) => item.id === equipmentId) : null;

    if (!character || !slot) {
        return;
    }

    if (equipment && equipment.type !== slot.type) {
        renderCurrentView();
        return;
    }

    const owner = equipment ? equippedBy(equipment.id) : null;
    if (owner && owner.id !== character.id) {
        renderCurrentView();
        return;
    }

    normalizeEquipmentState(character);
    character.equipment[slotId] = equipmentId || "";
    saveState();
    rerenderPreservingScroll();
}

function captureScrollState() {
    return {
        windowY: typeof window !== "undefined" ? window.scrollY : 0,
        sheetTop: document.querySelector(".mobile-detail-sheet")?.scrollTop ?? 0
    };
}

function restoreScrollState(scrollState) {
    const restore = () => {
        if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
            window.scrollTo(0, scrollState.windowY);
        }

        const sheet = document.querySelector(".mobile-detail-sheet");
        if (sheet) {
            sheet.scrollTop = scrollState.sheetTop;
        }
    };

    if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(restore);
        return;
    }

    setTimeout(restore, 0);
}

function rerenderPreservingScroll() {
    const scrollState = captureScrollState();
    renderCurrentView();
    restoreScrollState(scrollState);
}

function personalityComment(character) {
    const comments = {
        careful: "足跡を確認しながら進んだ",
        bold: "先頭を切って踏み込んだ",
        diligent: "地図に細かく印をつけた",
        curious: "壁際の小物まで見逃さなかった",
        kind: "仲間の息を整えながら進んだ"
    };
    const personalityId = character?.personalities?.find((id) => comments[id]);
    return personalityId ? comments[personalityId] : "周囲を確かめながら進んだ";
}

function adventureItemName(dungeonId) {
    return dungeonId === "ruins" ? "水路の古銭" : "森露の小瓶";
}

function createAdventureReport(party, dungeon, levelMessages, battleResult) {
    const leader = byId(gameData.characters, party.leaderId) ?? byId(gameData.characters, party.memberIds[0]);
    const members = party.memberIds.map((id) => byId(gameData.characters, id)).filter(Boolean);
    const roomActors = [leader, ...members.filter((member) => member.id !== leader?.id)];
    const itemName = adventureItemName(dungeon.id);

    return {
        partyName: party.name,
        leaderName: leader?.name ?? party.name,
        dungeonName: dungeon.name,
        experience: dungeon.reward.experience,
        mastery: dungeon.reward.mastery,
        gold: dungeon.reward.gold,
        itemName,
        battleResult,
        equipmentDrops: battleResult.equipmentDrops,
        materialDrops: battleResult.materialDrops,
        levelMessages,
        currentStep: 0,
        showResult: false,
        steps: [
            { badge: "出発", text: `${party.name}は${dungeon.name}へ向けて街を出た。` },
            { badge: "到着", text: `${leader?.name ?? "リーダー"}が入口の様子を見て、進む順番を決めた。` },
            ...battleResult.steps.map((step, index) => ({
                badge: step.badge,
                text: `${step.text} ${roomActors[index % Math.max(roomActors.length, 1)]?.name ?? "仲間"}は${personalityComment(roomActors[index % Math.max(roomActors.length, 1)])}。`
            })),
            { badge: battleResult.outcome === "撤退" ? "撤退" : "帰還", text: `${party.name}は${battleResult.outcome}。報酬を整理しよう。` }
        ]
    };
}

function startAdventure(partyId, dungeonId) {
    if (partyAdventure(partyId)) {
        return;
    }

    const party = byId(gameData.parties, partyId);
    const dungeon = byId(gameData.dungeons, dungeonId);

    if (!party || !dungeon || party.memberIds.length === 0) {
        return;
    }

    const now = Date.now();
    gameState.adventures.push({
        id: `adv-${now}-${partyId}`,
        partyId,
        dungeonId,
        departedAt: now,
        returnAt: now + dungeon.durationSeconds * 1000
    });

    addLog(`${partyLogName(party)}が${dungeon.name}へ出発しました。`);
    saveState();
    renderCurrentView();
}

function claimReward(adventureId) {
    const adventure = gameState.adventures.find((item) => item.id === adventureId);

    if (!adventure || Date.now() < adventure.returnAt) {
        return;
    }

    const party = byId(gameData.parties, adventure.partyId);
    const dungeon = byId(gameData.dungeons, adventure.dungeonId);

    if (!party || !dungeon) {
        return;
    }

    const battleResult = createBattleResult(party, dungeon);
    battleResult.equipmentDrops.forEach((equipment) => gameState.inventory.equipment.push(equipment));
    battleResult.materialDrops.forEach((materialName) => addMaterial(materialName));

    const levelMessages = [];
    const skillMessages = [];
    party.memberIds.forEach((characterId) => {
        const character = byId(gameData.characters, characterId);

        if (!character) {
            return;
        }

        normalizeSkillState(character);
        character.experience += dungeon.reward.experience;
        character.totalExperience += dungeon.reward.experience;
        character.jobMastery[character.jobId] = (character.jobMastery[character.jobId] ?? 0) + dungeon.reward.mastery;

        while (character.experience >= expToNextLevel(character.level)) {
            character.experience -= expToNextLevel(character.level);
            character.level += 1;
            levelMessages.push(`${character.name} Lv${character.level}`);
            const newSkills = learnEligibleSkills(character);
            newSkills.forEach((skill) => skillMessages.push(`${character.name}: ${skill.name}`));
        }
    });

    gameState.gold += dungeon.reward.gold;
    gameState.adventures = gameState.adventures.filter((item) => item.id !== adventureId);

    const rewardMessage = `${partyLogName(party)}が${dungeon.name}から帰還。経験値${dungeon.reward.experience}、熟練度${dungeon.reward.mastery}、${dungeon.reward.gold}Gを獲得しました。`;
    lastAdventureReport = createAdventureReport(party, dungeon, levelMessages, battleResult);
    adventureReportsByParty[party.id] = lastAdventureReport;
    activeAdventureReportPartyId = party.id;
    const growthMessages = [
        levelMessages.length > 0 ? `レベルアップ: ${levelMessages.join("、")}` : "",
        skillMessages.length > 0 ? `スキル習得: ${skillMessages.join("、")}` : ""
    ].filter(Boolean).join(" / ");
    if (battleResult.equipmentDrops.length > 0 || battleResult.materialDrops.length > 0) {
        addLog(`${partyLogName(party)}の戦利品: ${[...battleResult.equipmentDrops.map((equipment) => equipment.name), ...battleResult.materialDrops].join("、")}`);
    }
    addLog(growthMessages ? `${rewardMessage} ${growthMessages}` : rewardMessage);
    saveState();
    renderCurrentView();
}

function changeLeader(partyId, leaderId) {
    const party = byId(gameData.parties, partyId);

    if (!party || isPartyBusy(partyId) || !party.memberIds.includes(leaderId)) {
        return;
    }

    party.leaderId = leaderId;
    saveState();
    renderCurrentView();
}

function changeFormation(partyId, line, slotIndex, characterId) {
    const party = byId(gameData.parties, partyId);

    if (!party || isPartyBusy(partyId) || !["front", "back"].includes(line)) {
        return;
    }

    const index = Number(slotIndex);

    if (!Number.isInteger(index) || index < 0 || index > 2) {
        return;
    }

    const otherIds = uniqueIds([...party.formation.front, ...party.formation.back]).filter((id) => id !== party.formation[line][index]);

    if (characterId && otherIds.includes(characterId)) {
        renderCurrentView();
        return;
    }

    party.formation[line][index] = characterId || undefined;
    party.formation.front = sanitizeFormationSlot(party.formation.front, 3);
    party.formation.back = sanitizeFormationSlot(party.formation.back, 3, party.formation.front);
    party.memberIds = uniqueIds([...party.formation.front, ...party.formation.back]);

    if (!party.memberIds.includes(party.leaderId)) {
        party.leaderId = party.memberIds[0] ?? "";
    }

    saveState();
    renderCurrentView();
}

function changeJob(characterId, jobId) {
    const character = byId(gameData.characters, characterId);
    const targetJob = byId(gameData.jobs, jobId);

    if (!character || !targetJob || targetJob.tier !== "基本職" || !canChangeToBasicJob(character)) {
        return;
    }

    const previousJobName = jobName(character.jobId);
    character.jobId = jobId;
    character.jobMastery = normalizeMastery(character.jobMastery);
    const newSkills = learnEligibleSkills(character);

    addLog(`${character.name}が${previousJobName}から${targetJob.name}へ転職しました。${newSkills.length > 0 ? ` スキル習得: ${newSkills.map((skill) => skill.name).join("、")}` : ""}`);
    saveState();
    renderCurrentView();
}

function changeSkill(characterId, type, slotIndex, skillId) {
    const character = byId(gameData.characters, characterId);

    if (!character || !["active", "passive"].includes(type)) {
        return;
    }

    normalizeSkillState(character);
    const index = Number(slotIndex);

    if (!Number.isInteger(index) || index < 0 || index > 2) {
        return;
    }

    const skill = skillId ? skillById(skillId) : null;

    if (skillId && (!skill || skill.type !== type || !character.learnedSkillIds.includes(skillId))) {
        rerenderPreservingScroll();
        return;
    }

    const equipped = [...(character.equippedSkills[type] ?? [])];
    const otherEquipped = equipped.filter((id, currentIndex) => currentIndex !== index);

    if (skillId && otherEquipped.includes(skillId)) {
        rerenderPreservingScroll();
        return;
    }

    equipped[index] = skillId || undefined;
    character.equippedSkills[type] = uniqueSkillIds(equipped).filter((id) => skillById(id)?.type === type).slice(0, 3);
    saveState();
    rerenderPreservingScroll();
}

function renderHome() {
    const activeCount = gameState.adventures.filter((adventure) => Date.now() < adventure.returnAt).length;
    const returnedCount = gameState.adventures.length - activeCount;

    app.innerHTML = `
        ${renderHomePartyStatus()}
        <details class="home-summary-details">
            <summary>冒険者の準備状況</summary>
            <section class="hero-panel compact-summary-panel">
                <div>
                    <p class="eyebrow">放置RPG 管理画面</p>
                    <h2>準備状況</h2>
                    <p>進行状況はブラウザに保存されます。</p>
                </div>
                <div class="summary-grid">
                    ${summaryItem("キャラクター", `${gameData.characters.length} / 20`)}
                    ${summaryItem("パーティ", `${gameData.parties.length} / 10`)}
                    ${summaryItem("所持ゴールド", `${gameState.gold} G`)}
                    ${summaryItem("帰還済み", `${returnedCount} 件`)}
                    ${summaryItem("冒険中", `${activeCount} 件`)}
                    ${summaryItem("ダンジョン", `${gameData.dungeons.length} 件`)}
                </div>
            </section>
        </details>
        ${renderLogPanel()}
    `;
}

function summaryItem(label, value) {
    return `<div class="summary-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderHomePartyStatus() {
    return `
        <section class="home-party-section">
            <div class="card-title-row">
                <div>
                    <p class="eyebrow">Party Status</p>
                    <h2>パーティ冒険状況</h2>
                </div>
                <span class="tag">${gameData.parties.length}隊</span>
            </div>
            <div class="home-party-grid">
                ${gameData.parties.map((party) => `
                    <div class="home-party-stack">
                        ${renderHomePartyCard(party)}
                    </div>
                `).join("")}
            </div>
        </section>
    `;
}

function renderHomePartyCard(party) {
    const adventure = partyAdventure(party.id);
    const dungeon = adventure ? byId(gameData.dungeons, adventure.dungeonId) : null;
    const status = adventureStatus(adventure);
    const canDepart = !adventure && party.memberIds.length > 0;
    const leader = byId(gameData.characters, party.leaderId);

    return `
        <article class="home-party-card" data-home-party-card="${party.id}">
            <div class="home-party-main">
                <div class="home-party-title">
                    <h3>${party.name}</h3>
                    <span class="tag" data-home-party-status="${party.id}">${status}</span>
                </div>
                <div class="mini-meta desktop-meta">
                    <span>${dungeon ? dungeon.name : "街"}</span>
                    <span>${partyPolicy(party)}</span>
                    <span>${party.memberIds.length}名</span>
                </div>
            </div>
            ${adventure ? renderHomeAdventureAction(adventure, dungeon) : renderHomeDepartAction(party, canDepart)}
            <details class="party-extra-details">
                <summary>詳細</summary>
                <dl class="compact-detail-list">
                    <div><dt>リーダー</dt><dd>${leader?.name ?? "未設定"}</dd></div>
                    <div><dt>方針</dt><dd>${partyPolicy(party)}</dd></div>
                    <div><dt>現在地</dt><dd>${dungeon ? dungeon.name : "街"}</dd></div>
                    <div><dt>メンバー</dt><dd>${namesFromIds(gameData.characters, party.memberIds)}</dd></div>
                </dl>
            </details>
        </article>
    `;
}

function renderHomeAdventureAction(adventure, dungeon) {
    const returned = Date.now() >= adventure.returnAt;

    return `
        <div class="home-action-area">
            <div class="big-timer" data-countdown-return-at="${adventure.returnAt}" data-party-id="${adventure.partyId}">${returned ? "帰還済み" : remainingTimeText(adventure.returnAt)}</div>
            <p data-home-adventure-note="${adventure.partyId}">${returned ? `${dungeon.name}の報酬を受け取れます。` : `${new Date(adventure.returnAt).toLocaleTimeString("ja-JP")} 帰還予定`}</p>
            <button class="primary-button touch-button return-button ${returned ? "" : "is-hidden"}" type="button" data-action="claim-reward" data-adventure-id="${adventure.id}" data-claim-button-party-id="${adventure.partyId}">帰還・報酬受取</button>
        </div>
    `;
}

function renderHomeDepartAction(party, canDepart) {
    const selectedDungeonId = homeDungeonSelections[party.id] ?? gameData.dungeons[0]?.id;

    return `
        <div class="home-action-area">
            <label>
                ダンジョン
                <select id="homeDungeon-${party.id}" data-action="home-select-dungeon" data-party-id="${party.id}" ${canDepart ? "" : "disabled"}>
                    ${gameData.dungeons.map((dungeon) => `
                        <option value="${dungeon.id}" ${selectedDungeonId === dungeon.id ? "selected" : ""}>${dungeon.name}（${formatDuration(dungeon.durationSeconds)}）</option>
                    `).join("")}
                </select>
            </label>
            <button class="primary-button touch-button depart-button" type="button" data-action="home-start-adventure" data-party-id="${party.id}" ${canDepart ? "" : "disabled"}>出発</button>
            ${party.memberIds.length === 0 ? `<p class="notice">メンバーがいないため出発できません。</p>` : ""}
        </div>
    `;
}

function renderAdventureReportSheet() {
    const report = activeAdventureReportPartyId ? adventureReportsByParty[activeAdventureReportPartyId] : null;

    if (!report) {
        return "";
    }

    const currentStep = report.steps[report.currentStep] ?? report.steps[0];
    const isComplete = report.currentStep >= report.steps.length - 1;
    const partyId = activeAdventureReportPartyId;

    return `
        <div class="adventure-report-overlay" role="dialog" aria-modal="true" aria-label="冒険ログ">
            <button class="report-backdrop" type="button" data-action="close-report-sheet" aria-label="冒険ログを閉じる"></button>
            <section class="adventure-report-panel">
                <div class="report-sheet-header">
                    <div>
                        <p class="eyebrow">Return Report</p>
                        <h2>${report.partyName}</h2>
                        <p>${report.dungeonName}</p>
                    </div>
                    <button class="secondary-button icon-like-button" type="button" data-action="close-report-sheet">閉じる</button>
                </div>
                <div class="room-log-scroll">
                    ${report.showResult ? renderAdventureReportResult(report) : `
                        <article class="single-log-event">
                            <span class="log-badge">${currentStep.badge}</span>
                            <p>${currentStep.text}</p>
                        </article>
                    `}
                </div>
                <div class="report-footer">
                    <span class="report-counter">${report.currentStep + 1}/${report.steps.length}</span>
                    <div class="report-actions">
                        <button class="secondary-button touch-button" type="button" data-action="prev-report-step" data-party-id="${partyId}" ${report.currentStep === 0 ? "disabled" : ""}>前へ</button>
                        <button class="secondary-button touch-button" type="button" data-action="next-report-step" data-party-id="${partyId}" ${isComplete ? "disabled" : ""}>次へ</button>
                        <button class="primary-button touch-button" type="button" data-action="show-report-result" data-party-id="${partyId}">結果を見る</button>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderAdventureReportResult(report) {
    return `
        <section class="result-summary">
            <h3>冒険結果</h3>
            <dl class="detail-list two-column">
                <div><dt>獲得経験値</dt><dd>${report.experience}</dd></div>
                <div><dt>熟練度</dt><dd>${report.mastery}</dd></div>
                <div><dt>獲得ゴールド</dt><dd>${report.gold}G</dd></div>
                <div><dt>獲得装備</dt><dd>${report.equipmentDrops.length > 0 ? report.equipmentDrops.map((equipment) => equipment.name).join("、") : "なし"}</dd></div>
                <div><dt>獲得素材</dt><dd>${report.materialDrops.length > 0 ? report.materialDrops.join("、") : "なし"}</dd></div>
                <div><dt>Lvアップ</dt><dd>${report.levelMessages.length > 0 ? report.levelMessages.join("、") : "なし"}</dd></div>
            </dl>
        </section>
    `;
}

function renderCharacters() {
    const selectedCharacter = byId(gameData.characters, selectedCharacterId) ?? gameData.characters[0];
    selectedCharacterId = selectedCharacter.id;
    const mobile = isMobileView();

    app.innerHTML = `
        <section class="section-heading">
            <h2>キャラクター</h2>
            <p>帰還時の成長情報と、所属パーティ、装備欄の確認ができます。</p>
        </section>
        <section class="${mobile ? "character-list-layout" : "detail-layout"}">
            <div class="card-grid compact-grid">
                ${gameData.characters.map((character) => renderCharacterListCard(character)).join("")}
            </div>
            ${mobile ? "" : renderCharacterDetail(selectedCharacter)}
        </section>
        ${mobile && isCharacterDetailPanelOpen ? renderMobileCharacterDetail(selectedCharacter) : ""}
    `;
}

function renderCharacterListCard(character) {
    const selected = character.id === selectedCharacterId ? "selected-card" : "";

    return `
        <article class="card ${selected}">
            <div class="card-title-row">
                <h3>${character.name}</h3>
                <span class="tag">Lv${character.level}</span>
            </div>
            <p>${jobName(character.jobId)} / ${personalityNames(character.personalities)}</p>
            <button class="secondary-button" type="button" data-action="select-character" data-character-id="${character.id}">詳細を見る</button>
        </article>
    `;
}

function renderCharacterDetail(character, options = {}) {
    const party = partyForCharacter(character.id);
    normalizeSkillState(character);
    const panelClass = options.mobile ? "mobile-detail-card" : "detail-panel";

    return `
        <article class="wide-card ${panelClass}">
            <div class="card-title-row">
                <div>
                    <p class="eyebrow">Character Detail</p>
                    <h3>${character.name}</h3>
                </div>
                <div class="title-actions">
                    <span class="tag">Lv${character.level}</span>
                    ${options.mobile ? `<button class="secondary-button close-button" type="button" data-action="close-character-detail">閉じる</button>` : ""}
                </div>
            </div>
            <dl class="detail-list two-column">
                <div><dt>経験値</dt><dd>${character.experience} / ${expToNextLevel(character.level)}</dd></div>
                <div><dt>累計経験値</dt><dd>${character.totalExperience}</dd></div>
                <div><dt>職業</dt><dd>${jobName(character.jobId)}</dd></div>
                <div><dt>職業区分</dt><dd>${byId(gameData.jobs, character.jobId)?.tier ?? "不明"}</dd></div>
                <div><dt>所属パーティ</dt><dd>${party ? party.name : "未所属"}</dd></div>
                <div><dt>性格1</dt><dd>${byId(gameData.personalities, character.personalities[0])?.name ?? "未設定"}</dd></div>
                <div><dt>性格2</dt><dd>${byId(gameData.personalities, character.personalities[1])?.name ?? "未設定"}</dd></div>
            </dl>
            ${renderJobChangePanel(character)}
            <h3 class="subheading">職業熟練度</h3>
            <dl class="detail-list two-column">
                ${gameData.jobs.map((job) => {
                    const value = masteryValue(character, job.id);
                    return `<div><dt>${job.name}</dt><dd>${value} / ${masteryBonusText(job.id, value)}</dd></div>`;
                }).join("")}
            </dl>
            ${renderSkillPanel(character)}
            ${renderEquipmentPanel(character)}
        </article>
    `;
}

function renderEquipmentPanel(character) {
    normalizeEquipmentState(character);

    return `
        <section class="equipment-panel">
            <h3 class="subheading">装備変更</h3>
            <dl class="detail-list three-column">
                ${equipmentSlotDefinitions().map((slot) => {
                    const item = gameState.inventory.equipment.find((equipment) => equipment.id === character.equipment[slot.id]);
                    return `<div><dt>${slot.label}</dt><dd>${item ? item.name : "未装備"}</dd></div>`;
                }).join("")}
            </dl>
            <div class="equipment-slot-grid">
                ${equipmentSlotDefinitions().map((slot) => renderEquipmentSelect(character, slot)).join("")}
            </div>
        </section>
    `;
}

function renderEquipmentSelect(character, slot) {
    const currentId = character.equipment[slot.id] ?? "";
    const options = gameState.inventory.equipment.filter((equipment) => {
        const owner = equippedBy(equipment.id);
        return equipment.type === slot.type && (!owner || owner.id === character.id);
    });

    return `
        <label>
            ${slot.label}
            <select data-action="change-equipment" data-character-id="${character.id}" data-equipment-slot="${slot.id}">
                <option value="">未装備</option>
                ${options.map((equipment) => `<option value="${equipment.id}" ${currentId === equipment.id ? "selected" : ""}>${equipment.protected ? "★ " : ""}${equipment.name}</option>`).join("")}
            </select>
        </label>
    `;
}

function renderMobileCharacterDetail(character) {
    return `
        <section class="mobile-detail-overlay" role="dialog" aria-modal="true" aria-label="${character.name}の詳細">
            <div class="mobile-detail-backdrop" data-action="close-character-detail"></div>
            <div class="mobile-detail-sheet">
                ${renderCharacterDetail(character, { mobile: true })}
            </div>
        </section>
    `;
}

function renderSkillPanel(character) {
    return `
        <section class="skill-panel">
            <h3 class="subheading">スキル</h3>
            <dl class="detail-list two-column">
                <div><dt>習得済みアクティブ</dt><dd>${learnedSkills(character, "active").map((skill) => skill.name).join("、") || "なし"}</dd></div>
                <div><dt>習得済みパッシブ</dt><dd>${learnedSkills(character, "passive").map((skill) => skill.name).join("、") || "なし"}</dd></div>
                <div><dt>装備中アクティブ</dt><dd>${equippedSkillNames(character, "active")}</dd></div>
                <div><dt>装備中パッシブ</dt><dd>${equippedSkillNames(character, "passive")}</dd></div>
            </dl>
            <h3 class="subheading">スキル付け替え</h3>
            <div class="skill-slot-grid">
                ${renderSkillSlots(character, "active", "アクティブ")}
                ${renderSkillSlots(character, "passive", "パッシブ")}
            </div>
        </section>
    `;
}

function renderSkillSlots(character, type, label) {
    return `
        <section class="skill-slot-group">
            <h4>${label} 3枠</h4>
            ${[0, 1, 2].map((slotIndex) => renderSkillSlotSelect(character, type, slotIndex)).join("")}
        </section>
    `;
}

function renderSkillSlotSelect(character, type, slotIndex) {
    const equipped = character.equippedSkills?.[type] ?? [];
    const currentId = equipped[slotIndex] ?? "";
    const selectedSkillIds = equipped.filter((skillId) => skillId !== currentId);

    return `
        <label>
            ${slotIndex + 1}枠目
            <select data-action="change-skill" data-character-id="${character.id}" data-skill-type="${type}" data-slot="${slotIndex}">
                <option value="">空き</option>
                ${learnedSkills(character, type).map((skill) => {
                    const selected = currentId === skill.id ? "selected" : "";
                    const disabled = selectedSkillIds.includes(skill.id) ? "disabled" : "";
                    return `<option value="${skill.id}" ${selected} ${disabled}>${skill.name}</option>`;
                }).join("")}
            </select>
        </label>
    `;
}

function renderJobChangePanel(character) {
    if (character.jobId !== ROOKIE_JOB_ID) {
        return `
            <section class="job-change-panel">
                <h3 class="subheading">転職</h3>
                <p class="notice">${jobName(character.jobId)}へ転職済みです。上級職や再転職は今後の段階で実装します。</p>
            </section>
        `;
    }

    const canChange = canChangeToBasicJob(character);

    return `
        <section class="job-change-panel">
            <h3 class="subheading">転職</h3>
            <p class="notice">${canChange ? "基本職へ転職できます。キャラLvは維持されます。" : "ひよっこLv5以上で基本職へ転職できます。"}</p>
            <div class="form-grid">
                <label>
                    転職先
                    <select id="jobChangeSelect" ${canChange ? "" : "disabled"}>
                        ${basicJobs().map((job) => `<option value="${job.id}">${job.name}</option>`).join("")}
                    </select>
                </label>
                <button class="primary-button" type="button" data-action="change-job" data-character-id="${character.id}" ${canChange ? "" : "disabled"}>転職する</button>
            </div>
        </section>
    `;
}

function renderParties() {
    const selectedParty = byId(gameData.parties, selectedPartyId) ?? gameData.parties[0];
    selectedPartyId = selectedParty.id;

    app.innerHTML = `
        <section class="section-heading">
            <h2>パーティ</h2>
            <p>最大6名、前衛3名・後衛3名で編成します。冒険中のパーティは編成変更できません。</p>
        </section>
        <section class="detail-layout">
            <div class="stack">
                ${gameData.parties.map((party) => renderPartyCard(party)).join("")}
            </div>
            ${renderPartyDetail(selectedParty)}
        </section>
    `;
}

function renderPartyCard(party) {
    const leader = byId(gameData.characters, party.leaderId);
    const adventure = partyAdventure(party.id);
    const status = adventureStatus(adventure);
    const dungeon = adventure ? byId(gameData.dungeons, adventure.dungeonId) : null;

    return `
        <article class="wide-card ${party.id === selectedPartyId ? "selected-card" : ""}">
            <div class="card-title-row">
                <h3>${party.name}</h3>
                <span class="tag">${status}</span>
            </div>
            <dl class="detail-list two-column">
                <div><dt>リーダー</dt><dd>${leader?.name ?? "未設定"}</dd></div>
                <div><dt>方針</dt><dd>${partyPolicy(party)}</dd></div>
                <div><dt>神器</dt><dd>${party.artifact}</dd></div>
                <div><dt>人数</dt><dd>${party.memberIds.length} / 6</dd></div>
                <div><dt>前衛</dt><dd>${namesFromIds(gameData.characters, party.formation.front)}</dd></div>
                <div><dt>後衛</dt><dd>${namesFromIds(gameData.characters, party.formation.back)}</dd></div>
                <div><dt>現在地</dt><dd>${dungeon ? dungeon.name : "街"}</dd></div>
                <div><dt>残り時間</dt><dd>${adventure ? remainingTimeText(adventure.returnAt) : "-"}</dd></div>
            </dl>
            <button class="secondary-button full-button" type="button" data-action="select-party" data-party-id="${party.id}">詳細・編成</button>
        </article>
    `;
}

function renderPartyDetail(party) {
    const busy = isPartyBusy(party.id);
    const leader = byId(gameData.characters, party.leaderId);

    return `
        <article class="wide-card detail-panel">
            <div class="card-title-row">
                <div>
                    <p class="eyebrow">Party Detail</p>
                    <h3>${party.name}</h3>
                </div>
                <span class="tag">${busy ? "編成不可" : "編成可"}</span>
            </div>
            <dl class="detail-list two-column">
                <div><dt>最大人数</dt><dd>${party.memberIds.length} / 6</dd></div>
                <div><dt>方針</dt><dd>${partyPolicy(party)}</dd></div>
                <div><dt>リーダー</dt><dd>${leader?.name ?? "未設定"}</dd></div>
                <div><dt>リーダー性格</dt><dd>${leader ? personalityNames(leader.personalities) : "未設定"}</dd></div>
            </dl>
            ${busy ? `<p class="notice">このパーティは冒険中です。帰還後に報酬を受け取るまで編成変更できません。</p>` : ""}
            <h3 class="subheading">リーダー指定</h3>
            <label>
                リーダー
                <select data-action="change-leader" data-party-id="${party.id}" ${busy ? "disabled" : ""}>
                    ${party.memberIds.map((characterId) => {
                        const character = byId(gameData.characters, characterId);
                        return `<option value="${characterId}" ${party.leaderId === characterId ? "selected" : ""}>${character?.name ?? "不明"}</option>`;
                    }).join("")}
                </select>
            </label>
            <h3 class="subheading">編成</h3>
            <div class="formation-grid">
                ${renderFormationSlotGroup(party, "front", "前衛", busy)}
                ${renderFormationSlotGroup(party, "back", "後衛", busy)}
            </div>
        </article>
    `;
}

function renderFormationSlotGroup(party, line, label, busy) {
    const slots = [0, 1, 2];

    return `
        <section class="formation-line">
            <h4>${label}</h4>
            ${slots.map((slotIndex) => renderFormationSelect(party, line, slotIndex, busy)).join("")}
        </section>
    `;
}

function renderFormationSelect(party, line, slotIndex, busy) {
    const currentId = party.formation[line][slotIndex] ?? "";
    const selectedIds = uniqueIds([...party.formation.front, ...party.formation.back]).filter((id) => id !== currentId);

    return `
        <label>
            ${line === "front" ? "前衛" : "後衛"}${slotIndex + 1}
            <select data-action="change-formation" data-party-id="${party.id}" data-line="${line}" data-slot="${slotIndex}" ${busy ? "disabled" : ""}>
                <option value="">空き</option>
                ${gameData.characters.map((character) => {
                    const disabled = selectedIds.includes(character.id) ? "disabled" : "";
                    const selected = currentId === character.id ? "selected" : "";
                    return `<option value="${character.id}" ${selected} ${disabled}>${character.name}</option>`;
                }).join("")}
            </select>
        </label>
    `;
}

function renderAdventure() {
    const hasAvailableParty = gameData.parties.some((party) => !partyAdventure(party.id) && party.memberIds.length > 0);

    app.innerHTML = `
        <section class="section-heading">
            <h2>冒険</h2>
            <p>パーティとダンジョンを選んで出発します。時間が来ると帰還済みになり、報酬を受け取れます。</p>
        </section>
        <section class="adventure-layout">
            <article class="wide-card">
                <h3>出発準備</h3>
                <div class="form-grid">
                    <label>
                        パーティ
                        <select id="partySelect">
                            ${gameData.parties.map((party) => {
                                const unavailableReason = partyAdventure(party.id) ? "冒険中" : party.memberIds.length === 0 ? "メンバーなし" : "";
                                const disabled = unavailableReason ? "disabled" : "";
                                return `<option value="${party.id}" ${disabled}>${party.name}${unavailableReason ? `（${unavailableReason}）` : ""}</option>`;
                            }).join("")}
                        </select>
                    </label>
                    <label>
                        ダンジョン
                        <select id="dungeonSelect">
                            ${gameData.dungeons.map((dungeon) => `
                                <option value="${dungeon.id}">${dungeon.name}（${formatDuration(dungeon.durationSeconds)}）</option>
                            `).join("")}
                        </select>
                    </label>
                    <button class="primary-button" type="button" data-action="start-adventure" ${hasAvailableParty ? "" : "disabled"}>出発</button>
                </div>
            </article>
            <section class="stack">
                ${gameData.dungeons.map((dungeon) => renderDungeonCard(dungeon)).join("")}
            </section>
            <section class="stack">
                ${renderAdventureStatusCards()}
            </section>
        </section>
    `;
}

function renderDungeonCard(dungeon) {
    return `
        <article class="card">
            <div class="card-title-row">
                <h3>${dungeon.name}</h3>
                <span class="tag">推奨Lv${dungeon.recommendedLevel}</span>
            </div>
            <dl class="detail-list">
                <div><dt>帰還まで</dt><dd>${formatDuration(dungeon.durationSeconds)}</dd></div>
                <div><dt>報酬</dt><dd>経験値${dungeon.reward.experience} / 熟練度${dungeon.reward.mastery} / ${dungeon.reward.gold}G</dd></div>
                <div><dt>知識度</dt><dd>${dungeon.knowledge}%</dd></div>
                <div><dt>確認済み魔物</dt><dd>${namesFromIds(gameData.monsters, dungeon.monsterIds)}</dd></div>
            </dl>
        </article>
    `;
}

function renderAdventureStatusCards() {
    if (gameState.adventures.length === 0) {
        return `
            <article class="wide-card">
                <h3>進行中の冒険</h3>
                <p>現在、冒険中のパーティはありません。</p>
            </article>
        `;
    }

    return gameState.adventures.map((adventure) => {
        const party = byId(gameData.parties, adventure.partyId);
        const dungeon = byId(gameData.dungeons, adventure.dungeonId);
        const returned = Date.now() >= adventure.returnAt;

        return `
            <article class="wide-card">
                <div class="card-title-row">
                    <h3>${party.name} / ${dungeon.name}</h3>
                    <span class="tag">${returned ? "帰還済み" : "冒険中"}</span>
                </div>
                <dl class="detail-list two-column">
                    <div><dt>出発</dt><dd>${new Date(adventure.departedAt).toLocaleTimeString("ja-JP")}</dd></div>
                    <div><dt>帰還予定</dt><dd>${new Date(adventure.returnAt).toLocaleTimeString("ja-JP")}</dd></div>
                    <div><dt>残り時間</dt><dd>${remainingTimeText(adventure.returnAt)}</dd></div>
                    <div><dt>予定報酬</dt><dd>経験値${dungeon.reward.experience} / 熟練度${dungeon.reward.mastery} / ${dungeon.reward.gold}G</dd></div>
                </dl>
                ${returned ? `<button class="primary-button reward-button" type="button" data-action="claim-reward" data-adventure-id="${adventure.id}">報酬を受け取る</button>` : ""}
            </article>
        `;
    }).join("");
}

function renderCodex() {
    app.innerHTML = `
        <section class="section-heading">
            <h2>図鑑</h2>
            <p>段階2では図鑑Lv上昇はまだ行いません。</p>
        </section>
        <section class="table-panel">
            <table>
                <thead>
                    <tr>
                        <th>名前</th>
                        <th>種族</th>
                        <th>図鑑Lv</th>
                        <th>生息地</th>
                    </tr>
                </thead>
                <tbody>
                    ${gameData.monsters.map((monster) => `
                        <tr>
                            <td>${monster.codexLevel === 0 ? "未発見" : monster.name}</td>
                            <td>${monster.codexLevel === 0 ? "-" : monster.race}</td>
                            <td>Lv${monster.codexLevel}</td>
                            <td>${monster.codexLevel === 0 ? "-" : monster.habitat}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </section>
    `;
}

function renderTown() {
    app.innerHTML = `
        <section class="section-heading">
            <h2>街</h2>
            <p>街施設の入口です。訓練所やスキル付け替えは今後の段階で実装します。</p>
        </section>
        <section class="card-grid">
            ${[
                ["訓練所", "出撃していないキャラの経験値獲得場所。"],
                ["ギルド", "キャラクターとパーティの管理拠点。"],
                ["書庫", "スキル本や図鑑情報の確認場所。"],
                ["鍛冶屋", "装備の改造、再抽選、特殊付与を扱う予定。"]
            ].map(([name, description]) => `
                <article class="card">
                    <h3>${name}</h3>
                    <p>${description}</p>
                </article>
            `).join("")}
        </section>
        ${renderWarehousePanel()}
    `;
}

function renderWarehousePanel() {
    const equipment = gameState.inventory.equipment;
    const unprotected = sellableEquipment();
    const sellValue = unprotected.reduce((total, item) => total + item.sellValue, 0);

    return `
        <section class="table-panel warehouse-panel">
            <div class="card-title-row">
                <div>
                    <p class="eyebrow">Warehouse</p>
                    <h2>倉庫</h2>
                </div>
                <span class="tag">${equipment.length}個</span>
            </div>
            <div class="warehouse-actions">
                <p>未保護装備 ${unprotected.length}個 / 売却見込み ${sellValue}G</p>
                <button class="primary-button" type="button" data-action="open-sell-confirm" ${unprotected.length === 0 ? "disabled" : ""}>未保護装備を一括売却</button>
            </div>
            ${sellConfirmOpen ? renderSellConfirmPanel(unprotected, sellValue) : ""}
            <h3 class="subheading">所持装備</h3>
            <div class="equipment-list">
                ${equipment.length === 0 ? `<p>装備はまだありません。</p>` : equipment.map((item) => `
                    <article class="equipment-row">
                        <div>
                            <strong>${item.protected ? "★ " : ""}${item.name} ${isEquipmentEquipped(item.id) ? "（装備中）" : ""}</strong>
                            <p>${equipmentSummary(item)}</p>
                        </div>
                        <button class="secondary-button" type="button" data-action="toggle-protect" data-equipment-id="${item.id}">${item.protected ? "保護解除" : "★保護"}</button>
                    </article>
                `).join("")}
            </div>
            <h3 class="subheading">素材</h3>
            <div class="material-list">
                ${gameState.inventory.materials.length === 0 ? `<p>素材はまだありません。</p>` : gameState.inventory.materials.map((material) => `
                    <span class="tag">${material.name} x${material.quantity}</span>
                `).join("")}
            </div>
        </section>
    `;
}

function renderSellConfirmPanel(items, totalGold) {
    return `
        <section class="sell-confirm-panel">
            <h3>売却確認</h3>
            <p>保護中・装備中のアイテムは含まれていません。</p>
            <div class="sell-list">
                ${items.map((item) => `
                    <div class="sell-row">
                        <span>${item.name}</span>
                        <strong>${item.sellValue}G</strong>
                    </div>
                `).join("")}
            </div>
            <div class="sell-total">
                <span>合計</span>
                <strong>${totalGold}G</strong>
            </div>
            <div class="confirm-actions">
                <button class="primary-button" type="button" data-action="confirm-sell-unprotected">売却する</button>
                <button class="secondary-button" type="button" data-action="cancel-sell-confirm">キャンセル</button>
            </div>
        </section>
    `;
}

function renderLogPanel() {
    return `
        <section class="table-panel log-panel">
            <div class="card-title-row">
                <h2>全パーティ冒険ログ</h2>
                <span class="tag">${gameState.logs.length}件</span>
            </div>
            <ul class="log-list">
                ${gameState.logs.map((log) => {
                    const badge = logBadge(log);
                    return `<li><span class="log-badge ${badge.className}">${badge.label}</span><span>${log}</span></li>`;
                }).join("")}
            </ul>
        </section>
    `;
}

function logBadge(log) {
    if (log.includes("戦利品")) {
        return { label: "入手", className: "badge-loot" };
    }

    if (log.includes("売却")) {
        return { label: "売却", className: "badge-sell" };
    }

    if (log.includes("出発")) {
        return { label: "出発", className: "badge-depart" };
    }

    if (log.includes("帰還") || log.includes("獲得")) {
        return { label: "報酬", className: "badge-return" };
    }

    if (log.includes("転職")) {
        return { label: "転職", className: "badge-job" };
    }

    if (log.includes("撤退")) {
        return { label: "撤退", className: "badge-retreat" };
    }

    return { label: "記録", className: "" };
}

const renderers = {
    home: renderHome,
    characters: renderCharacters,
    parties: renderParties,
    adventure: renderAdventure,
    codex: renderCodex,
    town: renderTown
};

function switchView(viewName) {
    currentView = viewName;
    navButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.view === viewName);
    });

    renderCurrentView();
}

function renderCurrentView() {
    renderers[currentView]();
    app.innerHTML += renderAdventureReportSheet();
}

function isMobileView() {
    return typeof window !== "undefined" && window.matchMedia("(max-width: 720px)").matches;
}

function updateTimers() {
    document.querySelectorAll("[data-countdown-return-at]").forEach((timerElement) => {
        const returnAt = Number(timerElement.dataset.countdownReturnAt);
        const partyId = timerElement.dataset.partyId;

        if (!returnAt || !partyId) {
            return;
        }

        const returned = Date.now() >= returnAt;
        timerElement.textContent = returned ? "帰還済み" : remainingTimeText(returnAt);

        const statusElement = document.querySelector(`[data-home-party-status="${partyId}"]`);
        const noteElement = document.querySelector(`[data-home-adventure-note="${partyId}"]`);
        const claimButton = document.querySelector(`[data-claim-button-party-id="${partyId}"]`);
        const adventure = partyAdventure(partyId);
        const dungeon = adventure ? byId(gameData.dungeons, adventure.dungeonId) : null;

        if (statusElement) {
            statusElement.textContent = returned ? "帰還済み" : "冒険中";
        }

        if (returned && noteElement && dungeon) {
            noteElement.textContent = `${dungeon.name}の報酬を受け取れます。`;
        }

        if (claimButton) {
            claimButton.classList.toggle("is-hidden", !returned);
        }
    });
}

navButtons.forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
});

app.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");

    if (!actionButton) {
        return;
    }

    if (actionButton.dataset.action === "start-adventure") {
        const partyId = document.getElementById("partySelect")?.value;
        const dungeonId = document.getElementById("dungeonSelect")?.value;

        if (partyId && dungeonId) {
            startAdventure(partyId, dungeonId);
        }
    }

    if (actionButton.dataset.action === "home-start-adventure") {
        const partyId = actionButton.dataset.partyId;
        const dungeonId = document.getElementById(`homeDungeon-${partyId}`)?.value;

        if (partyId && dungeonId) {
            startAdventure(partyId, dungeonId);
        }
    }

    if (actionButton.dataset.action === "claim-reward") {
        claimReward(actionButton.dataset.adventureId);
    }

    if (actionButton.dataset.action === "select-character") {
        selectedCharacterId = actionButton.dataset.characterId;
        isCharacterDetailPanelOpen = isMobileView();
        renderCurrentView();
    }

    if (actionButton.dataset.action === "close-character-detail") {
        isCharacterDetailPanelOpen = false;
        renderCurrentView();
    }

    if (actionButton.dataset.action === "select-party") {
        selectedPartyId = actionButton.dataset.partyId;
        renderCurrentView();
    }

    if (actionButton.dataset.action === "change-job") {
        const jobId = document.getElementById("jobChangeSelect")?.value;

        if (jobId) {
            changeJob(actionButton.dataset.characterId, jobId);
        }
    }

    if (actionButton.dataset.action === "toggle-protect") {
        toggleEquipmentProtection(actionButton.dataset.equipmentId);
    }

    if (actionButton.dataset.action === "open-sell-confirm") {
        sellConfirmOpen = true;
        renderCurrentView();
    }

    if (actionButton.dataset.action === "cancel-sell-confirm") {
        sellConfirmOpen = false;
        renderCurrentView();
    }

    if (actionButton.dataset.action === "confirm-sell-unprotected") {
        sellUnprotectedEquipment();
    }

    if (actionButton.dataset.action === "next-report-step") {
        const report = adventureReportsByParty[actionButton.dataset.partyId];
        if (!report) {
            return;
        }
        report.showResult = false;
        report.currentStep = Math.min(report.currentStep + 1, report.steps.length - 1);
        renderCurrentView();
    }

    if (actionButton.dataset.action === "prev-report-step") {
        const report = adventureReportsByParty[actionButton.dataset.partyId];
        if (!report) {
            return;
        }
        report.showResult = false;
        report.currentStep = Math.max(report.currentStep - 1, 0);
        renderCurrentView();
    }

    if (actionButton.dataset.action === "show-report-result") {
        const report = adventureReportsByParty[actionButton.dataset.partyId];
        if (!report) {
            return;
        }
        report.showResult = true;
        report.currentStep = report.steps.length - 1;
        renderCurrentView();
    }

    if (actionButton.dataset.action === "close-report-sheet") {
        activeAdventureReportPartyId = null;
        renderCurrentView();
    }
});

app.addEventListener("change", (event) => {
    const control = event.target.closest("[data-action]");

    if (!control) {
        return;
    }

    if (control.dataset.action === "change-leader") {
        changeLeader(control.dataset.partyId, control.value);
    }

    if (control.dataset.action === "change-formation") {
        changeFormation(control.dataset.partyId, control.dataset.line, control.dataset.slot, control.value);
    }

    if (control.dataset.action === "home-select-dungeon") {
        homeDungeonSelections[control.dataset.partyId] = control.value;
    }

    if (control.dataset.action === "change-skill") {
        changeSkill(control.dataset.characterId, control.dataset.skillType, control.dataset.slot, control.value);
    }

    if (control.dataset.action === "change-equipment") {
        changeEquipment(control.dataset.characterId, control.dataset.equipmentSlot, control.value);
    }
});

loadState();
switchView("home");

if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
        if (currentView !== "characters") {
            return;
        }

        if (!isMobileView()) {
            isCharacterDetailPanelOpen = false;
        }

        renderCurrentView();
    });
}

setInterval(() => {
    if (currentView === "home") {
        updateTimers();
        return;
    }

    if (currentView === "parties" || currentView === "adventure") {
        renderCurrentView();
    }
}, 1000);
