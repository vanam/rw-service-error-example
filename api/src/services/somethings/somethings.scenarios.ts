import type { Prisma, Something } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SomethingCreateArgs>({
  something: {
    one: { data: { updatedAt: '2023-05-24T08:48:35.447Z', name: 'String' } },
    two: { data: { updatedAt: '2023-05-24T08:48:35.447Z', name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Something, 'something'>
