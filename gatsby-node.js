/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const template = path.resolve('./src/templates/bestiary.js')
  const monsters = require('./json/bestiary_v2.json')

  monsters.forEach(monster => {

    const slug = monster.Name.replace(/\s/g , "-").toLowerCase()

    createPage({
      path: `/bestiary/${slug}`,
      component: template,
      context: {
        title: monster.LinkText,
        name: monster.Name,
        visual: monster.Description_Visual,
        description: monster.Description,
        cr: monster.CR,
        xp: monster.XP,
        race: monster.Race,
        alignment: monster.Alignment,
        size: monster.Size,
        type: monster.Type,
        subtype: monster.SubType,
        init: monster.Init,
        senses: monster.Senses,
        aura: monster.Aura,
        ac: monster.AC,
        ac_mods: monster.AC_Mods,
        hp: monster.HP,
        hd: monster.HD,
        hp_mods: monster.HP_Mods,
        fortitude: monster.Fort,
        reflex: monster.Ref,
        will: monster.Will,
        save_mods: monster.Save_Mods,
        defensive_abilities: monster.DefensiveAbilities,
        dr: monster.DR,
        immune: monster.Immune,
        resist: monster.Resist,
        sr: monster.SR,
        weaknesses: monster.Weaknesses,
        speed: monster.Speed,
        melee: monster.Melee,
        ranged: monster.Ranged,
        space: monster.Space,
        reach: monster.Reach,
        special_attacks: monster.SpecialAttacks,
        spell_like_abilities: monster.SpellLikeAbilities,
        spells_known: monster.SpellsKnown,
        spells_prepared: monster.SpellsPrepared,
        ability_scores: monster.AbilityScores,
        bab: monster.BaseAtk,
        cmb: monster.CMB,
        cmd: monster.CMD,
        feats: monster.Feats,
        skills: monster.Skills,
        languages: monster.Languages,
        sq: monster.SQ,
        environment: monster.Environment,
        organization: monster.Organization,
        treaure: monster.Treasure,
        group: monster.Group,
        special_abilities: monster.SpecialAbilities,
      },

    })

  })

}
