import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

console.log(ability.can('invite', 'User'))
console.log(ability.cannot('delete', 'User'))
